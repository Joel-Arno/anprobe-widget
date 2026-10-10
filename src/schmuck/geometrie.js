// Geometrie-Bausteine fuer parametrischen Schmuck (alles in Millimetern).
//  - Zufall/Rauschen (deterministisch, damit ein Stueck immer gleich aussieht)
//  - Pfad mit Bogenlaenge und Rahmen (Paralleltransport oder Bezugsnormalen)
//  - Roehre (Draht, Krappen, Schlangenkette), Drehkoerper, aufgeblasene Formen
//  - Kettenglieder als InstancedMesh entlang eines Pfads
//  - Perlen, Brillant-/Stufenschliff, Fassungen, Biegeringe, Verschluesse
//  - Ringschiene (Profil entlang eines Kreises/einer Ellipse)
import * as THREE from 'three';
import { mergeGeometries, mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { perlMaterial, perlFarbvariation, metallMaterial, PERL_VARIANTEN } from './materialien.js';

const PI = Math.PI;
const TAU = Math.PI * 2;
const _v1 = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _v3 = new THREE.Vector3();
const _m = new THREE.Matrix4();

// ---------------------------------------------------------------------------
// Zufall und Rauschen
// ---------------------------------------------------------------------------

/** Deterministischer Zufallsgenerator (mulberry32), liefert 0..1. */
export function zufall(saat = 1) {
  let a = (Math.floor(saat * 9973) ^ 0x9e3779b9) >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Saat aus einem beliebigen Text (z. B. JSON der Spec). */
export function saatAusText(text) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) % 100000;
}

function zufallsRichtung(rnd, ziel = new THREE.Vector3()) {
  const z = rnd() * 2 - 1;
  const w = rnd() * TAU;
  const r = Math.sqrt(1 - z * z);
  return ziel.set(r * Math.cos(w), r * Math.sin(w), z);
}

/**
 * Glatte Zufallsfunktion auf Richtungen (Summe von Sinuswellen in
 * zufaelligen Richtungen). Ergebnis grob in [-1, 1], Mittel 0.
 */
export function kugelRauschen(rnd, { wellen = 8, freqMin = 0.5, freqMax = 1.5 } = {}) {
  const terme = [];
  let summe = 0;
  for (let i = 0; i < wellen; i++) {
    const f = freqMin + (freqMax - freqMin) * rnd();
    const a = 1 / f;
    terme.push({ d: zufallsRichtung(rnd), f: f * PI, p: rnd() * TAU, a });
    summe += a * a * 0.5;
  }
  const norm = 1 / Math.sqrt(summe);
  return (x, y, z) => {
    let s = 0;
    for (const t of terme) s += t.a * Math.sin(t.f * (t.d.x * x + t.d.y * y + t.d.z * z) + t.p);
    return s * norm;
  };
}

// ---------------------------------------------------------------------------
// Pfad
// ---------------------------------------------------------------------------

/**
 * Polylinie mit Bogenlaenge, Tangenten und Normalen.
 * normalen: optionale Bezugsnormalen je Punkt (z. B. Koerpernormalen),
 * sonst Paralleltransport-Rahmen (bei geschlossenen Pfaden verdrehungsfrei verteilt).
 */
export class Pfad {
  constructor(punkte, { geschlossen = false, normalen = null } = {}) {
    this.punkte = punkte;
    this.geschlossen = geschlossen;
    const n = punkte.length;
    this.anzahlSeg = geschlossen ? n : n - 1;
    this.s = new Float64Array(this.anzahlSeg + 1);
    for (let i = 0; i < this.anzahlSeg; i++) {
      this.s[i + 1] = this.s[i] + punkte[i].distanceTo(punkte[(i + 1) % n]);
    }
    this.laenge = this.s[this.anzahlSeg];
    this.tangenten = tangentenVon(punkte, geschlossen);
    if (normalen) {
      this.normalen = normalen.map((nn, i) => {
        const t = this.tangenten[i];
        return nn.clone().addScaledVector(t, -nn.dot(t)).normalize();
      });
    } else {
      this.normalen = transportNormalen(punkte, this.tangenten, geschlossen);
    }
  }

  _ort(s) {
    const L = this.laenge;
    if (this.geschlossen) s = ((s % L) + L) % L;
    else s = Math.min(Math.max(s, 0), L);
    let lo = 0, hi = this.anzahlSeg;
    while (hi - lo > 1) {
      const mid = (lo + hi) >> 1;
      if (this.s[mid] <= s) lo = mid; else hi = mid;
    }
    const d = this.s[lo + 1] - this.s[lo];
    return { i: lo, j: (lo + 1) % this.punkte.length, t: d > 0 ? (s - this.s[lo]) / d : 0 };
  }

  punkt(s, ziel = new THREE.Vector3()) {
    const o = this._ort(s);
    return ziel.lerpVectors(this.punkte[o.i], this.punkte[o.j], o.t);
  }

  tangente(s, ziel = new THREE.Vector3()) {
    const o = this._ort(s);
    return ziel.lerpVectors(this.tangenten[o.i], this.tangenten[o.j], o.t).normalize();
  }

  normale(s, ziel = new THREE.Vector3()) {
    const o = this._ort(s);
    ziel.lerpVectors(this.normalen[o.i], this.normalen[o.j], o.t);
    const t = this.tangente(s, _v3);
    return ziel.addScaledVector(t, -ziel.dot(t)).normalize();
  }

  /** Gleichmaessig abgetastete Punkte zwischen s0 und s1 (Abstand ca. schritt). */
  abtasten(s0, s1, schritt) {
    const n = Math.max(2, Math.ceil(Math.abs(s1 - s0) / schritt) + 1);
    const p = [], nn = [];
    for (let i = 0; i < n; i++) {
      const s = s0 + (s1 - s0) * (i / (n - 1));
      p.push(this.punkt(s));
      nn.push(this.normale(s));
    }
    return { punkte: p, normalen: nn };
  }
}

function tangentenVon(punkte, geschlossen) {
  const n = punkte.length;
  const t = [];
  for (let i = 0; i < n; i++) {
    let a, b;
    if (geschlossen) { a = punkte[(i - 1 + n) % n]; b = punkte[(i + 1) % n]; }
    else { a = punkte[Math.max(0, i - 1)]; b = punkte[Math.min(n - 1, i + 1)]; }
    const v = new THREE.Vector3().subVectors(b, a);
    if (v.lengthSq() < 1e-20) v.set(0, 1, 0);
    t.push(v.normalize());
  }
  return t;
}

function senkrechteZu(t) {
  const a = Math.abs(t.x) < 0.9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
  return a.addScaledVector(t, -a.dot(t)).normalize();
}

/** Rotationsminimierende Rahmen (Doppelreflexion nach Wang et al.). */
export function transportNormalen(punkte, tangenten, geschlossen, start = null) {
  const n = punkte.length;
  const N = new Array(n);
  const r0 = start ? start.clone() : senkrechteZu(tangenten[0]);
  N[0] = r0.addScaledVector(tangenten[0], -r0.dot(tangenten[0])).normalize();
  const schritt = (r, pa, pb, ta, tb) => {
    const v1 = _v1.subVectors(pb, pa);
    const c1 = v1.dot(v1);
    if (c1 < 1e-20) return r.clone();
    const rL = r.clone().addScaledVector(v1, (-2 / c1) * v1.dot(r));
    const tL = ta.clone().addScaledVector(v1, (-2 / c1) * v1.dot(ta));
    const v2 = _v2.subVectors(tb, tL);
    const c2 = v2.dot(v2);
    if (c2 < 1e-20) return rL;
    return rL.addScaledVector(v2, (-2 / c2) * v2.dot(rL));
  };
  for (let i = 0; i < n - 1; i++) {
    N[i + 1] = schritt(N[i], punkte[i], punkte[i + 1], tangenten[i], tangenten[i + 1]).normalize();
  }
  if (geschlossen && n > 2) {
    // Restverdrehung am Schluss gleichmaessig verteilen
    const rEnde = schritt(N[n - 1], punkte[n - 1], punkte[0], tangenten[n - 1], tangenten[0]).normalize();
    const t0 = tangenten[0];
    const winkel = Math.atan2(_v1.crossVectors(rEnde, N[0]).dot(t0), rEnde.dot(N[0]));
    const q = new THREE.Quaternion();
    for (let i = 1; i < n; i++) {
      q.setFromAxisAngle(tangenten[i], winkel * (i / n));
      N[i].applyQuaternion(q).normalize();
    }
  }
  return N;
}

/** Polylinie nach Bogenlaenge gleichmaessig neu abtasten. */
export function neuAbtasten(punkte, anzahl, geschlossen = false) {
  const pf = new Pfad(punkte, { geschlossen, normalen: punkte.map(() => new THREE.Vector3(0, 0, 1)) });
  const res = [];
  const n = geschlossen ? anzahl : anzahl - 1;
  for (let i = 0; i < anzahl; i++) res.push(pf.punkt(pf.laenge * (i / n)));
  return res;
}

