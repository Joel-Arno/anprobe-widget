// Armbaender. Rahmen: Ursprung = Mitte des Handgelenk-Querschnitts, +Y entlang
// des Unterarms zur Hand, +Z Handruecken. Die Schlaufe liegt in der X-Z-Ebene.
// masse.innenRadienMm = { x, z } beschreibt die Innenkante der Schlaufe.
import * as THREE from 'three';
import { metallMaterial, steinMaterial } from './materialien.js';
import {
  Pfad, ketteEntlang, perlenInstanzen, perlenStreckung, federring, karabiner, biegering,
  kugelGeometrie, steinGeometrie, krappenGeometrie, schiene, ellipsenUmfang, netz, vereinige
} from './geometrie.js';
import { baueAnhaenger } from './anhaenger.js';
import { ringDicke } from './ring.js';

const PI = Math.PI;
const SEITENVERHAELTNIS = 1.24; // Schlaufe breiter (x) als tief (z), wie das Handgelenk

/** Ellipse (Mittellinie) mit gegebenem Umfang. */
function schlaufe(umfang, verhaeltnis = SEITENVERHAELTNIS) {
  const b = umfang / ellipsenUmfang(verhaeltnis, 1);
  return { a: b * verhaeltnis, b };
}

/**
 * Pfad der Schlaufe, Start bei theta = 180 Grad (unten, Verschluss), Normalen nach aussen.
 * s = L/2 liegt oben (+Z, Handruecken).
 */
function schlaufenPfad(a, b, n = 360) {
  const pts = [], nn = [];
  for (let i = 0; i < n; i++) {
    const th = PI + (i / n) * 2 * PI;
    pts.push(new THREE.Vector3(Math.sin(th) * a, 0, Math.cos(th) * b));
    nn.push(new THREE.Vector3(Math.sin(th) / a, 0, Math.cos(th) / b).normalize());
  }
  return new Pfad(pts, { geschlossen: true, normalen: nn });
}

/**
 * Pfad an Stellen (Bogenlaenge) nach aussen anheben (weiches Kosinus-Fenster der Breite breite).
 * Liefert den neuen Pfad und die Stellen auf dem neuen Pfad.
 */
function pfadAnheben(pfad, stellen, hub, breite) {
  const pts = pfad.punkte.map((p, i) => {
    let w = 0;
    for (const st of stellen) {
      let d = Math.abs(pfad.s[i] - st);
      d = Math.min(d, pfad.laenge - d);
      if (d < breite) w = Math.max(w, 0.5 + 0.5 * Math.cos((PI * d) / breite));
    }
    return p.clone().addScaledVector(pfad.normalen[i], hub * w);
  });
  const neu = new Pfad(pts, { geschlossen: true, normalen: pfad.normalen });
  const index = (st) => { let i = 0; while (i < pfad.punkte.length - 1 && pfad.s[i + 1] <= st) i++; return i; };
  return { pfad: neu, stellen: stellen.map((st) => neu.s[index(st)]) };
}

// Lage mit Y entlang der Schlaufe und Z nach aussen
function lageAuf(pfad, s) {
  const p = pfad.punkt(s);
  const t = pfad.tangente(s);
  const n = pfad.normale(s);
  const x = new THREE.Vector3().crossVectors(t, n);
  return { position: p, quaternion: new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(x, t, n)) };
}

// Knoten fuer haengende Teile oben auf der Schlaufe: X entlang der Kette, Z nach aussen, haengt nach -Y
function haengeKnoten(pfad, s, name) {
  const k = new THREE.Group();
  k.name = name;
  const p = pfad.punkt(s);
  const t = pfad.tangente(s);
  const n = pfad.normale(s);
  const y = new THREE.Vector3().crossVectors(n, t).normalize();
  const x = new THREE.Vector3().crossVectors(y, n);
  k.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(x, y, n));
  k.position.copy(p);
  return k;
}

