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

// Zeitbudget der Live-Schleife (Anteile des Kamera-Intervalls bzw. der Schrittdauer)
const BUDGET_ANTEIL = 0.5;    // laenger -> danach Pause
const PAUSE_ANTEIL = 0.6;     // Pause = Anteil der Schrittdauer (Hauptthread bleibt >= ~40 % frei)
const PAUSE_MAX_MS = 1200;
const SPAREN_AB = 0.8;        // geglaettete Schrittdauer -> Sparbetrieb des Trackers
const SPAREN_BIS = 0.45;
const FOTO_NACHLAUF_MS = 2500; // Foto-Modus: so lange nach einer Aenderung rendern
const KAMERA_BILD_MS = 10000;
// Foto: Bereich um den Anker (halbe Breite in mm), der mindestens sichtbar sein soll
const FOTO_BEREICH_MM = { ring: 55, armband: 80, kette: 170, ohrringe: 90 };
const FOTO_ZOOM_MAX = 3;  // so lange auf das erste Kamerabild warten
const ERGEBNIS_KAMERA_AUS_MS = 15000; // im Ergebnis die Kamera danach ausschalten

// Hinweis "Handruecken zur Kamera" (Ring mit Stein, Handflaeche zur Kamera)
const RUECKEN_WEG_Z = -0.3;
const RUECKEN_HINWEIS_AB_MS = 1000;
const RUECKEN_HINWEIS_DAUER_MS = 9000;
const _zAchse = new THREE.Vector3();

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

function klemme(x, a, b) {
  return x < a ? a : x > b ? b : x;
}

/** Wartet eine Eingabe (Tippen, Klick, Taste)? Nur wo der Browser es verraet. */
function eingabeWartet() {
  try {
    const s = navigator.scheduling;
    return Boolean(s && typeof s.isInputPending === 'function' && s.isInputPending());
  } catch {
    return false;
  }
}

/**
 * Wartet auf die Metadaten des Kamerabilds. Wird die Quelle inzwischen
 * ersetzt (Schliessen, anderer Start), endet das Warten mit Abbruch; kommt
 * kein Bild (belegte oder defekte Kamera), mit einem Fehler der Art 'belegt'.
 */
