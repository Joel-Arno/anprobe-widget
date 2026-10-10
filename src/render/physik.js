/**
 * Physik fuer bewegliche Schmuckteile im Buehnenraum.
 *
 * - Bewegung: Beschleunigung eines Ankers in mm/s^2 aus seinen Bildpositionen
 * - Pendel / PendelSystem: zweiachsige, gedaempfte Pendel fuer modell.pendel
 *   (Ohrhaenger, Kettenanhaenger, Charms). Die Pendelrichtung wird im
 *   Buehnenraum gefuehrt, damit ein Ohrhaenger auch bei geneigtem Kopf
 *   senkrecht nach unten haengt und bei Kopfbewegung traege nachschwingt.
 * - Feder3: kritisch gedaempfte Feder (z. B. Durchhaengen des Armbands)
 *
 * Pro Frame keine Allokationen: alle Hilfsvektoren sind modulweit.
 */
import * as THREE from 'three';

export const ERDBESCHLEUNIGUNG_MM = 9810;
const GRAD = Math.PI / 180;

/**
 * Verhalten je Schmuckart.
 * schwerkraft: Anteil der Erdbeschleunigung, rueckstell: Federkonstante zur
 * Ruhelage (1/s^2), daempfung (1/s), maxWinkel (rad) zur Ruhelage,
 * traegheit: wie stark die Ankerbeschleunigung das Pendel anregt.
 */
export const PENDEL_PROFILE = {
  ohrringe: { schwerkraft: 1, rueckstell: 0, daempfung: 3.2, maxWinkel: 80 * GRAD, traegheit: 1 },
  kette: { schwerkraft: 0.3, rueckstell: 650, daempfung: 22, maxWinkel: 16 * GRAD, traegheit: 0.35 },
  armband: { schwerkraft: 1, rueckstell: 8, daempfung: 4, maxWinkel: 160 * GRAD, traegheit: 0.9 },
  ring: { schwerkraft: 1, rueckstell: 60, daempfung: 4, maxWinkel: 50 * GRAD, traegheit: 0.8 }
};

const SCHRITT_MAX = 1 / 120;
const _a = new THREE.Vector3();
const _b = new THREE.Vector3();
const _c = new THREE.Vector3();
const _r = new THREE.Vector3();
const _g = new THREE.Vector3();
const _p = new THREE.Vector3();
const _d = new THREE.Vector3();
const _ax = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _s0 = new THREE.Vector3();
const _s1 = new THREE.Vector3();
const _s2 = new THREE.Vector3();

/** Orthonormale Basis (ohne Skala, ggf. gespiegelt) aus einer Weltmatrix. */
function basisAus(m, x, y, z) {
  const e = m.elements;
  x.set(e[0], e[1], e[2]).normalize();
  y.set(e[4], e[5], e[6]).normalize();
  z.set(e[8], e[9], e[10]).normalize();
}

/** v (lokal) -> Welt ueber Basis */
function zuWelt(v, x, y, z, ziel) {
  return ziel.set(
    x.x * v.x + y.x * v.y + z.x * v.z,
    x.y * v.x + y.y * v.y + z.y * v.z,
    x.z * v.x + y.z * v.y + z.z * v.z
  );
}

/** Welt -> lokal (Transponierte der orthonormalen Basis) */
function zuLokal(v, x, y, z, ziel) {
  return ziel.set(x.dot(v), y.dot(v), z.dot(v));
}

/**
 * Misst die Beschleunigung eines Ankers in mm/s^2 (Buehnenraum, Y oben).
 * Differenzen in Pixeln werden durch pxProMm geteilt, damit eine sich
 * aendernde Skala keine Scheinbewegung erzeugt.
 */
export class Bewegung {
  constructor({ tau = 0.07, maxMm = 40000 } = {}) {
    this.tau = tau;
    this.maxMm = maxMm;
    this.a = new THREE.Vector3();
    this.v = new THREE.Vector3();
    this.p = new THREE.Vector3();
    this.bereit = 0;
  }

  zuruecksetzen() {
    this.bereit = 0;
    this.a.set(0, 0, 0);
    this.v.set(0, 0, 0);
  }

