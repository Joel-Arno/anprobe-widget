// Hand: MediaPipe-Handpunkte (bereits im Buehnenraum, ggf. geglaettet) ->
// Ringanker je Finger, Armbandanker, Masse, Verdecker und Hinweise.
//
// Lage UND Orientierung kommen aus den Bildpunkten (x, y, z*W). Die
// Weltpunkte von MediaPipe sind in Handruecken-Ansichten stark verzerrt
// (Knoechelabstand oft halbiert), die Bildpunkte dagegen in sich stimmig
// (gemessen an den Testbildern, siehe test/tracking/).
//
// Massstab: 3D-Laengen der starren Mittelhandknochen im Bild (px) im
// Verhaeltnis zu einer Normhand (mm). Die Normhand ist eine erwachsene
// Frauenhand (MediaPipe-Weltmittel * 0.94).

import * as THREE from 'three';
import {
  mittel, klemme, rahmenAusYZ, quaternionAus, newellNormale, kapsel, ellipsenzylinder
} from './raum.js';

/** Finger: Gelenkindizes (MCP, PIP, DIP, Spitze; Daumen: CMC, MCP, IP, Spitze). */
export const FINGER = {
  daumen: { gelenke: [1, 2, 3, 4], ring: [2, 3], ankerT: 0.45, durchmesserMm: 21 },
  zeige: { gelenke: [5, 6, 7, 8], ring: [5, 6], ankerT: 0.42, durchmesserMm: 18 },
  mittel: { gelenke: [9, 10, 11, 12], ring: [9, 10], ankerT: 0.42, durchmesserMm: 18.5 },
  ring: { gelenke: [13, 14, 15, 16], ring: [13, 14], ankerT: 0.42, durchmesserMm: 17 },
  klein: { gelenke: [17, 18, 19, 20], ring: [17, 18], ankerT: 0.42, durchmesserMm: 15 }
};
export const FINGER_NAMEN = Object.keys(FINGER);

// Normhand (mm): starre Strecken der Mittelhand
const NORM_KNOCHEN = [
  [0, 5, 94], [0, 9, 90], [0, 13, 87], [0, 17, 78], [5, 17, 62]
];
const NORM_KNOECHEL_MM = 62;          // Abstand Zeige- zu Kleinfinger-MCP
const ARMBAND_ABSTAND_MM = 18;        // vom Handgelenkpunkt Richtung Unterarm
const HANDGELENK_MM = { quer: 28, tiefe: 19 };
const UNTERARM_LAENGE_MM = 150;
const DAUMEN_DREHUNG = 55 * Math.PI / 180;  // Daumennagel gegen Handruecken geneigt

// Verdecker etwas duenner als die Haut, damit die Vorderseite von Ring
// und Armband nicht abgeschnitten wird.
const VERDECKER_FINGER = [0.9, 0.8, 0.72];
const VERDECKER_HANDGELENK = 0.92;

export const HAND_HINWEISE = {
  'hand-zeigen': 'Halte deine Hand ins Bild',
  naeher: 'Etwas näher heran',
  'ganz-ins-bild': 'Zeig die ganze Hand im Bild',
  'finger-spreizen': 'Spreiz die Finger ein wenig'
};

export function handHinweis(code) {
  return code ? { code, text: HAND_HINWEISE[code] } : null;
}

/** Robuster Mittelwert (ohne groessten und kleinsten Wert). */
function getrimmtesMittel(werte) {
  const s = [...werte].sort((a, b) => a - b);
  const kern = s.length > 4 ? s.slice(1, -1) : s;
  return kern.reduce((a, b) => a + b, 0) / kern.length;
}

/** Pixel pro mm aus den Mittelhandknochen (3D-Bildlaengen). */
export function handPxProMm(P) {
  return getrimmtesMittel(NORM_KNOCHEN.map(([a, b, mm]) => P[a].distanceTo(P[b]) / mm));
}

/**
 * Handruecken-Normale (Buehnenraum, Einheit).
 * Fuer eine echte rechte Hand ist (Zeige-MCP - Handgelenk) × (Klein-MCP -
 * Handgelenk) in einem Rechtssystem die Handflaechen-Normale; die gespiegelte
 * Buehne kehrt die Haendigkeit um.
 */
