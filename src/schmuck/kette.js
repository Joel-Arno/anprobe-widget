// Halsketten: Drapierung auf dem Normkoerper und Aufbau (Glieder, Perlen,
// Anhaenger, Verschluss). Rahmen: Ursprung = Drosselgrube, +Y den Hals hinauf,
// +Z nach vorn, X = Y x Z. Normhals: Zylinder Radius 55 mm, Mitte (0, ., -55).
import * as THREE from 'three';
import { metallMaterial } from './materialien.js';
import {
  Pfad, ketteEntlang, perlenInstanzen, perlenStreckung, federring,
  plaettchen, kugelGeometrie, netz
} from './geometrie.js';
import { baueAnhaenger } from './anhaenger.js';

const PI = Math.PI;

// Normkoerper (mm)
export const NORMKOERPER = {
  halsRadius: 55,
  halsMitteZ: -55,
  halsTiefeHinten: 48, // Halsquerschnitt hinten etwas flacher als breit (Kette hinten ist ohnehin verdeckt)
  brustNeigung: THREE.MathUtils.degToRad(25), // Brust faellt unterhalb des Ursprungs nach vorn ab
  rueckenHoehe: 40,   // Hoehe der Kette hinten am Hals (Halsansatz, C7)
  seitenHoehe: 12,    // Hoehe seitlich am Hals
  rundung: 0.0042     // Brustwoelbung quer (z sinkt mit x^2)
};

// Fuelle der Kurve vorn nach Laenge: kurze Ketten liegen rund (U), lange fallen als
// weiches V. Ergibt 40 cm ~2 cm, 45 cm ~5,5 cm, 50 cm ~8,7 cm, 60 cm ~14 cm unter der Drosselgrube.
const FUELLE = [[300, 3.4], [400, 3.1], [450, 2.2], [500, 1.6], [600, 1.4], [1000, 1.4]];

function fuelleFuer(laengeMm) {
  for (let i = 1; i < FUELLE.length; i++) {
    const [l1, e1] = FUELLE[i];
    const [l0, e0] = FUELLE[i - 1];
    if (laengeMm <= l1) return e0 + ((e1 - e0) * (laengeMm - l0)) / (l1 - l0);
  }
  return FUELLE[FUELLE.length - 1][1];
}

// Steigung der Vorderflaeche oberhalb der Drosselgrube (geht in den Hals ueber)
const STEIL_OBEN = 2.6;
const WEICH = 7;

function sigmoid(x) { return 1 / (1 + Math.exp(-x)); }

/** Vorderflaeche des Normkoerpers als Hoehenfeld z(x, y) mit Gradient. */
export function koerperVorn(x, y) {
  const K = NORMKOERPER;
  const R = K.halsRadius;
  // Hals (Zylinder)
  const q = Math.max(1e-6, R * R - x * x);
  const zh = K.halsMitteZ + Math.sqrt(q);
  const zhx = -x / Math.sqrt(q);
  // Brust/Schluesselbein: Ebene mit 25 Grad, oberhalb y = 0 steil zurueck, quer gewoelbt
  const t1 = Math.tan(K.brustNeigung), s = 6;
  const sp = s * Math.log1p(Math.exp(y / s));
  const zb = -t1 * y - (STEIL_OBEN - t1) * sp - K.rundung * x * x;
  const zby = -t1 - (STEIL_OBEN - t1) * sigmoid(y / s);
  const zbx = -2 * K.rundung * x;
  // weiches Maximum
  const h = THREE.MathUtils.clamp(0.5 + (0.5 * (zh - zb)) / WEICH, 0, 1);
  const z = zb + (zh - zb) * h + WEICH * h * (1 - h) * 0.5;
  const zx = zbx + (zhx - zbx) * h;
  const zy = zby * (1 - h);
  return { z, zx, zy };
}