function warteAufBild(video, stream, ms) {
  return new Promise((ok, fehler) => {
    let uhr = 0;
    let wache = 0;
    const ende = (f) => {
      clearTimeout(uhr);
      clearInterval(wache);
      video.removeEventListener('loadedmetadata', fertig);
      f();
    };
    const fertig = () => ende(ok);
    if (video.readyState >= 1) { ok(); return; }
    video.addEventListener('loadedmetadata', fertig);
    uhr = setTimeout(() => ende(() => {
      const e = new Error('Die Kamera liefert kein Bild');
      e.name = 'NotReadableError';
      fehler(e);
    }), ms);
    wache = setInterval(() => { if (video.srcObject !== stream) ende(() => fehler(new Abbruch())); }, 200);
  });
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
    this.kameraNr = 0;
    this.wechselt = false;
    this.nimmtAuf = false;
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
    this.wechselt = false;
    this.nimmtAuf = false;
    this.pausiert = false;
    this.entsorgeBuehne();   // falls kurz zuvor geschlossen und noch nicht aufgeraeumt
    this.fotoQuelle = null;
    this.ergebnis = null;
    this.produkt = produkt;
    // Auf der Produktseite gewaehlte Variante (main.js) vorauswaehlen
    this.variante = produkt.startVariante > 0 && produkt.startVariante < produkt.varianten.length ? produkt.startVariante : 0;
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
    this.fingerRechts = false;
    this.fenster.setzeFingerSeite(false);
    this.fenster.setzeVarianten(produkt.varianten, this.variante);
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
    this.kameraNr++;
    this.wechselt = false;
    this.nimmtAuf = false;
    this.pausiert = false;
    clearTimeout(this.ergebnisKameraUhr);
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
      // Modelle fertig, Kamera noch nicht: nicht "Bereit" zeigen
      const t = anteil >= 1 && !this.kameraBereit ? 'Kamera wird gestartet' : text || v.text || 'Lade';
      this.fenster.setzeFortschritt(gesamt, t);
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
    if (this.buehne) this.buehne.setzeFokus(null);
    this.fenster.setzeFotoGrund(null);
    this.fenster.setzeFotoModus(false);
    if (!this.vorrat || this.vorrat.fehler) this.vorrat = vorladen(this.produkt.art, this.konfig);
    this.kameraBereit = false;
    this.fenster.setzeMilchglas(false);
    this.setzeZustand('laden');
    const zeige = this.ladeFortschrittVerfolgen();
    zeige(this.vorrat.anteil, this.vorrat.text || 'Starte Kamera');

    const kamera = this.starteKamera(s).then(() => {
      this.kameraBereit = true;
      this.fenster.setzeMilchglas(true);
      zeige(this.vorrat.anteil);
    });
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
    // Shader noch im Ladezustand uebersetzen (sonst ruckelt das erste Live-Bild)
    try {
      this.quelleSetzen(true);
      await Promise.race([this.buehne.vorbereiten(), warteMs(4000)]);
    } catch (e) { this.meldeFehler(e); }
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
    this.buehne.onKontextVerlust = () => this.kontextVerloren();
    this.ansichtAnpassen();
    return this.buehne;
  }

  /**
   * WebGL-Kontext verloren (Speicherdruck, App-Wechsel auf dem Handy): Schleife
   * anhalten und die Buehne neu aufbauen, sobald die Seite sichtbar ist.
   */
  kontextVerloren() {
    this.meldeFehler(new Error('WebGL-Kontext verloren'));
    this.stoppeSchleife();
    this.kontextNeuNoetig = true;
    if (document.visibilityState === 'visible') setTimeout(() => this.kontextWiederherstellen(), 300);
  }

  async kontextWiederherstellen() {
    if (!this.kontextNeuNoetig || this.zustand === 'zu' || document.visibilityState !== 'visible') return;
    this.kontextNeuNoetig = false;
    const s = this.sitzung;
    const zustand = this.zustand;
    this.entsorgeBuehne();
    try {
      this.bereiteBuehne();
      await this.zeigeVariante(this.variante, s);
    } catch (e) {
      if (s === this.sitzung) this.zeigeFehler('webgl', e);
      return;
    }
    if (s !== this.sitzung) return;
    this.quelleSetzen(true);
    if (this.zustand === 'live' || this.zustand === 'foto') this.starteSchleife();
    else if (zustand === 'ergebnis') this.rendereEinmal();
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
    // Jeder Start bekommt eine Nummer: ein spaeterer Start (Tab zurueck, Kamera
    // wechseln) oder Schliessen macht ihn wirkungslos, sein Stream wird beendet.
    const nr = ++this.kameraNr;
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
    const pruefe = () => {
      if (s === this.sitzung && this.zustand !== 'zu' && nr === this.kameraNr) return;
      for (const t of stream.getTracks()) t.stop();
      if (this.stream === stream) { this.stream = null; this.richteDebugKamera(); }
      throw new Abbruch();
    };
    pruefe();
    if (this.stream && this.stream !== stream) this.stoppeKamera();
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
    try {
      await warteAufBild(video, stream, KAMERA_BILD_MS);
    } catch (e) {
      // kein Bild oder Quelle ersetzt: dieser Start ist gescheitert, Kamera aus
      for (const t of stream.getTracks()) t.stop();
      if (this.stream === stream) { this.stream = null; this.richteDebugKamera(); }
      pruefe();
      throw e;
    }
    pruefe();
    try { await video.play(); } catch { /* autoplay: muted + playsinline genuegt meist */ }
    pruefe();
    if (this.stream !== stream) throw new Abbruch();
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
    const vorher = { richtung: this.richtung, geraetId: this.geraetId };
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
      if (s !== this.sitzung || e.name === 'Abbruch') return;
      // Andere Kamera belegt oder defekt: zur bisherigen zurueck
      this.richtung = vorher.richtung;
      this.geraetId = vorher.geraetId;
      try {
        await this.starteKamera(s);
        if (s !== this.sitzung || this.zustand !== 'live') return;
        this.tracker.zuruecksetzen();
        this.quelleSetzen(true);
        this.starteSchleife();
        this.fenster.sage('Die andere Kamera ist gerade nicht verfügbar.');
      } catch (e2) {
        if (s === this.sitzung && e2.name !== 'Abbruch') this.zeigeFehler(kameraFehlerArt(e2), e2);
      }
    } finally {
      if (s === this.sitzung) this.wechselt = false;
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
    if (this.kontextNeuNoetig) this.kontextWiederherstellen();
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
    this.weckeFoto();
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
    const foto = Boolean(this.fotoQuelle);
    const mitVideo = !foto && typeof video.requestVideoFrameCallback === 'function';
    this.letzterFrame = null;
    this.letztePraesentiert = null;
    this.letzteVideoZeit = null;
    this.fotoSchlaeft = false;
    if (foto) this.fotoRuheAb = performance.now() + FOTO_NACHLAUF_MS;
    const schritt = (jetzt, meta) => {
      if (lauf !== this.laufId) return;
      this.raf = 0;
      this.rvfc = null;
      if (!foto) {
        // Eingaben haben Vorrang: dieses Kamerabild auslassen
        if (eingabeWartet()) { this.pauseTimer = setTimeout(plane, 0); return; }
        // rAF-Ersatz ohne requestVideoFrameCallback: nur neue Kamerabilder verarbeiten
        if (!mitVideo) {
          const vz = video.currentTime;
          if (vz === this.letzteVideoZeit && !video.paused) { plane(); return; }
          this.letzteVideoZeit = vz;
        }
      }
      const t0 = performance.now();
      this.frame(jetzt, meta);
      if (lauf !== this.laufId) return;
      const dauer = performance.now() - t0;
      if (foto) {
        // Foto: nur rendern, solange sich etwas bewegt (Einblenden, Pendel, Anpassung)
        if (performance.now() > this.fotoRuheAb) { this.fotoSchlaeft = true; return; }
        plane();
        return;
      }
      // Zeitbudget: Nach einem langen Schritt (langsames Geraet) bekommt der
      // Hauptthread eine Pause fuer Eingaben, Layout und Uebergaenge. Die
      // Kamerabilder in der Pause werden ganz ausgelassen (nicht gerendert),
      // damit Hintergrund und Schmuck immer aus demselben Bild stammen.
      const intervall = 1000 / klemme(this.kameraFps || 30, 10, 60);
      const pause = dauer > BUDGET_ANTEIL * intervall ? Math.min(PAUSE_MAX_MS, dauer * PAUSE_ANTEIL) : 0;
      if (pause >= 4) this.pauseTimer = setTimeout(plane, pause);
      else plane();
    };
    const plane = () => {
      this.pauseTimer = 0;
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
    if (this.pauseTimer) clearTimeout(this.pauseTimer);
    this.raf = 0;
    this.rvfc = null;
    this.pauseTimer = 0;
  }

  /** Foto-Modus: nach einer Aenderung wieder einige Zeit rendern (Einblenden, Pendel). */
  weckeFoto() {
    if (this.zustand !== 'foto' || !this.buehne) return;
    this.fotoRuheAb = performance.now() + FOTO_NACHLAUF_MS;
    if (this.fotoSchlaeft || (!this.raf && !this.rvfc && !this.pauseTimer)) this.starteSchleife();
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
        // Sparbetrieb bei knappem Zeitbudget: Nebenerkennungen seltener
        const intervall = 1000 / klemme(this.kameraFps || 30, 10, 60);
        const st = this.statistik;
        if (st.schrittMs > SPAREN_AB * intervall) this.sparen = true;
        else if (st.schrittMs < SPAREN_BIS * intervall) this.sparen = false;
        this.ergebnis = this.tracker.verarbeite(quelle, zeit, { W, H, spiegel, sparen: Boolean(this.sparen) });
      }
      const t1 = performance.now();
      this.buehne.aktualisiere(this.ergebnis, dt);
      this.buehne.rendere();
      const t2 = performance.now();
      this.fehlerFolge = 0;
      this.messe(jetzt, foto ? this.statistik.trackingMs : t1 - t0, t2 - t1);
      if (!foto) this.fenster.setzeHinweis(this.hinweisFuer(this.ergebnis));
      this.fingerKachelAusweichen(jetzt);
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
      d.sparen = Boolean(this.sparen);
    }
  }

  /**
   * Die Fingerwahl darf den Ring nicht verdecken: liegt der Anker (Bildschirm)
   * unter der Kachel, wechselt sie auf die andere Seite. Hoechstens alle 300 ms.
   */
  fingerKachelAusweichen(jetzt) {
    if (!this.finger || !this.buehne || !this.buehne.sicht) return;
    if (this.kachelPruefung && jetzt - this.kachelPruefung < 300) return;
    this.kachelPruefung = jetzt;
    const a = this.aktuellerAnker();
    const k = this.fenster.fingerRechteck();
    if (!a || !k || !(a.sichtbar > 0.05) || !this.fenster.canvas) return;
    const r = this.fenster.canvas.getBoundingClientRect();
    const s = this.buehne.sicht;
    const x = r.left + (a.position.x - s.links) * s.cssProPx;
    const y = r.top + (s.oben - a.position.y) * s.cssProPx;
    const rand = 28 + 12 * a.pxProMm * s.cssProPx;   // Ring plus etwa 12 mm
    const unter = x > k.left - rand && x < k.right + rand && y > k.top - rand && y < k.bottom + rand;
    if (unter) {
      this.fingerRechts = !this.fingerRechts;
      this.fenster.setzeFingerSeite(this.fingerRechts);
    }
  }

  /** Hat der aktuelle Ring ein Oberteil (Stein, Perle, Siegel), das auf dem Handruecken sitzt? */
  ringMitOberteil() {
    const v = this.produkt && this.produkt.varianten[this.variante];
    const typ = v && v.spec && v.spec.ring && v.spec.ring.typ;
    return Boolean(typ) && typ !== 'band' && typ !== 'kette';
  }

  /** Steht der Ring mit dem Oberteil von der Kamera weg (Handflaeche zur Kamera)? */
  ringOberteilAbgewandt(e) {
    if (!e || !e.gefunden || this.produkt.art !== 'ring' || !this.ringMitOberteil()) return false;
    const a = e.anker && e.anker.ring && e.anker.ring[this.finger];
    if (!a || !a.quaternion) return false;
    return _zAchse.set(0, 0, 1).applyQuaternion(a.quaternion).z < RUECKEN_WEG_Z;
  }

  /**
   * Hinweis des Trackers, beim Ring ergaenzt um 'handruecken': Zeigt die
   * Handflaeche laenger als 1 s zur Kamera, ist der Stein verdeckt und die
   * Kundin saehe nur die Schiene. Wichtigere Hinweise (Hand fehlt, Rand,
   * Abstand) gehen vor; nach einigen Sekunden blendet er sich aus.
   */
  hinweisFuer(e) {
    const h = e && e.hinweis;
    if (h && h.code !== 'finger-spreizen') { this.rueckenSeit = null; return h; }
    if (!this.ringOberteilAbgewandt(e)) { this.rueckenSeit = null; return h; }
    const jetzt = performance.now();
    if (this.rueckenSeit == null) this.rueckenSeit = jetzt;
    const dauer = jetzt - this.rueckenSeit;
    if (dauer > RUECKEN_HINWEIS_AB_MS && dauer < RUECKEN_HINWEIS_AB_MS + RUECKEN_HINWEIS_DAUER_MS) {
      return { code: 'handruecken', text: 'Dreh die Hand – Handrücken zur Kamera' };
    }
    return h;
  }

  neueStatistik() {
    return {
      fps: 0, renderMs: 0, trackingMs: 0, schrittMs: 0, fpsStart: 0, fpsFrames: 0,
      fensterStart: 0, frames: 0, schlecht: 0, gezeigt: 0, verpasst: 0
    };
  }

  messe(jetzt, trackingMs, renderMs) {
    const st = this.statistik;
    const a = 0.1;
    st.trackingMs = st.trackingMs ? st.trackingMs + a * (trackingMs - st.trackingMs) : trackingMs;
    st.renderMs = st.renderMs ? st.renderMs + a * (renderMs - st.renderMs) : renderMs;
    const schrittMs = trackingMs + renderMs;
    st.schrittMs = st.schrittMs ? st.schrittMs + 0.25 * (schrittMs - st.schrittMs) : schrittMs;
    // Bildrate ueber Zeitfenster (verarbeitete Bilder je Sekunde, auch bei sehr langsamen Schritten)
    if (!st.fpsStart) st.fpsStart = jetzt;
    else {
      st.fpsFrames++;
      const d = jetzt - st.fpsStart;
      if (d >= 1000) {
        const f = (st.fpsFrames * 1000) / d;
        st.fps = st.fps ? 0.5 * (st.fps + f) : f;
        st.fpsStart = jetzt;
        st.fpsFrames = 0;
      }
    }
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

  async baueModell(i, s = this.sitzung) {
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
    // Inzwischen geschlossen oder anderes Produkt: Modell nicht in den Zwischenspeicher
    if (s !== this.sitzung) {
      try { modell.dispose(); } catch { /* egal */ }
      return null;
    }
    if (this.modelle.has(i)) {
      // gleichzeitig zweimal gebaut (schneller Variantenwechsel): eines verwerfen
      try { modell.dispose(); } catch { /* egal */ }
      return this.modelle.get(i);
    }
    this.modelle.set(i, modell);
    return modell;
  }

  async zeigeVariante(i, s = this.sitzung) {
    const modell = await this.baueModell(i, s);
    if (!modell || s !== this.sitzung || !this.buehne) return;
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
      if (this.zustand === 'foto') { this.rendereEinmal(); this.weckeFoto(); }
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
    this.weckeFoto();
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
    if (this.zustand === 'foto') { this.rendereEinmal(); this.weckeFoto(); }
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
    this.kameraNr++;   // laufende Kamerastarts verwerfen
    this.stoppeKamera();
    this.fenster.setzeVideo(null);
    this.fenster.setzeMilchglas(false);
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
    this.fotoEinpassen();
    const e = this.ergebnis;
    let fotoHinweis = e && e.gefunden ? null : { code: (e && e.hinweis && e.hinweis.code) || 'kein-fund', text: KEIN_FUND[this.produkt.art] };
    if (!fotoHinweis && this.ringOberteilAbgewandt(e)) {
      fotoHinweis = { code: 'handruecken', text: 'Am schönsten mit einem Foto vom Handrücken' };
    }
    this.fenster.setzeHinweis(fotoHinweis);
    await warteMs(120);
    if (s !== this.sitzung || this.zustand !== 'laden') return;
    this.setzeZustand('foto');
    // rAF-Schleife: Physik und Einblenden laufen weiter, das Ergebnis bleibt fest
    this.starteSchleife();
  }

  /**
   * Foto: auf den Schmuckbereich vergroessern, wenn der Schmuck im ganzen Bild
   * zu klein waere (Ganz- oder Halbkoerperfoto). Bereich je Art in mm um den Anker.
   */
  fotoEinpassen() {
    const b = this.buehne;
    const e = this.ergebnis;
    if (!b || !e || !e.gefunden || !this.fotoQuelle) { if (b) b.setzeFokus(null); return; }
    const a = e.anker || {};
    let mitte = null;
    let ppm = 0;
    let halbMm = FOTO_BEREICH_MM[this.produkt.art] || 80;
    if (this.produkt.art === 'ohrringe') {
      const ohren = [a.ohrL, a.ohrR].filter((o) => o && o.position);
      if (ohren.length) {
        mitte = ohren.reduce((m, o) => m.add(o.position), new THREE.Vector3()).multiplyScalar(1 / ohren.length);
        ppm = ohren[0].pxProMm;
        if (ohren.length === 2) halbMm = Math.max(halbMm, ohren[0].position.distanceTo(ohren[1].position) / (2 * ppm) + 40);
      }
    } else {
      const anker = this.aktuellerAnker();
      if (anker && anker.position) { mitte = anker.position.clone(); ppm = anker.pxProMm; }
    }
    if (!mitte || !(ppm > 0)) { b.setzeFokus(null); return; }
    if (this.produkt.art === 'kette') mitte.y -= 60 * ppm;   // Anhaenger liegt unter der Drosselgrube
    const { breite, hoehe } = b.ansicht;
    const { W, H } = this.quelleInfo;
    const grund = Math.min(breite / W, hoehe / H);           // contain
    const bereichPx = 2 * halbMm * ppm * grund;               // Bereich in CSS-Pixeln ohne Zoom
    const zoom = Math.min(FOTO_ZOOM_MAX, Math.min(breite, hoehe) / Math.max(1, bereichPx));
    b.setzeFokus(zoom > 1.15 ? { x: mitte.x, y: mitte.y, zoom } : null);
  }

  // ---------------------------------------------------------------- Aufnahme und Teilen

  async ausloesen() {
    if ((this.zustand !== 'live' && this.zustand !== 'foto') || !this.buehne || this.nimmtAuf) return;
    const s = this.sitzung;
    this.nimmtAuf = true;
    this.fenster.setzeAusloeserAktiv(false);
    this.fenster.blitz();
    try {
      // nicht staerker als doppelt hochskalieren (sonst nur weicher, nicht schaerfer)
      const si = this.buehne.sicht;
      const W = this.quelleInfo ? this.quelleInfo.W : 0;
      const sichtbar = W ? Math.min(si.rechts, W) - Math.max(si.links, 0) : 0;
      const maxBreite = this.konfig.aufnahmeBreite || 1440;
      const breite = sichtbar > 0 ? Math.min(maxBreite, Math.max(720, Math.round(2 * sichtbar))) : maxBreite;
      const roh = await this.buehne.aufnahme({ breite });
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
      // Im Ergebnis braucht es kein Kamerabild: nach einer Weile ausschalten (Akku, Datenschutz)
      clearTimeout(this.ergebnisKameraUhr);
      this.ergebnisKameraUhr = setTimeout(() => {
        if (s === this.sitzung && this.zustand === 'ergebnis') this.stoppeKamera();
      }, ERGEBNIS_KAMERA_AUS_MS);
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
      // Schriftfarbe nach der Helligkeit des Grunds unter dem Schriftzug: auf hellem
      // Grund warmes Schwarz, auf dunklem Elfenbein; nur ein zarter Schleier
      const hell = helligkeitUnten(ctx, W, H) > 0.58;
      const ton = hell ? '251,248,243' : '30,27,24';
      const verlauf = ctx.createLinearGradient(0, H * 0.8, 0, H);
      verlauf.addColorStop(0, `rgba(${ton},0)`);
      verlauf.addColorStop(1, `rgba(${ton},${hell ? 0.32 : 0.26})`);
      ctx.fillStyle = verlauf;
      ctx.fillRect(0, H * 0.8, W, H * 0.2);
      const titelSchrift = getComputedStyle(this.fenster.$('.a-titel')).fontFamily || 'serif';
      const textSchrift = getComputedStyle(this.fenster.el).fontFamily || 'sans-serif';
      const schrift = hell ? '30,27,24' : '255,255,255';
      ctx.fillStyle = `rgba(${schrift},0.92)`;
      ctx.textBaseline = 'alphabetic';
      const gross = Math.round(masz * 0.034);
      const klein = Math.round(masz * 0.016);
      const unten = H - masz * 0.05;
      zeichneGesperrt(ctx, name.toUpperCase(), W / 2, unten - klein * 2.2, titelSchrift, '400', gross, 0.32, W * 0.88);
      ctx.fillStyle = `rgba(${schrift},0.76)`;
      zeichneGesperrt(ctx, `${this.produkt.titel}`.toUpperCase(), W / 2, unten, textSchrift, '500', klein, 0.22, W * 0.88);
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
    clearTimeout(this.ergebnisKameraUhr);
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

/** Mittlere Helligkeit (0..1) des unteren Bildstreifens, in dem der Schriftzug steht. */
function helligkeitUnten(ctx, W, H) {
  try {
    const b = Math.max(1, Math.round(W * 0.6));
    const h = Math.max(1, Math.round(H * 0.12));
    const d = ctx.getImageData(Math.round(W * 0.2), H - h, b, h).data;
    let summe = 0;
    let n = 0;
    for (let i = 0; i < d.length; i += 4 * 16) {
      summe += 0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2];
      n++;
    }
    return n ? summe / n / 255 : 0.5;
  } catch {
    return 0.5;
  }
}

/**
 * Text mit Laufweite mittig zeichnen (ctx.letterSpacing fehlt in aelteren
 * Browsern); zu lange Texte werden verkleinert, bis sie in maxBreite passen.
 */
function zeichneGesperrt(ctx, text, mitteX, y, familie, gewicht, groesse, laufweite, maxBreite = Infinity) {
  const zeichen = [...text];
  const messe = (g) => {
    ctx.font = `${gewicht} ${g}px ${familie}`;
    const b = zeichen.map((z) => ctx.measureText(z).width);
    return { b, gesamt: b.reduce((a, c) => a + c, 0) + g * laufweite * (zeichen.length - 1) };
  };
  let g = groesse;
  let m = messe(g);
  if (m.gesamt > maxBreite) {
    g = Math.max(8, Math.floor(g * maxBreite / m.gesamt));
    m = messe(g);
  }
  const breiten = m.b;
  const abstand = g * laufweite;
  const gesamt = m.gesamt;
  let x = mitteX - gesamt / 2;
  ctx.textAlign = 'left';
  zeichen.forEach((z, i) => {
    ctx.fillText(z, x, y);
    x += breiten[i] + abstand;
  });
}