/** Glatte Kurve durch Stuetzpunkte (Catmull-Rom, zentripetal). */
export function glatteKurve(stuetzen, anzahl, geschlossen = false) {
  const k = new THREE.CatmullRomCurve3(stuetzen, geschlossen, 'centripetal');
  return k.getSpacedPoints(geschlossen ? anzahl : anzahl - 1).slice(0, anzahl);
}

// ---------------------------------------------------------------------------
// Roehre
// ---------------------------------------------------------------------------

/**
 * Roehre entlang einer Polylinie.
 *  radius:   Zahl oder (i, u) => Zahl, u = Bogenlaenge/Gesamtlaenge
 *  ellipse:  [fN, fB] Querschnitt-Halbachsen relativ zum Radius (N = Normale, B = Binormale)
 *  normalen: Bezugsnormalen je Punkt (sonst Paralleltransport)
 *  kappen:   'rund' | 'flach' | null (nur offene Roehren)
 *  uvLaenge: mm pro Textur-Einheit entlang der Roehre (0 = u von 0..1)
 */
export function roehre(punkte, {
  radius = 0.5, ellipse = [1, 1], segmente = 8, geschlossen = false, kappen = 'rund',
  normalen = null, uvLaenge = 0, uvUmfang = 1, winkel0 = 0
} = {}) {
  let pts = punkte;
  let nrm = normalen;
  const tan0 = tangentenVon(punkte, geschlossen);
  let tang;
  let N;
  if (nrm) {
    N = nrm.map((nn, i) => nn.clone().addScaledVector(tan0[i], -nn.dot(tan0[i])).normalize());
  } else {
    N = transportNormalen(punkte, tan0, geschlossen);
  }
  tang = tan0;
  if (geschlossen) {
    // Ersten Ring am Ende wiederholen: Naht ohne Sprung in den UV-Koordinaten
    pts = [...punkte, punkte[0]];
    tang = [...tan0, tan0[0]];
    N = [...N, N[0]];
  }
  const n = pts.length;
  const s = new Float64Array(n);
  for (let i = 1; i < n; i++) s[i] = s[i - 1] + pts[i].distanceTo(pts[i - 1]);
  const L = s[n - 1] || 1;
  const rad = new Float64Array(n);
  for (let i = 0; i < n; i++) rad[i] = typeof radius === 'function' ? radius(geschlossen ? i % punkte.length : i, s[i] / L) : radius;

  const m = segmente;
  const pos = [], nor = [], uv = [], idx = [];
  const B = new THREE.Vector3(), nn = new THREE.Vector3(), p = new THREE.Vector3();
  const ringe = [];

  const fuegeRingHinzu = (zentrum, T, Nn, r, steigung, uWert, kappenNeigung = 0, kappenRadius = 1) => {
    B.crossVectors(T, Nn);
    const start = pos.length / 3;
    const rx = r * ellipse[0] * kappenRadius, ry = r * ellipse[1] * kappenRadius;
    for (let j = 0; j <= m; j++) {
      const a = winkel0 + (j / m) * TAU;
      const c = Math.cos(a), sn = Math.sin(a);
      p.copy(zentrum).addScaledVector(Nn, c * rx).addScaledVector(B, sn * ry);
      pos.push(p.x, p.y, p.z);
      // Ellipsennormale, dazu Neigung durch Radiusaenderung
      nn.set(0, 0, 0).addScaledVector(Nn, c / Math.max(ellipse[0], 1e-6)).addScaledVector(B, sn / Math.max(ellipse[1], 1e-6)).normalize();
      if (kappenNeigung !== 0) {
        nn.multiplyScalar(Math.cos(kappenNeigung)).addScaledVector(T, Math.sin(kappenNeigung));
      } else if (steigung) {
        nn.addScaledVector(T, -steigung);
      }
      nn.normalize();
      nor.push(nn.x, nn.y, nn.z);
      uv.push(uWert, (j / m) * uvUmfang);
    }
    ringe.push(start);
    return start;
  };

  const verbinde = (a, b) => {
    for (let j = 0; j < m; j++) {
      const i0 = a + j, i1 = a + j + 1, i2 = b + j, i3 = b + j + 1;
      idx.push(i0, i1, i2, i1, i3, i2);
    }
  };

  const uVon = (sv) => (uvLaenge > 0 ? sv / uvLaenge : sv / L);
  const offen = !geschlossen;
  const kappenStufen = Math.max(2, Math.round(m / 2));

  // Startkappe
  let vorher = -1;
  if (offen && kappen === 'rund') {
    const T = tang[0];
    for (let k = kappenStufen; k >= 1; k--) {
      const phi = (k / kappenStufen) * (PI / 2);
      const z = _v1.copy(pts[0]).addScaledVector(T, -rad[0] * Math.sin(phi) * Math.max(ellipse[0], ellipse[1]) * 0.9);
      const r = fuegeRingHinzu(z, T, N[0], rad[0], 0, uVon(0), -phi, Math.cos(phi));
      if (vorher >= 0) verbinde(vorher, r);
      vorher = r;
    }
  } else if (offen && kappen === 'flach') {
    const mitte = pos.length / 3;
    pos.push(pts[0].x, pts[0].y, pts[0].z);
    nor.push(-tang[0].x, -tang[0].y, -tang[0].z);
    uv.push(uVon(0), 0);
    const r = fuegeRingHinzu(pts[0], tang[0], N[0], rad[0], 0, uVon(0), -PI / 2, 1);
    for (let j = 0; j < m; j++) idx.push(mitte, r + j + 1, r + j);
    vorher = -1;
  }

  for (let i = 0; i < n; i++) {
    const ia = Math.max(0, i - 1), ib = Math.min(n - 1, i + 1);
    const ds = s[ib] - s[ia];
    const steigung = ds > 1e-9 ? (rad[ib] - rad[ia]) / ds : 0;
    const r = fuegeRingHinzu(pts[i], tang[i], N[i], rad[i], steigung, uVon(s[i]));
    if (vorher >= 0) verbinde(vorher, r);
    vorher = r;
  }

  // Endkappe
  if (offen && kappen === 'rund') {
    const T = tang[n - 1];
    for (let k = 1; k <= kappenStufen; k++) {
      const phi = (k / kappenStufen) * (PI / 2);
      const z = _v1.copy(pts[n - 1]).addScaledVector(T, rad[n - 1] * Math.sin(phi) * Math.max(ellipse[0], ellipse[1]) * 0.9);
      const r = fuegeRingHinzu(z, T, N[n - 1], rad[n - 1], 0, uVon(L), phi, Math.cos(phi));
      verbinde(vorher, r);
      vorher = r;
    }
  } else if (offen && kappen === 'flach') {
    const r = fuegeRingHinzu(pts[n - 1], tang[n - 1], N[n - 1], rad[n - 1], 0, uVon(L), PI / 2, 1);
    const mitte = pos.length / 3;
    pos.push(pts[n - 1].x, pts[n - 1].y, pts[n - 1].z);
    nor.push(tang[n - 1].x, tang[n - 1].y, tang[n - 1].z);
    uv.push(uVon(L), 0);
    for (let j = 0; j < m; j++) idx.push(mitte, r + j, r + j + 1);
  }

  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  return g;
}

/** Draht durch Stuetzpunkte (glatt), mit runden Enden. */
export function draht(stuetzen, radius, { segmente = 8, aufloesung = 0.25, kappen = 'rund', geschlossen = false } = {}) {
  const k = new THREE.CatmullRomCurve3(stuetzen, geschlossen, 'centripetal');
  const anzahl = Math.max(8, Math.ceil(k.getLength() / aufloesung));
  const pts = k.getSpacedPoints(anzahl);
  if (geschlossen) pts.pop();
  return roehre(pts, { radius, segmente, kappen, geschlossen });
}

// ---------------------------------------------------------------------------
// Hilfen fuer Geometrien
// ---------------------------------------------------------------------------

/** Mehrere Geometrien zu einer vereinen (nur position/normal/uv). Gibt Eingaben frei. */
export function vereinige(geometrien) {
  const liste = geometrien.filter(Boolean).map((g) => {
    let h = g;
    if (!h.index) {
      const n = h.attributes.position.count;
      const ind = new Array(n);
      for (let i = 0; i < n; i++) ind[i] = i;
      h.setIndex(ind);
    }
    if (!h.attributes.uv) {
      h.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(h.attributes.position.count * 2), 2));
    }
    for (const name of Object.keys(h.attributes)) {
      if (!['position', 'normal', 'uv'].includes(name)) h.deleteAttribute(name);
    }
    h.morphAttributes = {};
    return h;
  });
  if (liste.length === 1) return liste[0];
  const erg = mergeGeometries(liste, false);
  for (const g of liste) g.dispose();
  return erg;
}