export function handrueckenNormale(P, rechts, spiegel, ziel = new THREE.Vector3()) {
  newellNormale(P, [0, 5, 9, 13, 17], ziel);
  return (rechts !== spiegel) ? ziel.negate() : ziel;
}

/**
 * Hauptberechnung.
 * P: 21 THREE.Vector3 im Buehnenraum. optionen: { W, H, spiegel, rechts }.
 * Liefert { anker: { ring: {...}, armband }, masse, verdecker, schatten: { ring, armband },
 *           hinweisCode, info }
 * Anker hier ohne Glaettung: { position, quaternion, pxProMm }.
 */
export function berechneHand(P, { W, H, spiegel = false, rechts = true }) {
  const ppm = handPxProMm(P);
  const nRuecken = handrueckenNormale(P, rechts, spiegel);

  // Handachse: Handgelenk -> Mitte der Knoechel
  const knoechelMitte = mittel(P, [5, 9, 13, 17]);
  const handY = knoechelMitte.clone().sub(P[0]).normalize();
  const hand = rahmenAusYZ(handY, nRuecken);

  // Individuelle Breite (schlanke/kraeftige Hand), nur halb uebernommen
  const knoechelMm = P[5].distanceTo(P[17]) / ppm;
  const kBreite = klemme(knoechelMm / NORM_KNOECHEL_MM, 0.85, 1.2);
  const breite = 0.5 + 0.5 * kBreite;

  // Richtung zur Daumenseite in der Handebene
  const radial = P[5].clone().sub(P[17]);
  radial.addScaledVector(hand.z, -radial.dot(hand.z)).normalize();
  const daumenZ = hand.z.clone().multiplyScalar(Math.cos(DAUMEN_DREHUNG))
    .addScaledVector(radial, Math.sin(DAUMEN_DREHUNG));

  const fingerRadiusPx = {};
  const ring = {};
  for (const name of FINGER_NAMEN) {
    const f = FINGER[name];
    const a = P[f.ring[0]], b = P[f.ring[1]];
    const y = b.clone().sub(a);
    let z;
    if (name === 'daumen') {
      z = daumenZ;
    } else {
      // Beugung dreht um die Querachse der Hand: z = x_hand × y_finger
      z = new THREE.Vector3().crossVectors(hand.x, y);
      if (z.lengthSq() < 1e-9) z = hand.z;
    }
    const rahmen = rahmenAusYZ(y, z);
    fingerRadiusPx[name] = 0.5 * f.durchmesserMm * ppm * breite;
    ring[name] = {
      position: a.clone().lerp(b, f.ankerT),
      quaternion: quaternionAus(rahmen),
      pxProMm: ppm,
      rahmen
    };
  }

  // Armband: Unterarmachse ~ Handachse, etwas vom Handgelenkpunkt weg
  const arm = rahmenAusYZ(handY, nRuecken);
  const armbandPos = P[0].clone().addScaledVector(arm.y, -ARMBAND_ABSTAND_MM * ppm);
  const handgelenkRadienPx = {
    quer: HANDGELENK_MM.quer * ppm * breite,
    tiefe: HANDGELENK_MM.tiefe * ppm * breite
  };
  const armband = {
    position: armbandPos,
    quaternion: quaternionAus(arm),
    pxProMm: ppm,
    rahmen: arm
  };

  const { verdecker, schatten } = handVerdecker(P, fingerRadiusPx, handgelenkRadienPx, arm, armbandPos, ppm);

  return {
    anker: { ring, armband },
    masse: { fingerRadiusPx, handgelenkRadienPx },
    verdecker,
    schatten,
    hinweisCode: null,
    info: { ppm, kBreite, nRuecken, rueckenZurKamera: nRuecken.z > 0, hand }
  };
}

