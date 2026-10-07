// Anhaenger und Motive: Perle, Sonne, Blume, Mond, Herz, Muenze, Tropfen,
// Stein, Stern, Muschel.
//  baueMotiv():     nur der Koerper, Mitte im Ursprung, Vorderseite +Z (z. B. fuer Ohrstecker)
//  baueAnhaenger(): Koerper + Oese + Biegering. Ursprung = Drehpunkt (Mitte der Kette,
//                   durch die der Biegering laeuft), Koerper haengt nach -Y, Vorderseite +Z.
import * as THREE from 'three';
import { metallMaterial, steinMaterial, perlMaterial } from './materialien.js';
import {
  aufblasen, roehre, vereinige, steinGeometrie, zargenGeometrie, perlenGeometrie,
  perlenKappe, biegering, netz, zufall
} from './geometrie.js';

const PI = Math.PI;
const TAU = Math.PI * 2;

export const ANHAENGER_TYPEN = ['perle', 'sonne', 'blume', 'mond', 'herz', 'muenze', 'tropfen', 'stein', 'stern', 'muschel'];

/**
 * Motiv ohne Aufhaengung. Liefert
 * { gruppe, hoehe, breite, dicke, rueckZ, obenY, untenY }  (Mitte im Ursprung).
 */
export function baueMotiv(typ, { spec, groesseMm = 12, res, saat = 1 }) {
  const metall = metallMaterial(res, spec.metall);
  const G = groesseMm;
  const teile = [];
  const bau = BAUER[typ] || BAUER.perle;
  const ctx = { G, spec, res, metall, teile, saat, aufhaengung: null };
  bau(ctx);
  const gruppe = new THREE.Group();
  gruppe.name = `motiv-${typ}`;
  for (const t of teile) {
    const m = t.isObject3D ? t : netz(res.eigen(t.geo), t.material || metall, typ);
    gruppe.add(m);
  }
  const box = new THREE.Box3().setFromObject(gruppe);
  // Mitte in den Ursprung (x/y), z bleibt (Vorderseite +Z)
  const mx = (box.min.x + box.max.x) / 2, my = (box.min.y + box.max.y) / 2;
  for (const c of gruppe.children) { c.position.x -= mx; c.position.y -= my; }
  box.translate(new THREE.Vector3(-mx, -my, 0));
  // Aufhaengepunkt (oben, ueber dem Schwerpunkt); Standard: Mitte der Oberkante
  const auf = ctx.aufhaengung ? new THREE.Vector2(ctx.aufhaengung.x - mx, ctx.aufhaengung.y - my) : new THREE.Vector2(0, box.max.y);
  return {
    gruppe,
    hoehe: box.max.y - box.min.y,
    breite: box.max.x - box.min.x,
    dicke: box.max.z - box.min.z,
    rueckZ: box.min.z,
    obenY: box.max.y,
    untenY: box.min.y,
    aufhaengung: auf
  };
}

/**
 * Anhaenger mit Aufhaengung. kettenRadius = halbe Staerke der Kette/des Drahts,
 * durch die der Biegering laeuft. Liefert
 * { gruppe, hoeheMm, breiteMm, dickeMm, rueckZ, schwerpunktMm }.
 */