/** Geometrie skalieren und Normalen korrekt mittransformieren. */
export function skaliere(geo, sx, sy, sz) {
  const p = geo.attributes.position, n = geo.attributes.normal;
  for (let i = 0; i < p.count; i++) {
    p.setXYZ(i, p.getX(i) * sx, p.getY(i) * sy, p.getZ(i) * sz);
    if (n) {
      _v1.set(n.getX(i) / sx, n.getY(i) / sy, n.getZ(i) / sz).normalize();
      n.setXYZ(i, _v1.x, _v1.y, _v1.z);
    }
  }
  p.needsUpdate = true;
  if (n) n.needsUpdate = true;
  return geo;
}

/** Drehkoerper um die Z-Achse aus Profil [[r, z], ...] (offen; Anfang/Ende auf der Achse fuer geschlossene Koerper). */
export function drehkoerper(profil, segmente = 48) {
  const pts = profil.map(([r, z]) => new THREE.Vector2(Math.max(r, 0), z));
  const g = new THREE.LatheGeometry(pts, segmente);
  g.rotateX(PI / 2); // Lathe-Achse Y -> Z
  return g;
}

/** Kreisprofil mit Abrundung: Punkte eines Viertelkreises zwischen zwei Richtungen. */
function bogenPunkte(cx, cz, r, a0, a1, n) {
  const res = [];
  for (let i = 0; i <= n; i++) {
    const a = a0 + (a1 - a0) * (i / n);
    res.push([cx + r * Math.cos(a), cz + r * Math.sin(a)]);
  }
  return res;
}

/**
 * Aufgeblasene (kissenartige) Form aus einem 2D-Umriss in der XY-Ebene.
 * Vorderseite +Z, Rueckseite flacher. Der Umriss muss von mitte aus sternfoermig sein.
 */
export function aufblasen(umriss, { mitte = new THREE.Vector2(), hoehe = 1, rueckHoehe = 0.4, ringe = 12, form = 0.5 } = {}) {
  const m = umriss.length;
  const pos = [], idx = [];
  // Ringe: k = 0 Mitte ... K Rand, Vorderseite, dann Rueckseite (Rand geteilt)
  const K = ringe;
  const rho = (k) => Math.sin((k / K) * (PI / 2));
  const hoeheBei = (r) => Math.pow(Math.max(0, 1 - r * r), form);
  // Vorderseite
  pos.push(mitte.x, mitte.y, hoehe);
  const vorn = [];
  for (let k = 1; k <= K; k++) {
    const r = rho(k);
    vorn.push(pos.length / 3);
    for (let j = 0; j < m; j++) {
      const u = umriss[j];
      pos.push(mitte.x + (u.x - mitte.x) * r, mitte.y + (u.y - mitte.y) * r, hoehe * hoeheBei(r));
    }
  }
  // Rueckseite (ohne Randring)
  const hinten = [];
  for (let k = K - 1; k >= 1; k--) {
    const r = rho(k);
    hinten.push(pos.length / 3);
    for (let j = 0; j < m; j++) {
      const u = umriss[j];
      pos.push(mitte.x + (u.x - mitte.x) * r, mitte.y + (u.y - mitte.y) * r, -rueckHoehe * hoeheBei(r));
    }
  }
  const hintenMitte = pos.length / 3;
  pos.push(mitte.x, mitte.y, -rueckHoehe);

  // Faecher vorn
  for (let j = 0; j < m; j++) idx.push(0, vorn[0] + j, vorn[0] + ((j + 1) % m));
  const band = (a, b) => {
    for (let j = 0; j < m; j++) {
      const j1 = (j + 1) % m;
      idx.push(a + j, b + j, b + j1, a + j, b + j1, a + j1);
    }
  };
  for (let k = 0; k < K - 1; k++) band(vorn[k], vorn[k + 1]);
  // Rand -> Rueckseite
  let letzter = vorn[K - 1];
  for (const h of hinten) { band(letzter, h); letzter = h; }
  for (let j = 0; j < m; j++) idx.push(hintenMitte, letzter + ((j + 1) % m), letzter + j);

  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  // Umlaufsinn pruefen: Vorderseiten-Normale muss +Z zeigen
  g.computeVertexNormals();
  if (g.attributes.normal.getZ(0) < 0) {
    const ind = g.index.array;
    for (let i = 0; i < ind.length; i += 3) { const t = ind[i + 1]; ind[i + 1] = ind[i + 2]; ind[i + 2] = t; }
    g.index.needsUpdate = true;
    g.computeVertexNormals();
  }
  return g;
}

/**
 * Runde Scheibe mit gleichmaessigem Dreiecksnetz (Sechseck-Ringe: Ring k hat 6k Punkte,
 * keine spitzen Faecherdreiecke in der Mitte). Vorderseite +Z.
 *  vorn(x, y, rho), hinten(x, y, rho): Hoehe ueber bzw. unter z = 0 (rho = r/radius, 0..1);
 *  am Rand (rho = 1) sollten beide 0 sein, damit sich die Seiten treffen.
 *  ringe: Anzahl Ringe; randDichte > 1 verdichtet die Ringe zum Rand (fuer runde Kanten)
 */
