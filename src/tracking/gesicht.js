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

// Ohrlaeppchen (Stichpunkt) relativ zur Mitte der Konturpunkte 127/234/93/132/58
// (bzw. 356/454/323/361/288) im Kopf-Rahmen der Transformationsmatrix, mm:
// seitlich nach aussen, nach oben, nach vorn. Kalibriert an 9 Ohrlaeppchen von
// 5 Personen (test/tracking/kalib_ohr.mjs, Soll = Lobusmitte bzw. Ohrstecker):
// RMS 3,1 mm, groesster Fehler 4,2 mm; Kreuzvalidierung (Person ausgelassen)
// RMS 3,6 mm. Die Ablesegenauigkeit der Soll-Punkte liegt bei etwa 2 mm, der
// Rest ist die individuelle Lage des Ohrs (ohne Ohrpunkte nicht zu erfassen).
// Mit dem Rahmen aus Landmarkenpaaren (ohne Matrix) waren es RMS 5,2 mm.
// bezug.L/R = rechte/linke Gesichtshaelfte der Person.
export const OHR_KALIBRIERUNG = {
  bezug: { L: [127, 234, 93, 132, 58], R: [356, 454, 323, 361, 288] },
  aussenMm: 5.2,
  obenMm: -8.7,
  vornMm: -45.9,
  rahmen: 'matrix'
};

// Abgewandtes Ohr: ab dieser Kopfdrehung weich ausblenden (Grad); die
// Verdecker (Netz, Hinterkopf) verdecken es vorher schon teilweise.
const OHR_AUSBLENDEN = [22, 40];
// Drehung des Laeppchens gegen die Kopfseite (Aussenflaeche etwas nach vorn)
const OHR_WINKEL = 15 * Math.PI / 180;
// Ohrlaeppchen-Verdecker (mm, im Ohrring-Rahmen): halbe Dicke etwas unter der
// Laeppchendicke des Schmuckmodells (1,6 mm), damit Stecker nicht anschneiden
const LAEPPCHEN_MM = { obenMm: 1.5, radien: [1.3, 8.5, 6.5] };
// Hinterkopf-Ellipsoid (Halbachsen quer, hoch, tief in mm)
const HINTERKOPF_MM = [66, 110, 90];

// Perspektive: Der Massstab (Iris) gilt in der Tiefe der Augen. Ohrlaeppchen
// und Halsansatz liegen weiter hinten und erscheinen bei kurzem Abstand
// (Selfie, ~40 cm) merklich kleiner (Ohr ~14 %, Hals ~10 %). Abstand =
// Brennweite / Massstab, Brennweite als Anteil der langen Bildseite (typische
// Front- und Webcams, ca. 65-70 Grad Bildwinkel). Fotos (Einzelbild) mit
// festem Abstand, da Ausschnitte die Schaetzung verfaelschen wuerden.
export const PERSPEKTIVE = {
  brennweiteAnteil: 0.75,
  abstandMm: [350, 1500],
  einzelbildAbstandMm: 700,
  tiefeOhrMm: 75,     // Hornhaut -> Ohrlaeppchen
  tiefeHalsMm: 50     // Hornhaut -> Kette am Halsansatz (Mittel Drosselgrube/Brust)
};

/** Faktor (< 1) fuer den Massstab in tiefeMm hinter der Augenebene. */
export function perspektivFaktor(ppm, { W, H, einzel = false }, tiefeMm, p = PERSPEKTIVE) {
  if (!(ppm > 0) || !(tiefeMm > 0)) return 1;
  const d = einzel ? p.einzelbildAbstandMm : klemme(p.brennweiteAnteil * Math.max(W, H) / ppm, p.abstandMm[0], p.abstandMm[1]);
  return d / (d + tiefeMm);
}

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
 * achsen: { x, y, z } aus der Transformationsmatrix (rahmenAusMatrix, ggf.
 * geglaettet) oder null. Mit Matrix ist die Neigung verlaesslicher; ohne
 * kommen die Achsen aus gemittelten Landmarkenpaaren.
 * Liefert { x, y, z, ursprung (Mitte 234/454), quaternion, gier, nick, ausMatrix }.
 * gier > 0: Gesicht zeigt nach Betrachter-rechts; nick > 0: nach oben.
 */