export function baueAnhaenger(typ, { spec, groesseMm = 12, kettenRadius = 0.6, res, saat = 1 }) {
  const metall = metallMaterial(res, spec.metall);
  const motiv = baueMotiv(typ, { spec, groesseMm, res, saat });
  const gruppe = new THREE.Group();
  gruppe.name = `anhaenger-${typ}`;
  const G = groesseMm;
  // Biegering in der Y-Z-Ebene (Kette laeuft entlang X hindurch)
  const rw = THREE.MathUtils.clamp(0.035 * G + 0.12, 0.3, 0.5);
  const Rj = Math.max(kettenRadius + rw + 0.4, 0.95);
  const cj = kettenRadius + rw - Rj;
  const ring = netz(res.eigen(biegering(Rj, rw, { luecke: 0.05, segmente: 28 })), metall, 'biegering');
  ring.rotation.y = PI / 2;
  ring.position.y = cj;
  gruppe.add(ring);
  // Oese in der X-Y-Ebene, haengt im Biegering
  const re = rw * 0.95;
  const Re = THREE.MathUtils.clamp(0.05 * G + 0.45, 0.65, 1.1);
  const ce = cj - Rj + rw + re - Re;
  const oese = netz(res.eigen(new THREE.TorusGeometry(Re, re, 8, 24)), metall, 'oese');
  oese.position.y = ce;
  gruppe.add(oese);
  // Koerper: Aufhaengepunkt ueberlappt den unteren Teil der Oese (angeloetet)
  const oben = ce - Re + re * 0.6;
  const versatz = typ === 'perle' ? oben - motiv.aufhaengung.y + re * 0.4 : oben - motiv.aufhaengung.y;
  motiv.gruppe.position.set(-motiv.aufhaengung.x, versatz, 0);
  gruppe.add(motiv.gruppe);
  const unten = versatz + motiv.untenY;
  const schwer = -(versatz + (motiv.obenY + motiv.untenY) / 2);
  return {
    gruppe,
    hoeheMm: -unten,
    breiteMm: motiv.breite,
    dickeMm: motiv.dicke,
    rueckZ: motiv.rueckZ,
    schwerpunktMm: Math.max(1, schwer)
  };
}

// --------------------------------------------------------------------------
// Koerper der Motive (Mitte grob im Ursprung, Vorderseite +Z, Spitze/Aufhaengung oben)
// --------------------------------------------------------------------------

function kreis(r, n) {
  const p = [];
  for (let i = 0; i < n; i++) { const w = (i / n) * TAU; p.push(new THREE.Vector2(Math.cos(w) * r, Math.sin(w) * r)); }
  return p;
}

// Flaechen aus Dreiecken mit vorgegebenem Umlaufsinn, flache Normalen
function facetten(dreiecke) {
  const pos = [];
  for (const [a, b, c] of dreiecke) pos.push(a.x, a.y, a.z, b.x, b.y, b.z, c.x, c.y, c.z);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.computeVertexNormals();
  return g;
}