/**
 * Kurve einer Kette der Laenge laengeMm auf dem Normkoerper.
 *  abstand: Abstand der Kettenmitte von der Haut (Kettenradius bzw. Perlenradius)
 *  anhaenger: mit Anhaenger zieht die Kette vorn spitzer nach unten
 * Liefert { punkte, normalen (Hautnormalen), tiefe (mm unter der Drosselgrube), laenge }.
 * Punkt 0 = hinten Mitte (Verschluss), Mitte des Pfads = tiefster Punkt vorn.
 */
export function drapiereKette(laengeMm, { abstand = 0.6, anhaenger = false, aufloesung = 0.6 } = {}) {
  const ziel = THREE.MathUtils.clamp(laengeMm, 300, 1000);
  const e = fuelleFuer(ziel) - (anhaenger ? 0.15 : 0);
  const bau = (d) => kettenKurve(d, abstand, e, 140);
  const laengeVon = (d) => kurvenLaenge(bau(d).punkte);
  // Bisektion ueber die Tiefe d
  let lo = -NORMKOERPER.seitenHoehe + 4, hi = 380;
  if (laengeVon(lo) > ziel) hi = lo;
  for (let i = 0; i < 40 && hi - lo > 0.02; i++) {
    const mid = (lo + hi) / 2;
    if (laengeVon(mid) < ziel) lo = mid; else hi = mid;
  }
  const d = (lo + hi) / 2;
  const roh = kettenKurve(d, abstand, e, 420);
  // gleichmaessig nach Bogenlaenge neu abtasten
  const pf = new Pfad(roh.punkte, { geschlossen: true, normalen: roh.normalen });
  const n = Math.max(200, Math.round(pf.laenge / aufloesung));
  const punkte = [], normalen = [];
  for (let i = 0; i < n; i++) {
    const s = (pf.laenge * i) / n;
    punkte.push(pf.punkt(s));
    normalen.push(pf.normale(s));
  }
  return { punkte, normalen, tiefe: d, laenge: pf.laenge };
}

function kurvenLaenge(p) {
  let L = 0;
  for (let i = 0; i < p.length; i++) L += p[i].distanceTo(p[(i + 1) % p.length]);
  return L;
}

// Geschlossene Kurve fuer Tiefe d und Fuelle e (1 = gerades V, 2 = Ellipse, >2 = U)
// Reihenfolge: hinten Mitte -> rechts (+X) -> vorn Mitte -> links -> hinten
function kettenKurve(d, r, e, aufl) {
  const K = NORMKOERPER;
  const R = K.halsRadius, Rz = K.halsTiefeHinten;
  const ex = e, ey = e;
  const hinten = [], hintenN = [];
  const nb = Math.round(aufl * 0.35);
  for (let i = 0; i <= nb; i++) {
    const phi = PI - (i / nb) * (PI / 2); // 180 -> 90 Grad
    const u = (PI - phi) / (PI / 2);       // 0 hinten, 1 Seite
    const y = K.rueckenHoehe + (K.seitenHoehe - K.rueckenHoehe) * (1 - Math.cos(u * PI)) / 2;
    const n = new THREE.Vector3(Math.sin(phi) / R, 0, Math.cos(phi) / Rz).normalize();
    hinten.push(new THREE.Vector3(Math.sin(phi) * R, y, K.halsMitteZ + Math.cos(phi) * Rz).addScaledVector(n, r));
    hintenN.push(n);
  }
  const vorn = [], vornN = [];
  const nv = aufl;
  const yS = K.seitenHoehe;
  for (let i = 1; i <= nv; i++) {
    const th = (i / nv) * (PI / 2);
    const x = R * Math.pow(Math.cos(th), 2 / ex);
    const y = yS - (yS + d) * Math.pow(Math.sin(th), 2 / ey);
    const f = koerperVorn(Math.min(x, R - 1e-4), y);
    const n = new THREE.Vector3(-f.zx, -f.zy, 1).normalize();
    vorn.push(new THREE.Vector3(x, y, f.z).addScaledVector(n, r));
    vornN.push(n);
  }
  // rechte Haelfte: hinten (ohne letzten = Seite doppelt) + vorn; linke gespiegelt
  const punkte = [...hinten, ...vorn];
  const normalen = [...hintenN, ...vornN];
  const spiegel = (v) => new THREE.Vector3(-v.x, v.y, v.z);
  for (let i = punkte.length - 2; i >= 1; i--) {
    punkte.push(spiegel(punkte[i]));
    normalen.push(spiegel(normalen[i]));
  }
  return { punkte, normalen };
}