export function scheibenGeometrie({ radius, vorn, hinten, ringe = 30, randDichte = 1.4 }) {
  const K = ringe;
  const rhoVon = (k) => 1 - Math.pow(1 - k / K, randDichte);
  // Punkte je Ring (2D), Ring 0 = Mitte
  const ringPunkte = [[[0, 0, 0]]];
  for (let k = 1; k <= K; k++) {
    const n = 6 * k, rho = rhoVon(k), liste = [];
    for (let j = 0; j < n; j++) {
      const w = (j / n) * TAU;
      liste.push([Math.cos(w) * rho * radius, Math.sin(w) * rho * radius, rho]);
    }
    ringPunkte.push(liste);
  }
  const pos = [], idx = [];
  for (const seite of [1, -1]) {
    const basis = [];
    for (const ring of ringPunkte) {
      basis.push(pos.length / 3);
      for (const [x, y, rho] of ring) {
        const z = seite > 0 ? vorn(x, y, rho) : -hinten(x, y, rho);
        pos.push(x, y, z);
      }
    }
    // Ringe k und k+1 nach Winkel verweben
    for (let k = 0; k < K; k++) {
      const n1 = ringPunkte[k].length, n2 = ringPunkte[k + 1].length;
      const a = (i) => basis[k] + (i % n1), b = (j) => basis[k + 1] + (j % n2);
      const tri = (p, q, r) => (seite > 0 ? idx.push(p, q, r) : idx.push(p, r, q));
      if (n1 === 1) {
        for (let j = 0; j < n2; j++) tri(a(0), b(j), b(j + 1));
        continue;
      }
      let i = 0, j = 0;
      while (i < n1 || j < n2) {
        const wa = (i + 1) / n1, wb = (j + 1) / n2;
        if (j < n2 && (wb <= wa || i >= n1)) { tri(a(i), b(j), b(j + 1)); j++; }
        else { tri(a(i), b(j), a(i + 1)); i++; }
      }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  // Randpunkte beider Seiten verschweissen: weiche, geschlossene Kante
  const m = mergeVertices(g, 1e-5);
  g.dispose();
  m.computeVertexNormals();
  return m;
}

// ---------------------------------------------------------------------------
// Kettenglieder
// ---------------------------------------------------------------------------

/**
 * Kettentypen relativ zur Staerke W (= aeussere Breite eines Glieds in mm).
 *  laenge: Aussenlaenge/W, draht: Drahtdurchmesser/W, exponent: Superellipse (2 = oval),
 *  flach: Drahtquerschnitt quer zur Gliedebene, abwechselnd: Glieder um 90 Grad gedreht,
 *  verdrillt: Panzer (Enden +-45 Grad), abflachung: Hoehe gesamt, schnitt: Diamantierung
 */
export const KETTENTYPEN = {
  anker:     { name: 'Ankerkette',  laenge: 1.42, draht: 0.24, exponent: 2.4, flach: 0.92, abwechselnd: true },
  erbs:      { name: 'Erbskette',   laenge: 1.16, draht: 0.27, exponent: 2.0, flach: 0.74, abwechselnd: true },
  panzer:    { name: 'Panzerkette', laenge: 1.55, draht: 0.31, exponent: 2.3, flach: 1.0, verdrillt: true, abflachung: 0.62, schnitt: 0.86 },
  figaro:    { name: 'Figarokette', laenge: 1.45, draht: 0.29, exponent: 2.3, flach: 1.0, verdrillt: true, abflachung: 0.6, schnitt: 0.86, langLaenge: 2.9 },
  paperclip: { name: 'Paperclip',   laenge: 2.9,  draht: 0.2,  exponent: 5.0, flach: 0.78, abwechselnd: true },
  kugel:     { name: 'Kugelkette' },
  schlange:  { name: 'Schlangenkette' },
  seil:      { name: 'Kordelkette' }
};

/** Geometrie eines Glieds: lange Achse Y, Gliedebene XY, Ebenennormale Z. */
export function gliedGeometrie(typ, W, { pfadSeg = 16, radSeg = 6, laengeFaktor = null } = {}) {
  const k = KETTENTYPEN[typ] || KETTENTYPEN.anker;
  const d = k.draht * W;
  const Lo = (laengeFaktor || k.laenge) * W;
  const a = Lo / 2 - d / 2;   // Halbachse lang (Mittellinie)
  const b = W / 2 - d / 2;    // Halbachse quer
  const q = k.exponent;
  // Mittellinie als Superellipse, nach Bogenlaenge gleichmaessig verteilt
  const dicht = [];
  for (let i = 0; i < 256; i++) {
    const t = (i / 256) * TAU;
    const c = Math.cos(t), s = Math.sin(t);
    dicht.push(new THREE.Vector3(b * Math.sign(c) * Math.pow(Math.abs(c), 2 / q), a * Math.sign(s) * Math.pow(Math.abs(s), 2 / q), 0));
  }
  const pts = neuAbtasten(dicht, pfadSeg, true);
  const geo = roehre(pts, {
    radius: d / 2, ellipse: [k.flach, 1], segmente: radSeg, geschlossen: true,
    normalen: pts.map(() => new THREE.Vector3(0, 0, 1))
  });
  geo.deleteAttribute('uv');
  if (k.verdrillt) {
    // Panzer: um die Laengsachse verdrillt, abgeflacht und diamantiert
    const p = geo.attributes.position, n = geo.attributes.normal;
    const tmax = PI / 4;
    let zmax = 0;
    for (let i = 0; i < p.count; i++) {
      const y = p.getY(i);
      const w = tmax * THREE.MathUtils.clamp(y / (a + d / 2), -1, 1);
      const c = Math.cos(w), s = Math.sin(w);
      const x = p.getX(i), z = p.getZ(i);
      const nx = n.getX(i), nz = n.getZ(i);
      const xr = x * c + z * s, zr = (-x * s + z * c) * k.abflachung;
      p.setXYZ(i, xr, y, zr);
      _v1.set(nx * c + nz * s, n.getY(i), (-nx * s + nz * c) / k.abflachung).normalize();
      n.setXYZ(i, _v1.x, _v1.y, _v1.z);
      zmax = Math.max(zmax, Math.abs(zr));
    }
    const zs = zmax * k.schnitt;
    for (let i = 0; i < p.count; i++) {
      const z = p.getZ(i);
      if (Math.abs(z) >= zs) {
        p.setZ(i, Math.sign(z) * zs);
        n.setXYZ(i, 0, 0, Math.sign(z));
      }
    }
  }
  geo.computeBoundingSphere();
  return { geometrie: geo, innen: Lo - 2 * d, aussen: Lo, draht: d };
}

/**
 * Kette entlang eines Pfads zwischen s0 und s1 (Bogenlaenge).
 * Liefert eine Gruppe mit InstancedMesh(es). Normalen des Pfads geben die
 * Auflageflaeche an (Panzer liegt flach, Anker steht +-45 Grad).
 */
export function ketteEntlang(pfad, { typ = 'anker', staerkeMm = 1.2, s0 = 0, s1 = null, material, res, saat = 1, qualitaet = 1 }) {
  const gruppe = new THREE.Group();
  gruppe.name = `kette-${typ}`;
  if (s1 === null) s1 = s0 + pfad.laenge;
  const laenge = s1 - s0;
  const geschlossen = pfad.geschlossen && Math.abs(laenge - pfad.laenge) < 1e-6;
  const W = staerkeMm;
  const rnd = zufall(saat);

  if (typ === 'kugel') return kugelKette(pfad, s0, s1, W, material, res, gruppe);
  if (typ === 'schlange') return schlangenKette(pfad, s0, s1, W, res, gruppe, material);
  if (typ === 'seil') return seilKette(pfad, s0, s1, W, material, res, gruppe, qualitaet);

  const k = KETTENTYPEN[typ] || KETTENTYPEN.anker;
  // Detailstufe nach erwarteter Gliederzahl, damit lange Ketten unter dem Budget bleiben
  const grobAnzahl = laenge / ((k.laenge - 2 * k.draht) * W);
  const budget = 90000 * qualitaet;
  let pfadSeg = 18, radSeg = 7;
  while (grobAnzahl * pfadSeg * radSeg * 2 > budget && pfadSeg > 10) { pfadSeg -= 2; radSeg = Math.max(5, radSeg - 1); }

  const glieder = [];
  if (typ === 'figaro') {
    const kurz = gliedGeometrie('figaro', W, { pfadSeg, radSeg });
    const lang = gliedGeometrie('figaro', W, { pfadSeg: pfadSeg + 6, radSeg, laengeFaktor: k.langLaenge });
    glieder.push({ geo: res.eigen(kurz.geometrie), innen: kurz.innen }, { geo: res.eigen(lang.geometrie), innen: lang.innen });
  } else {
    const g = gliedGeometrie(typ, W, { pfadSeg, radSeg });
    glieder.push({ geo: res.eigen(g.geometrie), innen: g.innen });
  }
  const muster = typ === 'figaro' ? [0, 0, 0, 1] : [0];
  const musterLaenge = muster.reduce((sum, i) => sum + glieder[i].innen, 0);
  let anzahl = Math.max(2, Math.round((laenge / musterLaenge) * muster.length));
  if (geschlossen && k.abwechselnd && anzahl % 2) anzahl++;
  let summe = 0;
  for (let i = 0; i < anzahl; i++) summe += glieder[muster[i % muster.length]].innen;
  const faktor = laenge / summe;

  const matrizen = glieder.map(() => []);
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
  const T = new THREE.Vector3(), N = new THREE.Vector3(), Bn = new THREE.Vector3();
  const X = new THREE.Vector3(), Z = new THREE.Vector3();
  let e = s0;
  const basis = k.verdrillt ? 0 : PI / 4;
  for (let i = 0; i < anzahl; i++) {
    const art = muster[i % muster.length];
    const inner = glieder[art].innen * faktor;
    pfad.punkt(e, a);
    pfad.punkt(e + inner, b);
    c.addVectors(a, b).multiplyScalar(0.5);
    T.subVectors(b, a).normalize();
    pfad.normale(e + inner / 2, N);
    N.addScaledVector(T, -N.dot(T)).normalize();
    Bn.crossVectors(T, N);
    const w = basis + (k.abwechselnd && i % 2 ? PI / 2 : 0) + (rnd() - 0.5) * (k.verdrillt ? 0.08 : 0.22);
    Z.copy(N).multiplyScalar(Math.cos(w)).addScaledVector(Bn, Math.sin(w));
    X.crossVectors(T, Z);
    const mat = new THREE.Matrix4().makeBasis(X, T, Z).setPosition(c);
    matrizen[art].push(mat);
    e += inner;
  }
  glieder.forEach((gl, art) => {
    if (!matrizen[art].length) return;
    const im = new THREE.InstancedMesh(gl.geo, material, matrizen[art].length);
    matrizen[art].forEach((mm, i) => im.setMatrixAt(i, mm));
    im.instanceMatrix.needsUpdate = true;
    im.computeBoundingSphere();
    im.castShadow = true;
    im.name = 'glieder';
    gruppe.add(im);
  });
  gruppe.userData.gliederAnzahl = anzahl;
  return gruppe;
}

function kugelKette(pfad, s0, s1, W, material, res, gruppe) {
  const teilung = W * 1.32;
  const anzahl = Math.max(2, Math.round((s1 - s0) / teilung));
  const t = (s1 - s0) / anzahl;
  const kugel = res.eigen(kugelGeometrie(W / 2, 3));
  const steg = res.eigen(new THREE.CylinderGeometry(W * 0.13, W * 0.13, t, 6, 1, true));
  const ik = new THREE.InstancedMesh(kugel, material, anzahl);
  const is = new THREE.InstancedMesh(steg, material, anzahl);
  const p = new THREE.Vector3(), q = new THREE.Vector3(), T = new THREE.Vector3();
  const quat = new THREE.Quaternion(), eins = new THREE.Vector3(1, 1, 1);
  for (let i = 0; i < anzahl; i++) {
    const s = s0 + t * (i + 0.5);
    pfad.punkt(s, p);
    ik.setMatrixAt(i, _m.compose(p, quat.identity(), eins));
    pfad.punkt(s + t * 0.5, q);
    pfad.tangente(s + t * 0.5, T);
    quat.setFromUnitVectors(new THREE.Vector3(0, 1, 0), T);
    is.setMatrixAt(i, _m.compose(q, quat, eins));
  }
  ik.name = 'glieder';
  is.name = 'stege';
  for (const im of [ik, is]) { im.instanceMatrix.needsUpdate = true; im.computeBoundingSphere(); im.castShadow = true; gruppe.add(im); }
  return gruppe;
}

function schlangenKette(pfad, s0, s1, W, res, gruppe, material) {
  const { punkte, normalen } = pfad.abtasten(s0, s1, Math.max(0.25, W * 0.35));
  const geo = res.eigen(roehre(punkte, {
    radius: W / 2, segmente: 12, kappen: 'rund', normalen,
    uvLaenge: W * 0.62, uvUmfang: 4
  }));
  // eigene Materialvariante mit Schuppen-Normalen (gleiches Metall)
  const metall = material && material.userData && material.userData.metallName;
  const mesh = new THREE.Mesh(geo, metall ? metallMaterial(res, metall, 'schlange') : material);
  mesh.castShadow = true;
  mesh.name = 'schlange';
  gruppe.add(mesh);
  return gruppe;
}

function seilKette(pfad, s0, s1, W, material, res, gruppe, qualitaet) {
  // Kordel: drei verdrillte Straenge, leicht gegliedert
  const straenge = 3;
  const steigung = W * 2.3;          // Ganghoehe der Verdrillung
  const rS = W * 0.29, rO = W * 0.23; // Strangradius, Abstand von der Mitte
  const schritt = Math.max(0.12, steigung / (qualitaet >= 1 ? 12 : 9));
  const { punkte, normalen } = pfad.abtasten(s0, s1, schritt);
  const T = tangentenVon(punkte, false);
  const geos = [];
  for (let k = 0; k < straenge; k++) {
    const pts = [];
    let s = 0;
    for (let i = 0; i < punkte.length; i++) {
      if (i) s += punkte[i].distanceTo(punkte[i - 1]);
      const w = (s / steigung) * TAU + (k / straenge) * TAU;
      const N = normalen[i];
      const Bv = _v1.crossVectors(T[i], N);
      pts.push(punkte[i].clone().addScaledVector(N, Math.cos(w) * rO).addScaledVector(Bv, Math.sin(w) * rO));
    }
    const geo = roehre(pts, {
      radius: (i, u) => rS * (0.9 + 0.1 * Math.abs(Math.cos(u * (punkte.length * schritt) / (steigung / 3) * PI))),
      segmente: 6, kappen: 'rund'
    });
    geo.deleteAttribute('uv');
    geos.push(geo);
  }
  const mesh = new THREE.Mesh(res.eigen(vereinige(geos)), material);
  mesh.castShadow = true;
  mesh.name = 'kordel';
  gruppe.add(mesh);
  return gruppe;
}

/** Glatte Kugel (Ikosaeder-Unterteilung, geschweisst). */
export function kugelGeometrie(radius, detail = 3) {
  const g = new THREE.IcosahedronGeometry(radius, detail);
  g.deleteAttribute('uv');
  g.deleteAttribute('normal');
  const m = mergeVertices(g);
  g.dispose();
  m.computeVertexNormals();
  return m;
}

// ---------------------------------------------------------------------------
// Perlen
// ---------------------------------------------------------------------------

/**
 * Suesswasserperle, Bohrachse Y. groesse = Durchmesser quer zur Bohrung.
 * form: rund | barock | tropfen | button | reis; saat waehlt die Unregelmaessigkeit.
 * Bei 'tropfen' sitzt die schmale Seite oben (+Y).
 */
export function perlenGeometrie({ durchmesser = 6, form = 'rund', saat = 1, detail = null }) {
  const det = detail ?? THREE.MathUtils.clamp(Math.round(durchmesser * 1.15), 5, 14);
  const g = new THREE.IcosahedronGeometry(1, det);
  g.deleteAttribute('uv');
  g.deleteAttribute('normal');
  const m = mergeVertices(g);
  g.dispose();
  const rnd = zufall(saat * 7.31 + 3);
  const grob = kugelRauschen(rnd, { wellen: 7, freqMin: 0.35, freqMax: 0.9 });
  const fein = kugelRauschen(rnd, { wellen: 9, freqMin: 1.0, freqMax: 1.8 });
  const ax = 1 + (rnd() - 0.5) * 0.05, ay = 1 + (rnd() - 0.5) * 0.06, az = 1 + (rnd() - 0.5) * 0.05;
  const barockStreck = 1.12 + rnd() * 0.22;
  const p = m.attributes.position;
  const r = durchmesser / 2;
  for (let i = 0; i < p.count; i++) {
    let x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    let f;
    switch (form) {
      case 'barock': {
        f = 1 + 0.085 * grob(x, y, z) + 0.035 * fein(x, y, z);
        y *= barockStreck;
        break;
      }
      case 'tropfen': {
        f = 1 + 0.018 * grob(x, y, z) + 0.006 * fein(x, y, z);
        const oben = Math.max(0, y);
        const schmal = 1 - 0.3 * Math.pow(oben, 1.6);
        x *= schmal; z *= schmal;
        y = y * 1.24 + 0.06 * (1 - y * y);
        break;
      }
      case 'button': {
        f = 1 + 0.02 * grob(x, y, z) + 0.006 * fein(x, y, z);
        y = y > 0 ? y * 0.8 : y * 0.52;
        break;
      }
      case 'reis': {
        f = 1 + 0.03 * grob(x, y, z) + 0.01 * fein(x, y, z);
        y *= 1.5;
        break;
      }
      default: {
        f = 1 + 0.02 * grob(x, y, z) + 0.006 * fein(x, y, z);
        x *= ax; y *= ay; z *= az;
      }
    }
    p.setXYZ(i, x * f * r, y * f * r, z * f * r);
  }
  m.computeVertexNormals();
  m.computeBoundingBox();
  m.computeBoundingSphere();
  return m;
}

/** Hoehe (entlang Y) einer Perlenform relativ zum Durchmesser. */
export function perlenStreckung(form) {
  return { barock: 1.25, tropfen: 1.3, button: 0.66, reis: 1.5 }[form] || 1;
}

/**
 * Viele Perlen als InstancedMeshes (je Form-Variante x Material-Variante).
 * lagen: [{ position, quaternion }] (Bohrachse = lokale Y-Achse).
 */
export function perlenInstanzen(lagen, { durchmesser, form = 'rund', farbe = 'weiss', res, saat = 1, formVarianten = 3, detail = null }) {
  const gruppe = new THREE.Group();
  gruppe.name = 'perlen';
  const rnd = zufall(saat + 11);
  const geos = [];
  for (let v = 0; v < formVarianten; v++) {
    geos.push(res.geteilt(`perlgeo:${durchmesser.toFixed(2)}:${form}:${v}:${detail}`, () => perlenGeometrie({ durchmesser, form, saat: v + 1, detail })));
  }
  const toepfe = new Map();
  const farbeTmp = new THREE.Color();
  const eins = new THREE.Vector3(1, 1, 1);
  const s = new THREE.Vector3();
  lagen.forEach((l) => {
    const gv = Math.floor(rnd() * formVarianten);
    const mv = Math.floor(rnd() * PERL_VARIANTEN);
    const key = gv * 10 + mv;
    if (!toepfe.has(key)) toepfe.set(key, { gv, mv, eintraege: [] });
    // Zufaellige Drehung um die Bohrachse und kleine Groessenstreuung
    const dreh = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), rnd() * TAU);
    const q = l.quaternion.clone().multiply(dreh);
    const g = 1 + (rnd() - 0.5) * 0.06;
    s.copy(eins).multiplyScalar(g);
    toepfe.get(key).eintraege.push({ m: new THREE.Matrix4().compose(l.position, q, s.clone()), c: perlFarbvariation(rnd, farbeTmp).clone() });
  });
  for (const t of toepfe.values()) {
    const mat = perlMaterial(res, farbe, t.mv);
    const im = new THREE.InstancedMesh(geos[t.gv], mat, t.eintraege.length);
    t.eintraege.forEach((e, i) => { im.setMatrixAt(i, e.m); im.setColorAt(i, e.c); });
    im.instanceMatrix.needsUpdate = true;
    if (im.instanceColor) im.instanceColor.needsUpdate = true;
    im.computeBoundingSphere();
    im.castShadow = true;
    im.name = 'perlen';
    gruppe.add(im);
  }
  return gruppe;
}

