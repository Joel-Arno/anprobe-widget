// Ringe. Rahmen: Ursprung = Ringmitte auf der Fingerachse, +Y zur Fingerspitze,
// +Z Handruecken (Stein oben). Die Schiene laeuft um die Y-Achse.
import * as THREE from 'three';
import { metallMaterial, steinMaterial, Ressourcen } from './materialien.js';
import {
  schiene, steinGeometrie, krappenGeometrie, zargenGeometrie, perlenSchale, perlenMesh,
  perlenStreckung, kugelGeometrie, ketteEntlang, Pfad, netz
} from './geometrie.js';

const PI = Math.PI;

/** Wandstaerke (radial) passend zu Profil und Schienenbreite. */
export function ringDicke(profil, breite) {
  if (profil === 'rund') return breite;
  if (profil === 'flach') return THREE.MathUtils.clamp(0.42 * breite + 0.3, 1.0, 2.2);
  return THREE.MathUtils.clamp(0.5 * breite + 0.25, 1.0, 2.4);
}

export function baueRing(spec, res) {
  const r = spec.ring;
  const metall = metallMaterial(res, spec.metall);
  const gruppe = new THREE.Group();
  gruppe.name = 'ring';
  const Ri = r.innenDurchmesserMm / 2;
  const B = r.schieneMm;
  const D = ringDicke(r.profil, B);
  const saat = spec._saat || 1;

  switch (r.typ) {
    case 'solitaer': solitaer(); break;
    case 'perle': perlenring(); break;
    case 'offen': offen(); break;
    case 'siegel': siegel(); break;
    case 'kette': kettenring(); break;
    default: band();
  }
  return { gruppe, masse: { innenRadiusMm: Ri }, pendel: [] };

  function band() {
    gruppe.add(netz(res.eigen(schiene({ radiusX: Ri, breite: B, dicke: D, profil: r.profil })), metall, 'schiene'));
  }

  // Schiene oben schmaler (Schultern), unten volle Breite
  function verjuengt(oben) {
    return (th) => {
      const w = 0.5 + 0.5 * Math.cos(th); // 1 oben, 0 unten
      return B * (1 - (1 - oben) * w * w);
    };
  }

  function solitaer() {
    const st = spec.stein;
    const s = steinGeometrie({ groesse: st.groesseMm, schliff: st.schliff });
    const anzahl = r.krappen === 6 ? 6 : 4;
    const k = krappenGeometrie({ stein: s, anzahl, winkel0: anzahl === 4 ? PI / 4 : PI / 2 });
    const dOben = D * 0.9;
    gruppe.add(netz(res.eigen(schiene({ radiusX: Ri, breite: verjuengt(0.78), dicke: (th) => D - (D - dOben) * (0.5 + 0.5 * Math.cos(th)), profil: r.profil })), metall, 'schiene'));
    // Kopf: Korbunterkante sitzt in der Schiene
    const kopf = new THREE.Group();
    kopf.name = 'kopf';
    const rundisteZ = Ri + dOben * 0.75 - k.basisZ;
    kopf.position.z = rundisteZ;
    kopf.add(netz(res.eigen(s.geometrie), steinMaterial(res, st.art, st.farbe), 'stein'));
    kopf.add(netz(res.eigen(k.geometrie), metall, 'krappen'));
    gruppe.add(kopf);
  }

  function perlenring() {
    const P = spec.perlen;
    const Dp = P.groesseMm;
    gruppe.add(netz(res.eigen(schiene({ radiusX: Ri, breite: verjuengt(0.8), dicke: D, profil: r.profil })), metall, 'schiene'));
    const schale = perlenSchale(Dp);
    const zSchale = Ri + D * 0.92;
    const sm = netz(res.eigen(schale.geometrie), metall, 'schale');
    sm.position.z = zSchale;
    gruppe.add(sm);
    const perle = perlenMesh({ durchmesser: Dp, form: P.form, farbe: P.farbe, res, saat, detail: 14 });
    perle.rotation.x = PI / 2; // Bohrung zeigt in die Schale
    perle.position.z = zSchale + schale.hoehe * 0.3 + (Dp * perlenStreckung(P.form)) / 2 * 0.98;
    gruppe.add(perle);
  }

  function offen() {
    // Offene Schiene mit versetzten Enden (Bypass), Perlen an den Enden
    const P = spec.perlen;
    const Dp = P.groesseMm;
    const anzahl = Math.max(1, Math.min(2, Math.round(P.anzahl || 2)));
    const luecke = THREE.MathUtils.degToRad(26);
    const A = Dp * 0.36;
    const t0 = luecke, t1 = 2 * PI - luecke;
    const yv = (th) => A * ((th - PI) / (PI - luecke));
    gruppe.add(netz(res.eigen(schiene({ radiusX: Ri, breite: B, dicke: D, profil: 'rund', bogen: [t0, t1], yVersatz: yv })), metall, 'schiene'));
    const Rm = Ri + D / 2;
    const enden = [
      { th: t0, richtung: -1, y: -A },
      { th: t1, richtung: 1, y: A }
    ];
    enden.forEach((e, i) => {
      const p = new THREE.Vector3(Math.sin(e.th) * Rm, e.y, Math.cos(e.th) * Rm);
      const t = new THREE.Vector3(Math.cos(e.th) * Rm, A / (PI - luecke), -Math.sin(e.th) * Rm).normalize().multiplyScalar(e.richtung);
      const istPerle = i === 1 || anzahl === 2;
      const d = istPerle ? (i === 0 ? Dp * 0.82 : Dp) : Math.max(2.4, B * 1.5);
      const h = istPerle ? d * perlenStreckung(P.form) : d;
      // Perle/Kugel sitzt auf dem Schienenende, nach aussen versetzt: ragt nicht in den Fingerraum
      const n = new THREE.Vector3(Math.sin(e.th), 0, Math.cos(e.th));
      const mitte = p.clone().addScaledVector(t, h * 0.22);
      const radial = Math.hypot(mitte.x, mitte.z);
      mitte.addScaledVector(n, Math.max(0, Ri + 0.25 + d / 2 - radial));
      let m;
      if (istPerle) {
        m = perlenMesh({ durchmesser: d, form: P.form, farbe: P.farbe, res, saat: saat + i, detail: 13 });
        // Bohrung zeigt zum Schienenende (Stift)
        m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), mitte.clone().sub(p).normalize());
      } else {
        m = netz(res.eigen(kugelGeometrie(d / 2, 3)), metall, 'kugel');
      }
      m.position.copy(mitte);
      gruppe.add(m);
    });
  }

  function siegel() {
    const bOben = Math.max(B * 2.6, 8.5);
    const dOben = Math.max(D * 1.9, 2.8);
    // th auf -PI..PI falten: die Schiene laeuft von 0 bis 2 PI, oben (th = 0) muss stetig sein
    const w = (th) => { const t = Math.atan2(Math.sin(th), Math.cos(th)); const c = Math.max(0, Math.cos(t * 1.45)); return c * c; };
    const breite = (th) => B + (bOben - B) * w(th);
    const dicke = (th) => D + (dOben - D) * w(th);
    // Plattenhoehe so, dass die Platte etwa so breit wie lang ist
    const halb = bOben * 0.46;
    const th = Math.asin(Math.min(0.9, halb / (Ri + dOben)));
    const zPlatte = (Ri + dicke(th)) * Math.cos(th);
    gruppe.add(netz(res.eigen(schiene({ radiusX: Ri, breite, dicke, profil: 'flach', segmente: 160, profilSegmente: 32, flachOben: zPlatte })), metall, 'schiene'));
  }

  function kettenring() {
    const W = Math.max(1.2, B);
    const typ = spec.kette?.typ && spec.kette.typ !== 'perlenstrang' ? spec.kette.typ : 'anker';
    const kreis = (R) => {
      const pts = [], nn = [];
      for (let i = 0; i < 256; i++) {
        const th = (i / 256) * 2 * PI;
        pts.push(new THREE.Vector3(Math.sin(th) * R, 0, Math.cos(th) * R));
        nn.push(new THREE.Vector3(Math.sin(th), 0, Math.cos(th)));
      }
      return new Pfad(pts, { geschlossen: true, normalen: nn });
    };
    // Glieder ragen je nach Typ unterschiedlich weit nach innen: einmal messen, dann Pfad so
    // legen, dass die Innenkante genau auf dem Innenradius liegt
    const R0 = Ri + W * 0.4;
    const probe = ketteEntlang(kreis(R0), { typ, staerkeMm: W, material: metall, res: new Ressourcen(), saat });
    const innen = innenRadiusVon(probe);
    probe.traverse((o) => { if (o.isMesh) o.geometry.dispose(); });
    gruppe.add(ketteEntlang(kreis(R0 + (Ri - innen)), { typ, staerkeMm: W, material: metall, res, saat }));
  }
}