/** Kapseln fuer Finger und Handflaeche, Ellipsenzylinder fuer den Unterarm. */
function handVerdecker(P, rFinger, rGelenk, arm, armbandPos, ppm) {
  const verdecker = [];
  const schattenRing = [];
  for (const name of FINGER_NAMEN) {
    const g = FINGER[name].gelenke;
    const r = rFinger[name];
    // Daumen: Grundglied 2-3, Endglied 3-4; Mittelhandknochen 1-2 bei der Handflaeche
    const glieder = name === 'daumen' ? [[2, 3], [3, 4]] : [[g[0], g[1]], [g[1], g[2]], [g[2], g[3]]];
    glieder.forEach(([i, j], k) => {
      const faktor = name === 'daumen' ? [0.9, 0.78][k] : VERDECKER_FINGER[k];
      const rv = r * faktor;
      let ende = P[j];
      if (k === glieder.length - 1) {
        // Kappe endet an der Fingerkuppe
        const d = P[j].clone().sub(P[i]);
        const l = d.length();
        ende = P[i].clone().addScaledVector(d, Math.max(0.2, (l - rv) / Math.max(l, 1e-6)));
      }
      verdecker.push(kapsel(P[i], ende, rv));
      if (k < 2) schattenRing.push(kapsel(P[i], P[j], r * [1, 0.9][k]));
    });
  }

  // Handflaeche: Strahlen vom Handgelenk zu den Knoecheln, Knoechelreihe, Daumenballen
  const abstand = (P[5].distanceTo(P[9]) + P[9].distanceTo(P[13]) + P[13].distanceTo(P[17])) / 3;
  const rFlaeche = Math.max(0.42 * abstand, 7 * ppm);
  const flaeche = [];
  for (const i of [5, 9, 13, 17]) flaeche.push(kapsel(P[0], P[i], rFlaeche));
  flaeche.push(kapsel(P[5], P[17], rFlaeche * 0.95));
  const rBallen = rFinger.daumen;
  flaeche.push(kapsel(P[0], P[1], rBallen));
  flaeche.push(kapsel(P[1], P[2], rBallen * 0.92));
  verdecker.push(...flaeche);

  // Unterarm ab kurz vor dem Handgelenkpunkt ~150 mm Richtung Ellbogen
  const a = P[0].clone().addScaledVector(arm.y, 4 * ppm);
  const b = armbandPos.clone().addScaledVector(arm.y, -UNTERARM_LAENGE_MM * ppm);
  verdecker.push(ellipsenzylinder(a, b, arm.x, rGelenk.quer * VERDECKER_HANDGELENK, rGelenk.tiefe * VERDECKER_HANDGELENK));

  const schattenArmband = [
    ellipsenzylinder(a, b, arm.x, rGelenk.quer, rGelenk.tiefe),
    ...flaeche
  ];
  return { verdecker, schatten: { ring: schattenRing, armband: schattenArmband } };
}

/**
 * Hinweis fuer die Nutzerin (Code) aus den Bildpunkten.
 * art: 'ring' | 'armband'.
 */
export function handHinweisCode(P, ergebnis, { W, H, art }) {
  const rand = 0.01 * Math.min(W, H);
  const wichtig = art === 'armband' ? [0, 1, 5, 9, 13, 17] : [0, 2, 3, 5, 6, 9, 10, 13, 14, 17, 18];
  for (const i of wichtig) {
    const p = P[i];
    if (p.x < rand || p.x > W - rand || p.y < rand || p.y > H - rand) return 'ganz-ins-bild';
  }
  if (art === 'armband') {
    const p = ergebnis.anker.armband.position;
    if (p.x < 0 || p.x > W || p.y < 0 || p.y > H) return 'ganz-ins-bild';
  }
  // Handflaechenlaenge im Bild
  const laenge = Math.hypot(P[9].x - P[0].x, P[9].y - P[0].y);
  if (laenge < 0.12 * Math.min(W, H)) return 'naeher';
  if (art === 'ring') {
    // Finger liegen uebereinander (z. B. Hand seitlich): Grundglieder zu nah
    const r = ergebnis.masse.fingerRadiusPx;
    const paare = [['zeige', 'mittel'], ['mittel', 'ring'], ['ring', 'klein']];
    for (const [f1, f2] of paare) {
      const a = mittel2d(P, FINGER[f1].ring), b = mittel2d(P, FINGER[f2].ring);
      if (Math.hypot(a.x - b.x, a.y - b.y) < 0.9 * (r[f1] + r[f2]) * 0.5) return 'finger-spreizen';
    }
  }
  return null;
}

function mittel2d(P, [i, j]) {
  return { x: (P[i].x + P[j].x) / 2, y: (P[i].y + P[j].y) / 2 };
}