/** Einzelne Perle als Mesh (eigene Form-Saat, eigenes Material). */
export function perlenMesh({ durchmesser, form = 'rund', farbe = 'weiss', res, saat = 1, detail = null }) {
  const geo = res.geteilt(`perlgeo:${durchmesser.toFixed(2)}:${form}:s${saat}:${detail}`, () => perlenGeometrie({ durchmesser, form, saat, detail }));
  const mesh = new THREE.Mesh(geo, perlMaterial(res, farbe, saat));
  mesh.castShadow = true;
  mesh.name = 'perle';
  return mesh;
}

// ---------------------------------------------------------------------------
// Steine
// ---------------------------------------------------------------------------

/**
 * Facettierter Stein, Tafel +Z, Rundiste in der XY-Ebene um z = 0.
 * schliff: brillant | oval | tropfen | smaragd. groesse = Breite (X).
 * Rueckgabe: { geometrie, rx, ry, krone, pavillon, rundiste }
 */
export function steinGeometrie({ groesse = 4, schliff = 'brillant' } = {}) {
  if (schliff === 'smaragd') return stufenschliff(groesse);
  const R = groesse / 2;
  const tisch = 0.575 * R;
  const kw = THREE.MathUtils.degToRad(34.5);
  const pw = THREE.MathUtils.degToRad(40.8);
  const g = 0.03 * groesse;
  const hc = (R - tisch) * Math.tan(kw);
  const hp = R * Math.tan(pw);
  const c22 = Math.cos(PI / 8);
  const rhoS = tisch * c22 + 0.52 * (R - tisch * c22);
  const zS = (R - rhoS * c22) * Math.tan(kw);
  const rhoL = 0.24 * R;
  const zL = -(R - rhoL * c22) * Math.tan(pw);
  const gz = g / 2;
  const P = (r, w, z) => new THREE.Vector3(r * Math.cos(w), r * Math.sin(w), z);
  const T = [], S = [], G = [], H = [], Gu = [], Hu = [], Lp = [];
  for (let j = 0; j < 8; j++) {
    const w = (j * PI) / 4, wm = w + PI / 8;
    T.push(P(tisch, w, gz + hc));
    S.push(P(rhoS, wm, gz + zS));
    G.push(P(R, w, gz));
    H.push(P(R, wm, gz));
    Gu.push(P(R, w, -gz));
    Hu.push(P(R, wm, -gz));
    Lp.push(P(rhoL, wm, -gz + zL));
  }
  const tafelMitte = new THREE.Vector3(0, 0, gz + hc);
  const kalette = new THREE.Vector3(0, 0, -gz - hp);
  const dreiecke = [];
  const D = (a, b, c) => dreiecke.push([a, b, c]);
  for (let j = 0; j < 8; j++) {
    const j1 = (j + 1) % 8, jm = (j + 7) % 8;
    D(tafelMitte, T[j], T[j1]);                 // Tafel
    D(T[j], T[j1], S[j]);                        // Sternfacette
    D(T[j], S[jm], G[j]); D(T[j], G[j], S[j]);  // Hauptfacette Krone (Drachen)
    D(S[j], G[j], H[j]); D(S[j], H[j], G[j1]);  // obere Rundistenfacetten
    D(G[j], Gu[j], H[j]); D(H[j], Gu[j], Hu[j]); // Rundiste
    D(H[j], Hu[j], G[j1]); D(G[j1], Hu[j], Gu[j1]);
    D(Gu[j], Hu[j], Lp[j]); D(Hu[j], Gu[j1], Lp[j]); // untere Rundistenfacetten
    D(Gu[j], Lp[j], kalette); D(Gu[j], kalette, Lp[jm]); // Pavillon-Hauptfacetten
  }
  let rx = R, ry = R;
  if (schliff === 'oval' || schliff === 'tropfen') {
    const v = 1.38;
    ry = R * v;
    const alle = new Set();
    dreiecke.forEach((tri) => tri.forEach((p) => alle.add(p)));
    for (const p of alle) {
      p.y *= v;
      if (schliff === 'tropfen') {
        const t = THREE.MathUtils.clamp(p.y / ry, -1, 1);
        p.x *= 1 - 0.42 * Math.pow(Math.max(0, t), 1.35);
        p.y += 0.08 * R * (1 - t * t);
      }
    }
  }
  return { geometrie: dreieckeZuGeometrie(dreiecke), rx, ry, krone: hc + gz, pavillon: hp + gz, rundiste: g };
}

