// Gesicht: MediaPipe-Gesichtsnetz (478 Punkte im Buehnenraum) ->
// Kopf-Rahmen, Massstab, Ohrlaeppchen-Anker (Bildseite L/R), Verdecker.
//
// Kopf-Rahmen: X von 234 nach 454 (bzw. gespiegelt), so dass X bei frontalem
// Gesicht nach Betrachter-rechts zeigt; Y Kinn -> Stirn, orthogonalisiert;
// Z = X × Y zeigt in Blickrichtung des Gesichts (zur Kamera bei frontalem
// Gesicht). Zur Rauschminderung wird jede Achse aus mehreren
// Landmarkenpaaren gemittelt.
//
// MediaPipe hat keine Ohrpunkte. Das Ohrlaeppchen wird im Kopf-Rahmen relativ
// zur Gesichtskontur (234/93 bzw. 454/323) geschaetzt; die Versaetze sind an
// Testbildern mit sichtbaren Ohren kalibriert (test/tracking/).

import * as THREE from 'three';
import {
  mittel, klemme, glattStufe, rahmenAusXY, quaternionAus, imRahmen, kapsel, ellipsoid
} from './raum.js';

const IRIS_MM = 11.7;
const IRIS_HV = 0.89;              // senkrechter / waagrechter Irisdurchmesser (Lider)
const GESICHTSBREITE_MM = 126;     // 3D-Abstand 234-454 (Mittel der Testbilder, Iris-Massstab)

// Paare (rechte Gesichtshaelfte der Person, linke Gesichtshaelfte)
const PAARE_X = [
  [234, 454], [93, 323], [132, 361], [127, 356], [33, 263], [133, 362],
  [61, 291], [58, 288], [172, 397], [162, 389], [21, 251]
];
// Paare (unten, oben) entlang der Mittellinie
const PAARE_Y = [[152, 10], [175, 151], [199, 9], [200, 8]];

// Ohrlaeppchen (Stichpunkt) relativ zur Konturmitte von 234/93 (bzw. 454/323)
// im Kopf-Rahmen, mm: seitlich nach aussen, nach oben, nach vorn.
// Kalibriert an 9 Ohrlaeppchen von 5 Personen (test/tracking/kalib_ohr.mjs):
// mittlerer Fehler 4,7 mm, groesster 6,2 mm; der Rest ist ueberwiegend die
// individuelle Lage des Ohrs (ohne Ohrpunkte nicht zu erfassen).
// bezug.L/R = rechte/linke Gesichtshaelfte der Person.
export const OHR_KALIBRIERUNG = {
  bezug: { L: [234, 93], R: [454, 323] },
  aussenMm: 4.1,
  obenMm: -16.6,
  vornMm: -34
};

// Abgewandtes Ohr: ab dieser Kopfdrehung weich ausblenden (Grad)
const OHR_AUSBLENDEN = [25, 45];

export const GESICHT_HINWEISE = {
  'gesicht-zeigen': 'Schau direkt in die Kamera',
  'kopf-drehen': 'Dreh den Kopf leicht zur Seite',
  naeher: 'Etwas näher heran'
};

export function gesichtHinweis(code) {
  return code ? { code, text: GESICHT_HINWEISE[code] } : null;
}

/** Dreiecksindex aus FACE_LANDMARKS_TESSELATION (Kanten als Dreiecks-Tripel). */
let indexVorrat = null;
export function gesichtsIndex(kanten) {
  if (indexVorrat) return indexVorrat;
  if (!kanten || !kanten.length) return null;
  const dreiecke = [];
  let tripel = kanten.length % 3 === 0;
  for (let i = 0; tripel && i < kanten.length; i += 3) {
    const a = kanten[i], b = kanten[i + 1], c = kanten[i + 2];
    if (a.end !== b.start || b.end !== c.start || c.end !== a.start) tripel = false;
    else dreiecke.push(a.start, b.start, c.start);
  }
  if (!tripel) {
    // Ersatz: Dreiecke aus gemeinsamen Nachbarn bilden
    dreiecke.length = 0;
    const nachbarn = new Map();
    const add = (u, v) => { if (!nachbarn.has(u)) nachbarn.set(u, new Set()); nachbarn.get(u).add(v); };
    for (const k of kanten) { add(k.start, k.end); add(k.end, k.start); }
    const gesehen = new Set();
    for (const [u, nu] of nachbarn) {
      for (const v of nu) {
        if (v <= u) continue;
        for (const w of nachbarn.get(v)) {
          if (w <= v || !nu.has(w)) continue;
          const s = `${u},${v},${w}`;
          if (!gesehen.has(s)) { gesehen.add(s); dreiecke.push(u, v, w); }
        }
      }
    }
  }
  indexVorrat = new Uint16Array(dreiecke);
  return indexVorrat;
}

/**
 * Kopf-Rahmen im Buehnenraum.
 * Liefert { x, y, z, ursprung (Mitte 234/454), quaternion, gier, nick }.
 * gier > 0: Gesicht zeigt nach Betrachter-rechts.
 */
export function kopfRahmen(P, spiegel) {
  const xRoh = new THREE.Vector3();
  for (const [a, b] of PAARE_X) xRoh.add(P[b]).sub(P[a]);
  if (spiegel) xRoh.negate();
  const yRoh = new THREE.Vector3();
  for (const [a, b] of PAARE_Y) yRoh.add(P[b]).sub(P[a]);
  const rahmen = rahmenAusXY(xRoh, yRoh);
  rahmen.ursprung = P[234].clone().add(P[454]).multiplyScalar(0.5);
  rahmen.quaternion = quaternionAus(rahmen);
  rahmen.gier = Math.atan2(rahmen.z.x, rahmen.z.z);
  rahmen.nick = Math.asin(klemme(rahmen.z.y, -1, 1));
  return rahmen;
}

