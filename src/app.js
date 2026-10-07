// Ablaufsteuerung der Anprobe: Kamera, Schleife (Tracker -> Buehne), Foto,
// Aufnahme, Varianten, Feinjustierung, Debug-Haken.
//
// Zustaende: zu | intro | laden | live | foto | ergebnis | fehler
// Jede asynchrone Kette prueft den Sitzungszaehler: Schliessen waehrend des
// Ladens macht sie wirkungslos und schaltet eine nachtraeglich geoeffnete
// Kamera sofort wieder ab.

import * as THREE from 'three';
import { Tracker } from './tracking/tracker.js';
import { Buehne } from './render/buehne.js';
import { baueSchmuck, ladeGlb } from './schmuck/index.js';
import { Fenster } from './ui/fenster.js';
import { konfig as globaleKonfig } from './konfig.js';
import { normiere } from './produkt.js';

// Kamera je Art (Handy): Hand von hinten fotografieren, Gesicht/Hals mit der Frontkamera
const KAMERA_RICHTUNG = { ring: 'environment', armband: 'environment', kette: 'user', ohrringe: 'user' };

// Grenzen der Feinjustierung (mm im Modellrahmen) und der Groesse
const VERSATZ_MAX_MM = { ring: 10, armband: 25, kette: 60, ohrringe: 12 };
const SKALA_MIN = 0.7;
const SKALA_MAX = 1.4;

// Qualitaetsstufen (adaptive Qualitaet)
const STUFEN = [
  { pixelRatio: 2, qualitaet: 'hoch' },
  { pixelRatio: 1.5, qualitaet: 'mittel' },
  { pixelRatio: 1, qualitaet: 'mittel' }
];
const FPS_ZIEL = 24;

const FEHLER_TEXTE = {
  verweigert: {
    titel: 'Kein Zugriff auf die Kamera',
    text: 'Erlaube den Kamerazugriff in den Einstellungen deines Browsers – oder probiere den Schmuck an einem Foto von dir an.'
  },
  'keine-kamera': {
    titel: 'Keine Kamera gefunden',
    text: 'Auf diesem Gerät ist keine Kamera verfügbar. Wähle stattdessen ein Foto von dir.'
  },
  belegt: {
    titel: 'Die Kamera ist gerade belegt',
    text: 'Schließe andere Apps oder Tabs, die die Kamera nutzen, und versuche es erneut. Oder wähle ein Foto.'
  },
  unsicher: {
    titel: 'Kamera nicht verfügbar',
    text: 'Die Kamera lässt sich nur auf sicheren Seiten (https) nutzen. Du kannst aber ein Foto wählen.'
  },
  laden: {
    titel: 'Die Anprobe konnte nicht geladen werden',
    text: 'Bitte prüfe deine Internetverbindung und versuche es noch einmal.',
    foto: false
  },
  webgl: {
    titel: '3D-Darstellung nicht möglich',
    text: 'Dein Browser unterstützt die nötige 3D-Grafik leider nicht. Probiere es mit einem aktuellen Browser.',
    foto: false, erneut: false
  },
  foto: {
    titel: 'Das Foto konnte nicht geöffnet werden',
    text: 'Bitte wähle ein anderes Bild (JPEG oder PNG).',
    erneut: false
  },
  allgemein: {
    titel: 'Etwas ist schiefgelaufen',
    text: 'Bitte versuche es noch einmal.'
  }
};

// Fehlerarten, die vom Geraet bzw. der Nutzerin kommen (keine Fehler der App)
const KAMERA_ZUSTAENDE = new Set(['verweigert', 'keine-kamera', 'belegt', 'unsicher']);

const KEIN_FUND = {
  ring: 'Auf dem Foto ist keine Hand zu erkennen',
  armband: 'Auf dem Foto ist keine Hand zu erkennen',
  ohrringe: 'Auf dem Foto ist kein Gesicht zu erkennen',
  kette: 'Auf dem Foto sind Hals und Schultern nicht zu erkennen'
};

class Abbruch extends Error {
  constructor() { super('abgebrochen'); this.name = 'Abbruch'; }
}

// ---------------------------------------------------------------- Tracker-Vorrat

// Ein Tracker je Art; das Laden laeuft einmal, der Fortschritt geht an alle Zuhoerer.
const trackerVorrat = new Map();

/**
 * Laedt den Tracker fuer eine Art vor (z. B. beim Ueberfahren des Knopfs).
 * Liefert { tracker, bereit: Promise<Tracker>, anteil, text, hoerer: Set }.
 */
export function vorladen(art, konfig = globaleKonfig) {
  const vorhanden = trackerVorrat.get(art);
  if (vorhanden) return vorhanden;
  const e = { anteil: 0, text: '', fertig: false, hoerer: new Set() };
  e.tracker = new Tracker(art, {
    konfig,
    onFortschritt: (anteil, text) => {
      e.anteil = Math.max(e.anteil, anteil || 0);
      if (text) e.text = text;
      for (const h of e.hoerer) h(e.anteil, e.text);
    }
  });
  e.bereit = e.tracker.laden().then(() => {
    e.fertig = true;
    e.anteil = 1;
    for (const h of e.hoerer) h(1, e.text);
    return e.tracker;
  }, (fehler) => {
    e.fehler = fehler;
    trackerVorrat.delete(art);   // naechster Versuch laedt neu
    throw fehler;
  });
  e.bereit.catch(() => {});
  trackerVorrat.set(art, e);
  return e;
}

// ---------------------------------------------------------------- Hilfen

function kameraFehlerArt(fehler) {
  const n = fehler && fehler.name;
  if (n === 'NotAllowedError' || n === 'PermissionDeniedError' || n === 'SecurityError') return 'verweigert';
  if (n === 'NotFoundError' || n === 'DevicesNotFoundError' || n === 'OverconstrainedError') return 'keine-kamera';
  if (n === 'NotReadableError' || n === 'TrackStartError' || n === 'AbortError') return 'belegt';
  if (n === 'NichtSicher') return 'unsicher';
  return 'allgemein';
}