const BAUER = {
  perle({ G, spec, res, metall, teile, saat }) {
    const P = spec.perlen || {};
    const D = P.groesseMm || G * 0.7;
    const form = P.form && P.form !== 'rund' ? P.form : 'tropfen';
    const geo = res.geteilt(`perlgeo:${D.toFixed(2)}:${form}:a${saat}`, () => perlenGeometrie({ durchmesser: D, form, saat: saat + 5, detail: 14 }));
    geo.computeBoundingBox();
    const perle = new THREE.Mesh(geo, perlMaterial(res, P.farbe || 'weiss', saat));
    perle.castShadow = true;
    perle.name = 'perle';
    const kappe = perlenKappe(D);
    const h = kappe.hoehe;
    // Kappe: Oberkante bei y = 0, Perle sitzt darin
    kappe.geometrie.translate(0, -1.05 * h, 0);
    perle.position.y = -0.42 * h - geo.boundingBox.max.y;
    teile.push({ geo: kappe.geometrie }, perle);
  },

  sonne({ G, teile }) {
    // Polierte Scheibe mit feinem Rand, darum 12 breite Strahlen mit Mittelgrat (abwechselnd lang/kurz)
    const R = G / 2;
    const rd = 0.25 * G;
    const d = 0.07 * G + 0.3;
    const scheibe = aufblasen(kreis(rd, 72), { hoehe: d * 0.62, rueckHoehe: d * 0.3, ringe: 10, form: 0.22 });
    const rand = new THREE.TorusGeometry(rd * 1.04, d * 0.2, 8, 72);
    rand.translate(0, 0, d * 0.12);
    const n = 12;
    const geos = [scheibe, rand];
    for (let i = 0; i < n; i++) {
      const w = PI / 2 + (i / n) * TAU;
      const lang = i % 2 === 0;
      const spitze = lang ? R : R * 0.78;
      const halb = (TAU / n) * (lang ? 0.27 : 0.22);
      const rb = rd * 0.96;
      const P = (r, a, z) => new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r, z);
      const kante = d * 0.16;
      const tri = [];
      const blv = P(rb, w - halb, kante), blh = P(rb, w - halb, -kante);
      const brv = P(rb, w + halb, kante), brh = P(rb, w + halb, -kante);
      const gv = P(rb, w, d * 0.5), gh = P(rb, w, -d * 0.25);
      const tv = P(spitze, w, kante * 0.4), th = P(spitze, w, -kante * 0.4);
      tri.push([blv, gv, tv], [gv, brv, tv], [blh, th, gh], [gh, th, brh], [blv, tv, th], [blv, th, blh], [brv, brh, th], [brv, th, tv]);
      geos.push(konvexeFacetten(tri));
    }
    teile.push({ geo: vereinige(geos) });
  },

  blume({ G, spec, res, teile, saat }) {
    const R = G / 2;
    const blaetter = 5;
    const lp = R * 0.98, wp = G * 0.4;
    for (let i = 0; i < blaetter; i++) {
      const umriss = [];
      for (let k = 0; k < 64; k++) {
        const t = (k / 64) * TAU;
        const breit = 0.42 + 0.58 * Math.pow((1 - Math.cos(t)) / 2, 0.8);
        umriss.push(new THREE.Vector2((wp / 2) * Math.sin(t) * breit, lp * 0.08 + (lp * 0.92 / 2) * (1 - Math.cos(t))));
      }
      const g = aufblasen(umriss, { mitte: new THREE.Vector2(0, lp * 0.55), hoehe: G * 0.06, rueckHoehe: G * 0.035, ringe: 8, form: 0.45 });
      // Bluetenblatt leicht nach vorn gewoelbt
      const p = g.attributes.position;
      for (let j = 0; j < p.count; j++) {
        const y = p.getY(j), x = p.getX(j);
        p.setZ(j, p.getZ(j) + 0.022 * y * y / R * 3 - 0.02 * x * x);
      }
      g.computeVertexNormals();
      g.rotateZ((i / blaetter) * TAU);
      teile.push({ geo: g });
    }
    // Perle in der Mitte (gebohrt nach hinten)
    const P = spec.perlen || {};
    const D = Math.min(P.groesseMm || G * 0.36, G * 0.42);
    const geo = res.geteilt(`perlgeo:${D.toFixed(2)}:rund:b${saat}`, () => perlenGeometrie({ durchmesser: D, form: 'rund', saat: saat + 9, detail: 10 }));
    const perle = new THREE.Mesh(geo, perlMaterial(res, P.farbe || 'weiss', saat + 1));
    perle.castShadow = true;
    perle.rotation.x = PI / 2;
    perle.position.z = G * 0.05 + D * 0.3;
    perle.name = 'perle';
    teile.push(perle);
  },

  mond(ctx) {
    const { G, teile } = ctx;
    const Rm = 0.33 * G, wmax = 0.3 * G;
    const a0 = THREE.MathUtils.degToRad(42), a1 = THREE.MathUtils.degToRad(318);
    const breite = (u) => (wmax / 2) * (0.05 + 0.95 * Math.pow(Math.sin(PI * u), 0.85));
    const pts = [], nn = [];
    const n = 90;
    let sx = 0, sw = 0;
    for (let i = 0; i <= n; i++) {
      const u = i / n;
      const a = a0 + (a1 - a0) * u;
      pts.push(new THREE.Vector3(Math.cos(a) * Rm, Math.sin(a) * Rm, 0));
      nn.push(new THREE.Vector3(0, 0, 1));
      const w2 = breite(u) ** 2;
      sx += Math.cos(a) * Rm * w2; sw += w2;
    }
    const g = roehre(pts, { radius: (i, u) => breite(u), ellipse: [0.5, 1], segmente: 14, kappen: 'rund', normalen: nn });
    // Sichel so drehen, dass der Aufhaengepunkt (Aussenkante bei ~100 Grad) ueber dem Schwerpunkt liegt
    const xs = sx / sw;
    const b = THREE.MathUtils.degToRad(100);
    const ub = (b - a0) / (a1 - a0);
    const rho = Rm + breite(ub) * 0.92;
    const P = new THREE.Vector2(Math.cos(b) * rho, Math.sin(b) * rho);
    const gamma = PI / 2 - Math.atan2(P.y, P.x - xs);
    g.rotateZ(gamma);
    ctx.aufhaengung = P.rotateAround(new THREE.Vector2(), gamma);
    teile.push({ geo: g });
  },

  herz(ctx) {
    const { G, teile } = ctx;
    const s = G / 31;
    const umriss = [];
    for (let i = 0; i < 128; i++) {
      const t = (i / 128) * TAU;
      const x = 16 * Math.pow(Math.sin(t), 3);
      const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
      umriss.push(new THREE.Vector2(x * s, y * s));
    }
    // Umlaufsinn: gegen den Uhrzeigersinn
    if (flaecheVon(umriss) < 0) umriss.reverse();
    const g = aufblasen(umriss, { mitte: new THREE.Vector2(0, -1.5 * s), hoehe: G * 0.2, rueckHoehe: G * 0.1, ringe: 14, form: 0.55 });
    ctx.aufhaengung = new THREE.Vector2(0, 5 * s + G * 0.02);
    teile.push({ geo: g });
  },

  muenze({ G, teile, saat }) {
    const R = G / 2;
    const d = 0.075 * G + 0.25;
    const g = aufblasen(kreis(R, 120), { hoehe: d / 2, rueckHoehe: d / 2, ringe: 26, form: 0.1 });
    // Gehaemmert: Voronoi-Mulden auf Vorder- und Rueckseite
    const rnd = zufall(saat * 3 + 17);
    const zellen = [];
    const a = 1.35;
    for (let y = -R - a; y <= R + a; y += a * 0.87) {
      for (let x = -R - a; x <= R + a; x += a) {
        const ox = (Math.round(y / (a * 0.87)) % 2) * a * 0.5;
        zellen.push([x + ox + (rnd() - 0.5) * a * 0.6, y + (rnd() - 0.5) * a * 0.6, 0.6 + rnd() * 0.6]);
      }
    }
    const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
      const r = Math.hypot(x, y) / R;
      if (r > 0.97) continue;
      let best = 1e9, best2 = 1e9, tief = 1;
      for (const c of zellen) {
        const dd = (x - c[0]) ** 2 + (y - c[1]) ** 2;
        if (dd < best) { best2 = best; best = dd; tief = c[2]; } else if (dd < best2) best2 = dd;
      }
      const rand = Math.min(1, (0.97 - r) / 0.12);
      const mulde = (1 - best / (a * a * 0.55)) * 0.085 * tief * rand;
      p.setZ(i, z - Math.sign(z) * Math.max(0, mulde));
    }
    g.computeVertexNormals();
    teile.push({ geo: g });
  },

  tropfen({ G, teile }) {
    const H = G, B = 0.62 * G;
    const umriss = [];
    for (let i = 0; i < 96; i++) {
      const t = (i / 96) * TAU;
      umriss.push(new THREE.Vector2((B / 2) * Math.sin(t) * Math.pow((1 - Math.cos(t)) / 2, 0.75), (H / 2) * Math.cos(t)));
    }
    if (flaecheVon(umriss) < 0) umriss.reverse();
    const g = aufblasen(umriss, { mitte: new THREE.Vector2(0, -0.18 * H), hoehe: B * 0.26, rueckHoehe: B * 0.16, ringe: 14, form: 0.55 });
    teile.push({ geo: g });
  },

  stein({ G, spec, res, teile }) {
    const st = spec.stein || {};
    const groesse = st.groesseMm || G * 0.6;
    const s = steinGeometrie({ groesse, schliff: st.schliff || 'brillant' });
    const z = zargenGeometrie({ stein: s });
    teile.push({ geo: s.geometrie, material: steinMaterial(res, st.art || 'zirkonia', st.farbe) }, { geo: z.geometrie });
  },

  stern({ G, teile }) {
    const Ro = G / 2, Ri = Ro * 0.46;
    const hf = G * 0.15, hb = G * 0.05, e = 0.12;
    const vorn = new THREE.Vector3(0, 0, hf), hinten = new THREE.Vector3(0, 0, -hb);
    const umriss = [];
    for (let i = 0; i < 10; i++) {
      const w = PI / 2 + (i / 10) * TAU;
      const r = i % 2 ? Ri : Ro;
      umriss.push([Math.cos(w) * r, Math.sin(w) * r]);
    }
    const tri = [];
    for (let i = 0; i < 10; i++) {
      const [x0, y0] = umriss[i], [x1, y1] = umriss[(i + 1) % 10];
      const f0 = new THREE.Vector3(x0, y0, e), f1 = new THREE.Vector3(x1, y1, e);
      const b0 = new THREE.Vector3(x0, y0, -e), b1 = new THREE.Vector3(x1, y1, -e);
      tri.push([vorn, f0, f1], [hinten, b1, b0], [f0, b0, b1], [f0, b1, f1]);
    }
    teile.push({ geo: facetten(tri) });
  },

  muschel({ G, teile }) {
    const Rs = 0.78 * G;
    const rippen = 13;
    const offen = THREE.MathUtils.degToRad(46);
    const f = (rippen * PI) / offen / 2; // cos(2 f a): 'rippen' Perioden ueber den Faecher
    const umriss = [];
    // Schloss (oben) mit kleinen Ohren, dann Faecher gegen den Uhrzeigersinn
    umriss.push(new THREE.Vector2(-0.2 * G, 0.02 * G), new THREE.Vector2(-0.21 * G, -0.06 * G), new THREE.Vector2(-0.12 * G, -0.13 * G));
    const nb = 120;
    for (let i = 0; i <= nb; i++) {
      const a = -offen + (2 * offen * i) / nb;
      const r = Rs * (0.985 + 0.015 * Math.cos(a * f * 2));
      umriss.push(new THREE.Vector2(Math.sin(a) * r, -Math.cos(a) * r));
    }
    umriss.push(new THREE.Vector2(0.12 * G, -0.13 * G), new THREE.Vector2(0.21 * G, -0.06 * G), new THREE.Vector2(0.2 * G, 0.02 * G));
    const dichter = [];
    for (let i = 0; i < umriss.length; i++) {
      const a = umriss[i], b = umriss[(i + 1) % umriss.length];
      const n = Math.max(1, Math.ceil(a.distanceTo(b) / (G * 0.03)));
      for (let k = 0; k < n; k++) dichter.push(a.clone().lerp(b, k / n));
    }
    if (flaecheVon(dichter) < 0) dichter.reverse();
    const g = aufblasen(dichter, { mitte: new THREE.Vector2(0, -0.45 * Rs), hoehe: G * 0.17, rueckHoehe: G * 0.05, ringe: 16, form: 0.6 });
    const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
      if (z <= 0) continue;
      const a = Math.atan2(x, -y);
      const rho = Math.hypot(x, y) / Rs;
      const rippe = 0.5 + 0.5 * Math.cos(a * f * 2);
      const staerke = THREE.MathUtils.smoothstep(rho, 0.12, 0.65);
      p.setZ(i, z + G * 0.045 * staerke * (rippe - 0.5) * Math.min(1, z / (G * 0.05)));
    }
    g.computeVertexNormals();
    teile.push({ geo: g });
  }
};

// Konvexes Teil aus Dreiecken: Umlaufsinn nach aussen (bezogen auf den Schwerpunkt), flache Normalen
function konvexeFacetten(dreiecke) {
  const m = new THREE.Vector3();
  let n = 0;
  for (const t of dreiecke) for (const p of t) { m.add(p); n++; }
  m.multiplyScalar(1 / n);
  const e1 = new THREE.Vector3(), e2 = new THREE.Vector3(), c = new THREE.Vector3();
  return facetten(dreiecke.map(([a, b, cc]) => {
    e1.subVectors(b, a); e2.subVectors(cc, a);
    c.addVectors(a, b).add(cc).multiplyScalar(1 / 3).sub(m);
    return e1.cross(e2).dot(c) >= 0 ? [a, b, cc] : [a, cc, b];
  }));
}

function flaecheVon(pts) {
  let a = 0;
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i], q = pts[(i + 1) % pts.length];
    a += p.x * q.y - q.x * p.y;
  }
  return a / 2;
}