/** Irisdurchmesser in px (gewichtet nach Groesse beider Augen). */
export function irisPx(P) {
  let summe = 0, gewicht = 0;
  for (const [h1, h2, v1, v2] of [[469, 471, 470, 472], [474, 476, 475, 477]]) {
    if (!P[h2]) continue;
    const h = Math.hypot(P[h1].x - P[h2].x, P[h1].y - P[h2].y);
    const v = Math.hypot(P[v1].x - P[v2].x, P[v1].y - P[v2].y);
    const d = Math.max(h, v / IRIS_HV);
    summe += d * d * d;
    gewicht += d * d;
  }
  return gewicht > 0 ? summe / gewicht : 0;
}

/**
 * Massstab px/mm aus der Iris, plausibilisiert mit der Gesichtsbreite:
 * hoechstens ±15 % Abweichung, und geometrisch mit ihr gemischt (Iris 60 %,
 * bei sehr kleiner Iris weniger), da beide Lineale unabhaengig streuen.
 */
export function gesichtPxProMm(P) {
  const breite = P[234].distanceTo(P[454]) / GESICHTSBREITE_MM;
  const irisDurchmesser = irisPx(P);
  const iris = irisDurchmesser / IRIS_MM;
  if (!(iris > 0)) return breite;
  const geklemmt = klemme(iris, breite * 0.85, breite * 1.15);
  const w = klemme(0.4 + (irisDurchmesser - 6) * 0.04, 0.4, 0.6);
  return Math.exp(w * Math.log(geklemmt) + (1 - w) * Math.log(breite));
}

/** Ohrlaeppchen fuer Bildseite 'L' oder 'R'. */
export function ohrlaeppchen(P, rahmen, ppm, seite, spiegel, kal = OHR_KALIBRIERUNG) {
  // Bild links ist ohne Spiegel die rechte Gesichtshaelfte der Person (234)
  const personRechts = (seite === 'L') !== spiegel;
  const bezug = mittel(P, personRechts ? kal.bezug.L : kal.bezug.R);
  const aussen = seite === 'L' ? -1 : 1;   // X zeigt nach Betrachter-rechts
  const position = imRahmen(bezug, rahmen, aussen * kal.aussenMm, kal.obenMm, kal.vornMm, ppm);
  // Abgewandtes Ohr verschwindet hinter dem Kopf
  const drehungWeg = aussen * rahmen.gier * 180 / Math.PI;
  const sichtbar = 1 - glattStufe(drehungWeg, OHR_AUSBLENDEN[0], OHR_AUSBLENDEN[1]);
  return { position, quaternion: rahmen.quaternion.clone(), pxProMm: ppm, sichtbar, bezug };
}

/**
 * Verdecker fuer den Kopf: Gesichtsnetz, Hinterkopf-Ellipsoid, Hals-Kapsel.
 * index: Dreiecksindex (gesichtsIndex), darf fehlen.
 */
export function kopfVerdecker(P, rahmen, ppm, index, { mitHals = true } = {}) {
  const verdecker = [];
  if (index) {
    const positionen = new Float32Array(468 * 3);
    for (let i = 0; i < 468; i++) {
      positionen[i * 3] = P[i].x;
      positionen[i * 3 + 1] = P[i].y;
      positionen[i * 3 + 2] = P[i].z;
    }
    verdecker.push({ typ: 'netz', positionen, index });
  }
  const o = rahmen.ursprung;
  // Hinterkopf: schmal genug, dass das Ohrlaeppchen ausserhalb liegt
  const mitte = imRahmen(o, rahmen, 0, 10, -40, ppm);
  verdecker.push(ellipsoid(mitte, rahmen.quaternion, new THREE.Vector3(66, 110, 90).multiplyScalar(ppm)));
  if (mitHals) {
    const a = imRahmen(o, rahmen, 0, -45, -35, ppm);
    const b = imRahmen(o, rahmen, 0, -170, -45, ppm);
    verdecker.push(kapsel(a, b, 50 * ppm));
  }
  return verdecker;
}

/**
 * Hauptberechnung fuer Ohrringe.
 * P: 478 THREE.Vector3 (Buehnenraum). optionen: { W, H, spiegel, index, ppm? }
 * ppm: bereits geglaetteter Massstab (sonst aus diesem Bild).
 */
export function berechneGesicht(P, { W, H, spiegel = false, index = null, ppm = null }) {
  const rahmen = kopfRahmen(P, spiegel);
  const ppmRoh = gesichtPxProMm(P);
  const s = ppm || ppmRoh;
  const ohrL = ohrlaeppchen(P, rahmen, s, 'L', spiegel);
  const ohrR = ohrlaeppchen(P, rahmen, s, 'R', spiegel);
  const verdecker = kopfVerdecker(P, rahmen, s, index);
  const hals = verdecker[verdecker.length - 1];
  return {
    rahmen,
    ppmRoh,
    anker: { ohrL, ohrR },
    verdecker,
    schatten: hals && hals.typ === 'kapsel' ? [kapsel(hals.a, hals.b, hals.r / 0.96)] : [],
    info: { gierGrad: rahmen.gier * 180 / Math.PI, nickGrad: rahmen.nick * 180 / Math.PI }
  };
}

/** Hinweis-Code aus Lage und Groesse des Gesichts. */
export function gesichtHinweisCode(P, rahmen, { W, H }) {
  const breite = Math.hypot(P[234].x - P[454].x, P[234].y - P[454].y);
  if (breite < 0.2 * Math.min(W, H)) return 'naeher';
  return null;
}