function stufenschliff(groesse) {
  const rx = groesse / 2, ry = rx * 1.4;
  const ecke = 0.28;
  const hc = groesse * 0.14, hp = groesse * 0.42, g = groesse * 0.03, gz = g / 2;
  const achteck = (sx, sy, z) => {
    const e = ecke * Math.min(sx, sy);
    return [
      [sx - e, sy], [-sx + e, sy], [-sx, sy - e], [-sx, -sy + e],
      [-sx + e, -sy], [sx - e, -sy], [sx, -sy + e], [sx, sy - e]
    ].map(([x, y]) => new THREE.Vector3(x, y, z));
  };
  const ringe = [
    achteck(rx * 0.7, ry * 0.78, gz + hc),
    achteck(rx * 0.8, ry * 0.86, gz + hc * 0.68),
    achteck(rx * 0.9, ry * 0.93, gz + hc * 0.34),
    achteck(rx, ry, gz),
    achteck(rx, ry, -gz),
    achteck(rx * 0.72, ry * 0.8, -gz - hp * 0.36),
    achteck(rx * 0.42, ry * 0.58, -gz - hp * 0.72),
    achteck(rx * 0.06, ry * 0.32, -gz - hp)
  ];
  const dreiecke = [];
  const oben = new THREE.Vector3(0, 0, gz + hc);
  for (let j = 0; j < 8; j++) dreiecke.push([oben, ringe[0][j], ringe[0][(j + 1) % 8]]);
  for (let r = 0; r < ringe.length - 1; r++) {
    for (let j = 0; j < 8; j++) {
      const j1 = (j + 1) % 8;
      dreiecke.push([ringe[r][j], ringe[r + 1][j], ringe[r + 1][j1]], [ringe[r][j], ringe[r + 1][j1], ringe[r][j1]]);
    }
  }
  const unten = new THREE.Vector3(0, 0, -gz - hp);
  const l = ringe[ringe.length - 1];
  for (let j = 0; j < 8; j++) dreiecke.push([unten, l[(j + 1) % 8], l[j]]);
  return { geometrie: dreieckeZuGeometrie(dreiecke), rx, ry, krone: hc + gz, pavillon: hp + gz, rundiste: g };
}

