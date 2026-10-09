// Anhaenger und Motive: Perle, Sonne, Blume, Mond, Herz, Muenze, Tropfen,
// Stein, Stern, Muschel.
//  baueMotiv():     nur der Koerper, Mitte im Ursprung, Vorderseite +Z (z. B. fuer Ohrstecker)
//  baueAnhaenger(): Koerper + Oese + Biegering. Ursprung = Drehpunkt (Mitte der Kette,
//                   durch die der Biegering laeuft), Koerper haengt nach -Y, Vorderseite +Z.
import * as THREE from 'three';
import { metallMaterial, steinMaterial, perlMaterial } from './materialien.js';
import {
  aufblasen, roehre, vereinige, steinGeometrie, zargenGeometrie, perlenGeometrie,
  perlenKappe, biegering, netz, zufall, scheibenGeometrie
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

/**
 * Flache Klinge (Sonnenstrahl): entlang +Y von 0 bis laenge, Breite breite(t) (halbe Breite),
 * vorn/hinten gewoelbt mit Grat in der Mitte, Kanten scharf. Fuss (t = 0) offen.
 */
function klinge({ laenge, breite, vorn, hinten, nL = 14, nW = 8 }) {
  const pos = [], idx = [];
  for (const seite of [1, -1]) {
    const basis = pos.length / 3;
    const h = seite > 0 ? vorn : hinten;
    for (let i = 0; i <= nL; i++) {
      const t = i / nL;
      const b = breite(t);
      for (let j = 0; j <= nW; j++) {
        const v = -1 + (2 * j) / nW;
        const z = seite * h * Math.pow(Math.max(0, 1 - v * v), 0.55) * (1 - 0.55 * t);
        pos.push(v * b, t * laenge, z);
      }
    }
    for (let i = 0; i < nL; i++) {
      for (let j = 0; j < nW; j++) {
        const a = basis + i * (nW + 1) + j, b2 = a + nW + 1;
        if (seite > 0) idx.push(a, a + 1, b2, a + 1, b2 + 1, b2);
        else idx.push(a, b2, a + 1, a + 1, b2, b2 + 1);
      }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
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
    // Flache, leicht gewoelbte Scheibe mit feinem Rand; darum 12 flache Strahlen
    // (abwechselnd lang/kurz), gegossen und poliert: weich gewoelbte Dreiecke in der Scheibenebene
    const R = G / 2;
    const rd = 0.3 * G;
    const d = 0.06 * G + 0.25;
    const scheibe = aufblasen(kreis(rd, 72), { hoehe: d * 0.6, rueckHoehe: d * 0.35, ringe: 12, form: 0.12 });
    const rand = new THREE.TorusGeometry(rd * 1.02, d * 0.22, 8, 72);
    rand.translate(0, 0, d * 0.05);
    const n = 12;
    const geos = [scheibe, rand];
    for (let i = 0; i < n; i++) {
      const w = PI / 2 + (i / n) * TAU;
      const lang = i % 2 === 0;
      const spitze = lang ? R : R * 0.84;
      const rb = rd * 0.86;                        // Fuss unter dem Scheibenrand
      const halb = (TAU / n) * (lang ? 0.5 : 0.42) * rb; // halbe Fussbreite (mm), Strahlen fast aneinander
      const L = spitze - rb;
      // leicht eingezogene Flanken, Spitze minimal gerundet; Grat entlang der Mitte
      const g = klinge({
        laenge: L,
        breite: (t) => halb * (1 - t) * (1 - 0.12 * Math.sin(PI * t)) + 0.04,
        vorn: d * 0.42, hinten: d * 0.22
      });
      g.translate(0, rb, 0);
      g.rotateZ(w - PI / 2);
      geos.push(g);
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
      // leicht bombiertes Blatt mit weich gerundeter Kante, dazu loeffelartig gemuldet:
      // Raender und Spitze heben sich nach vorn wie bei einer echten Bluete. Ganz flache
      // Blaetter spiegeln nur eine Richtung und wirken dann braun statt golden.
      const g = aufblasen(umriss, { mitte: new THREE.Vector2(0, lp * 0.55), hoehe: G * 0.058, rueckHoehe: G * 0.028, ringe: 10, form: 0.4 });
      const p = g.attributes.position;
      for (let j = 0; j < p.count; j++) {
        const y = p.getY(j), x = p.getX(j);
        const u = THREE.MathUtils.clamp(y / lp, 0, 1);
        const q = x / (wp / 2);
        p.setZ(j, p.getZ(j) + G * 0.05 * q * q * Math.sin(PI * Math.min(1, u * 1.1)) + G * 0.06 * u * u);
      }
      g.computeVertexNormals();
      g.rotateZ((i / blaetter) * TAU);
      teile.push({ geo: g, material: metallMaterial(res, spec.metall, 'motiv') });
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
    // Flache Scheibe mit runder Kante; beide Seiten gehaemmert (flache Mulden mit feinen Graten)
    const R = G / 2;
    const d = 0.075 * G + 0.25;
    const rr = Math.min(d * 0.55, R * 0.12) / R;   // Rundung der Kante (relativ)
    const rnd = zufall(saat * 3 + 17);
    const zellen = [];
    const a = 1.25;
    for (let y = -R - a; y <= R + a; y += a * 0.87) {
      for (let x = -R - a; x <= R + a; x += a) {
        const ox = (Math.round(y / (a * 0.87)) % 2) * a * 0.5;
        zellen.push([x + ox + (rnd() - 0.5) * a * 0.6, y + (rnd() - 0.5) * a * 0.6, 0.6 + rnd() * 0.6]);
      }
    }
    const mulde = (x, y, rho) => {
      let best = 1e9, tief = 1;
      for (const c of zellen) {
        const dd = (x - c[0]) ** 2 + (y - c[1]) ** 2;
        if (dd < best) { best = dd; tief = c[2]; }
      }
      const rand = THREE.MathUtils.smoothstep(1 - rr * 1.3 - rho, 0, 0.1);
      return Math.max(0, (1 - best / (a * a * 0.5)) * 0.07 * tief * rand);
    };
    const profil = (rho) => {
      const t = (rho - (1 - rr)) / rr;
      return t <= 0 ? 1 : Math.sqrt(Math.max(0, 1 - t * t));
    };
    const g = scheibenGeometrie({
      radius: R,
      ringe: Math.max(24, Math.round(R / 0.17)),
      randDichte: 1.35,
      vorn: (x, y, rho) => (d / 2) * profil(rho) - mulde(x, y, rho),
      hinten: (x, y, rho) => (d / 2) * profil(rho) - mulde(-x * 0.93 + 0.4, y * 0.97 - 0.3, rho) * 0.8
    });
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

function flaecheVon(pts) {
  let a = 0;
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i], q = pts[(i + 1) % pts.length];
    a += p.x * q.y - q.x * p.y;
  }
  return a / 2;
}