/** Kette aus normalisierter Spec bauen. Liefert { gruppe, masse, pendel }. */
export function baueKette(spec, res) {
  const k = spec.kette;
  const metall = metallMaterial(res, spec.metall);
  const gruppe = new THREE.Group();
  gruppe.name = 'kette';
  const pendel = [];
  const saat = spec._saat || 1;
  const laengeMm = k.laengeCm * 10;
  const strang = k.typ === 'perlenstrang';
  const P = spec.perlen;
  const W = k.staerkeMm;
  const rc = strang ? P.groesseMm / 2 : W / 2;
  const an = spec.anhaenger;
  const mitAnhaenger = an && an.typ !== 'keiner';
  const einzelPerle = !mitAnhaenger && P.anordnung === 'einzeln' && P.anzahl > 0 && !strang;

  const dr = drapiereKette(laengeMm, { abstand: rc, anhaenger: mitAnhaenger || einzelPerle });
  // Perlen-Stationen heben die Kette lokal an (Perle liegt auf der Haut)
  const stationen = [];
  const L0 = kurvenLaenge(dr.punkte);
  if (!strang && P.anordnung === 'stationen' && P.anzahl > 0) {
    const n = Math.round(P.anzahl);
    for (let i = 0; i < n; i++) stationen.push(L0 / 2 + (i - (n - 1) / 2) * P.abstandMm);
    anhebenUmStationen(dr, stationen, P.groesseMm / 2 - rc);
  }
  const pfad = new Pfad(dr.punkte, { geschlossen: true, normalen: dr.normalen });
  const L = pfad.laenge;
  const sMitte = L / 2;

  // Verschluss hinten (s = 0): Federring + Plaettchen
  const verschlussD = THREE.MathUtils.clamp(W * 3.6 + 1.6, 4.5, 7);
  const vs = federring(verschlussD);
  const pl = plaettchen(THREE.MathUtils.clamp(verschlussD * 0.95, 4.5, 6.5));
  const luecke = vs.laenge + pl.laenge * 0.9;
  const sA = luecke / 2, sE = L - luecke / 2;
  const verschluss = new THREE.Group();
  verschluss.name = 'verschluss';
  const vMesh = netz(res.eigen(vs.geometrie), metall, 'federring');
  vMesh.position.y = 0;
  verschluss.add(vMesh);
  const pMesh = netz(res.eigen(pl.geometrie), metall, 'plaettchen');
  verschluss.add(pMesh);
  // Federring ragt von sA, Plaettchen (haengt lokal nach -Y) von sE in die Luecke hinten
  legeAuf(vMesh, pfad, sA, -1);
  legeAuf(pMesh, pfad, sE, -1);
  gruppe.add(verschluss);

  // Kette oder Perlenstrang
  if (strang) {
    const D = P.groesseMm;
    const hoehe = D * perlenStreckung(P.form);
    const teilung = hoehe + 0.35;
    const zwischen = 1.6; // Kalotten an den Enden
    const nutz = sE - sA - 2 * zwischen;
    const n = Math.max(3, Math.floor(nutz / teilung));
    const rest = (nutz - n * teilung) / 2;
    const lagen = [];
    for (let i = 0; i < n; i++) {
      const s = sA + zwischen + rest + teilung * (i + 0.5);
      lagen.push(lageAuf(pfad, s));
    }
    gruppe.add(perlenInstanzen(lagen, { durchmesser: D, form: P.form, farbe: P.farbe, res, saat }));
    // kleine Goldkugeln als Abschluss
    const kg = res.eigen(kugelGeometrie(0.9, 2));
    for (const s of [sA + zwischen * 0.55 + rest * 0.5, sE - zwischen * 0.55 - rest * 0.5]) {
      const m = netz(kg, metall, 'kalotte');
      pfad.punkt(s, m.position);
      gruppe.add(m);
    }
  } else {
    // Kettenabschnitte, Stationen ausgespart
    const frei = [];
    let s0 = sA;
    const halb = P.groesseMm * 0.42;
    for (const st of stationen) {
      frei.push([s0, st - halb]);
      s0 = st + halb;
    }
    frei.push([s0, sE]);
    frei.forEach(([a, b], i) => {
      if (b - a > W) gruppe.add(ketteEntlang(pfad, { typ: k.typ, staerkeMm: W, s0: a, s1: b, material: metall, res, saat: saat + i }));
    });
    if (stationen.length) {
      const lagen = stationen.map((s) => lageAuf(pfad, s));
      gruppe.add(perlenInstanzen(lagen, { durchmesser: P.groesseMm, form: P.form, farbe: P.farbe, res, saat: saat + 3 }));
    }
  }

  // Anhaenger am tiefsten Punkt, liegt auf der Brust
  let laengeAnh = 0;
  if (mitAnhaenger || einzelPerle) {
    const typ = mitAnhaenger ? an.typ : 'perle';
    const a = baueAnhaenger(typ, { spec, groesseMm: mitAnhaenger ? an.groesseMm : P.groesseMm, kettenRadius: rc, res, saat });
    const knoten = new THREE.Group();
    knoten.name = 'anhaenger';
    const p = pfad.punkt(sMitte);
    const n = pfad.normale(sMitte);
    const x = new THREE.Vector3(1, 0, 0);
    const y = new THREE.Vector3().crossVectors(n, x).normalize();
    const z = new THREE.Vector3().crossVectors(x, y);
    knoten.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(x, y, z));
    knoten.position.copy(p);
    // Rueckseite des Anhaengers liegt auf der Haut: ggf. unten leicht abheben
    const ueber = (-a.rueckZ) - rc;
    if (ueber > 0) {
      const kipp = Math.atan2(ueber, Math.max(2, a.hoeheMm * 0.8));
      knoten.quaternion.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -kipp));
    }
    knoten.add(a.gruppe);
    gruppe.add(knoten);
    pendel.push({ knoten, laengeMm: a.schwerpunktMm, achse: 'z' });
    laengeAnh = a.hoeheMm;
  }

  return {
    gruppe,
    masse: { halsRadiusMm: NORMKOERPER.halsRadius, laengeMm: L, tiefeMm: dr.tiefe + laengeAnh },
    pendel
  };
}