  /** Liefert this.a (geglaettet). dt in s. */
  messe(position, pxProMm, dt) {
    if (!(dt > 1e-4) || dt > 0.25 || !(pxProMm > 0)) {
      if (dt > 0.25) this.zuruecksetzen();
      if (position) this.p.copy(position);
      return this.a;
    }
    _a.subVectors(position, this.p).divideScalar(pxProMm * dt); // mm/s
    this.p.copy(position);
    if (this.bereit === 0) {
      this.bereit = 1;
      this.v.set(0, 0, 0);
      return this.a;
    }
    if (this.bereit === 1) {
      this.bereit = 2;
      this.v.copy(_a);
      return this.a;
    }
    _b.subVectors(_a, this.v).divideScalar(dt); // mm/s^2
    this.v.copy(_a);
    const l = _b.length();
    if (l > this.maxMm) _b.multiplyScalar(this.maxMm / l);
    const k = 1 - Math.exp(-dt / this.tau);
    this.a.lerp(_b, k);
    return this.a;
  }
}

/**
 * Ein Pendel. Drehpunkt = Ursprung des Knotens, haengende Teile zeigen in
 * Ruhe nach lokal -Y. Der Zustand (Richtung u, Geschwindigkeit w der
 * Pendelspitze) liegt im Buehnenraum.
 */
export class Pendel {
  constructor({ knoten, laengeMm = 20, achse = 'frei' }, profil = PENDEL_PROFILE.ohrringe) {
    this.knoten = knoten;
    this.laenge = Math.max(2, laengeMm || 20);
    this.profil = profil;
    this.q0 = knoten.quaternion.clone();
    // Ruhe-Haengerichtung und Drehachse im Elternrahmen
    this.ruheLokal = new THREE.Vector3(0, -1, 0).applyQuaternion(this.q0).normalize();
    this.achseLokal = achse === 'x' ? new THREE.Vector3(1, 0, 0).applyQuaternion(this.q0)
      : achse === 'z' ? new THREE.Vector3(0, 0, 1).applyQuaternion(this.q0) : null;
    this.u = new THREE.Vector3(0, -1, 0);
    this.w = new THREE.Vector3();
    this.bereit = false;
  }

  zuruecksetzen() {
    this.bereit = false;
    this.w.set(0, 0, 0);
    this.knoten.quaternion.copy(this.q0);
  }

  /** Winkel zur Ruhelage begrenzen; Geschwindigkeit nach aussen abschneiden. */
  begrenze(r) {
    const max = this.profil.maxWinkel;
    const cos = this.u.dot(r);
    if (cos >= Math.cos(max)) return;
    _p.copy(this.u).addScaledVector(r, -cos);
    if (_p.lengthSq() < 1e-10) _p.set(1, 0, 0).addScaledVector(r, -r.x);
    _p.normalize();
    this.u.copy(r).multiplyScalar(Math.cos(max)).addScaledVector(_p, Math.sin(max)).normalize();
    const raus = this.w.dot(_p);
    if (raus > 0) this.w.addScaledVector(_p, -raus);
    this.w.addScaledVector(this.u, -this.w.dot(this.u));
  }