export function baueArmband(spec, res) {
  const A = spec.armband;
  let teil;
  switch (A.typ) {
    case 'perlen': teil = perlenArmband(spec, res); break;
    case 'reif': teil = reif(spec, res); break;
    case 'tennis': teil = tennis(spec, res); break;
    default: teil = kettenArmband(spec, res);
  }
  // Innenkante nachmessen (Verschluss, Fassungen ragen ggf. etwas nach innen): groesste Ellipse
  // mit dem Seitenverhaeltnis der Schlaufe, die keine Geometrie schneidet. Pendel bleiben aussen vor.
  const r = teil.masse.innenRadienMm;
  const s = innenEllipseFaktor(teil.gruppe, r.x, r.z, teil.pendel.map((p) => p.knoten));
  teil.masse.innenRadienMm = { x: r.x * s, z: r.z * s };
  return teil;
}

/** Faktor s, so dass die Ellipse (s*rx, s*rz) in der X-Z-Ebene frei von Geometrie ist. */
function innenEllipseFaktor(gruppe, rx, rz, ausnahmen) {
  gruppe.updateMatrixWorld(true);
  const aus = new Set();
  for (const k of ausnahmen) k.traverse((o) => aus.add(o));
  const v = new THREE.Vector3(), m = new THREE.Matrix4(), im = new THREE.Matrix4();
  let s = Infinity;
  gruppe.traverse((o) => {
    if (!o.isMesh || aus.has(o)) return;
    const pos = o.geometry.attributes.position;
    const n = o.isInstancedMesh ? o.count : 1;
    for (let k = 0; k < n; k++) {
      if (o.isInstancedMesh) { o.getMatrixAt(k, im); m.multiplyMatrices(o.matrixWorld, im); } else m.copy(o.matrixWorld);
      for (let i = 0; i < pos.count; i++) {
        v.fromBufferAttribute(pos, i).applyMatrix4(m);
        s = Math.min(s, Math.hypot(v.x / rx, v.z / rz));
      }
    }
  });
  return Number.isFinite(s) ? Math.min(s, 1.05) : 1;
}