// Lage (Position + Drehung, Y entlang der Kette, Z = Hautnormale) bei s
function lageAuf(pfad, s) {
  const p = pfad.punkt(s);
  const t = pfad.tangente(s);
  const n = pfad.normale(s);
  const x = new THREE.Vector3().crossVectors(t, n);
  const q = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(x, t, n));
  return { position: p, quaternion: q };
}

// Objekt mit lokaler +Y-Achse entlang der Kette legen (richtung -1: entgegen)
function legeAuf(obj, pfad, s, richtung) {
  const l = lageAuf(pfad, s);
  obj.position.copy(l.position);
  obj.quaternion.copy(l.quaternion);
  if (richtung < 0) obj.quaternion.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), PI));
}

function anhebenUmStationen(dr, stationen, hub) {
  if (hub <= 0) return;
  const p = dr.punkte, n = dr.normalen;
  const s = [0];
  for (let i = 1; i < p.length; i++) s.push(s[i - 1] + p[i].distanceTo(p[i - 1]));
  const breite = hub * 6 + 4;
  for (let i = 0; i < p.length; i++) {
    let w = 0;
    for (const st of stationen) {
      const d = Math.abs(s[i] - st);
      if (d < breite) w = Math.max(w, 0.5 + 0.5 * Math.cos((PI * d) / breite));
    }
    if (w > 0) p[i].addScaledVector(n[i], hub * w);
  }
}