/** Kleinster Abstand der Geometrie von der Y-Achse (Innenradius), alle Meshes inkl. Instanzen. */
export function innenRadiusVon(gruppe) {
  gruppe.updateMatrixWorld(true);
  const v = new THREE.Vector3(), m = new THREE.Matrix4(), im = new THREE.Matrix4();
  let r = Infinity;
  gruppe.traverse((o) => {
    if (!o.isMesh) return;
    const pos = o.geometry.attributes.position;
    const n = o.isInstancedMesh ? o.count : 1;
    for (let k = 0; k < n; k++) {
      if (o.isInstancedMesh) { o.getMatrixAt(k, im); m.multiplyMatrices(o.matrixWorld, im); } else m.copy(o.matrixWorld);
      for (let i = 0; i < pos.count; i++) {
        v.fromBufferAttribute(pos, i).applyMatrix4(m);
        r = Math.min(r, Math.hypot(v.x, v.z));
      }
    }
  });
  return r;
}

// Zirkonia-Ring in Zarge (z. B. fuer schlichte Steinringe) – intern verfuegbar
export function zargenKopf(stein, metall, steinMat, res) {
  const s = steinGeometrie({ groesse: stein.groesseMm, schliff: stein.schliff });
  const z = zargenGeometrie({ stein: s });
  const g = new THREE.Group();
  g.add(netz(res.eigen(s.geometrie), steinMat, 'stein'), netz(res.eigen(z.geometrie), metall, 'zarge'));
  return { gruppe: g, basisZ: z.basisZ };
}
