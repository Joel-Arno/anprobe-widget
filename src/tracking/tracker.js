// Tracker: MediaPipe-Ergebnisse -> stabile Anker, Masse und Verdecker im
// Buehnenraum (siehe docs/ARCHITEKTUR.md, "Schnittstelle tracking").
//
// Ablauf je Frame:
//   1. Erkennung (VIDEO mit Zeitstempel bzw. IMAGE bei zeitMs = null)
//   2. Rohpunkte in den Buehnenraum, Sprungpruefung (Ausreisser)
//   3. One-Euro-Filter auf die Rohpunkte (gemeinsame Grenzfrequenz)
//   4. Geometrie (hand.js / gesicht.js / koerper.js)
//   5. Zweite Glaettung der Anker: Position, Rotation (slerp), Massstab (log)
//   6. Halten bei kurzem Verlust, weiches Ein-/Ausblenden, Hinweise entprellen
// Im Einzelbildmodus entfallen alle zeitlichen Schritte.

import * as THREE from 'three';
import { ladeErkenner, entladeAlle } from './mediapipe.js';
import { EinEuroVektor, EinEuroFilter, EinEuroVector3, QuaternionFilter, Blende } from './filter.js';
import { zuBuehne, alsVektoren, quaternionAus } from './raum.js';
import {
  berechneHand, handHinweisCode, handHinweis, haendigkeitsStimme, handPxProMm, FINGER_NAMEN, HANDGELENK_MM
} from './hand.js';
import { UnterarmSchaetzer } from './unterarm.js';
import {
  berechneGesicht, gesichtsIndex, gesichtHinweisCode, gesichtHinweis, gesichtPxProMm, kopfRahmen, rahmenAusMatrix,
  kopfDrehpunkt
} from './gesicht.js';
import {
  berechneKoerper, koerperHinweisCode, koerperHinweis, schulternSichtbar, schulterPxProMm, schulterTiefeAusWelt
} from './koerper.js';

export const BENOETIGT = { ring: ['hand'], armband: ['hand'], ohrringe: ['gesicht'], kette: ['gesicht', 'koerper'] };

const HALTEN_S = 0.3;            // letzte Lage halten bei kurzem Verlust
const SPRUNG_ANTEIL = 0.25;      // Ausreisser: Sprung > 25 % der Bildbreite
const BESTAETIGUNG_ANTEIL = 0.1; // neuer Ort gilt, wenn der naechste Frame ihn bestaetigt
const HAENDIGKEIT_VERGESSEN_S = 1.0;
const SCHULTER_DREHUNG_ANTEIL = 0.6; // Anteil der gemessenen Oberkoerperdrehung fuer Kette und Hals

// Filterabstimmung (gemessen mit test/tracking/zittern.cjs).
// Geschwindigkeiten sind auf die Objektgroesse bezogen (Groessen pro Sekunde),
// Rotation in rad/s, Massstaebe logarithmisch (relative Aenderung pro Sekunde).
export const FILTER_PARAMETER = {
  punkte: { minCutoff: 1.6, beta: 3.0, dCutoff: 1.5 },
  // Pose-Punkte (Schultern) rauschen deutlich staerker und langsamer als
  // Hand- und Gesichtspunkte; der Oberkoerper bewegt sich ruhiger
  koerperPunkte: { minCutoff: 0.35, beta: 2.0, dCutoff: 1.0 },
  koerperRelativ: { minCutoff: 0.12, beta: 1.5, dCutoff: 1.0 },
  koerperDrehung: { minCutoff: 0.12, beta: 0.4, dCutoff: 1.0 },
  punkteDrehung: { minCutoff: 1.6, beta: 1.0, dCutoff: 1.5 },
  position: { minCutoff: 2.5, beta: 4.0, dCutoff: 1.5 },
  rotation: { minCutoff: 1.2, beta: 0.8, dCutoff: 1.5 },
  massstab: { minCutoff: 0.25, beta: 2.0, dCutoff: 1.0 },
  masse: { minCutoff: 0.2, beta: 1.0, dCutoff: 1.0 },
  sichtbar: { minCutoff: 2.0, beta: 0, dCutoff: 1.0 },
  // Unterarmwinkel (rad): ruhig, folgt Drehungen aber ohne grosse Verzoegerung
  unterarm: { minCutoff: 0.6, beta: 1.5, dCutoff: 1.0 }
};

