// Glaettung: One-Euro-Filter (Casiez, Roussel, Vogel 2012) fuer Skalare,
// Vektoren und Punktwolken sowie Quaternion-Glaettung per slerp.
//
// Zeit in Sekunden. Der Filter ist ein Tiefpass, dessen Grenzfrequenz mit der
// Geschwindigkeit steigt: in Ruhe stark geglaettet (kein Zittern), bei
// schneller Bewegung kaum Verzoegerung.
//   cutoff = minCutoff + beta * |Geschwindigkeit / skala|
// skala ist eine Bezugslaenge (z. B. Handgroesse in px), damit die
// Abstimmung unabhaengig von Aufloesung und Abstand zur Kamera gilt.

import * as THREE from 'three';

const ZWEI_PI = 2 * Math.PI;

/** Glaettungsfaktor eines Tiefpasses erster Ordnung. */
export function glaettungsFaktor(cutoff, dt) {
  const tau = 1 / (ZWEI_PI * cutoff);
  return 1 / (1 + tau / dt);
}

/** Zeitschritt begrenzen (Pausen, gleiche Zeitstempel). */
function zeitschritt(t, tVorher) {
  const dt = t - tVorher;
  if (!(dt > 1e-4)) return 1e-4;
  return Math.min(dt, 0.5);
}

export class EinEuroFilter {
  constructor({ minCutoff = 1, beta = 0, dCutoff = 1 } = {}) {
    this.minCutoff = minCutoff;
    this.beta = beta;
    this.dCutoff = dCutoff;
    this.zuruecksetzen();
  }

  zuruecksetzen() {
    this.x = null;
    this.dx = 0;
    this.t = 0;
  }

  /** Setzt den Zustand hart auf x (z. B. nach Ausreisser). */
  setze(x, t) {
    this.x = x;
    this.dx = 0;
    this.t = t;
    return x;
  }

  filtere(x, t, skala = 1) {
    if (this.x === null || !Number.isFinite(this.x)) return this.setze(x, t);
    const dt = zeitschritt(t, this.t);
    const dx = (x - this.x) / dt;
    this.dx += glaettungsFaktor(this.dCutoff, dt) * (dx - this.dx);
    const cutoff = this.minCutoff + this.beta * Math.abs(this.dx) / (skala || 1);
    this.x += glaettungsFaktor(cutoff, dt) * (x - this.x);
    this.t = t;
    return this.x;
  }
}

/**
 * One-Euro-Filter fuer einen Vektor oder eine Punktwolke (dim Werte).
 * Alle Komponenten teilen sich eine Grenzfrequenz (aus der mittleren
 * Punktgeschwindigkeit), damit starre Bewegungen die Form nicht verzerren.
 * punktDim: Komponenten je Punkt (3 fuer xyz).
 */
export class EinEuroVektor {
  constructor(dim, { minCutoff = 1, beta = 0, dCutoff = 1, punktDim = 3 } = {}) {
    this.dim = dim;
    this.minCutoff = minCutoff;
    this.beta = beta;
    this.dCutoff = dCutoff;
    this.punkte = Math.max(1, dim / punktDim);
    this.x = new Float64Array(dim);
    this.dx = new Float64Array(dim);
    this.t = 0;
    this.leer = true;
    this.letzterCutoff = minCutoff;
  }

  zuruecksetzen() {
    this.leer = true;
    this.dx.fill(0);
  }

  setze(werte, t) {
    for (let i = 0; i < this.dim; i++) this.x[i] = werte[i];
    this.dx.fill(0);
    this.t = t;
    this.leer = false;
    return this.x;
  }