// Konvexer Koerper aus Dreiecken: Umlaufsinn nach aussen, flache Normalen
function dreieckeZuGeometrie(dreiecke) {
  const pos = [];
  const mitte = new THREE.Vector3();
  let n = 0;
  dreiecke.forEach((t) => t.forEach((p) => { mitte.add(p); n++; }));
  mitte.multiplyScalar(1 / n);
  const e1 = new THREE.Vector3(), e2 = new THREE.Vector3(), nn = new THREE.Vector3(), sp = new THREE.Vector3();
  for (const [a, b, c] of dreiecke) {
    e1.subVectors(b, a); e2.subVectors(c, a); nn.crossVectors(e1, e2);
    if (nn.lengthSq() < 1e-14) continue;
    sp.addVectors(a, b).add(c).multiplyScalar(1 / 3).sub(mitte);
    if (nn.dot(sp) >= 0) pos.push(a.x, a.y, a.z, b.x, b.y, b.z, c.x, c.y, c.z);
    else pos.push(a.x, a.y, a.z, c.x, c.y, c.z, b.x, b.y, b.z);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.computeVertexNormals();
  return g;
}

// ---------------------------------------------------------------------------
// Fassungen
// ---------------------------------------------------------------------------

/**
 * Krappenfassung (Korb) fuer einen Stein mit Tafel +Z, Rundiste bei z = 0.
 * anzahl 4 oder 6, winkel0 = Winkel der ersten Krappe in der XY-Ebene.
 * Rueckgabe: { geometrie, basisZ } (basisZ = tiefster Punkt des Korbs)
 */
export function krappenGeometrie({ stein, anzahl = 4, winkel0 = PI / 4, draht = null, tiefe = 1.0, leicht = false }) {
  const { rx, ry, krone, pavillon } = stein;
  const R = Math.max(rx, ry);
  const dr = draht ?? Math.max(0.42, R * 0.17);
  const basisZ = -pavillon * tiefe - dr * 0.6;
  const geos = [];
  for (let k = 0; k < anzahl; k++) {
    const w = winkel0 + (k / anzahl) * TAU;
    const ex = Math.cos(w) * rx, ey = Math.sin(w) * ry;
    const rho = Math.hypot(ex, ey);
    const ux = ex / rho, uy = ey / rho;
    const at = (s, z) => new THREE.Vector3(ux * s, uy * s, z);
    const aussen = rho + dr * 0.55;
    const stuetzen = [
      at(rho * 0.34, basisZ + dr * 0.2),
      at(rho * 0.62, -pavillon * 0.62),
      at(aussen, -pavillon * 0.16),
      at(aussen, krone * 0.22),
      at(rho * 0.9, krone * 0.46 + dr * 0.15)
    ];
    geos.push(drahtVerjuengt(stuetzen, dr / 2, 0.82, leicht ? 5 : 8, leicht ? 0.3 : 0.12));
  }
  // Galerie-Ringe verbinden die Krappen
  const rs = leicht ? 20 : 48, qs = leicht ? 5 : 8;
  geos.push(ellipsenRing(rx * 0.74, ry * 0.74, -pavillon * 0.5, dr * 0.36, rs, qs));
  if (!leicht) geos.push(ellipsenRing(rx * 0.36, ry * 0.36, basisZ + dr * 0.25, dr * 0.42, rs, qs));
  return { geometrie: vereinige(geos), basisZ, draht: dr };
}

function drahtVerjuengt(stuetzen, r, ende, segmente, schritt = 0.12) {
  const k = new THREE.CatmullRomCurve3(stuetzen, false, 'centripetal');
  const n = Math.max(8, Math.ceil(k.getLength() / schritt));
  const pts = k.getSpacedPoints(n - 1);
  return roehre(pts, { radius: (i, u) => r * (1 - (1 - ende) * u), segmente, kappen: 'rund' });
}

function ellipsenRing(rx, ry, z, r, segmente = 48, querSegmente = 8) {
  const pts = [];
  for (let i = 0; i < segmente; i++) {
    const w = (i / segmente) * TAU;
    pts.push(new THREE.Vector3(Math.cos(w) * rx, Math.sin(w) * ry, z));
  }
  return roehre(pts, { radius: r, segmente: querSegmente, geschlossen: true, normalen: pts.map(() => new THREE.Vector3(0, 0, 1)) });
}

/** Zargenfassung (umlaufender Rand) fuer einen Stein, Tafel +Z. */
export function zargenGeometrie({ stein, wand = null, boden = true }) {
  const { rx, ry, krone, pavillon } = stein;
  const R = rx;
  const w = wand ?? Math.max(0.32, R * 0.15);
  const zO = krone * 0.32;           // Oberkante der Zarge (ueber der Rundiste)
  const zU = -pavillon * 0.6;        // Unterkante
  const lippe = R * 0.07;
  // gegen den Uhrzeigersinn in (r, z): Boden nach aussen, Aussenwand hoch, Lippe, Innenwand runter
  const profil = [];
  if (boden) profil.push([0, zU], [R * 0.55, zU]);
  else profil.push([R * 0.62, zU + w * 0.2], [R * 0.75, zU]);
  profil.push(
    [R * 0.86, zU + w * 0.05], [R + w * 0.72, zU + w * 0.32], [R + w, zU + w * 0.9],
    [R + w, zO - w * 0.45], [R + w * 0.93, zO - w * 0.15], [R + w * 0.72, zO],
    [R + w * 0.3, zO + w * 0.02], [R - lippe * 0.3, zO - w * 0.12], [R - lippe, zO - w * 0.42],
    [R * 0.995, 0.0], [R * 0.97, -pavillon * 0.3], [R * 0.7, zU + w * 0.75]
  );
  if (boden) profil.push([0, zU + w * 0.75]);
  const g = drehkoerper(profil, 64);
  if (Math.abs(ry - rx) > 1e-6) skaliere(g, 1, ry / rx, 1);
  return { geometrie: g, basisZ: zU, aussenRadius: R + w };
}

/** Perlenschale mit Stift (Perle sitzt darauf, Achse +Z). Hoehe ca. 0.25*d. */
export function perlenSchale(durchmesserPerle) {
  const r = durchmesserPerle * 0.24;
  const h = durchmesserPerle * 0.12;
  const profil = [[0, -h * 0.35], [r * 0.45, -h * 0.35], [r * 0.85, -h * 0.05], [r * 1.0, h * 0.45], [r * 0.95, h * 0.62], [r * 0.6, h * 0.42], [0, h * 0.3]];
  return { geometrie: drehkoerper(profil, 40), hoehe: h };
}

/** Perlenkappe (Glockenkappe) fuer Tropfen: sitzt oben auf der Perle, Achse +Y. */
export function perlenKappe(durchmesserPerle, { blaetter = 6 } = {}) {
  const r = durchmesserPerle * 0.3;
  const h = durchmesserPerle * 0.2;
  // gewoelbte Kappe mit gewelltem Rand
  const profil = [[0, h * 0.6], [r * 0.4, h * 0.55], [r * 0.7, h * 0.32], [r * 0.9, h * 0.02], [r * 0.98, h * 0.08], [r * 0.82, h * 0.48], [r * 0.55, h * 0.82], [r * 0.25, h * 1.0], [0, h * 1.05]];
  const g = new THREE.LatheGeometry(profil.map(([a, b]) => new THREE.Vector2(a, b)), 48);
  // Rand wellen: Blaetter
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const w = Math.atan2(z, x);
    const rr = Math.hypot(x, z) / r;
    const welle = 0.5 + 0.5 * Math.cos(w * blaetter);
    p.setY(i, y - (1 - welle) * h * 0.35 * Math.pow(rr, 3));
  }
  g.computeVertexNormals();
  return { geometrie: g, hoehe: h };
}

// ---------------------------------------------------------------------------
// Biegeringe, Oesen, Verschluesse
// ---------------------------------------------------------------------------

/** Biegering in der XY-Ebene (Achse Z), Mittellinienradius R, Drahtradius r, kleine Luecke bei -X. */
export function biegering(R, r, { luecke = 0.06, segmente = 28, radSeg = 8 } = {}) {
  const g = new THREE.TorusGeometry(R, r, radSeg, segmente, TAU - luecke);
  g.rotateZ(PI + luecke / 2);
  return g;
}

/**
 * Federring-Verschluss. Befestigungsoese mit Mittelpunkt im Ursprung,
 * der Ring liegt oberhalb (+Y), Ebene XY.
 */
export function federring(aussenDurchmesser = 5.5) {
  const r = aussenDurchmesser * 0.11;
  const R = aussenDurchmesser / 2 - r;
  const oeseR = aussenDurchmesser * 0.17, oeseDraht = r * 0.75;
  const ringMitteY = oeseR + oeseDraht + R + r * 0.6;
  const ring = new THREE.TorusGeometry(R, r, 10, 40);
  ring.translate(0, ringMitteY, 0);
  // Befestigungsoese in der Ringebene (liegt am Handgelenk flach auf)
  const oese = new THREE.TorusGeometry(oeseR, oeseDraht, 8, 20);
  // Hebel (Knopf) aussen am Ring
  const w = THREE.MathUtils.degToRad(35);
  const knopf = new THREE.CylinderGeometry(r * 0.75, r * 0.85, r * 2.2, 10);
  knopf.rotateZ(-w);
  knopf.translate(Math.sin(w) * (R + r * 1.3), ringMitteY + Math.cos(w) * (R + r * 1.3), 0);
  const steg = new THREE.CylinderGeometry(oeseDraht * 1.2, oeseDraht * 1.2, ringMitteY - R - oeseR + r, 10);
  steg.translate(0, (oeseR + ringMitteY - R) / 2, 0);
  return { geometrie: vereinige([ring, oese, knopf, steg]), laenge: ringMitteY + R + r };
}

/**
 * Karabiner (Hummerverschluss). Befestigungsoese im Ursprung, Koerper entlang +Y,
 * flache Seite in der XY-Ebene.
 */
export function karabiner(laenge = 9) {
  const L = laenge;
  const B = L * 0.52;
  const oeseR = L * 0.085, oeseDraht = L * 0.035;
  const y0 = oeseR + oeseDraht * 0.5;
  // Umriss: Koerper (Rueckenseite -X) + Haken; als geschlossene Roehre
  const umriss = [];
  for (let i = 0; i < 96; i++) {
    const t = (i / 96) * TAU;
    // Tropfenartige Grundform, oben schmal und leicht gebogen
    const s = Math.sin(t), c = Math.cos(t);
    const yy = (1 - c) / 2;                // 0 unten, 1 oben
    const breite = B * 0.5 * Math.pow(Math.sin(PI * Math.min(1, yy * 1.02)), 0.75) * (1 - 0.35 * yy);
    const x = s * breite - 0.12 * B * yy * yy;
    umriss.push(new THREE.Vector3(x, y0 + yy * L * 0.92, 0));
  }
  const dicke = (i, u) => {
    const w = u * TAU;
    // Ruecken (-X Seite) dicker, Schnapper duenner
    return L * (0.06 + 0.035 * Math.max(0, -Math.sin(w)));
  };
  const koerper = roehre(neuAbtasten(umriss, 64, true), { radius: dicke, ellipse: [0.75, 1], segmente: 10, geschlossen: true, normalen: Array.from({ length: 64 }, () => new THREE.Vector3(0, 0, 1)) });
  const oese = new THREE.TorusGeometry(oeseR, oeseDraht, 8, 20);
  oese.rotateY(PI / 2);
  // Abzug: kleiner Steg seitlich
  const abzug = new THREE.BoxGeometry(L * 0.05, L * 0.16, L * 0.09, 1, 1, 1);
  abzug.translate(B * 0.38, y0 + L * 0.3, 0);
  abzug.deleteAttribute('uv');
  return { geometrie: vereinige([koerper, oese, abzug]), laenge: y0 + L * 0.95 };
}