function kettenArmband(spec, res) {
  const A = spec.armband;
  const K = spec.kette;
  const metall = metallMaterial(res, spec.metall);
  const gruppe = new THREE.Group();
  gruppe.name = 'armband';
  const pendel = [];
  const saat = spec._saat || 1;
  const W = K.staerkeMm;
  const { a, b } = schlaufe(A.laengeCm * 10);
  let pfad = schlaufenPfad(a, b);
  const P = spec.perlen;

  // Perlen-Stationen oben auf der Kette; die Kette hebt sich dort an, damit die Perle
  // auf der Haut aufliegt statt ins Handgelenk zu ragen
  let stationen = [];
  if (P.anordnung === 'stationen' && P.anzahl > 0) {
    const n = Math.round(P.anzahl);
    for (let i = 0; i < n; i++) stationen.push(pfad.laenge / 2 + (i - (n - 1) / 2) * P.abstandMm);
    const hub = P.groesseMm / 2 - W / 2;
    if (hub > 0) {
      const erg = pfadAnheben(pfad, stationen, hub, hub * 5 + 3);
      pfad = erg.pfad;
      stationen = erg.stellen;
    }
  }
  const L = pfad.laenge;

  // Verschluss unten: Federring (bzw. Karabiner bei kraeftigen Ketten)
  const grob = W >= 2.2;
  const vs = grob ? karabiner(THREE.MathUtils.clamp(W * 4.5, 8, 13)) : federring(THREE.MathUtils.clamp(W * 3.4 + 1.6, 4.5, 6.5));
  const rw = Math.max(0.3, W * 0.22);
  const Rring = Math.max(W * 0.55 + rw, 1.0);
  const luecke = vs.laenge + Rring * 2;
  const sA = luecke / 2, sE = L - luecke / 2;
  const vm = netz(res.eigen(vs.geometrie), metall, 'verschluss');
  const lv = lageAuf(pfad, sA);
  vm.position.copy(lv.position);
  vm.quaternion.copy(lv.quaternion).multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), PI));
  gruppe.add(vm);
  const ringM = netz(res.eigen(biegering(Rring, rw)), metall, 'biegering');
  const lr = lageAuf(pfad, sE + Rring * 0.3);
  ringM.position.copy(lr.position);
  // steht senkrecht zur Haut: so weit nach aussen, dass er nicht ins Handgelenk ragt
  ringM.position.addScaledVector(pfad.normale(sE + Rring * 0.3), Math.max(0, Rring + rw - W / 2));
  ringM.quaternion.copy(lr.quaternion).multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), PI / 2));
  gruppe.add(ringM);

  const frei = [];
  let s0 = sA;
  for (const st of stationen) { frei.push([s0, st - P.groesseMm * 0.42]); s0 = st + P.groesseMm * 0.42; }
  frei.push([s0, sE]);
  frei.forEach(([x0, x1], i) => {
    if (x1 - x0 > W) gruppe.add(ketteEntlang(pfad, { typ: K.typ === 'perlenstrang' ? 'anker' : K.typ, staerkeMm: W, s0: x0, s1: x1, material: metall, res, saat: saat + i }));
  });
  if (stationen.length) {
    gruppe.add(perlenInstanzen(stationen.map((s) => lageAuf(pfad, s)), { durchmesser: P.groesseMm, form: P.form, farbe: P.farbe, res, saat }));
  }

  // Charms oben (Handruecken): Anhaenger und/oder einzelne Perle
  const charms = [];
  const an = spec.anhaenger;
  if (an && an.typ !== 'keiner') charms.push({ typ: an.typ, groesse: an.groesseMm });
  if (P.anordnung === 'einzeln' && P.anzahl > 0) {
    for (let i = 0; i < Math.min(3, Math.round(P.anzahl)); i++) charms.push({ typ: 'perle', groesse: P.groesseMm });
  }
  const abstand = 7.5;
  charms.forEach((c, i) => {
    const versatz = (i - (charms.length - 1) / 2) * abstand;
    const knoten = haengeKnoten(pfad, L / 2 + versatz, `charm-${c.typ}`);
    const anh = baueAnhaenger(c.typ, { spec, groesseMm: c.groesse, kettenRadius: W / 2, res, saat: saat + i });
    knoten.add(anh.gruppe);
    gruppe.add(knoten);
    pendel.push({ knoten, laengeMm: anh.schwerpunktMm, achse: 'frei' });
  });

  // Verlaengerungskettchen am Ring, haengt nach aussen (-Z) mit kleinem Abschluss
  const lv2 = A.verlaengerungCm * 10;
  if (lv2 > 3) {
    const knoten = new THREE.Group();
    knoten.name = 'verlaengerung';
    knoten.position.copy(pfad.punkt(sE + Rring * 0.3));
    knoten.position.z -= Rring * 0.8;
    knoten.rotation.x = PI / 2; // lokales -Y zeigt nach -Z
    const pts = [], nn = [];
    for (let i = 0; i <= 40; i++) { pts.push(new THREE.Vector3(0, -(i / 40) * lv2, 0)); nn.push(new THREE.Vector3(0, 0, 1)); }
    const vp = new Pfad(pts, { normalen: nn });
    const Wv = Math.max(W * 1.15, 1.4);
    knoten.add(ketteEntlang(vp, { typ: 'anker', staerkeMm: Wv, material: metall, res, saat: saat + 7 }));
    const ende = new THREE.Group();
    ende.position.y = -lv2;
    if (P.anzahl > 0) {
      const anh = baueAnhaenger('perle', { spec: { ...spec, perlen: { ...P, groesseMm: Math.min(4.5, P.groesseMm), form: 'tropfen' } }, groesseMm: 4, kettenRadius: Wv * 0.3, res, saat: saat + 13 });
      ende.add(anh.gruppe);
    } else {
      const k = netz(res.eigen(kugelGeometrie(1.4, 3)), metall, 'endkugel');
      k.position.y = -1.6;
      ende.add(k);
    }
    knoten.add(ende);
    gruppe.add(knoten);
    pendel.push({ knoten, laengeMm: lv2 * 0.6, achse: 'frei' });
  }

  return { gruppe, masse: { innenRadienMm: { x: a - W / 2, z: b - W / 2 }, laengeMm: A.laengeCm * 10 }, pendel };
}

