// Koerper (Ketten): Pose (Schultern 11/12) + Gesicht (Kinn, Kiefer) ->
// Drosselgrube, Hals-Rahmen, Halsradius, Verdecker.
//
// Rahmen: X entlang der Schulterlinie (bei frontaler Person Betrachter-rechts),
// +Y den Hals hinauf (senkrecht zur Schulterlinie in der Bildebene),
// Z = X × Y nach vorn aus der Brust. Die Tiefe der Schulterlinie (Drehung des
// Oberkoerpers) kommt aus den Pose-Weltpunkten.

import * as THREE from 'three';
import { klemme, glattStufe, rahmenAusXY, quaternionAus, imRahmen, kapsel, ellipsoid } from './raum.js';
import { kopfVerdecker, perspektivFaktor, PERSPEKTIVE } from './gesicht.js';

// Kalibriert an business-person.png, portrait.jpg (intern) und pose.jpg
// (test/tracking/kalib_kette.mjs).
export const KOERPER_KALIBRIERUNG = {
  // Abstand der Pose-Schulterpunkte 11/12 (sie liegen innerhalb der Schulter-
  // kontur): mit dem Iris-Massstab gemessen 253-271 mm
  schulterbreiteMm: 270,
  // Hoehe der Drosselgrube: Mittel aus zwei Schaetzern (mm entlang +Y)
  //   ueber der Mitte der Schulterpunkte (Schultern heben sich mit den Armen)
  drosselObenMm: 24,
  //   unter dem Kinn (152); der Hals wirkt kuerzer, wenn das Kinn gesenkt ist
  kinnDrosselMm: 42,
  kinnGewicht: 0.5,
  drosselVornMm: 55,
  // Anteil, mit dem die Drosselgrube seitlich zum Kinn rueckt (Kopf gerade)
  kinnZug: 0.5,
  // Halsradius aus Kieferbreite (172-397): Hals ist schmaler als der Kiefer
  halsZuKiefer: 0.47,
  halsRadiusNormMm: 55,
  halsRadiusGrenzenMm: [44, 64],
  kinnAbstandMinMm: 15,      // Drosselgrube mindestens so weit unter dem Kinn
  drosselVorKopfMm: 25       // Tiefe der Drosselgrube vor der Mitte 234/454
};

const ANHAENGER_UNTER_DROSSEL_MM = 100;

export const KOERPER_HINWEISE = {
  schultern: 'Etwas mehr Abstand, damit Hals und Schultern zu sehen sind',
  'gesicht-zeigen': 'Schau direkt in die Kamera',
  naeher: 'Etwas näher heran'
};

export function koerperHinweis(code) {
  return code ? { code, text: KOERPER_HINWEISE[code] } : null;
}

/** Schultern brauchbar (sichtbar und im Bild)? */
export function schulternSichtbar(pose, W, H) {
  if (!pose) return false;
  const rand = 0.005 * Math.min(W, H);
  for (const i of [11, 12]) {
    const p = pose.P[i];
    if ((pose.sichtbarkeit[i] ?? 1) < 0.5) return false;
    if (p.x < rand || p.x > W - rand || p.y < rand || p.y > H - rand) return false;
  }
  return true;
}

/** Tiefe der Schulterlinie (z relativ zur Laenge in der Bildebene) aus den Weltpunkten. */
export function schulterTiefeAusWelt(pose, spiegel) {
  if (!pose.welt) return 0;
  const wr = spiegel ? pose.welt[12] : pose.welt[11];
  const wl = spiegel ? pose.welt[11] : pose.welt[12];
  const dw = wr.clone().sub(wl);
  const xy = Math.hypot(dw.x, dw.y);
  return xy > 1e-3 ? klemme(dw.z / xy, -2, 2) : 0;
}

/**
 * Schulterlinie als Vektor (px) von Betrachter-links nach -rechts:
 * Lage aus dem Bild, Tiefe (Drehung des Oberkoerpers) aus den Weltpunkten
 * oder vorgegeben (tiefe, z. B. zeitlich geglaettet: die Pose-Tiefe rauscht stark).
 */