  /** Filtert werte (Array-artig) zur Zeit t; liefert den internen Puffer. */
  filtere(werte, t, skala = 1) {
    if (this.leer) return this.setze(werte, t);
    const dt = zeitschritt(t, this.t);
    const ad = glaettungsFaktor(this.dCutoff, dt);
    let q = 0;
    for (let i = 0; i < this.dim; i++) {
      const d = (werte[i] - this.x[i]) / dt;
      this.dx[i] += ad * (d - this.dx[i]);
      q += this.dx[i] * this.dx[i];
    }
    const geschw = Math.sqrt(q / this.punkte) / (skala || 1);
    const cutoff = this.minCutoff + this.beta * geschw;
    this.letzterCutoff = cutoff;
    const a = glaettungsFaktor(cutoff, dt);
    for (let i = 0; i < this.dim; i++) this.x[i] += a * (werte[i] - this.x[i]);
    this.t = t;
    return this.x;
  }
}

/** One-Euro-Filter fuer THREE.Vector3. */
export class EinEuroVector3 {
  constructor(optionen) {
    this.f = new EinEuroVektor(3, { ...optionen, punktDim: 3 });
    this.aus = new THREE.Vector3();
    this.puffer = [0, 0, 0];
  }

  zuruecksetzen() { this.f.zuruecksetzen(); }

  get leer() { return this.f.leer; }

  setze(v, t) {
    this.puffer[0] = v.x; this.puffer[1] = v.y; this.puffer[2] = v.z;
    const x = this.f.setze(this.puffer, t);
    return this.aus.set(x[0], x[1], x[2]);
  }

  filtere(v, t, skala = 1) {
    this.puffer[0] = v.x; this.puffer[1] = v.y; this.puffer[2] = v.z;
    const x = this.f.filtere(this.puffer, t, skala);
    return this.aus.set(x[0], x[1], x[2]);
  }
}

/**
 * Quaternion-Glaettung: slerp vom geglaetteten zum neuen Wert mit einem
 * Faktor, der wie beim One-Euro-Filter mit der Winkelgeschwindigkeit
 * (rad/s) steigt.
 */
export class QuaternionFilter {
  constructor({ minCutoff = 1, beta = 0.5, dCutoff = 1 } = {}) {
    this.minCutoff = minCutoff;
    this.beta = beta;
    this.dCutoff = dCutoff;
    this.q = new THREE.Quaternion();
    this.hilf = new THREE.Quaternion();
    this.omega = 0;
    this.t = 0;
    this.leer = true;
  }

  zuruecksetzen() {
    this.leer = true;
    this.omega = 0;
  }

  setze(q, t) {
    this.q.copy(q).normalize();
    this.omega = 0;
    this.t = t;
    this.leer = false;
    return this.q;
  }

  filtere(q, t) {
    if (this.leer) return this.setze(q, t);
    const dt = zeitschritt(t, this.t);
    this.hilf.copy(q).normalize();
    // gleiche Hemisphaere (q und -q sind dieselbe Drehung)
    if (this.hilf.dot(this.q) < 0) this.hilf.set(-this.hilf.x, -this.hilf.y, -this.hilf.z, -this.hilf.w);
    const winkel = 2 * Math.acos(Math.min(1, Math.abs(this.hilf.dot(this.q))));
    this.omega += glaettungsFaktor(this.dCutoff, dt) * (winkel / dt - this.omega);
    const cutoff = this.minCutoff + this.beta * this.omega;
    this.q.slerp(this.hilf, glaettungsFaktor(cutoff, dt));
    this.t = t;
    return this.q;
  }
}

/**
 * Weicher Uebergang eines Werts (z. B. Sichtbarkeit) auf ein Ziel mit fester
 * Dauer fuer den vollen Weg 0 -> 1.
 */
export class Blende {
  constructor(dauerEin = 0.25, dauerAus = 0.3) {
    this.dauerEin = dauerEin;
    this.dauerAus = dauerAus;
    this.wert = 0;
  }

  schritt(ziel, dt) {
    if (!(dt > 0)) { this.wert = ziel; return ziel; }
    const dauer = ziel > this.wert ? this.dauerEin : this.dauerAus;
    const schritt = dt / Math.max(1e-3, dauer);
    if (ziel > this.wert) this.wert = Math.min(ziel, this.wert + schritt);
    else this.wert = Math.max(ziel, this.wert - schritt);
    return this.wert;
  }

  setze(w) { this.wert = w; return w; }
}