export function kopfRahmen(P, spiegel, achsen = null) {
  let rahmen = achsen ? { x: achsen.x.clone(), y: achsen.y.clone(), z: achsen.z.clone() } : null;
  const ausMatrix = !!rahmen;
  if (!rahmen) {
    const xRoh = new THREE.Vector3();
    for (const [a, b] of PAARE_X) xRoh.add(P[b]).sub(P[a]);
    if (spiegel) xRoh.negate();
    const yRoh = new THREE.Vector3();
    for (const [a, b] of PAARE_Y) yRoh.add(P[b]).sub(P[a]);
    rahmen = rahmenAusXY(xRoh, yRoh);
  }
  rahmen.ausMatrix = ausMatrix;
  rahmen.ursprung = P[234].clone().add(P[454]).multiplyScalar(0.5);
  rahmen.quaternion = quaternionAus(rahmen);
  rahmen.gier = Math.atan2(rahmen.z.x, rahmen.z.z);
  rahmen.nick = Math.asin(klemme(rahmen.z.y, -1, 1));
  return rahmen;
}

/**
 * Drehung des Kopfes aus der Gesichts-Transformationsmatrix von MediaPipe
 * (4x4, spaltenweise; kanonisches Gesichtsmodell -> Kamera: x zur linken
 * Gesichtshaelfte der Person, y nach oben, z nach vorn). Liefert Achsen
 * { x, y, z } im Buehnenraum mit X nach Betrachter-rechts (wie kopfRahmen)
 * oder null. Die Matrix entsteht aus einer Ausgleichsrechnung ueber alle
 * Landmarken und ist in der Neigung (Nicken) verlaesslicher als einzelne Paare.
 */
export function rahmenAusMatrix(daten, spiegel) {
  if (!daten || daten.length < 16) return null;
  const s = spiegel ? -1 : 1;
  // Spiegelung S = diag(-1, 1, 1); X = s-gespiegelte erste Spalte so, dass X nach rechts zeigt
  const x = new THREE.Vector3(daten[0], s * daten[1], s * daten[2]);
  const y = new THREE.Vector3(s * daten[4], daten[5], daten[6]);
  if (!(x.lengthSq() > 1e-6 && y.lengthSq() > 1e-6)) return null;
  return rahmenAusXY(x, y);
}

// Drehpunkt des Kopfes (etwa Atlas, unter und hinter dem Gehoergang) relativ
// zur Mitte 234/454 im Kopf-Rahmen, mm. Beim Nicken und Drehen bewegt er sich
// kaum gegen den Rumpf und dient als ruhiger Bezug fuer die Pose-Punkte.
const DREHPUNKT_MM = [0, -25, -60];