export function schulterLinie(pose, spiegel, tiefe = null) {
  const Pp = pose.P;
  const rechtsBild = spiegel ? Pp[12] : Pp[11];   // Betrachter-rechts bei frontaler Person
  const linksBild = spiegel ? Pp[11] : Pp[12];
  const d2 = rechtsBild.clone().sub(linksBild);
  d2.z = 0;
  const lang2 = d2.length();
  // z-Anteil relativ zur Bildlaenge
  const schulterTiefe = tiefe != null ? tiefe : schulterTiefeAusWelt(pose, spiegel);
  return { linie: new THREE.Vector3(d2.x, d2.y, schulterTiefe * lang2), schulterTiefe };
}

/** Massstab nur aus der Schulterbreite (ohne Gesicht). */
export function schulterPxProMm(pose, spiegel, kal = KOERPER_KALIBRIERUNG) {
  return schulterLinie(pose, spiegel).linie.length() / kal.schulterbreiteMm;
}

/**
 * Hauptberechnung.
 * pose: { P: 33 Vector3 (Buehne), welt: 33 Vector3 (mm, Buehnenrichtungen), sichtbarkeit: number[] }
 * gesicht: { P: 478 Vector3, rahmen, ppm } oder null
 * optionen: { W, H, spiegel, ppm (geglaettet, optional), index (Gesichtsnetz),
 *   einzel (Einzelbild), schulterTiefe (geglaettet, optional) }
 */
export function berechneKoerper(pose, gesicht, {
  W, H, spiegel = false, ppm = null, index = null, einzel = false, schulterTiefe: tiefe = null, kal = KOERPER_KALIBRIERUNG
}) {
  const Pp = pose.P;
  const { linie: xRoh, schulterTiefe } = schulterLinie(pose, spiegel, tiefe);
  const schulterPx = xRoh.length();

  // Massstab: Iris (Gesicht) wenn vorhanden, sonst Schulterbreite
  const ppmSchulter = schulterPx / kal.schulterbreiteMm;
  const ppmRoh = gesicht && gesicht.ppm ? gesicht.ppm : ppmSchulter;
  const s = ppm || ppmRoh;
  // Massstab am Halsansatz (Kette, Hals, Rumpf) mit Perspektive (PERSPEKTIVE
  // in gesicht.js); die Lage der Drosselgrube bleibt wie kalibriert auf s bezogen.
  const sk = s * perspektivFaktor(s, { W, H, einzel }, PERSPEKTIVE.tiefeHalsMm);

  // +Y senkrecht zur Schulterlinie in der Bildebene, Richtung Kopf
  const yRoh = new THREE.Vector3(0, 0, 1).cross(xRoh);
  const rahmen = rahmenAusXY(xRoh, yRoh);
  const schulterMitte = Pp[11].clone().add(Pp[12]).multiplyScalar(0.5);
  const drossel = imRahmen(schulterMitte, rahmen, 0, kal.drosselObenMm, kal.drosselVornMm, s);
  // Pose-z (Bezug Huefte) und Gesichts-z (Bezug Kopf) haben verschiedene
  // Nullpunkte; mit Gesicht wird die Tiefe an den Kopf gekoppelt, damit
  // Kinn, Hals und Kette zueinander passen.
  if (gesicht) drossel.z = gesicht.rahmen.ursprung.z + kal.drosselVorKopfMm * s;
  if (gesicht) {
    const kinn = gesicht.P[152];
    // Seitlich: Schultermitte und Kinn mitteln, solange der Kopf gerade ist
    const gierGrad = Math.abs(gesicht.rahmen.gier) * 180 / Math.PI;
    const zug = kal.kinnZug * (1 - glattStufe(gierGrad, 10, 30));
    drossel.addScaledVector(rahmen.x, zug * kinn.clone().sub(drossel).dot(rahmen.x));
    // Hoehe: Schultern und Kinn mitteln
    const ueberKinn = kinn.clone().sub(drossel).dot(rahmen.y) - kal.kinnDrosselMm * s;
    drossel.addScaledVector(rahmen.y, kal.kinnGewicht * ueberKinn);
    // nicht ueber das Kinn hinaus (Kopf gesenkt)
    const hoehe = kinn.clone().sub(drossel).dot(rahmen.y);
    const minimum = kal.kinnAbstandMinMm * s;
    if (hoehe < minimum) drossel.addScaledVector(rahmen.y, hoehe - minimum);
  }

  // Halsradius aus der Kieferbreite (mm)
  let halsRadiusMm = kal.halsRadiusNormMm;
  if (gesicht) {
    const kieferMm = gesicht.P[172].distanceTo(gesicht.P[397]) / sk;
    halsRadiusMm = klemme(kal.halsZuKiefer * kieferMm, kal.halsRadiusGrenzenMm[0], kal.halsRadiusGrenzenMm[1]);
  }

  const quaternion = quaternionAus(rahmen);
  const anker = { position: drossel, quaternion, pxProMm: sk };
  const { verdecker, schatten } = koerperVerdecker(drossel, rahmen, quaternion, sk, s, halsRadiusMm, gesicht, index);

  return {
    anker,
    rahmen,
    ppmRoh,
    halsRadiusMm,
    verdecker,
    schatten,
    info: { schulterMm: schulterPx / s, schulterTiefe, schulterMitte }
  };
}

