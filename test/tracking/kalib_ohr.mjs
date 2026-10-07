// Kalibrierung des Ohrlaeppchen-Versatzes im Kopf-Rahmen gegen von Hand
// abgelesene Soll-Punkte (kalib_soll.cjs, Daten aus kalib_daten.cjs).
//   node test/tracking/kalib_ohr.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as THREE from 'three';
import { zuBuehne, alsVektoren, mittel } from '../../src/tracking/raum.js';
import { kopfRahmen, gesichtPxProMm, ohrlaeppchen, OHR_KALIBRIERUNG } from '../../src/tracking/gesicht.js';

import { createRequire } from 'node:module';

const hier = path.dirname(fileURLToPath(import.meta.url));
// Landmarken aus kalib_daten.cjs, Soll-Punkte immer frisch aus kalib_soll.cjs
const { KALIBRIERUNG } = createRequire(import.meta.url)('./kalib_soll.cjs');
const daten = JSON.parse(fs.readFileSync(path.join(hier, 'ausgabe/kalib.json'))).map((d) => {
  const soll = KALIBRIERUNG.find((k) => k.bild === d.bild && String(k.crop || '') === String(d.crop[0] ? d.crop : ''));
  return { ...d, ohr: soll && soll.ohr, drossel: soll && soll.drossel };
});

function loese3(A, b) {
  const M = A.map((r, i) => [...r, b[i]]);
  for (let i = 0; i < 3; i++) {
    let p = i;
    for (let k = i + 1; k < 3; k++) if (Math.abs(M[k][i]) > Math.abs(M[p][i])) p = k;
    [M[i], M[p]] = [M[p], M[i]];
    for (let k = 0; k < 3; k++) if (k !== i) { const f = M[k][i] / M[i][i]; for (let j = i; j < 4; j++) M[k][j] -= f * M[i][j]; }
  }
  return M.map((r, i) => r[3] / r[i]);
}

// Beobachtungen sammeln
const beob = [];
for (const d of daten) {
  if (!d.ohr || !d.gesicht || !d.gesicht.faceLandmarks.length) continue;
  for (const spiegel of [false, true]) {
    const P = alsVektoren(zuBuehne(d.gesicht.faceLandmarks[0], d.W, d.H, spiegel));
    const rahmen = kopfRahmen(P, spiegel);
    const ppm = gesichtPxProMm(P);
    for (const [seiteBild, soll] of Object.entries(d.ohr)) {
      // Soll in Buehne (Bildseite dreht sich bei Spiegelung)
      const xb = soll[0] - d.crop[0], yb = soll[1] - d.crop[1];
      const ziel = new THREE.Vector3(spiegel ? d.W - xb : xb, d.H - yb, 0);
      const seite = spiegel ? (seiteBild === 'L' ? 'R' : 'L') : seiteBild;
      beob.push({ name: `${d.bild.slice(0, 18)}${d.crop[0] ? '(frau)' : ''} ${seiteBild}${spiegel ? ' s' : ''}`, P, rahmen, ppm, seite, spiegel, ziel, w: soll[2] ?? 1, gier: rahmen.gier * 57.3, nick: rahmen.nick * 57.3 });
    }
  }
}

const BEZUEGE = {
  '234/93': { L: [234, 93], R: [454, 323] },
  '93': { L: [93], R: [323] },
  '93/132': { L: [93, 132], R: [323, 361] },
  '234/93/132': { L: [234, 93, 132], R: [454, 323, 361] },
  '127/234/93/132/58': { L: [127, 234, 93, 132, 58], R: [356, 454, 323, 361, 288] }
};

function fit(bezug, priorVorn, gewichtPrior) {
  const ATA = [[0, 0, 0], [0, 0, 0], [0, 0, 0]], ATb = [0, 0, 0];
  const zeilen = [];
  for (const o of beob) {
    const personRechts = (o.seite === 'L') !== o.spiegel;
    const ref = mittel(o.P, personRechts ? bezug.L : bezug.R);
    const aussen = o.seite === 'L' ? -1 : 1;
    const r = o.rahmen;
    // Versatz (mm) = (ziel - ref)/ppm in der Bildebene = a*aussen*X + b*Y + c*Z
    const m = [(o.ziel.x - ref.x) / o.ppm, (o.ziel.y - ref.y) / o.ppm];
    const A = [[aussen * r.x.x, r.y.x, r.z.x], [aussen * r.x.y, r.y.y, r.z.y]];
    zeilen.push({ o, m, A });
    for (let k = 0; k < 2; k++) for (let i = 0; i < 3; i++) {
      ATb[i] += o.w * A[k][i] * m[k];
      for (let j = 0; j < 3; j++) ATA[i][j] += o.w * A[k][i] * A[k][j];
    }
  }
  ATA[2][2] += gewichtPrior; ATb[2] += gewichtPrior * priorVorn;
  const d = loese3(ATA, ATb);
  const fehler = zeilen.map(({ o, m, A }) => {
    const p = [0, 1].map((k) => A[k][0] * d[0] + A[k][1] * d[1] + A[k][2] * d[2]);
    return { name: o.name, mm: Math.hypot(p[0] - m[0], p[1] - m[1]), dx: p[0] - m[0], dy: p[1] - m[1], w: o.w };
  });
  const rms = Math.sqrt(fehler.reduce((s, f) => s + f.w * f.mm * f.mm, 0) / fehler.reduce((s, f) => s + f.w, 0));
  return { d, fehler, rms };
}

for (const [name, bezug] of Object.entries(BEZUEGE)) {
  for (const [prior, g] of [[-20, 0.5], [-25, 0.5], [-30, 0.5]]) {
    const r = fit(bezug, prior, g);
    console.log(`${name.padEnd(20)} prior vorn ${prior}: aussen/oben/vorn = ${r.d.map((x) => x.toFixed(1)).join(' / ')} mm  RMS ${r.rms.toFixed(2)} mm  max ${Math.max(...r.fehler.filter((f) => f.w >= 1).map((f) => f.mm)).toFixed(1)}`);
  }
}
const aktuell = fit(OHR_KALIBRIERUNG.bezug, OHR_KALIBRIERUNG.vornMm, 1e6);
console.log('\nEinzelfehler mit Bezug', JSON.stringify(OHR_KALIBRIERUNG.bezug), 'und gefittetem Versatz:');
const best = fit(OHR_KALIBRIERUNG.bezug, OHR_KALIBRIERUNG.vornMm, 0.5);
for (const f of best.fehler) console.log('  ', f.name.padEnd(34), f.mm.toFixed(1), 'mm', `(seitl ${f.dx.toFixed(1)}, hoch ${f.dy.toFixed(1)})`, f.w < 1 ? 'unsicher' : '');
// Pruefung der aktuellen Konstanten (direkt ueber ohrlaeppchen())
console.log('\nAktuelle Konstanten', JSON.stringify(OHR_KALIBRIERUNG));
for (const o of beob) {
  const a = ohrlaeppchen(o.P, o.rahmen, o.ppm, o.seite, o.spiegel);
  const e = Math.hypot(a.position.x - o.ziel.x, a.position.y - o.ziel.y) / o.ppm;
  console.log('  ', o.name.padEnd(34), e.toFixed(1), 'mm', `gier ${o.gier.toFixed(0)} nick ${o.nick.toFixed(0)}`);
}
void aktuell;