/** Drehpunkt des Kopfes im Buehnenraum. */
export function kopfDrehpunkt(rahmen, ppm) {
  return imRahmen(rahmen.ursprung, rahmen, DREHPUNKT_MM[0], DREHPUNKT_MM[1], DREHPUNKT_MM[2], ppm);
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

/**
 * Ohrlaeppchen fuer Bildseite 'L' oder 'R'.
 * Rahmen nach ARCHITEKTUR.md (+Y oben, +Z Blickrichtung, +X vom Kopf weg fuer
 * das Ohr rechts im Bild; links bekommt die Buehne eine an X gespiegelte
 * Kopie), zusaetzlich um OHR_WINKEL um Y gedreht: das Laeppchen steht nicht
 * parallel zur Kopfseite, sondern zeigt mit der Aussenflaeche etwas nach vorn.
 * ppm: Massstab fuer die Lage (wie kalibriert); ppmAnker: Massstab des Ankers
 * (Schmuckgroesse, mit Perspektive).
 */
export function ohrlaeppchen(P, rahmen, ppm, seite, spiegel, kal = OHR_KALIBRIERUNG, ppmAnker = ppm) {
  // Bild links ist ohne Spiegel die rechte Gesichtshaelfte der Person (234)
  const personRechts = (seite === 'L') !== spiegel;
  const bezug = mittel(P, personRechts ? kal.bezug.L : kal.bezug.R);
  const aussen = seite === 'L' ? -1 : 1;   // X zeigt nach Betrachter-rechts
  const position = imRahmen(bezug, rahmen, aussen * kal.aussenMm, kal.obenMm, kal.vornMm, ppm);
  // Abgewandtes Ohr verschwindet hinter dem Kopf
  const drehungWeg = aussen * rahmen.gier * 180 / Math.PI;
  const sichtbar = 1 - glattStufe(drehungWeg, OHR_AUSBLENDEN[0], OHR_AUSBLENDEN[1]);
  // rechts: X' = cos·X + sin·Z (aussen und etwas nach vorn); links (gespiegeltes
  // Modell, dessen Aussenseite bei -X' liegt): X' = cos·X - sin·Z
  const w = aussen * OHR_WINKEL;
  const x = rahmen.x.clone().multiplyScalar(Math.cos(w)).addScaledVector(rahmen.z, Math.sin(w));
  const quaternion = quaternionAus(rahmenAusXY(x, rahmen.y));
  return { position, quaternion, pxProMm: ppmAnker, sichtbar, bezug };
}

/**
 * Verdecker fuer den Kopf: Gesichtsnetz, Hinterkopf-Ellipsoid, Hals-Kapsel und
 * (mit ohren) je ein flaches Ellipsoid als Ohrlaeppchen.
 * index: Dreiecksindex (gesichtsIndex), darf fehlen.
 * ohren: [Anker, ...] der Ohrlaeppchen oder null. Der Hinterkopf wird so schmal
 * gewaehlt, dass er die Laeppchen nicht schneidet.
 */
export function kopfVerdecker(P, rahmen, ppm, index, { mitHals = true, ohren = null } = {}) {
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
  // Hinterkopf: hoechstens so breit, dass beide Laeppchen 6 mm ausserhalb liegen
  let rQuer = HINTERKOPF_MM[0];
  let mitteX = 0;
  const seitlich = [];
  for (const a of ohren || []) seitlich.push(a.position.clone().sub(o).dot(rahmen.x) / ppm);
  if (seitlich.length === 2) {
    mitteX = (seitlich[0] + seitlich[1]) / 2;
    rQuer = klemme(Math.abs(seitlich[1] - seitlich[0]) / 2 - 6, 48, HINTERKOPF_MM[0]);
  }
  const mitte = imRahmen(o, rahmen, mitteX, 10, -40, ppm);
  verdecker.push(ellipsoid(mitte, rahmen.quaternion, new THREE.Vector3(rQuer, HINTERKOPF_MM[1], HINTERKOPF_MM[2]).multiplyScalar(ppm)));
  if (mitHals) {
    const a = imRahmen(o, rahmen, 0, -45, -35, ppm);
    const b = imRahmen(o, rahmen, 0, -170, -45, ppm);
    verdecker.push(kapsel(a, b, 50 * ppm));
  }
  // Ohrlaeppchen: verdeckt Stift, Ohrmutter-Ansatz und Creolen-Bogen im Laeppchen
  for (const a of ohren || []) {
    const mitteL = new THREE.Vector3(0, LAEPPCHEN_MM.obenMm, 0).applyQuaternion(a.quaternion).multiplyScalar(a.pxProMm).add(a.position);
    verdecker.push(ellipsoid(mitteL, a.quaternion, new THREE.Vector3(...LAEPPCHEN_MM.radien).multiplyScalar(a.pxProMm)));
  }
  return verdecker;
}

/**
 * Hauptberechnung fuer Ohrringe.
 * P: 478 THREE.Vector3 (Buehnenraum). optionen: { W, H, spiegel, index, ppm?, achsen?, einzel? }
 * ppm: bereits geglaetteter Massstab (sonst aus diesem Bild); achsen: Kopfachsen
 * aus der Transformationsmatrix (rahmenAusMatrix) oder null.
 */
export function berechneGesicht(P, { W, H, spiegel = false, index = null, ppm = null, achsen = null, einzel = false }) {
  const rahmen = kopfRahmen(P, spiegel, achsen);
  const ppmRoh = gesichtPxProMm(P);
  const s = ppm || ppmRoh;
  const sOhr = s * perspektivFaktor(s, { W, H, einzel }, PERSPEKTIVE.tiefeOhrMm);
  const ohrL = ohrlaeppchen(P, rahmen, s, 'L', spiegel, OHR_KALIBRIERUNG, sOhr);
  const ohrR = ohrlaeppchen(P, rahmen, s, 'R', spiegel, OHR_KALIBRIERUNG, sOhr);
  const verdecker = kopfVerdecker(P, rahmen, s, index, { ohren: [ohrL, ohrR] });
  const hals = verdecker.find((v) => v.typ === 'kapsel');
  return {
    rahmen,
    ppmRoh,
    anker: { ohrL, ohrR },
    verdecker,
    schatten: hals && hals.typ === 'kapsel' ? [kapsel(hals.a, hals.b, hals.r / 0.96)] : [],
    info: { gierGrad: rahmen.gier * 180 / Math.PI, nickGrad: rahmen.nick * 180 / Math.PI, perspektive: sOhr / s }
  };
}

/** Hinweis-Code aus Lage und Groesse des Gesichts. */
export function gesichtHinweisCode(P, rahmen, { W, H }) {
  const breite = Math.hypot(P[234].x - P[454].x, P[234].y - P[454].y);
  if (breite < 0.2 * Math.min(W, H)) return 'naeher';
  return null;
}