function perlenArmband(spec, res) {
  const A = spec.armband;
  const P = spec.perlen;
  const metall = metallMaterial(res, spec.metall);
  const gruppe = new THREE.Group();
  gruppe.name = 'perlenarmband';
  const saat = spec._saat || 1;
  const D = P.groesseMm;
  const h = D * perlenStreckung(P.form);
  const z = A.zwischenperlenMm;
  const { a, b } = schlaufe(A.laengeCm * 10);
  const pfad = schlaufenPfad(a, b);
  const L = pfad.laenge;
  // Verschluss unten: kleiner Federring mit Ring
  const vs = federring(4.8);
  const luecke = vs.laenge + 2.2;
  const nutz = L - luecke;
  const teil = h + 0.25 + (z > 0 ? z + 0.25 : 0);
  const n = Math.max(4, Math.floor(nutz / teil));
  const rest = (nutz - n * teil) / 2;
  const lagen = [];
  const kugeln = [];
  for (let i = 0; i < n; i++) {
    const sP = luecke / 2 + rest + teil * i + (h + 0.25) / 2 + (z > 0 ? (z + 0.25) / 2 : 0);
    lagen.push(lageAuf(pfad, sP));
    if (z > 0) {
      kugeln.push(sP - (h + 0.25) / 2 - (z + 0.25) / 2);
      if (i === n - 1) kugeln.push(sP + (h + 0.25) / 2 + (z + 0.25) / 2);
    }
  }
  gruppe.add(perlenInstanzen(lagen, { durchmesser: D, form: P.form, farbe: P.farbe, res, saat }));
  if (kugeln.length) {
    const kg = res.eigen(kugelGeometrie(z / 2, 2));
    const im = new THREE.InstancedMesh(kg, metall, kugeln.length);
    kugeln.forEach((s, i) => im.setMatrixAt(i, new THREE.Matrix4().setPosition(pfad.punkt(s))));
    im.instanceMatrix.needsUpdate = true;
    im.computeBoundingSphere();
    im.castShadow = true;
    im.name = 'zwischenperlen';
    gruppe.add(im);
  }
  // Draht in den Luecken am Verschluss sichtbar: kurze Stuecke Kette bis zum Verschluss
  const s1 = luecke / 2 + rest - 0.2, s2 = L - luecke / 2 - rest + 0.2;
  gruppe.add(ketteEntlang(pfad, { typ: 'anker', staerkeMm: 1.0, s0: luecke / 2 - 0.3, s1, material: metall, res, saat }));
  gruppe.add(ketteEntlang(pfad, { typ: 'anker', staerkeMm: 1.0, s0: s2, s1: L - luecke / 2 + 0.3, material: metall, res, saat: saat + 1 }));
  const vm = netz(res.eigen(vs.geometrie), metall, 'verschluss');
  const lv = lageAuf(pfad, luecke / 2 - 0.3);
  vm.position.copy(lv.position);
  vm.quaternion.copy(lv.quaternion).multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), PI));
  gruppe.add(vm);
  const ring = netz(res.eigen(biegering(1.1, 0.32)), metall, 'biegering');
  const lr = lageAuf(pfad, L - luecke / 2 + 0.6);
  ring.position.copy(lr.position);
  ring.quaternion.copy(lr.quaternion).multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), PI / 2));
  gruppe.add(ring);
  return { gruppe, masse: { innenRadienMm: { x: a - D / 2, z: b - D / 2 }, laengeMm: A.laengeCm * 10 }, pendel: [] };
}