function slug(text, max = 40) {
  return normiere(text).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, max).replace(/-+$/, '') || 'schmuck';
}

function zeitstempel(d = new Date()) {
  const z = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}${z(d.getMonth() + 1)}${z(d.getDate())}-${z(d.getHours())}${z(d.getMinutes())}`;
}

/** Bilddatei -> Canvas (EXIF-Drehung uebernimmt der Browser beim <img>), lange Seite max. 1920 px. */
async function ladeFotoCanvas(datei) {
  const url = URL.createObjectURL(datei);
  try {
    const img = new Image();
    img.decoding = 'async';
    img.src = url;
    await img.decode();
    const w0 = img.naturalWidth;
    const h0 = img.naturalHeight;
    if (!w0 || !h0) throw new Error('Bild leer');
    const f = Math.min(1, 1920 / Math.max(w0, h0));
    const c = document.createElement('canvas');
    c.width = Math.round(w0 * f);
    c.height = Math.round(h0 * f);
    const ctx = c.getContext('2d');
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, 0, 0, c.width, c.height);
    return { canvas: c, url };
  } catch (e) {
    URL.revokeObjectURL(url);
    throw e;
  }
}

function warteMs(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

// ---------------------------------------------------------------- App

export class AnprobeApp {
  constructor(wurzelElement, { konfig } = {}) {
    this.konfig = konfig || globaleKonfig;
    this.zustand = 'zu';
    this.sitzung = 0;
    this.produkt = null;
    this.vorrat = null;
    this.tracker = null;
    this.buehne = null;
    this.stream = null;
    this.spiegel = true;
    this.richtung = 'user';
    this.geraete = 0;
    this.modelle = new Map();
    this.variante = 0;
    this.finger = null;
    this.anpassung = { skala: 1, versatzMm: new THREE.Vector3() };
    this.ergebnis = null;
    this.fotoQuelle = null;
    this.objektUrls = new Set();
    this.stufe = 0;
    this.laufId = 0;
    this.statistik = this.neueStatistik();
    this.debugObjekt = null;

    this.fenster = new Fenster(wurzelElement, {
      shopName: this.konfig.shopName,
      aktionen: {
        kameraStarten: () => this.kameraStarten(),
        fotoGewaehlt: (datei) => this.fotoGewaehlt(datei),
        schliessen: () => this.schliesse(),
        ausloesen: () => this.ausloesen(),
        kameraWechseln: () => this.kameraWechseln(),
        zurKamera: () => this.kameraStarten(),
        variante: (i) => this.waehleVariante(i),
        finger: (key) => this.waehleFinger(key),
        teilen: () => this.teilen(),
        speichern: () => this.speichern(),
        zurueck: () => this.zurueckZurAnprobe(),
        erneut: () => this.kameraStarten(),
        ziehen: (e) => this.ziehen(e),
        verschieben: (dx, dy) => this.verschiebeUm(dx, dy),
        skalieren: (f) => this.skaliere(f),
        zuruecksetzen: () => this.setzeAnpassungZurueck()
      }
    });

    this.beiSichtbarkeit = () => this.sichtbarkeitGeaendert();
    this.beiFokus = (e) => this.fenster.fokusHalten(e);
    this.groesse = new ResizeObserver(() => this.ansichtAnpassen());
    this.richteDebugEin();
  }

  // ---------------------------------------------------------------- Oeffnen / Schliessen

  /** Intro -> Laden -> Live. Loest auf, sobald das Fenster offen ist. */
  async oeffne(produkt) {
    if (!produkt || !produkt.art) throw new Error('Anprobe: Produkt ohne Art');
    if (this.zustand !== 'zu') await this.schliesse();
    this.sitzung++;
    this.entsorgeBuehne();   // falls kurz zuvor geschlossen und noch nicht aufgeraeumt
    this.fotoQuelle = null;
    this.ergebnis = null;
    this.produkt = produkt;
    this.variante = 0;
    this.finger = produkt.art === 'ring' ? produkt.finger || 'ring' : null;
    this.anpassung = { skala: 1, versatzMm: new THREE.Vector3() };
    this.richtung = KAMERA_RICHTUNG[produkt.art] || 'user';
    this.geraetId = null;
    this.stufe = 0;
    this.statistik = this.neueStatistik();
    this.tippGezeigt = false;
    this.richteDebugEin();

    if (!this.scrollGesperrt) {
      this.scrollGesperrt = true;
      this.scrollVorher = document.documentElement.style.overflow;
      document.documentElement.style.overflow = 'hidden';
    }
    document.addEventListener('visibilitychange', this.beiSichtbarkeit);
    document.addEventListener('focusin', this.beiFokus);
    this.groesse.observe(this.fenster.buehne);

    this.fenster.setzeFinger(null);
    this.fenster.setzeVarianten(produkt.varianten, 0);
    this.fenster.setzeFotoModus(false);
    this.fenster.setzeKameraWechsel(false);
    this.fenster.oeffne(produkt);
    this.setzeZustand('intro');
    // Modelle schon im Hintergrund laden
    this.vorrat = vorladen(produkt.art, this.konfig);
  }

  /** Schliesst sofort: Kamera aus, Schleife aus, Ressourcen frei. */
  async schliesse() {
    if (this.zustand === 'zu') return;
    this.sitzung++;
    this.setzeZustand('zu');
    this.stoppeSchleife();
    this.stoppeKamera();
    this.fenster.setzeVideo(null);
    document.removeEventListener('visibilitychange', this.beiSichtbarkeit);
    document.removeEventListener('focusin', this.beiFokus);
    this.groesse.disconnect();
    if (this.vorrat && this.ladeHoerer) this.vorrat.hoerer.delete(this.ladeHoerer);
    await this.fenster.schliesse();
    if (this.zustand !== 'zu') return;   // waehrenddessen neu geoeffnet
    this.entsorgeBuehne();
    if (this.tracker) this.tracker.zuruecksetzen();
    for (const url of this.objektUrls) URL.revokeObjectURL(url);
    this.objektUrls.clear();
    this.fotoQuelle = null;
    this.ergebnis = null;
    this.ergebnisBlob = null;
    if (this.scrollGesperrt) {
      this.scrollGesperrt = false;
      document.documentElement.style.overflow = this.scrollVorher || '';
    }
  }

  setzeZustand(z) {
    this.zustand = z;
    if (z !== 'zu') this.fenster.setzeZustand(z);
    if (this.debugObjekt) this.debugObjekt.zustand = z;
  }

  // ---------------------------------------------------------------- Laden

  ladeFortschrittVerfolgen() {
    const v = this.vorrat;
    if (this.ladeHoerer) v.hoerer.delete(this.ladeHoerer);
    const zeige = (anteil, text) => {
      if (this.zustand !== 'laden') return;
      // Modelle 0..0.9, Rest: Kamera und 3D-Buehne
      const gesamt = 0.9 * anteil + 0.05 * (this.kameraBereit ? 1 : 0) + 0.05 * (this.buehne ? 1 : 0);
      this.fenster.setzeFortschritt(gesamt, text || v.text || 'Lade');
    };
    this.ladeHoerer = zeige;
    v.hoerer.add(zeige);
    zeige(v.anteil, v.text);
    return zeige;
  }

  /** Kamera starten und alles fuer den Live-Zustand vorbereiten. */
  async kameraStarten() {
    const s = this.sitzung;
    if (this.zustand === 'zu' || this.zustand === 'laden') return;
    this.stoppeSchleife();
    this.fotoQuelle = null;
    this.fenster.setzeFotoGrund(null);
    this.fenster.setzeFotoModus(false);
    if (!this.vorrat || this.vorrat.fehler) this.vorrat = vorladen(this.produkt.art, this.konfig);
    this.kameraBereit = false;
    this.setzeZustand('laden');
    const zeige = this.ladeFortschrittVerfolgen();
    zeige(this.vorrat.anteil, this.vorrat.text || 'Starte Kamera');

    const kamera = this.starteKamera(s).then(() => { this.kameraBereit = true; zeige(this.vorrat.anteil); });
    kamera.catch((fehler) => {
      if (s === this.sitzung && this.zustand === 'laden' && fehler.name !== 'Abbruch') this.zeigeFehler(kameraFehlerArt(fehler), fehler);
    });
    let buehnenFehler = null;
    try {
      // erst einen Frame zeichnen lassen, damit der Ladebildschirm sichtbar ist
      await warteMs(16);
      if (s !== this.sitzung) return;
      this.bereiteBuehne();
      zeige(this.vorrat.anteil);
    } catch (e) {
      buehnenFehler = e;
    }
    const [k, t] = await Promise.allSettled([kamera, this.vorrat.bereit]);
    if (s !== this.sitzung) return;
    if (this.zustand !== 'laden') { this.stoppeKamera(); return; }
    if (k.status === 'rejected') return;   // Fehler wird schon angezeigt
    if (buehnenFehler) { this.stoppeKamera(); this.zeigeFehler('webgl', buehnenFehler); return; }
    if (t.status === 'rejected') { this.stoppeKamera(); this.zeigeFehler('laden', t.reason); return; }
    this.tracker = t.value;
    this.tracker.zuruecksetzen();
    try {
      await this.zeigeVariante(this.variante, s);
    } catch (e) {
      if (s !== this.sitzung) return;
      this.stoppeKamera();
      this.zeigeFehler('allgemein', e);
      return;
    }
    if (s !== this.sitzung || this.zustand !== 'laden') return;
    this.fenster.setzeFortschritt(1, 'Bereit');
    this.quelleSetzen(true);
    this.ansichtAnpassen();
    this.fenster.setzeFinger(this.finger);
    this.fenster.setzeVarianten(this.produkt.varianten, this.variante);
    await warteMs(180);   // Balken kurz voll zeigen
    if (s !== this.sitzung || this.zustand !== 'laden') return;
    this.setzeZustand('live');
    this.starteSchleife();
    if (!this.tippGezeigt) {
      this.tippGezeigt = true;
      setTimeout(() => { if (s === this.sitzung && this.zustand === 'live') this.fenster.zeigeTipp(); }, 1400);
    }
  }

  /** Feste Qualitaet aus konfig.qualitaet ('hoch'|'mittel'|'niedrig'), sonst null (adaptiv). */
  festeQualitaet() {
    const q = this.konfig.qualitaet;
    return q === 'hoch' || q === 'mittel' || q === 'niedrig' ? q : null;
  }

  bereiteBuehne() {
    if (this.buehne) return this.buehne;
    const canvas = this.fenster.neuesCanvas();
    const stufe = STUFEN[this.stufe];
    this.buehne = new Buehne(canvas, {
      pixelRatio: Math.min(window.devicePixelRatio || 1, stufe.pixelRatio),
      qualitaet: this.festeQualitaet() || stufe.qualitaet
    });
    this.quelleInfo = null;
    this.ansichtAnpassen();
    return this.buehne;
  }

  entsorgeBuehne() {
    if (this.buehne) {
      try { this.buehne.dispose(); } catch (e) { this.meldeFehler(e); }
    }
    this.buehne = null;
    this.fenster.entferneCanvas();
    for (const m of this.modelle.values()) {
      try { m.dispose(); } catch { /* bereits frei */ }
    }
    this.modelle.clear();
  }

  // ---------------------------------------------------------------- Kamera

  kameraBedingungen() {
    const hoch = window.innerHeight > window.innerWidth && Math.min(window.innerWidth, window.innerHeight) < 900;
    const video = {
      width: { ideal: hoch ? 720 : 1280 },
      height: { ideal: hoch ? 1280 : 720 },
      frameRate: { ideal: 30 }
    };
    if (this.geraetId) video.deviceId = { exact: this.geraetId };
    else video.facingMode = { ideal: this.richtung };
    return { audio: false, video };
  }

  async starteKamera(s) {
    if (!window.isSecureContext) {
      const e = new Error('Kamera nur ueber https');
      e.name = 'NichtSicher';
      throw e;
    }
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      const e = new Error('getUserMedia fehlt');
      e.name = 'NotFoundError';
      throw e;
    }
    this.stoppeKamera();
    let stream;
    try {
      stream = await navigator.mediaDevices.getUserMedia(this.kameraBedingungen());
    } catch (e) {
      // bestimmtes Geraet weg (abgesteckt): ohne deviceId noch einmal
      if (this.geraetId && (e.name === 'OverconstrainedError' || e.name === 'NotFoundError')) {
        this.geraetId = null;
        stream = await navigator.mediaDevices.getUserMedia(this.kameraBedingungen());
      } else throw e;
    }
    if (s !== this.sitzung || this.zustand === 'zu') {
      for (const t of stream.getTracks()) t.stop();
      throw new Abbruch();
    }
    this.stream = stream;
    const track = stream.getVideoTracks()[0];
    const einst = (track && track.getSettings && track.getSettings()) || {};
    // fehlende Angabe = Frontkamera (Desktop-Webcams) -> spiegeln
    this.spiegel = einst.facingMode !== 'environment';
    if (einst.facingMode === 'user' || einst.facingMode === 'environment') this.richtung = einst.facingMode;
    this.kameraFps = einst.frameRate || 30;
    track.addEventListener('ended', () => {
      if (this.stream === stream && this.zustand === 'live') this.zeigeFehler('belegt', new Error('Kamera beendet'));
    });
    const video = this.fenster.video;
    this.fenster.setzeVideo(stream, this.spiegel);
    if (video.readyState < 1) {
      await new Promise((r) => video.addEventListener('loadedmetadata', r, { once: true }));
    }
    try { await video.play(); } catch { /* autoplay: muted + playsinline genuegt meist */ }
    if (s !== this.sitzung || this.stream !== stream) {
      for (const t of stream.getTracks()) t.stop();
      throw new Abbruch();
    }
    // Wechselknopf nur bei mehreren Kameras (Liste ist erst nach der Freigabe vollstaendig)
    try {
      const geraete = await navigator.mediaDevices.enumerateDevices();
      this.kameras = geraete.filter((g) => g.kind === 'videoinput');
      this.geraete = this.kameras.length;
    } catch { this.geraete = 1; }
    this.fenster.setzeKameraWechsel(this.geraete > 1);
    this.aktuellesGeraet = einst.deviceId || null;
    this.richteDebugKamera();
    return stream;
  }

  stoppeKamera() {
    if (this.stream) {
      for (const t of this.stream.getTracks()) t.stop();
    }
    this.stream = null;
    this.richteDebugKamera();
  }

  async kameraWechseln() {
    if (this.wechselt || this.zustand !== 'live' || this.geraete < 2) return;
    this.wechselt = true;
    const s = this.sitzung;
    try {
      this.stoppeSchleife();
      if (this.richtung && this.aktuellesGeraetHatRichtung()) {
        // Handy: vorn <-> hinten
        this.geraetId = null;
        this.richtung = this.richtung === 'user' ? 'environment' : 'user';
      } else {
        // Desktop mit mehreren Kameras: reihum
        const ids = (this.kameras || []).map((k) => k.deviceId).filter(Boolean);
        const i = ids.indexOf(this.aktuellesGeraet);
        this.geraetId = ids.length ? ids[(i + 1) % ids.length] : null;
      }
      await this.starteKamera(s);
      if (s !== this.sitzung) return;
      this.tracker.zuruecksetzen();
      this.quelleSetzen(true);
      this.starteSchleife();
    } catch (e) {
      if (s === this.sitzung && e.name !== 'Abbruch') this.zeigeFehler(kameraFehlerArt(e), e);
    } finally {
      this.wechselt = false;
    }
  }

  aktuellesGeraetHatRichtung() {
    const track = this.stream && this.stream.getVideoTracks()[0];
    const fm = track && track.getSettings ? track.getSettings().facingMode : null;
    return fm === 'user' || fm === 'environment';
  }

  sichtbarkeitGeaendert() {
    if (document.hidden) {
      // Tab verborgen: Kamera aus (Datenschutz, Akku)
      if (this.stream) {
        this.pausiert = true;
        if (this.zustand === 'live') this.stoppeSchleife();
        this.stoppeKamera();
      }
      return;
    }
    if (!this.pausiert) return;
    this.pausiert = false;
    // im Ergebnis startet die Kamera erst beim Zurueckgehen wieder
    if (this.zustand !== 'live' && this.zustand !== 'laden') return;
    const s = this.sitzung;
    this.starteKamera(s).then(() => {
      if (s !== this.sitzung || this.zustand !== 'live') return;
      if (this.tracker) this.tracker.zuruecksetzen();
      this.quelleSetzen(true);
      this.starteSchleife();
    }, (e) => {
      if (s === this.sitzung && e.name !== 'Abbruch') this.zeigeFehler(kameraFehlerArt(e), e);
    });
  }

  // ---------------------------------------------------------------- Quelle und Ansicht

  /** Video (oder Foto-Canvas) als Hintergrund der Buehne setzen, wenn sich Format/Spiegelung aendern. */
  quelleSetzen(erzwingen = false) {
    if (!this.buehne) return false;
    let quelle;
    let W;
    let H;
    let spiegel;
    if (this.fotoQuelle) {
      quelle = this.fotoQuelle.canvas;
      W = quelle.width;
      H = quelle.height;
      spiegel = false;
    } else {
      quelle = this.fenster.video;
      W = quelle.videoWidth;
      H = quelle.videoHeight;
      spiegel = this.spiegel;
    }
    if (!W || !H) return false;
    const q = this.quelleInfo;
    if (!erzwingen && q && q.quelle === quelle && q.W === W && q.H === H && q.spiegel === spiegel) return true;
    this.quelleInfo = { quelle, W, H, spiegel };
    // statisch: Foto-Canvas nur einmal hochladen (Zusatzoption der Buehne)
    this.buehne.setzeQuelle(quelle, { W, H, spiegel, statisch: Boolean(this.fotoQuelle) });
    this.ansichtAnpassen();
    return true;
  }

  ansichtAnpassen() {
    if (!this.buehne) return;
    const r = this.fenster.buehne.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) return;
    this.buehne.setzeAnsicht(r.width, r.height, this.fotoQuelle ? 'contain' : 'cover');
    // Foto: Buehne zeichnet ohne Schleife nicht neu
    if (this.zustand === 'foto' || this.zustand === 'ergebnis') this.rendereEinmal();
  }

  rendereEinmal() {
    if (!this.buehne || !this.ergebnis) return;
    try {
      this.buehne.aktualisiere(this.ergebnis, 0);
      this.buehne.rendere();
    } catch (e) { this.meldeFehler(e); }
  }

  // ---------------------------------------------------------------- Schleife

  starteSchleife() {
    this.stoppeSchleife();
    const lauf = ++this.laufId;
    const video = this.fenster.video;
    const mitVideo = !this.fotoQuelle && typeof video.requestVideoFrameCallback === 'function';
    this.letzterFrame = null;
    this.letztePraesentiert = null;
    const schritt = (jetzt, meta) => {
      if (lauf !== this.laufId) return;
      this.frame(jetzt, meta);
      plane();
    };
    const plane = () => {
      if (lauf !== this.laufId) return;
      if (mitVideo) this.rvfc = { video, id: video.requestVideoFrameCallback(schritt) };
      else this.raf = requestAnimationFrame(schritt);
    };
    plane();
  }

  stoppeSchleife() {
    this.laufId++;
    if (this.raf) cancelAnimationFrame(this.raf);
    if (this.rvfc && this.rvfc.video.cancelVideoFrameCallback) this.rvfc.video.cancelVideoFrameCallback(this.rvfc.id);
    this.raf = 0;
    this.rvfc = null;
  }

  frame(jetzt, meta) {
    if (!this.buehne || !this.tracker) return;
    // verpasste Kamerabilder zaehlen (nur mit requestVideoFrameCallback)
    if (meta && meta.presentedFrames != null) {
      const st = this.statistik;
      if (this.letztePraesentiert != null) {
        const n = meta.presentedFrames - this.letztePraesentiert;
        if (n > 0) { st.gezeigt += n; st.verpasst += n - 1; }
      }
      this.letztePraesentiert = meta.presentedFrames;
    }
    const foto = Boolean(this.fotoQuelle);
    if (!this.quelleSetzen()) return;
    const { W, H, spiegel, quelle } = this.quelleInfo;
    const dt = this.letzterFrame == null ? 1 / 30 : Math.min(0.1, Math.max(0, (jetzt - this.letzterFrame) / 1000));
    this.letzterFrame = jetzt;
    try {
      const t0 = performance.now();
      if (!foto) {
        // MediaPipe VIDEO braucht streng steigende Zeitstempel
        let zeit = performance.now();
        if (this.letzteZeit != null && zeit <= this.letzteZeit) zeit = this.letzteZeit + 1;
        this.letzteZeit = zeit;
        this.ergebnis = this.tracker.verarbeite(quelle, zeit, { W, H, spiegel });
      }
      const t1 = performance.now();
      this.buehne.aktualisiere(this.ergebnis, dt);
      this.buehne.rendere();
      const t2 = performance.now();
      this.fehlerFolge = 0;
      this.messe(jetzt, foto ? this.statistik.trackingMs : t1 - t0, t2 - t1);
      if (!foto) this.fenster.setzeHinweis(this.ergebnis && this.ergebnis.hinweis);
    } catch (e) {
      this.meldeFehler(e);
      this.fehlerFolge = (this.fehlerFolge || 0) + 1;
      if (this.fehlerFolge > 45) {
        this.stoppeSchleife();
        this.stoppeKamera();
        this.zeigeFehler('allgemein', e);
      }
    }
    if (this.debugObjekt) {
      const d = this.debugObjekt;
      d.ergebnis = this.ergebnis;
      d.fps = this.statistik.fps;
      d.renderMs = this.statistik.renderMs;
      d.trackingMs = this.statistik.trackingMs;
    }
  }

  neueStatistik() {
    return { fps: 0, renderMs: 0, trackingMs: 0, letzte: null, fensterStart: 0, frames: 0, schlecht: 0, gezeigt: 0, verpasst: 0 };
  }

  messe(jetzt, trackingMs, renderMs) {
    const st = this.statistik;
    const a = 0.1;
    st.trackingMs = st.trackingMs ? st.trackingMs + a * (trackingMs - st.trackingMs) : trackingMs;
    st.renderMs = st.renderMs ? st.renderMs + a * (renderMs - st.renderMs) : renderMs;
    if (st.letzte != null) {
      const d = jetzt - st.letzte;
      if (d > 0 && d < 1000) {
        const f = 1000 / d;
        st.fps = st.fps ? st.fps + a * (f - st.fps) : f;
      }
    }
    st.letzte = jetzt;
    // Adaptive Qualitaet: alle 2 s pruefen, zweimal hintereinander zu langsam -> Stufe runter.
    // Eine langsame Kamera (z. B. 15 fps bei wenig Licht) ist kein Grund: zu langsam ist
    // nur, wer Kamerabilder verpasst oder dessen Arbeit pro Bild das Budget sprengt.
    if (!st.fensterStart) st.fensterStart = jetzt;
    st.frames++;
    if (jetzt - st.fensterStart >= 2000) {
      const fps = (st.frames * 1000) / (jetzt - st.fensterStart);
      const verpasstAnteil = st.gezeigt > 0 ? st.verpasst / st.gezeigt : 0;
      const arbeitMs = st.trackingMs + st.renderMs;
      // arbeitMs enthaelt auch GPU-Wartezeit (volle Befehlsschlange blockiert, MediaPipe liest zurueck)
      const zuLangsam = fps < FPS_ZIEL && (arbeitMs > 28 || (verpasstAnteil > 0.25 && arbeitMs > 16));
      st.schlecht = zuLangsam ? st.schlecht + 1 : 0;
      st.fensterStart = jetzt;
      st.frames = 0;
      st.gezeigt = 0;
      st.verpasst = 0;
      if (st.schlecht >= 2 && document.visibilityState === 'visible' && !this.festeQualitaet()) {
        st.schlecht = 0;
        this.senkeQualitaet();
      }
    }
  }

  senkeQualitaet() {
    if (this.stufe >= STUFEN.length - 1 || !this.buehne) return;
    this.stufe++;
    const stufe = STUFEN[this.stufe];
    const pixelRatio = Math.min(window.devicePixelRatio || 1, stufe.pixelRatio);
    if (this.debugObjekt) this.debugObjekt.qualitaet = { stufe: this.stufe, ...stufe };
    if (typeof this.buehne.setzeQualitaet === 'function') {
      this.buehne.setzeQualitaet({ pixelRatio, qualitaet: stufe.qualitaet });
      this.ansichtAnpassen();
      return;
    }
    // Buehne ohne Umschalter: neu aufbauen (selten, hoechstens zweimal)
    const modell = this.modelle.get(this.variante);
    try { this.buehne.dispose(); } catch (e) { this.meldeFehler(e); }
    this.buehne = null;
    this.bereiteBuehne();
    if (modell) this.buehne.setzeSchmuck(modell, { finger: this.finger || undefined, freigeben: false });
    this.buehne.setzeAnpassung(this.anpassung);
    this.quelleSetzen(true);
    if (this.fenster.canvas) this.fenster.canvas.style.transition = 'none';
  }

  // ---------------------------------------------------------------- Varianten und Finger

  async baueModell(i) {
    if (this.modelle.has(i)) return this.modelle.get(i);
    const v = this.produkt.varianten[i];
    let modell;
    if (v.glbUrl) {
      try {
        modell = await ladeGlb(v.glbUrl, { ...v.spec, art: this.produkt.art });
      } catch (e) {
        this.meldeFehler(e);
        modell = baueSchmuck({ ...v.spec, art: this.produkt.art });
      }
    } else {
      modell = baueSchmuck({ ...v.spec, art: this.produkt.art });
    }
    this.modelle.set(i, modell);
    return modell;
  }

  async zeigeVariante(i, s = this.sitzung) {
    const modell = await this.baueModell(i);
    if (s !== this.sitzung || !this.buehne) return;
    this.variante = i;
    // freigeben: false -> die App verwaltet die Modelle (Zwischenspeicher je Variante)
    this.buehne.setzeSchmuck(modell, { finger: this.finger || undefined, freigeben: false });
    this.buehne.setzeAnpassung(this.anpassung);
    if (this.debugObjekt) this.debugObjekt.variante = i;
  }

  async waehleVariante(i) {
    if (!this.produkt || !this.produkt.varianten[i] || i === this.variante) return;
    this.fenster.setzeVarianten(this.produkt.varianten, i);
    this.variante = i;
    try {
      await this.zeigeVariante(i);
      this.fenster.sage(`Variante ${this.produkt.varianten[i].name}`);
      if (this.zustand === 'foto') this.rendereEinmal();
    } catch (e) { this.meldeFehler(e); }
  }

  waehleFinger(key) {
    if (!this.finger || key === this.finger) return;
    this.finger = key;
    this.anpassung.versatzMm.set(0, 0, 0);
    this.fenster.setzeFinger(key);
    if (this.buehne) {
      this.buehne.setzeFinger(key);
      this.buehne.setzeAnpassung(this.anpassung);
    }
    this.anpassungGeaendert();
    if (this.debugObjekt) this.debugObjekt.finger = key;
  }

  // ---------------------------------------------------------------- Feinjustierung

  /** Anker, an dem die Feinjustierung gemessen wird. */
  aktuellerAnker() {
    const a = this.ergebnis && this.ergebnis.anker;
    if (!a) return null;
    switch (this.produkt.art) {
      case 'ring': return a.ring ? a.ring[this.finger] : null;
      case 'armband': return a.armband || null;
      case 'kette': return a.kette || null;
      default: {
        const r = a.ohrR;
        const l = a.ohrL;
        if (r && (!l || (r.sichtbar || 0) >= (l.sichtbar || 0))) return r;
        return l || null;
      }
    }
  }

  /** Bildschirmversatz (CSS-Pixel) -> Versatz im Modellrahmen (mm). */
  bildschirmZuMm(x0, y0, x1, y1) {
    const anker = this.aktuellerAnker();
    if (!anker || !anker.pxProMm || !this.buehne) return null;
    const a = this.buehne.bildschirmZuBuehne(x0, y0);
    const b = this.buehne.bildschirmZuBuehne(x1, y1);
    if (!a || !b) return null;
    const skala = anker.pxProMm * (this.anpassung.skala || 1);
    const v = new THREE.Vector3((b.x - a.x) / skala, (b.y - a.y) / skala, 0);
    v.applyQuaternion(anker.quaternion.clone().invert());
    const art = this.produkt.art;
    if (art === 'ring' || art === 'armband') v.set(0, v.y, 0);   // nur entlang Finger bzw. Unterarm
    else v.z = 0;
    return v;
  }

  ziehen({ phase, clientX, clientY }) {
    if (phase === 'start') {
      this.zug = { x: clientX, y: clientY, versatz: this.anpassung.versatzMm.clone() };
      return;
    }
    if (phase === 'ende') {
      this.zug = null;
      return;
    }
    if (!this.zug) return;
    const v = this.bildschirmZuMm(this.zug.x, this.zug.y, clientX, clientY);
    if (!v) return;
    this.setzeVersatz(this.zug.versatz.clone().add(v));
  }

  verschiebeUm(dx, dy) {
    const r = this.fenster.buehne.getBoundingClientRect();
    const x = r.left + r.width / 2;
    const y = r.top + r.height / 2;
    const v = this.bildschirmZuMm(x, y, x + dx, y + dy);
    if (v) this.setzeVersatz(this.anpassung.versatzMm.clone().add(v));
  }

  setzeVersatz(v) {
    const max = VERSATZ_MAX_MM[this.produkt.art] || 20;
    if (v.length() > max) v.setLength(max);
    this.anpassung.versatzMm.copy(v);
    this.anpassungUebernehmen();
  }

  skaliere(faktor) {
    if (!(faktor > 0)) return;
    this.anpassung.skala = Math.min(SKALA_MAX, Math.max(SKALA_MIN, this.anpassung.skala * faktor));
    this.anpassungUebernehmen();
  }

  setzeAnpassungZurueck() {
    this.anpassung.skala = 1;
    this.anpassung.versatzMm.set(0, 0, 0);
    this.anpassungUebernehmen();
  }

  anpassungUebernehmen() {
    if (this.buehne) this.buehne.setzeAnpassung(this.anpassung);
    this.anpassungGeaendert();
    if (this.zustand === 'foto') this.rendereEinmal();
  }

  anpassungGeaendert() {
    const a = this.anpassung;
    this.fenster.setzeAnpassungAktiv(Math.abs(a.skala - 1) > 0.01 || a.versatzMm.length() > 0.3);
    if (this.debugObjekt) this.debugObjekt.anpassung = { skala: a.skala, versatzMm: a.versatzMm.toArray() };
  }

  // ---------------------------------------------------------------- Foto

  async fotoGewaehlt(datei) {
    if (this.zustand === 'zu') return;
    const s = this.sitzung;
    this.stoppeSchleife();
    this.stoppeKamera();
    this.fenster.setzeVideo(null);
    this.setzeZustand('laden');
    if (!this.vorrat || this.vorrat.fehler) this.vorrat = vorladen(this.produkt.art, this.konfig);
    this.kameraBereit = true;
    const zeige = this.ladeFortschrittVerfolgen();
    let foto;
    try {
      foto = await ladeFotoCanvas(datei);
    } catch (e) {
      if (s === this.sitzung) this.zeigeFehler('foto', e);
      return;
    }
    if (s !== this.sitzung) { URL.revokeObjectURL(foto.url); return; }
    this.objektUrls.add(foto.url);
    try {
      this.bereiteBuehne();
      zeige(this.vorrat.anteil);
    } catch (e) {
      this.zeigeFehler('webgl', e);
      return;
    }
    let tracker;
    try {
      tracker = await this.vorrat.bereit;
    } catch (e) {
      if (s === this.sitzung) this.zeigeFehler('laden', e);
      return;
    }
    if (s !== this.sitzung) return;
    this.tracker = tracker;
    this.fotoQuelle = foto;
    try {
      await this.zeigeVariante(this.variante, s);
      if (s !== this.sitzung) return;
      const { canvas } = foto;
      this.ergebnis = tracker.verarbeite(canvas, null, { W: canvas.width, H: canvas.height, spiegel: false });
      tracker.zuruecksetzen();
    } catch (e) {
      if (s === this.sitzung) this.zeigeFehler('allgemein', e);
      return;
    }
    if (this.debugObjekt) this.debugObjekt.ergebnis = this.ergebnis;
    this.fenster.setzeFortschritt(1, 'Bereit');
    this.fenster.setzeFotoGrund(foto.url);
    this.fenster.setzeFotoModus(true, Boolean(navigator.mediaDevices && navigator.mediaDevices.getUserMedia));
    this.fenster.setzeFinger(this.finger);
    this.fenster.setzeVarianten(this.produkt.varianten, this.variante);
    this.quelleSetzen(true);
    const e = this.ergebnis;
    this.fenster.setzeHinweis(e && e.gefunden ? null : { code: (e && e.hinweis && e.hinweis.code) || 'kein-fund', text: KEIN_FUND[this.produkt.art] });
    await warteMs(120);
    if (s !== this.sitzung || this.zustand !== 'laden') return;
    this.setzeZustand('foto');
    // rAF-Schleife: Physik und Einblenden laufen weiter, das Ergebnis bleibt fest
    this.starteSchleife();
  }

  // ---------------------------------------------------------------- Aufnahme und Teilen

  async ausloesen() {
    if ((this.zustand !== 'live' && this.zustand !== 'foto') || !this.buehne || this.nimmtAuf) return;
    const s = this.sitzung;
    this.nimmtAuf = true;
    this.fenster.setzeAusloeserAktiv(false);
    this.fenster.blitz();
    try {
      const roh = await this.buehne.aufnahme({ breite: this.konfig.aufnahmeBreite || 1440 });
      if (s !== this.sitzung) return;
      const blob = await this.mitSignatur(roh);
      if (s !== this.sitzung) return;
      this.vorherZustand = this.zustand;
      this.stoppeSchleife();
      this.ergebnisBlob = blob;
      const url = URL.createObjectURL(blob);
      this.objektUrls.add(url);
      this.ergebnisDatei = new File([blob], this.dateiname(), { type: 'image/jpeg' });
      let teilenMoeglich = false;
      try { teilenMoeglich = Boolean(navigator.canShare && navigator.canShare({ files: [this.ergebnisDatei] })); } catch { /* nein */ }
      this.fenster.setzeErgebnis(url, { teilenMoeglich });
      this.setzeZustand('ergebnis');
    } catch (e) {
      this.meldeFehler(e);
    } finally {
      this.nimmtAuf = false;
      this.fenster.setzeAusloeserAktiv(true);
    }
  }

  dateiname() {
    return `${slug(this.konfig.shopName || 'anprobe', 20)}-anprobe-${slug(this.produkt.titel)}-${zeitstempel()}.jpg`;
  }

  /** Shop-Name dezent ins Bild setzen (unten mittig, gesperrte Versalien). */
  async mitSignatur(blob) {
    const name = String(this.konfig.shopName || '').trim();
    if (!name) return blob;
    const url = URL.createObjectURL(blob);
    try {
      const img = new Image();
      img.src = url;
      await img.decode();
      const c = document.createElement('canvas');
      c.width = img.naturalWidth;
      c.height = img.naturalHeight;
      const ctx = c.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const W = c.width;
      const H = c.height;
      const masz = Math.min(W, H);
      // weicher Verlauf, damit die Schrift auf hellem Grund lesbar bleibt
      const verlauf = ctx.createLinearGradient(0, H * 0.72, 0, H);
      verlauf.addColorStop(0, 'rgba(30,27,24,0)');
      verlauf.addColorStop(0.55, 'rgba(30,27,24,0.12)');
      verlauf.addColorStop(1, 'rgba(30,27,24,0.34)');
      ctx.fillStyle = verlauf;
      ctx.fillRect(0, H * 0.72, W, H * 0.28);
      const titelSchrift = getComputedStyle(this.fenster.$('.a-titel')).fontFamily || 'serif';
      const textSchrift = getComputedStyle(this.fenster.el).fontFamily || 'sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.94)';
      ctx.textBaseline = 'alphabetic';
      const gross = Math.round(masz * 0.034);
      const klein = Math.round(masz * 0.016);
      const unten = H - masz * 0.05;
      zeichneGesperrt(ctx, name.toUpperCase(), W / 2, unten - klein * 2.2, `400 ${gross}px ${titelSchrift}`, gross * 0.32);
      ctx.fillStyle = 'rgba(255,255,255,0.78)';
      zeichneGesperrt(ctx, `${this.produkt.titel}`.toUpperCase(), W / 2, unten, `500 ${klein}px ${textSchrift}`, klein * 0.22);
      return await new Promise((r) => c.toBlob((b) => r(b || blob), 'image/jpeg', 0.92));
    } catch (e) {
      this.meldeFehler(e);
      return blob;
    } finally {
      URL.revokeObjectURL(url);
    }
  }

  async teilen() {
    if (!this.ergebnisDatei) return;
    try {
      await navigator.share({
        files: [this.ergebnisDatei],
        title: `${this.produkt.titel} – ${this.konfig.shopName || ''}`.replace(/ – $/, ''),
        text: `Meine Anprobe: ${this.produkt.titel}`
      });
    } catch (e) {
      if (e && e.name === 'AbortError') return;
      this.meldeFehler(e);
      this.speichern();
    }
  }

  speichern() {
    if (!this.ergebnisBlob) return;
    const url = URL.createObjectURL(this.ergebnisBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = this.ergebnisDatei ? this.ergebnisDatei.name : this.dateiname();
    a.rel = 'noopener';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 30000);
    this.fenster.sage('Bild gespeichert.');
  }

  zurueckZurAnprobe() {
    if (this.zustand !== 'ergebnis') return;
    if (this.vorherZustand === 'foto') {
      this.setzeZustand('foto');
      this.starteSchleife();
      return;
    }
    if (!this.stream) { this.kameraStarten(); return; }
    this.setzeZustand('live');
    this.starteSchleife();
  }

  // ---------------------------------------------------------------- Fehler und Debug

  zeigeFehler(art, fehler) {
    // Verweigerte, fehlende oder belegte Kamera ist kein Fehler der App (nur vermerken)
    if (fehler && KAMERA_ZUSTAENDE.has(art)) {
      if (this.debugObjekt) this.debugObjekt.kameraFehler = `${fehler.name || 'Fehler'}: ${fehler.message || ''}`;
      if (typeof console !== 'undefined') console.info('[anprobe] Kamera:', art, fehler.name || fehler);
    } else if (fehler) this.meldeFehler(fehler);
    if (this.zustand === 'zu') return;
    this.stoppeSchleife();
    if (art !== 'foto') this.stoppeKamera();
    const t = FEHLER_TEXTE[art] || FEHLER_TEXTE.allgemein;
    this.fenster.setzeFehler({ titel: t.titel, text: t.text, foto: t.foto !== false, erneut: t.erneut !== false });
    this.setzeZustand('fehler');
    if (this.debugObjekt) this.debugObjekt.fehlerArt = art;
  }

  meldeFehler(e) {
    const text = e && e.message ? `${e.name || 'Fehler'}: ${e.message}` : String(e);
    if (this.debugObjekt) {
      this.debugObjekt.fehler.push(text);
      if (this.debugObjekt.fehler.length > 50) this.debugObjekt.fehler.shift();
    }
    if (typeof console !== 'undefined') console.warn('[anprobe]', e);
  }

  richteDebugEin() {
    if (!this.konfig.debug) { this.debugObjekt = null; return; }
    const alt = window.__anprobe;
    this.debugObjekt = {
      zustand: this.zustand,
      ergebnis: null,
      fps: 0,
      renderMs: 0,
      trackingMs: 0,
      fehler: alt && Array.isArray(alt.fehler) ? alt.fehler : [],
      produkt: this.produkt,
      variante: this.variante,
      finger: this.finger,
      kameraAktiv: false,
      spiegel: this.spiegel,
      qualitaet: { stufe: this.stufe, ...STUFEN[this.stufe] },
      anpassung: { skala: 1, versatzMm: [0, 0, 0] },
      app: this
    };
    window.__anprobe = this.debugObjekt;
  }

  richteDebugKamera() {
    if (!this.debugObjekt) return;
    this.debugObjekt.kameraAktiv = Boolean(this.stream && this.stream.getVideoTracks().some((t) => t.readyState === 'live'));
    this.debugObjekt.spiegel = this.spiegel;
  }
}

/** Text mit Laufweite mittig zeichnen (ctx.letterSpacing fehlt in aelteren Browsern). */
function zeichneGesperrt(ctx, text, mitteX, y, schrift, abstand) {
  ctx.font = schrift;
  const zeichen = [...text];
  const breiten = zeichen.map((z) => ctx.measureText(z).width);
  const gesamt = breiten.reduce((a, b) => a + b, 0) + abstand * (zeichen.length - 1);
  let x = mitteX - gesamt / 2;
  ctx.textAlign = 'left';
  zeichen.forEach((z, i) => {
    ctx.fillText(z, x, y);
    x += breiten[i] + abstand;
  });
}
