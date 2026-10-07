// Hilfen fuer den Buehnenraum (Pixel des Kamerabilds, X rechts wie angezeigt,
// Y oben, Z zur Betrachterin) und fuer Verdecker-Primitive.

import * as THREE from 'three';

/**
 * Normierte MediaPipe-Punkte in den Buehnenraum:
 *   X = (spiegel ? 1 - x : x) * W,  Y = (1 - y) * H,  Z = -z * W
 * Schreibt in ziel (Float64Array, 3 je Punkt) und gibt es zurueck.
 */
export function zuBuehne(landmarks, W, H, spiegel, ziel) {
  const n = landmarks.length;
  const aus = ziel && ziel.length === n * 3 ? ziel : new Float64Array(n * 3);
  for (let i = 0; i < n; i++) {
    const p = landmarks[i];
    aus[i * 3] = (spiegel ? 1 - p.x : p.x) * W;
    aus[i * 3 + 1] = (1 - p.y) * H;
    aus[i * 3 + 2] = -(p.z || 0) * W;
  }
  return aus;
}

/** Punkte-Array (Float64Array) als Liste von THREE.Vector3. */
export function alsVektoren(puffer, liste) {
  const n = puffer.length / 3;
  const aus = liste && liste.length === n ? liste : Array.from({ length: n }, () => new THREE.Vector3());
  for (let i = 0; i < n; i++) aus[i].set(puffer[i * 3], puffer[i * 3 + 1], puffer[i * 3 + 2]);
  return aus;
}

export const v3 = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

export function mittel(punkte, indizes, ziel = new THREE.Vector3()) {
  ziel.set(0, 0, 0);
  for (const i of indizes) ziel.add(punkte[i]);
  return ziel.multiplyScalar(1 / indizes.length);
}

export function klemme(x, a, b) {
  return x < a ? a : x > b ? b : x;
}

export function glattStufe(x, a, b) {
  const t = klemme((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
}

/**
 * Orthonormaler Rahmen aus Hauptachse y und Hilfsrichtung z (wird zu y
 * orthogonalisiert); x = y × z. Liefert { x, y, z } (neu erzeugt).
 */
export function rahmenAusYZ(yRoh, zRoh) {
  const y = yRoh.clone().normalize();
  const z = zRoh.clone().addScaledVector(y, -zRoh.dot(y));
  if (z.lengthSq() < 1e-12) z.set(0, 0, 1).addScaledVector(y, -y.z);
  z.normalize();
  const x = new THREE.Vector3().crossVectors(y, z).normalize();
  return { x, y, z };
}

/** Rahmen aus Hauptachse x und Hilfsrichtung y; z = x × y. */
export function rahmenAusXY(xRoh, yRoh) {
  const x = xRoh.clone().normalize();
  const y = yRoh.clone().addScaledVector(x, -yRoh.dot(x));
  if (y.lengthSq() < 1e-12) y.set(0, 1, 0).addScaledVector(x, -x.y);
  y.normalize();
  const z = new THREE.Vector3().crossVectors(x, y).normalize();
  return { x, y, z };
}

const basis = new THREE.Matrix4();

/** Quaternion aus Rahmen (Spalten x, y, z). */
export function quaternionAus(rahmen, ziel = new THREE.Quaternion()) {
  basis.makeBasis(rahmen.x, rahmen.y, rahmen.z);
  return ziel.setFromRotationMatrix(basis);
}

/** Newell-Normale eines (fast ebenen) Polygons aus Punktindizes. */
export function newellNormale(punkte, indizes, ziel = new THREE.Vector3()) {
  ziel.set(0, 0, 0);
  for (let k = 0; k < indizes.length; k++) {
    const a = punkte[indizes[k]];
    const b = punkte[indizes[(k + 1) % indizes.length]];
    ziel.x += (a.y - b.y) * (a.z + b.z);
    ziel.y += (a.z - b.z) * (a.x + b.x);
    ziel.z += (a.x - b.x) * (a.y + b.y);
  }
  return ziel.normalize();
}

/** Punkt im Rahmen: ursprung + (x*a + y*b + z*c) * skala. */
export function imRahmen(ursprung, rahmen, a, b, c, skala, ziel = new THREE.Vector3()) {
  return ziel.copy(ursprung)
    .addScaledVector(rahmen.x, a * skala)
    .addScaledVector(rahmen.y, b * skala)
    .addScaledVector(rahmen.z, c * skala);
}

// Primitive (Buehnenraum, Pixel) nach ARCHITEKTUR.md
export const kapsel = (a, b, r) => ({ typ: 'kapsel', a: a.clone(), b: b.clone(), r });

export const ellipsenzylinder = (a, b, quer, rQuer, rTiefe) => ({
  typ: 'ellipsenzylinder', a: a.clone(), b: b.clone(), quer: quer.clone().normalize(), rQuer, rTiefe
});

export const ellipsoid = (mitte, quaternion, radien) => ({
  typ: 'ellipsoid', mitte: mitte.clone(), quaternion: quaternion.clone(), radien: radien.clone()
});

/** Anteil eines Punkts ausserhalb des Bilds (0 = im Bild), Rand in px. */
export function ausserhalb(p, W, H, rand = 0) {
  return p.x < rand || p.x > W - rand || p.y < rand || p.y > H - rand;
}