function reif(spec, res) {
  const A = spec.armband;
  const metall = metallMaterial(res, spec.metall);
  const gruppe = new THREE.Group();
  gruppe.name = 'armreif';
  // laengeCm = Innenumfang
  const innen = A.laengeCm * 10;
  const { a, b } = schlaufe(innen, 1.2);
  const B = A.breiteMm;
  const profil = spec.ring?.profil || 'halbrund';
  const D = ringDicke(profil, B) * 0.9;
  const bogen = A.offen ? [PI + 0.32, 3 * PI - 0.32] : null;
  const g = schiene({ radiusX: a, radiusZ: b, breite: B, dicke: D, profil, segmente: 160, bogen });
  gruppe.add(netz(res.eigen(g), metall, 'reif'));
  if (A.offen) {
    // Enden mit Perlen (Armspange)
    const P = spec.perlen;
    for (const th of [PI + 0.32, 3 * PI - 0.32]) {
      const m = baueEndkugel(P, th);
      if (m) gruppe.add(m);
    }
  }
  function baueEndkugel(P, th) {
    const r = Math.max(B * 0.75, 2.2);
    const m = netz(res.eigen(kugelGeometrie(r, 3)), metall, 'endkugel');
    const nx = Math.sin(th) / a, nz = Math.cos(th) / b, nl = Math.hypot(nx, nz);
    m.position.set(Math.sin(th) * a + (nx / nl) * D * 0.5, 0, Math.cos(th) * b + (nz / nl) * D * 0.5);
    return m;
  }
  return { gruppe, masse: { innenRadienMm: { x: a, z: b }, laengeMm: innen }, pendel: [] };
}

function tennis(spec, res) {
  const A = spec.armband;
  const st = spec.stein;
  const metall = metallMaterial(res, spec.metall);
  const gruppe = new THREE.Group();
  gruppe.name = 'tennisarmband';
  const d = THREE.MathUtils.clamp(st.groesseMm, 1.8, 5);
  const s = steinGeometrie({ groesse: d, schliff: 'brillant' });
  const k = krappenGeometrie({ stein: s, anzahl: 4, winkel0: PI / 4, draht: d * 0.13, tiefe: 0.9, leicht: true });
  // Fassungskasten unter dem Stein + Gelenkoesen
  const kasten = new THREE.CylinderGeometry(d * 0.52, d * 0.4, s.pavillon * 0.75, 4, 1, true);
  kasten.rotateY(PI / 4);
  kasten.rotateX(PI / 2);
  kasten.translate(0, 0, -s.pavillon * 0.55);
  kasten.computeVertexNormals();
  const gelenk = new THREE.CylinderGeometry(d * 0.11, d * 0.11, d * 0.95, 8);
  gelenk.rotateZ(PI / 2);
  gelenk.translate(0, d * 0.52, -s.pavillon * 0.75);
  const fassung = res.eigen(vereinige([k.geometrie, kasten, gelenk]));
  const hoehe = s.pavillon + d * 0.15;
  const { a, b } = schlaufe(A.laengeCm * 10);
  const pfad = schlaufenPfad(a + hoehe * 0.5, b + hoehe * 0.5);
  const L = pfad.laenge;
  const luecke = d * 2.2; // Kastenschloss
  const teilung = d + 0.62;
  const n = Math.max(6, Math.floor((L - luecke) / teilung));
  const t = (L - luecke) / n;
  const steinMat = steinMaterial(res, st.art, st.farbe);
  const ist = new THREE.InstancedMesh(res.eigen(s.geometrie), steinMat, n);
  const ifa = new THREE.InstancedMesh(fassung, metall, n);
  const tmp = new THREE.Matrix4();
  for (let i = 0; i < n; i++) {
    const l = lageAuf(pfad, luecke / 2 + t * (i + 0.5));
    tmp.compose(l.position, l.quaternion, new THREE.Vector3(1, 1, 1));
    ist.setMatrixAt(i, tmp);
    ifa.setMatrixAt(i, tmp);
  }
  for (const im of [ist, ifa]) { im.instanceMatrix.needsUpdate = true; im.computeBoundingSphere(); im.castShadow = true; gruppe.add(im); }
  // Kastenschloss
  const schloss = new THREE.BoxGeometry(d * 1.05, luecke * 0.95, s.pavillon * 0.9, 2, 2, 2);
  schloss.deleteAttribute('uv');
  const sm = netz(res.eigen(schloss), metall, 'schloss');
  const l = lageAuf(pfad, 0);
  sm.position.copy(l.position);
  sm.quaternion.copy(l.quaternion);
  sm.translateZ(-s.pavillon * 0.3);
  gruppe.add(sm);
  return { gruppe, masse: { innenRadienMm: { x: a, z: b }, laengeMm: A.laengeCm * 10 }, pendel: [] };
}