/** Ovales Plaettchen (Kettenende/Logo), Ebene XY, Oese oben im Ursprung. */
export function plaettchen(laenge = 6) {
  const b = laenge * 0.55, d = laenge * 0.08;
  const umriss = [];
  for (let i = 0; i < 48; i++) {
    const w = (i / 48) * TAU;
    umriss.push(new THREE.Vector2(Math.cos(w) * b / 2, Math.sin(w) * laenge / 2));
  }
  const g = aufblasen(umriss, { hoehe: d * 0.6, rueckHoehe: d * 0.6, ringe: 6, form: 0.15 });
  g.translate(0, -laenge / 2 - laenge * 0.12, 0);
  const oese = new THREE.TorusGeometry(laenge * 0.12, d * 0.55, 8, 16);
  return { geometrie: vereinige([g, oese]), laenge: laenge * 1.12 };
}

// ---------------------------------------------------------------------------
// Ringschiene: Profil entlang Kreis/Ellipse um die Y-Achse
// ---------------------------------------------------------------------------

/** Profile im Querschnitt (rho 0 = innen, 1 = aussen; y -0.5..0.5), gegen den Uhrzeigersinn. */
export function profilPunkte(profil = 'halbrund', n = 28) {
  const pts = [];
  if (profil === 'rund') {
    for (let i = 0; i < n; i++) {
      const w = (i / n) * TAU;
      pts.push([0.5 + 0.5 * Math.cos(w), 0.5 * Math.sin(w)]);
    }
    return pts;
  }
  if (profil === 'flach') {
    // Rechteck mit Rundungen, innen leicht gewoelbt (Komfortprofil)
    const e = 0.32; // Rundungsradius relativ
    const ecken = [[1 - e * 0.6, 0.5 - e], [e * 0.6, 0.5 - e], [e * 0.6, -0.5 + e], [1 - e * 0.6, -0.5 + e]];
    const winkel = [[0, PI / 2], [PI / 2, PI], [PI, 1.5 * PI], [1.5 * PI, TAU]];
    const k = Math.max(3, Math.round(n / 4));
    for (let c = 0; c < 4; c++) {
      for (let i = 0; i < k; i++) {
        const w = winkel[c][0] + (winkel[c][1] - winkel[c][0]) * (i / k);
        pts.push([ecken[c][0] + Math.cos(w) * e * 0.6, ecken[c][1] + Math.sin(w) * e]);
      }
    }
    return pts;
  }
  // halbrund: aussen Halbellipse, innen leicht gewoelbt (Komfort); innerster Punkt (Mitte) bei rho = 0,
  // damit der Innenradius genau dem Mass entspricht
  const e = 0.1;
  const k = Math.round(n * 0.65);
  for (let i = 0; i <= k; i++) {
    const w = -PI / 2 + (i / k) * PI;
    const c = Math.cos(w), s = Math.sin(w);
    pts.push([e + (1 - e) * Math.pow(c, 0.85), 0.5 * Math.sign(s) * Math.pow(Math.abs(s), 0.9)]);
  }
  const rest = n - k - 1;
  for (let i = 1; i <= rest; i++) {
    const t = i / (rest + 1);
    const y = 0.5 - t;
    pts.push([e * 4 * y * y, y * 0.98]);
  }
  return pts;
}

/**
 * Schiene um die Y-Achse in der X-Z-Ebene, theta = 0 bei +Z (oben), +90 Grad bei +X.
 *  radiusX/radiusZ: Innenradien (Ellipse moeglich); breite/dicke: Zahl oder (theta) => Zahl
 *  bogen: [theta0, theta1] fuer offene Schienen (mit runden Enden), sonst geschlossen
 *  yVersatz: (theta) => mm (z. B. versetzte Enden), flachOben: z-Hoehe einer Siegelplatte
 */
export function schiene({
  radiusX = 8.5, radiusZ = null, breite = 2, dicke = 1.4, profil = 'halbrund',
  segmente = 128, profilSegmente = 28, bogen = null, yVersatz = null, flachOben = null
}) {
  const rz = radiusZ ?? radiusX;
  const prof = profilPunkte(profil, profilSegmente);
  const np = prof.length;
  const offen = !!bogen;
  const t0 = offen ? bogen[0] : 0;
  const t1 = offen ? bogen[1] : TAU;
  const ns = offen ? segmente + 1 : segmente;
  const f = (v, th) => (typeof v === 'function' ? v(th) : v);
  const pos = [];
  const thetas = [];
  for (let i = 0; i < ns; i++) {
    const th = t0 + (t1 - t0) * (i / (offen ? segmente : segmente));
    thetas.push(th);
    const sx = Math.sin(th), cz = Math.cos(th);
    // Normale der Ellipse (fuer gleichmaessige Wandstaerke)
    const nx = sx / radiusX, nz = cz / rz;
    const nl = Math.hypot(nx, nz);
    const ux = nx / nl, uz = nz / nl;
    const bx = sx * radiusX, bz = cz * rz;
    const b = f(breite, th), d = f(dicke, th), yv = yVersatz ? yVersatz(th) : 0;
    for (let j = 0; j < np; j++) {
      const [rho, y] = prof[j];
      let px = bx + ux * rho * d, pz = bz + uz * rho * d;
      if (flachOben !== null && pz > flachOben) pz = flachOben;
      pos.push(px, y * b + yv, pz);
    }
  }
  const idx = [];
  const segs = offen ? ns - 1 : ns;
  for (let i = 0; i < segs; i++) {
    const i1 = (i + 1) % ns;
    for (let j = 0; j < np; j++) {
      const j1 = (j + 1) % np;
      const a = i * np + j, bb = i1 * np + j, c = i1 * np + j1, d2 = i * np + j1;
      idx.push(a, d2, bb, bb, d2, c);
    }
  }
  if (offen) {
    // runde Enden: Profil zum Mittelpunkt zusammenziehen (gewoelbt)
    for (const ende of [0, ns - 1]) {
      const th = thetas[ende];
      const richtung = ende === 0 ? -1 : 1;
      const tx = Math.cos(th) * richtung, tz = -Math.sin(th) * richtung;
      const b = f(breite, th), d = f(dicke, th);
      const basis = ende * np;
      let mx = 0, my = 0, mz = 0;
      for (let j = 0; j < np; j++) { mx += pos[(basis + j) * 3]; my += pos[(basis + j) * 3 + 1]; mz += pos[(basis + j) * 3 + 2]; }
      mx /= np; my /= np; mz /= np;
      const stufen = 4;
      let vorher = basis;
      const wolbung = Math.min(b, d) * 0.5;
      for (let k = 1; k <= stufen; k++) {
        const phi = (k / stufen) * (PI / 2);
        const sk = Math.cos(phi);
        const start = pos.length / 3;
        for (let j = 0; j < np; j++) {
          const px = pos[(basis + j) * 3], py = pos[(basis + j) * 3 + 1], pz = pos[(basis + j) * 3 + 2];
          pos.push(mx + (px - mx) * sk + tx * Math.sin(phi) * wolbung, my + (py - my) * sk, mz + (pz - mz) * sk + tz * Math.sin(phi) * wolbung);
        }
        for (let j = 0; j < np; j++) {
          const j1 = (j + 1) % np;
          const a = vorher + j, bb = start + j, c = start + j1, d2 = vorher + j1;
          if (ende === 0) idx.push(a, bb, d2, bb, c, d2);
          else idx.push(a, d2, bb, bb, d2, c);
        }
        vorher = start;
      }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  // Siegelplatte: echte Flaechennormale
  if (flachOben !== null) {
    const p = g.attributes.position, n = g.attributes.normal;
    for (let i = 0; i < p.count; i++) if (p.getZ(i) >= flachOben - 1e-6 && n.getZ(i) > 0.5) n.setXYZ(i, 0, 0, 1);
  }
  // Umlaufsinn pruefen: oberster Punkt muss nach +Z zeigen
  let iMax = 0;
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) if (p.getZ(i) > p.getZ(iMax)) iMax = i;
  if (g.attributes.normal.getZ(iMax) < 0) {
    const ind = g.index.array;
    for (let i = 0; i < ind.length; i += 3) { const t = ind[i + 1]; ind[i + 1] = ind[i + 2]; ind[i + 2] = t; }
    g.index.needsUpdate = true;
    g.computeVertexNormals();
  }
  return g;
}

/** Aussenradius einer Schiene bei theta (fuer Aufsaetze). */
export function ellipsenPunkt(radiusX, radiusZ, theta, abstand = 0) {
  const sx = Math.sin(theta), cz = Math.cos(theta);
  const nx = sx / radiusX, nz = cz / radiusZ;
  const nl = Math.hypot(nx, nz);
  return new THREE.Vector3(sx * radiusX + (nx / nl) * abstand, 0, cz * radiusZ + (nz / nl) * abstand);
}

/** Umfang einer Ellipse (Ramanujan). */
export function ellipsenUmfang(a, b) {
  return PI * (3 * (a + b) - Math.sqrt((3 * a + b) * (a + 3 * b)));
}

/** Mesh-Helfer: Mesh mit Schatten und Namen. */
export function netz(geo, material, name = '') {
  const m = new THREE.Mesh(geo, material);
  m.castShadow = true;
  m.name = name;
  return m;
}
