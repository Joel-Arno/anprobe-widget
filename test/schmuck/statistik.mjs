// Baut alle Vorlagen (und Pruef-Specs) in Node und gibt Dreiecke, Objekte, Masse und Box aus.
// Aufruf: node test/schmuck/statistik.mjs
import * as THREE from 'three';
import { baueSchmuck, VORLAGEN, pruefeSpec } from '../../src/schmuck/index.js';
import { geteilteRessourcen } from '../../src/schmuck/materialien.js';
import { PRUEF_SPECS } from './pruefspecs.js';

function zaehle(gruppe) {
  let dreiecke = 0, objekte = 0, instanzen = 0;
  gruppe.traverse((o) => {
    if (!o.isMesh) return;
    objekte++;
    const g = o.geometry;
    const n = g.index ? g.index.count / 3 : g.attributes.position.count / 3;
    const k = o.isInstancedMesh ? o.count : 1;
    instanzen += k;
    dreiecke += n * k;
  });
  return { dreiecke: Math.round(dreiecke), objekte, instanzen };
}
const alle = [...Object.entries(VORLAGEN).map(([id, v]) => [id, v.spec]), ...Object.entries(PRUEF_SPECS)];
let fehlerGesamt = 0;
for (const [id, spec] of alle) {
  const p = pruefeSpec(spec);
  if (!p.ok) { console.log('  SPEC-FEHLER', id, p.fehler); fehlerGesamt++; }
  const t0 = performance.now();
  const m = baueSchmuck(spec);
  const ms = performance.now() - t0;
  m.gruppe.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(m.gruppe);
  const z = zaehle(m.gruppe);
  const f = (v) => `${v.x.toFixed(1)},${v.y.toFixed(1)},${v.z.toFixed(1)}`;
  console.log(`${id.padEnd(26)} ${m.art.padEnd(8)} ${String(z.dreiecke).padStart(7)} Dr ${String(z.objekte).padStart(3)} Obj ${ms.toFixed(0).padStart(4)} ms  box[${f(box.min)} .. ${f(box.max)}]  masse ${JSON.stringify(m.masse, (k, v) => typeof v === 'number' ? Math.round(v * 10) / 10 : v)} pendel ${m.pendel.length}`);
  if (z.dreiecke > 150000) { console.log('  ZU VIELE DREIECKE'); fehlerGesamt++; }
  m.dispose();
}
const rest = geteilteRessourcen();
console.log('Geteilte Ressourcen nach dispose:', rest.length ? rest : 'keine');
if (rest.length) fehlerGesamt++;
process.exit(fehlerGesamt ? 1 : 0);