/** sk: Massstab am Halsansatz, s: Massstab in Augentiefe (fuer den Kopf). */
function koerperVerdecker(drossel, rahmen, quaternion, sk, s, halsRadiusMm, gesicht, index) {
  const r = halsRadiusMm * sk;
  // Halskapsel: Mitte um den Radius hinter der Drosselgrube, den Hals hinauf
  const a = imRahmen(drossel, rahmen, 0, -10, -halsRadiusMm, sk);
  let b = imRahmen(drossel, rahmen, 0, 120, -halsRadiusMm - 10, sk);
  if (gesicht) {
    // Oberes Ende unter die Kopfmitte legen (folgt der Kopfneigung)
    const kopf = imRahmen(gesicht.rahmen.ursprung, gesicht.rahmen, 0, -50, -40, s);
    b = b.lerp(kopf, 0.5);
  }
  const verdecker = [kapsel(a, b, r * 0.94)];
  // Rumpf und Schultern (vorn deutlich hinter der Brustlinie der Kette)
  const rumpfMitte = imRahmen(drossel, rahmen, 0, -200, -95, sk);
  const rumpfRadien = new THREE.Vector3(190, 225, 100).multiplyScalar(sk);
  verdecker.push(ellipsoid(rumpfMitte, quaternion, rumpfRadien));
  if (gesicht) verdecker.push(...kopfVerdecker(gesicht.P, gesicht.rahmen, s, index, { mitHals: false }));
  const schatten = [kapsel(a, b, r), ellipsoid(rumpfMitte, quaternion, rumpfRadien)];
  return { verdecker, schatten };
}

/** Hinweis-Code. */
export function koerperHinweisCode(pose, ergebnis, { W, H }) {
  if (!schulternSichtbar(pose, W, H)) return 'schultern';
  const p = ergebnis.anker.position;
  if (p.x < 0 || p.x > W || p.y < 0 || p.y > H) return 'schultern';
  // Der Anhaenger (ca. 10 cm unter der Drosselgrube) muss noch ins Bild passen
  if (p.y - ANHAENGER_UNTER_DROSSEL_MM * ergebnis.anker.pxProMm < 0) return 'schultern';
  const schulter = Math.hypot(pose.P[11].x - pose.P[12].x, pose.P[11].y - pose.P[12].y);
  if (schulter < 0.22 * Math.min(W, H)) return 'naeher';
  return null;
}
