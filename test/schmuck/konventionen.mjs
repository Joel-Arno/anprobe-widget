// Prueft die Modellkonventionen numerisch (Node): Ringinnenradius, Armband-Schlaufe,
// Ohrring-Laenge/Richtung, Kettenlage relativ zum Normhals.
// Aufruf: node test/schmuck/konventionen.mjs
import * as THREE from 'three';
import { baueSchmuck, VORLAGEN } from '../../src/schmuck/index.js';
import { PRUEF_SPECS } from './pruefspecs.js';

const v = new THREE.Vector3();
function punkte(gruppe, fn, filter = () => true) {
  gruppe.updateMatrixWorld(true);
  const m = new THREE.Matrix4(), im = new THREE.Matrix4();
  gruppe.traverse((o) => {
    if (!o.isMesh || !filter(o)) return;
    const pos = o.geometry.attributes.position;
    const n = o.isInstancedMesh ? o.count : 1;
    for (let k = 0; k < n; k++) {
      if (o.isInstancedMesh) { o.getMatrixAt(k, im); m.multiplyMatrices(o.matrixWorld, im); } else m.copy(o.matrixWorld);
      for (let i = 0; i < pos.count; i += 3) fn(v.fromBufferAttribute(pos, i).applyMatrix4(m), o);
    }
  });
}
let fehler = 0;
const melde = (ok, text) => { console.log((ok ? '  ok   ' : '  FEHLER ') + text); if (!ok) fehler++; };
const alle = [...Object.entries(VORLAGEN).map(([id, x]) => [id, x.spec]), ...Object.entries(PRUEF_SPECS)];
for (const [id, spec] of alle) {
  const mdl = baueSchmuck(spec);
  const g = mdl.gruppe;
  console.log(id, mdl.art);
  if (mdl.art === 'ring') {
    // kleinster Abstand zur Y-Achse im Bereich |y| < 1 (Schiene) = Innenradius
    let rMin = Infinity, zMax = -Infinity;
    punkte(g, (p) => { if (Math.abs(p.y) < 1) rMin = Math.min(rMin, Math.hypot(p.x, p.z)); zMax = Math.max(zMax, p.z); });
    melde(Math.abs(rMin - mdl.masse.innenRadiusMm) < 0.12, `Innenradius ${rMin.toFixed(2)} ~ masse ${mdl.masse.innenRadiusMm}`);
    melde(zMax > mdl.masse.innenRadiusMm, `Kopf/Stein oben (+Z) bis z=${zMax.toFixed(1)}`);
  } else if (mdl.art === 'armband') {
    const r = mdl.masse.innenRadienMm;
    // kein Punkt der Schlaufe innerhalb der Ellipse (x/rx)^2 + (z/rz)^2 < 0.97 nahe y=0
    let innen = 0, zMin = Infinity;
    punkte(g, (p, o) => {
      if (Math.abs(p.y) < 3 && (p.x / r.x) ** 2 + (p.z / r.z) ** 2 < 0.97) innen++;
      zMin = Math.min(zMin, p.z);
    }, (o) => !/charm|verlaengerung/.test(o.parent?.name || '') && !/charm|verlaengerung/.test(o.parent?.parent?.name || ''));
    melde(innen === 0, `Schlaufe ausserhalb innenRadienMm ${r.x.toFixed(1)}/${r.z.toFixed(1)} (Punkte innen: ${innen})`);
  } else if (mdl.art === 'ohrringe') {
    const box = new THREE.Box3().setFromObject(g);
    melde(Math.abs(-box.min.y - mdl.masse.laengeMm) < 0.6, `laengeMm ${mdl.masse.laengeMm.toFixed(1)} ~ tiefster Punkt ${(-box.min.y).toFixed(1)}`);
    let xMinVorn = Infinity;
    punkte(g, (p) => { if (Math.abs(p.y) < 1 && Math.abs(p.z) < 1) xMinVorn = Math.min(xMinVorn, p.x); });
    melde(box.max.x > 1.5, `Schmuckseite nach +X (max x ${box.max.x.toFixed(1)})`);
  } else if (mdl.art === 'kette') {
    // vorn (z > -20): Kette liegt vor dem Hals und unterhalb y ~ 15
    let yMax = -Infinity, imHals = 0;
    punkte(g, (p) => {
      if (p.z > -10) yMax = Math.max(yMax, p.y);
      // vordere Halshaelfte (hinten liegt die Kette absichtlich auf flacherem Querschnitt und wird verdeckt)
      // nur sichtbarer Bereich vorn (|x| < 48); seitlich am Uebergang Hals/Schulter duerfen grosse
      // Perlen bis ~1,5 mm in den Normzylinder ragen (dort verdeckt der Hals sie ohnehin)
      if (p.y > 0 && p.z > -55 && Math.abs(p.x) < 48 && Math.hypot(p.x, p.z + 55) < 54.5) imHals++;
    });
    melde(imHals === 0, `nichts in der vorderen Haelfte des Normhalses (Punkte innen: ${imHals})`);
    melde(yMax < 20, `vorn nicht hoeher als Seitenhoehe (y max vorn ${yMax.toFixed(1)})`);
    melde(mdl.masse.halsRadiusMm === 55, 'halsRadiusMm 55');
  }
  for (const pd of mdl.pendel) melde(pd.knoten.isObject3D && pd.laengeMm > 0 && ['frei', 'x', 'z', undefined].includes(pd.achse), `pendel ${pd.knoten.name} laenge ${pd.laengeMm.toFixed(1)} achse ${pd.achse}`);
  mdl.dispose();
}
console.log(fehler ? `${fehler} Fehler` : 'alle Konventionen erfuellt');
process.exit(fehler ? 1 : 0);