const HINWEIS_VERZOEGERUNG_S = 0.5;   // ein neuer Hinweis muss so lange bestehen
const FRONTAL_GRAD = 10;              // fuer den Hinweis "kopf-drehen"
const FRONTAL_DAUER_S = 2.5;
const KOPF_DREHEN_MAX_S = 4;

/** Gesichtsnetz-Index in beiden Windungen (Vorderseite gegen den Uhrzeigersinn zur Kamera). */
function netzIndizes(index, P, spiegel) {
  // Windung an einem Frame bestimmen: Summe der Flaechen in der Bildebene
  // (bezogen auf die ungespiegelte Buehne)
  let summe = 0;
  for (let i = 0; i < index.length; i += 3) {
    const a = P[index[i]], b = P[index[i + 1]], c = P[index[i + 2]];
    summe += (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
  }
  const gedreht = new Uint16Array(index.length);
  for (let i = 0; i < index.length; i += 3) {
    gedreht[i] = index[i]; gedreht[i + 1] = index[i + 2]; gedreht[i + 2] = index[i + 1];
  }
  if (spiegel) summe = -summe;
  return summe >= 0 ? { ccw: index, cw: gedreht } : { ccw: gedreht, cw: index };
}

class AnkerFilter {
  constructor() {
    this.pos = new EinEuroVector3(FILTER_PARAMETER.position);
    this.rot = new QuaternionFilter(FILTER_PARAMETER.rotation);
    this.ppm = new EinEuroFilter(FILTER_PARAMETER.massstab);
    this.sicht = new EinEuroFilter(FILTER_PARAMETER.sichtbar);
    this.blende = new Blende(0.25, 0.3);
    this.letzter = null;
  }

  zuruecksetzen() {
    this.pos.zuruecksetzen();
    this.rot.zuruecksetzen();
    this.ppm.zuruecksetzen();
    this.sicht.zuruecksetzen();
  }

  /** Filtert einen gemessenen Anker; skala = Objektgroesse in px. */
  filtere(roh, t, skala) {
    const position = this.pos.filtere(roh.position, t, skala).clone();
    const quaternion = this.rot.filtere(roh.quaternion, t).clone();
    // entarteter Massstab (z. B. alle Punkte aufeinander): letzten Wert behalten
    const pxProMm = roh.pxProMm > 0 || !this.letzter
      ? Math.exp(this.ppm.filtere(Math.log(Math.max(roh.pxProMm, 1e-6)), t))
      : this.letzter.pxProMm;
    const sichtRoh = roh.sichtbar == null ? 1 : roh.sichtbar;
    const sichtbar = Math.min(1, Math.max(0, this.sicht.filtere(sichtRoh, t)));
    this.letzter = { position, quaternion, pxProMm, sichtbarRoh: sichtbar };
    return this.letzter;
  }
}

function neuerZustand() {
  return {
    format: null,
    punkte: {},            // Quelle -> EinEuroVektor
    puffer: {},            // Quelle -> Float64Array
    vektoren: {},          // Quelle -> Vector3[]
    anker: {},             // Schluessel -> AnkerFilter
    masse: {},             // Schluessel -> EinEuroFilter (log)
    zuletztGefunden: -Infinity,
    zuletztT: null,
    leitpunkt: null,
    sprungKandidat: null,
    haendigkeit: 0,
    letztes: null,         // letztes vollstaendiges Ergebnis (zum Halten)
    hinweisAktiv: null,
    hinweisKandidat: null,
    hinweisSeit: 0,
    frontalSeit: null,
    kopfDrehenGezeigt: 0,
    kopfDrehung: null      // QuaternionFilter fuer die Matrix-Kopfachsen
  };
}

export class Tracker {
  constructor(art, { konfig, onFortschritt } = {}) {
    if (!BENOETIGT[art]) throw new Error(`Unbekannte Schmuckart: ${art}`);
    this.art = art;
    this.konfig = konfig || (typeof window !== 'undefined' && window.AnprobeKonfig) || {};
    this.onFortschritt = onFortschritt;
    this.erkenner = null;
    this.index = null;
    this.netz = null;
    this.schwerkraft = new THREE.Vector3(0, -1, 0);
    this.z = neuerZustand();
  }

  /** Laedt nur die noetigen Tasks (Modelle per fetch mit Fortschritt). */
  async laden() {
    const e = await ladeErkenner(BENOETIGT[this.art], this.konfig, this.onFortschritt);
    this.erkenner = e;
    if (BENOETIGT[this.art].includes('gesicht')) {
      this.index = gesichtsIndex(e.mp.FaceLandmarker.FACE_LANDMARKS_TESSELATION);
    }
    return this;
  }

  /** Filter leeren (z. B. nach Kamerawechsel). */
  zuruecksetzen() {
    this.z = neuerZustand();
  }

  dispose() {
    // Die Tasks bleiben fuer das naechste Oeffnen im Speicher (mediapipe.js).
    this.erkenner = null;
    this.z = neuerZustand();
  }

  /** Gibt alle zwischengespeicherten MediaPipe-Tasks frei. */
  static entladeAlles() {
    return entladeAlle();
  }

  /**
   * quelle: Video, Bild oder Canvas. zeitMs: Zeitstempel (ms) oder null fuer
   * ein Einzelbild. Liefert ein TrackingErgebnis.
   */
  verarbeite(quelle, zeitMs, { W, H, spiegel = false }) {
    if (!this.erkenner) throw new Error('Tracker: zuerst laden()');
    const einzel = zeitMs == null;
    const format = `${W}x${H}${spiegel ? 's' : ''}`;
    if (einzel || this.z.format !== format) this.zuruecksetzen();
    this.z.format = format;
    const t = einzel ? 0 : zeitMs / 1000;
    // erster Videoframe: typischer Abstand, damit das Einblenden weich beginnt
    const dt = einzel ? 0 : this.z.zuletztT == null ? 1 / 30 : Math.max(0, t - this.z.zuletztT);
    this.z.zuletztT = t;

    // 1. Erkennung
    const roh = {};
    for (const q of BENOETIGT[this.art]) roh[q] = this.erkenner[q].erkenne(quelle, zeitMs);

    // 2.-4. Messung
    const opt = { W, H, spiegel, einzel, t, quelle };
    let messung = null;
    if (this.art === 'ring' || this.art === 'armband') messung = this.misseHand(roh.hand, opt);
    else if (this.art === 'ohrringe') messung = this.misseGesicht(roh.gesicht, opt);
    else messung = this.misseKette(roh.gesicht, roh.koerper, opt);

    // 5.-6. Glaettung, Halten, Blenden
    return this.ergebnisBauen(messung, opt, dt);
  }

  // ---------------------------------------------------------------- Rohpunkte

  /** Rohpunkte einer Quelle in den Buehnenraum (ungefiltert). */
  rohpunkte(quelle, landmarks, opt) {
    const puffer = zuBuehne(landmarks, opt.W, opt.H, opt.spiegel, this.z.puffer[quelle]);
    this.z.puffer[quelle] = puffer;
    return puffer;
  }

  /** One-Euro-Filter auf die Rohpunkte; liefert Vector3-Liste. */
  filterePunkte(quelle, puffer, opt, skala, parameter = FILTER_PARAMETER.punkte) {
    let werte = puffer;
    if (!opt.einzel) {
      let f = this.z.punkte[quelle];
      if (!f || f.dim !== puffer.length) f = this.z.punkte[quelle] = new EinEuroVektor(puffer.length, parameter);
      werte = f.filtere(puffer, opt.t, skala);
    }
    const v = alsVektoren(werte, this.z.vektoren[quelle]);
    this.z.vektoren[quelle] = v;
    return v;
  }

  /**
   * Sprungpruefung am Leitpunkt (Bildpunkt). Liefert 'ok', 'neu' (Filter
   * neu ansetzen) oder 'verwerfen' (Frame nicht uebernehmen).
   */
  pruefeSprung(punkt, opt) {
    if (opt.einzel) return 'ok';
    const z = this.z;
    const verloren = opt.t - z.zuletztGefunden > HALTEN_S;
    if (!z.leitpunkt || verloren) {
      z.sprungKandidat = null;
      return 'neu';
    }
    const sprung = Math.hypot(punkt.x - z.leitpunkt.x, punkt.y - z.leitpunkt.y);
    if (sprung <= SPRUNG_ANTEIL * opt.W) {
      z.sprungKandidat = null;
      return 'ok';
    }
    const k = z.sprungKandidat;
    if (k && Math.hypot(punkt.x - k.x, punkt.y - k.y) < BESTAETIGUNG_ANTEIL * opt.W) {
      z.sprungKandidat = null;
      return 'neu';
    }
    z.sprungKandidat = { x: punkt.x, y: punkt.y };
    return 'verwerfen';
  }

  /** Alle Filter leeren, Haendigkeit und Hinweise bleiben. */
  filterNeu() {
    for (const f of Object.values(this.z.punkte)) f.zuruecksetzen();
    for (const f of Object.values(this.z.anker)) f.zuruecksetzen();
    for (const f of Object.values(this.z.masse)) f.zuruecksetzen();
    if (this.z.kopfDrehung) this.z.kopfDrehung.zuruecksetzen();
  }

  // ---------------------------------------------------------------- Hand

  /**
   * Abweichung des Unterarms von der Handachse (rad, Bildebene), aus dem
   * Kamerabild geschaetzt und geglaettet; nach der Guete gewichtet, sonst 0.
   */
  unterarmWinkel(P, opt) {
    if (!this.unterarm) this.unterarm = new UnterarmSchaetzer();
    let roh = null;
    try {
      roh = this.unterarm.schaetze(opt.quelle, P, handPxProMm(P), HANDGELENK_MM.quer, opt);
    } catch (e) {
      roh = null;
    }
    const ziel = roh ? roh.winkel * roh.guete : 0;
    if (opt.einzel) return ziel;
    if (!this.z.masse['arm.winkel']) this.z.masse['arm.winkel'] = new EinEuroFilter(FILTER_PARAMETER.unterarm);
    return this.z.masse['arm.winkel'].filtere(ziel, opt.t);
  }

  misseHand(ergebnis, opt) {
    if (!ergebnis || !ergebnis.landmarks || !ergebnis.landmarks.length) return null;
    const puffer = this.rohpunkte('hand', ergebnis.landmarks[0], opt);
    const leit = { x: puffer[0], y: puffer[1] };
    const sprung = this.pruefeSprung(leit, opt);
    if (sprung === 'verwerfen') return null;
    if (sprung === 'neu') this.filterNeu();

    const groesse = Math.max(1, Math.hypot(puffer[27] - puffer[0], puffer[28] - puffer[1]));
    const P = this.filterePunkte('hand', puffer, opt, groesse);

    // Haendigkeit ueber die Zeit sammeln: MediaPipe-Etikett (fuer das
    // ungespiegelte Kamerabild richtig, siehe test/tracking/) plus Geometrie
    const kat = ergebnis.handedness && ergebnis.handedness[0] && ergebnis.handedness[0][0];
    const wl = ergebnis.worldLandmarks && ergebnis.worldLandmarks[0];
    const welt = wl && wl.length === 21 ? wl.map((p) => new THREE.Vector3(opt.spiegel ? -p.x : p.x, -p.y, -p.z).multiplyScalar(1000)) : null;
    const stimme = haendigkeitsStimme(kat, P, welt, opt.spiegel);
    if (opt.einzel || opt.t - this.z.zuletztGefunden > HAENDIGKEIT_VERGESSEN_S) this.z.haendigkeit = 0;
    this.z.haendigkeit = klemmeBetrag(this.z.haendigkeit * 0.95 + stimme, 8);
    const rechts = this.z.haendigkeit >= 0;

    const armWinkel = this.art === 'armband' ? this.unterarmWinkel(P, opt) : 0;
    const e = berechneHand(P, { W: opt.W, H: opt.H, spiegel: opt.spiegel, rechts, armWinkel });
    const anker = this.art === 'ring'
      ? Object.fromEntries(FINGER_NAMEN.map((f) => [`ring.${f}`, e.anker.ring[f]]))
      : { armband: e.anker.armband };
    const masse = this.art === 'ring'
      ? Object.fromEntries(FINGER_NAMEN.map((f) => [`fingerRadiusPx.${f}`, e.masse.fingerRadiusPx[f]]))
      : { 'handgelenkRadienPx.quer': e.masse.handgelenkRadienPx.quer, 'handgelenkRadienPx.tiefe': e.masse.handgelenkRadienPx.tiefe };
    return {
      leit: P[0],
      groesse,
      anker,
      masse,
      verdecker: e.verdecker,
      schatten: this.art === 'ring' ? e.schatten.ring : e.schatten.armband,
      hinweisCode: handHinweisCode(P, e, { W: opt.W, H: opt.H, art: this.art }),
      debug: {
        punkte2d: P.map((p) => ({ x: p.x, y: p.y })),
        rechts,
        haendigkeitRoh: kat ? `${kat.categoryName} ${(kat.score || 0).toFixed(2)}` : null,
        haendigkeit: +stimme.toFixed(2),
        rueckenZurKamera: e.info.rueckenZurKamera,
        kBreite: e.info.kBreite,
        armWinkelGrad: Math.round(armWinkel * 1800 / Math.PI) / 10
      }
    };
  }

  // ---------------------------------------------------------------- Gesicht

  /** Gefilterte Gesichtspunkte und geglaetteter Massstab (gemeinsam fuer Ohrringe und Kette). */
  gesichtsPunkte(ergebnis, opt, { pruefen = true } = {}) {
    if (!ergebnis || !ergebnis.faceLandmarks || !ergebnis.faceLandmarks.length) return null;
    const lm = ergebnis.faceLandmarks[0];
    if (lm.length < 468) return null;
    const puffer = this.rohpunkte('gesicht', lm, opt);
    if (pruefen) {
      const sprung = this.pruefeSprung({ x: puffer[3], y: puffer[4] }, opt); // Nasenspitze (1)
      if (sprung === 'verwerfen') return null;
      if (sprung === 'neu') this.filterNeu();
    }
    const groesse = Math.max(1, Math.hypot(puffer[234 * 3] - puffer[454 * 3], puffer[234 * 3 + 1] - puffer[454 * 3 + 1]));
    const P = this.filterePunkte('gesicht', puffer, opt, groesse);
    const ppmRoh = gesichtPxProMm(P);
    const ppm = this.filtereMass('gesicht.ppm', ppmRoh, opt, FILTER_PARAMETER.massstab);
    if (this.index && !this.netz) this.netz = netzIndizes(this.index, P, opt.spiegel);
    const achsen = this.kopfAchsen(ergebnis, opt);
    return { P, ppm, ppmRoh, groesse, achsen };
  }

  /** Kopfachsen aus der Transformationsmatrix, wie die Rohpunkte geglaettet. */
  kopfAchsen(ergebnis, opt) {
    const m = ergebnis.facialTransformationMatrixes && ergebnis.facialTransformationMatrixes[0];
    const achsen = rahmenAusMatrix(m && m.data, opt.spiegel);
    if (!achsen || opt.einzel) return achsen;
    if (!this.z.kopfDrehung) this.z.kopfDrehung = new QuaternionFilter(FILTER_PARAMETER.punkteDrehung);
    const q = this.z.kopfDrehung.filtere(quaternionAus(achsen), opt.t);
    return {
      x: new THREE.Vector3(1, 0, 0).applyQuaternion(q),
      y: new THREE.Vector3(0, 1, 0).applyQuaternion(q),
      z: new THREE.Vector3(0, 0, 1).applyQuaternion(q)
    };
  }

  misseGesicht(ergebnis, opt) {
    const g = this.gesichtsPunkte(ergebnis, opt);
    if (!g) return null;
    const index = this.netz ? (opt.spiegel ? this.netz.cw : this.netz.ccw) : null;
    const e = berechneGesicht(g.P, { W: opt.W, H: opt.H, spiegel: opt.spiegel, index, ppm: g.ppm, achsen: g.achsen, einzel: opt.einzel });
    let code = gesichtHinweisCode(g.P, e.rahmen, opt);
    // Sanfter Anstoss, wenn das Gesicht lange ganz frontal bleibt
    if (!code && !opt.einzel) {
      const frontal = Math.abs(e.info.gierGrad) < FRONTAL_GRAD;
      if (!frontal) this.z.frontalSeit = null;
      else if (this.z.frontalSeit == null) this.z.frontalSeit = opt.t;
      if (frontal && opt.t - this.z.frontalSeit > FRONTAL_DAUER_S && this.z.kopfDrehenGezeigt < KOPF_DREHEN_MAX_S) code = 'kopf-drehen';
    }
    // Sichtbarkeit des abgewandten Ohrs geht als Anker-Sichtbarkeit weiter
    return {
      leit: g.P[1],
      groesse: g.groesse,
      anker: { ohrL: e.anker.ohrL, ohrR: e.anker.ohrR },
      masse: {},
      verdecker: e.verdecker,
      schatten: e.schatten,
      hinweisCode: code,
      debug: {
        punkte2d: g.P.map((p) => ({ x: p.x, y: p.y })),
        gierGrad: e.info.gierGrad,
        nickGrad: e.info.nickGrad,
        ppmRoh: g.ppmRoh,
        ohrBezug: { L: e.anker.ohrL.bezug, R: e.anker.ohrR.bezug }
      }
    };
  }

  // ---------------------------------------------------------------- Kette

  misseKette(gesichtErgebnis, poseErgebnis, opt) {
    const hatPose = poseErgebnis && poseErgebnis.landmarks && poseErgebnis.landmarks.length;
    const hatGesicht = gesichtErgebnis && gesichtErgebnis.faceLandmarks && gesichtErgebnis.faceLandmarks.length;
    if (!hatPose && !hatGesicht) return null;
    if (!hatPose) return { nurHinweis: true, hinweisCode: 'schultern' };

    const lm = poseErgebnis.landmarks[0];
    const puffer = this.rohpunkte('koerper', lm, opt);
    const leit = { x: (puffer[33] + puffer[36]) / 2, y: (puffer[34] + puffer[37]) / 2 }; // Schultern 11/12
    const sprung = this.pruefeSprung(leit, opt);
    if (sprung === 'verwerfen') return null;
    if (sprung === 'neu') this.filterNeu();
    const groesse = Math.max(1, Math.hypot(puffer[33] - puffer[36], puffer[34] - puffer[37]));

    // Gesicht zuerst: sein Drehpunkt ist der Bezug fuer die Glaettung der Pose
    let gesicht = null;
    const g = hatGesicht ? this.gesichtsPunkte(gesichtErgebnis, opt, { pruefen: false }) : null;
    // nur, wenn es zur selben Person gehoert (Nase Pose 0 ~ Gesicht 1), in der
    // Bildebene (Pose-z und Gesichts-z haben verschiedene Nullpunkte)
    if (g && Math.hypot(puffer[0] - g.P[1].x, puffer[1] - g.P[1].y) < 0.6 * g.groesse + 0.1 * groesse) {
      gesicht = { P: g.P, rahmen: kopfRahmen(g.P, opt.spiegel, g.achsen), ppm: g.ppm };
    }
    const drehpunkt = gesicht ? kopfDrehpunkt(gesicht.rahmen, gesicht.ppm) : null;
    const P = this.filtereKoerper(puffer, opt, groesse, drehpunkt);
    const wl = poseErgebnis.worldLandmarks && poseErgebnis.worldLandmarks[0];
    const welt = wl ? wl.map((p) => new THREE.Vector3(opt.spiegel ? -p.x : p.x, -p.y, -p.z).multiplyScalar(1000)) : null;
    const pose = { P, welt, sichtbarkeit: lm.map((p) => (p.visibility == null ? 1 : p.visibility)) };

    if (!schulternSichtbar(pose, opt.W, opt.H)) return { nurHinweis: true, hinweisCode: 'schultern' };
    // Drehung des Oberkoerpers (Tiefe der Schulterlinie) stark glaetten
    let schulterTiefe = schulterTiefeAusWelt(pose, opt.spiegel);
    if (!opt.einzel) {
      if (!this.z.masse['koerper.tiefe']) this.z.masse['koerper.tiefe'] = new EinEuroFilter(FILTER_PARAMETER.koerperDrehung);
      schulterTiefe = this.z.masse['koerper.tiefe'].filtere(schulterTiefe, opt.t);
    }
    // Die Pose-Tiefe ueberzeichnet die Drehung (abgeschnittene Schultern, Arme vor
    // dem Koerper): nur gedaempft und begrenzt uebernehmen (ca. +-22 Grad)
    schulterTiefe = klemmeBetrag(SCHULTER_DREHUNG_ANTEIL * schulterTiefe, 0.4);

    const index = this.netz ? (opt.spiegel ? this.netz.cw : this.netz.ccw) : null;
    // ohne Gesicht: Massstab aus der Schulterbreite
    const ppmFrei = gesicht ? null : this.filtereMass('koerper.ppm', schulterPxProMm(pose, opt.spiegel), opt, FILTER_PARAMETER.massstab);
    const e = berechneKoerper(pose, gesicht, { W: opt.W, H: opt.H, spiegel: opt.spiegel, ppm: ppmFrei, index, einzel: opt.einzel, schulterTiefe });
    // Unplausible Schulterbreite (z. B. Arme vor dem Koerper): keine Kette
    if (gesicht && (e.info.schulterMm < 170 || e.info.schulterMm > 450)) return { nurHinweis: true, hinweisCode: 'schultern' };
    return {
      leit: { x: (P[11].x + P[12].x) / 2, y: (P[11].y + P[12].y) / 2 },
      groesse,
      anker: { kette: e.anker },
      masse: { halsRadiusMm: e.halsRadiusMm },
      verdecker: e.verdecker,
      schatten: e.schatten,
      hinweisCode: koerperHinweisCode(pose, e, opt),
      debug: {
        punkte2d: P.map((p) => ({ x: p.x, y: p.y })),
        gesicht2d: gesicht ? gesicht.P.map((p) => ({ x: p.x, y: p.y })) : null,
        drosselgrube: e.anker.position.clone(),
        drehpunkt,
        schulterMitte: { x: (P[11].x + P[12].x) / 2, y: (P[11].y + P[12].y) / 2 },
        kinn: gesicht ? { x: gesicht.P[152].x, y: gesicht.P[152].y } : null,
        schulterMm: e.info.schulterMm,
        schulterTiefe: e.info.schulterTiefe
      }
    };
  }

  /**
   * Glaettung der Pose-Punkte. Mit Gesicht relativ zum Drehpunkt des Kopfes:
   * Bewegungen von Kamera und Person laufen ohne Verzoegerung mit (der
   * Drehpunkt folgt schnell), nur die Haltung Schultern gegen Kopf wird stark
   * geglaettet (die Pose-Punkte wandern auch in Ruhe um einige Pixel).
   */
  filtereKoerper(puffer, opt, skala, bezug) {
    if (opt.einzel) return this.filterePunkte('koerper', puffer, opt, skala);
    if (!bezug) return this.filterePunkte('koerper', puffer, opt, skala, FILTER_PARAMETER.koerperPunkte);
    let rel = this.z.puffer.koerperRel;
    if (!rel || rel.length !== puffer.length) rel = this.z.puffer.koerperRel = new Float64Array(puffer.length);
    for (let i = 0; i < puffer.length; i += 3) {
      rel[i] = puffer[i] - bezug.x;
      rel[i + 1] = puffer[i + 1] - bezug.y;
      rel[i + 2] = puffer[i + 2];
    }
    const P = this.filterePunkte('koerperRel', rel, opt, skala, FILTER_PARAMETER.koerperRelativ);
    for (const p of P) { p.x += bezug.x; p.y += bezug.y; }
    return P;
  }

  /** Skalarer Massfilter auf log-Skala; wert oder rechne() liefert den Rohwert. */
  filtereMass(schluessel, wert, opt, parameter, rechne) {
    const roh = wert != null ? wert : rechne ? rechne() : null;
    if (!(roh > 0)) return roh;
    if (opt.einzel) return roh;
    let f = this.z.masse[schluessel];
    if (!f) f = this.z.masse[schluessel] = new EinEuroFilter(parameter);
    return Math.exp(f.filtere(Math.log(roh), opt.t));
  }

  // ---------------------------------------------------------------- Ergebnis

  ergebnisBauen(messung, opt, dt) {
    const z = this.z;
    const gemessen = messung && !messung.nurHinweis;
    let hinweisCode = null;

    if (gemessen) {
      z.zuletztGefunden = opt.t;
      z.leitpunkt = { x: messung.leit.x, y: messung.leit.y };
      const anker = {};
      for (const [k, roh] of Object.entries(messung.anker)) {
        if (opt.einzel) {
          anker[k] = {
            position: roh.position.clone(), quaternion: roh.quaternion.clone(),
            pxProMm: roh.pxProMm, sichtbarRoh: roh.sichtbar == null ? 1 : roh.sichtbar
          };
        } else {
          if (!z.anker[k]) z.anker[k] = new AnkerFilter();
          anker[k] = z.anker[k].filtere(roh, opt.t, messung.groesse);
        }
      }
      const masse = {};
      for (const [k, w] of Object.entries(messung.masse)) {
        masse[k] = this.filtereMass(`m.${k}`, w, opt, FILTER_PARAMETER.masse);
      }
      z.letztes = {
        anker, masse, verdecker: messung.verdecker, schatten: messung.schatten, debug: messung.debug
      };
      hinweisCode = messung.hinweisCode;
    } else if (messung && messung.nurHinweis) {
      hinweisCode = messung.hinweisCode;
    }

    const halten = !gemessen && !opt.einzel && opt.t - z.zuletztGefunden <= HALTEN_S;
    const gefunden = gemessen || halten;
    if (!gefunden && !hinweisCode) hinweisCode = this.art === 'ohrringe' || this.art === 'kette' ? 'gesicht-zeigen' : 'hand-zeigen';
    if (halten) hinweisCode = z.hinweisAktiv;

    // Sichtbarkeit: weich ein (gefunden) bzw. aus (verloren)
    const ergebnis = {
      gefunden,
      hinweis: null,
      anker: {},
      masse: {},
      verdecker: [],
      schattenflaechen: [],
      schwerkraft: this.schwerkraft.clone(),
      debug: { punkte2d: [] }
    };
    const l = z.letztes;
    if (l) {
      let irgendSichtbar = false;
      for (const [k, a] of Object.entries(l.anker)) {
        let blende = 1;
        if (!opt.einzel) {
          const f = z.anker[k];
          blende = f ? f.blende.schritt(gefunden ? 1 : 0, dt) : 0;
        } else if (!gefunden) {
          blende = 0;
        }
        const sichtbar = blende * (a.sichtbarRoh == null ? 1 : a.sichtbarRoh);
        if (blende <= 0) continue;
        irgendSichtbar = true;
        const anker = { position: a.position.clone(), quaternion: a.quaternion.clone(), pxProMm: a.pxProMm, sichtbar };
        if (k.startsWith('ring.')) {
          ergebnis.anker.ring = ergebnis.anker.ring || {};
          ergebnis.anker.ring[k.slice(5)] = anker;
        } else {
          ergebnis.anker[k] = anker;
        }
      }
      if (irgendSichtbar) {
        for (const [k, w] of Object.entries(l.masse)) {
          const [haupt, unter] = k.split('.');
          if (unter) {
            ergebnis.masse[haupt] = ergebnis.masse[haupt] || {};
            ergebnis.masse[haupt][unter] = w;
          } else {
            ergebnis.masse[haupt] = w;
          }
        }
        ergebnis.verdecker = l.verdecker;
        ergebnis.schattenflaechen = l.schatten || [];
        ergebnis.debug = { ...l.debug };
      }
    }
    if (!gemessen && ergebnis.debug) ergebnis.debug.gehalten = halten;

    ergebnis.hinweis = this.hinweisEntprellen(hinweisCode, opt, dt);
    return ergebnis;
  }

  hinweisEntprellen(code, opt, dt) {
    const z = this.z;
    if (opt.einzel) {
      z.hinweisAktiv = code;
    } else {
      if (code !== z.hinweisKandidat) {
        z.hinweisKandidat = code;
        z.hinweisSeit = opt.t;
      }
      const warten = code ? HINWEIS_VERZOEGERUNG_S : HINWEIS_VERZOEGERUNG_S * 0.6;
      if (z.hinweisAktiv !== code && opt.t - z.hinweisSeit >= warten) z.hinweisAktiv = code;
      if (z.hinweisAktiv === 'kopf-drehen') z.kopfDrehenGezeigt += dt;
    }
    const c = z.hinweisAktiv;
    if (!c) return null;
    if (this.art === 'ring' || this.art === 'armband') return handHinweis(c);
    if (this.art === 'ohrringe') return gesichtHinweis(c);
    return koerperHinweis(c) || gesichtHinweis(c);
  }
}

function klemmeBetrag(x, m) {
  return x > m ? m : x < -m ? -m : x;
}