  /**
   * Ein Zeitschritt.
   * schwerkraft: Einheitsvektor (Buehne), aDrehpunkt: mm/s^2 (Buehne).
   */
  schritt(dt, schwerkraft, aDrehpunkt) {
    const eltern = this.knoten.parent;
    if (!eltern) return;
    const pr = this.profil;
    basisAus(eltern.matrixWorld, _s0, _s1, _s2);
    zuWelt(this.ruheLokal, _s0, _s1, _s2, _r).normalize();
    const achse = this.achseLokal ? zuWelt(this.achseLokal, _s0, _s1, _s2, _ax).normalize() : null;
    const G = ERDBESCHLEUNIGUNG_MM * pr.schwerkraft;
    const L = this.laenge;

    if (!this.bereit) {
      // Gleichgewicht als Startlage: kein Einschwingen beim Erscheinen
      this.u.copy(schwerkraft).multiplyScalar(G).addScaledVector(_r, pr.rueckstell * L);
      if (this.u.lengthSq() < 1e-8) this.u.copy(_r);
      this.u.normalize();
      if (achse) this.u.addScaledVector(achse, -this.u.dot(achse)).normalize();
      this.w.set(0, 0, 0);
      this.begrenze(_r);
      this.bereit = true;
    } else {
      const n = Math.min(8, Math.max(1, Math.ceil(dt / SCHRITT_MAX)));
      const h = dt / n;
      const daempf = Math.exp(-pr.daempfung * h);
      for (let i = 0; i < n; i++) {
        // effektive Beschleunigung im Drehpunktsystem: g - a
        _g.copy(schwerkraft).multiplyScalar(G).addScaledVector(aDrehpunkt, -pr.traegheit);
        if (pr.rueckstell > 0) _g.addScaledVector(_c.subVectors(_r, this.u), pr.rueckstell * L);
        _g.addScaledVector(this.u, -_g.dot(this.u));
        this.w.addScaledVector(_g, h).multiplyScalar(daempf);
        _p.copy(this.u).multiplyScalar(L).addScaledVector(this.w, h);
        this.u.copy(_p).normalize();
        if (achse) {
          this.u.addScaledVector(achse, -this.u.dot(achse));
          if (this.u.lengthSq() < 1e-10) this.u.copy(_r);
          this.u.normalize();
          this.w.addScaledVector(achse, -this.w.dot(achse));
        }
        this.w.addScaledVector(this.u, -this.w.dot(this.u));
        this.begrenze(_r);
      }
    }

    // Richtung zurueck in den Elternrahmen; Drehung = kuerzester Bogen * Ruhe
    zuLokal(this.u, _s0, _s1, _s2, _d).normalize();
    _q.setFromUnitVectors(this.ruheLokal, _d);
    this.knoten.quaternion.multiplyQuaternions(_q, this.q0);
  }
}

/** Alle Pendel eines Modellexemplars. */
export class PendelSystem {
  constructor(pendelListe, art = 'ohrringe') {
    const profil = PENDEL_PROFILE[art] || PENDEL_PROFILE.ohrringe;
    this.pendel = (pendelListe || []).filter((p) => p && p.knoten).map((p) => new Pendel(p, profil));
    this.bewegung = new Bewegung();
  }

  get leer() {
    return this.pendel.length === 0;
  }

  zuruecksetzen() {
    this.bewegung.zuruecksetzen();
    for (const p of this.pendel) p.zuruecksetzen();
  }

  /**
   * Setzt voraus, dass die Weltmatrizen des Modells aktuell sind.
   * ankerPos (px), pxProMm, schwerkraft (Einheit, Buehne).
   */
  aktualisiere(dt, ankerPos, pxProMm, schwerkraft) {
    const a = this.bewegung.messe(ankerPos, pxProMm, dt);
    if (this.pendel.length === 0 || !(dt > 0)) return;
    const h = Math.min(dt, 0.1);
    for (const p of this.pendel) {
      p.schritt(h, schwerkraft, a);
      p.knoten.updateMatrixWorld(true);
    }
  }

  /** Ruhelage wiederherstellen (vor dispose des Modells). */
  dispose() {
    for (const p of this.pendel) p.knoten.quaternion.copy(p.q0);
    this.pendel.length = 0;
  }
}

/**
 * Kritisch gedaempfte (bzw. leicht unterdaempfte) Feder fuer Vektoren.
 * omega: Eigenkreisfrequenz (1/s), zeta: Daempfungsgrad (1 = kritisch).
 */
export class Feder3 {
  constructor(omega = 14, zeta = 0.8) {
    this.omega = omega;
    this.zeta = zeta;
    this.x = new THREE.Vector3();
    this.v = new THREE.Vector3();
    this.bereit = false;
  }

  setze(wert) {
    this.x.copy(wert);
    this.v.set(0, 0, 0);
    this.bereit = true;
  }

  /** stoss: zusaetzliche Beschleunigung (z. B. -Ankerbeschleunigung * k). */
  schritt(ziel, dt, stoss = null) {
    if (!this.bereit) {
      this.setze(ziel);
      return this.x;
    }
    const n = Math.min(8, Math.max(1, Math.ceil(dt / SCHRITT_MAX)));
    const h = dt / n;
    const w2 = this.omega * this.omega;
    const d = 2 * this.zeta * this.omega;
    for (let i = 0; i < n; i++) {
      _c.subVectors(ziel, this.x).multiplyScalar(w2).addScaledVector(this.v, -d);
      if (stoss) _c.add(stoss);
      this.v.addScaledVector(_c, h);
      this.x.addScaledVector(this.v, h);
    }
    return this.x;
  }
}

