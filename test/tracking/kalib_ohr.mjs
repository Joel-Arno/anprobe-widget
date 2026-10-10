// Kalibrierung des Ohrlaeppchen-Versatzes im Kopf-Rahmen gegen von Hand
// abgelesene Soll-Punkte (kalib_soll.cjs; Landmarken aus kalib_daten.cjs).
// Vergleicht Rahmen (Landmarkenpaare / Transformationsmatrix) und Bezugspunkte,
// mit Kreuzvalidierung "eine Person auslassen".
//   node test/tracking/kalib_ohr.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import * as THREE from 'three';
import { zuBuehne, alsVektoren, mittel } from '../../src/tracking/raum.js';
import {
  kopfRahmen, rahmenAusMatrix, gesichtPxProMm, ohrlaeppchen, OHR_KALIBRIERUNG
} from '../../src/tracking/gesicht.js';

const hier = path.dirname(fileURLToPath(import.meta.url));
const { KALIBRIERUNG } = createRequire(import.meta.url)('./kalib_soll.cjs');
const daten = JSON.parse(fs.readFileSync(path.join(hier, 'ausgabe/kalib.json'))).map((d) => {
  const soll = KALIBRIERUNG.find((k) => k.bild === d.bild && String(k.crop || '') === String(d.crop[0] ? d.crop : ''));
  return { ...d, ohr: soll && soll.ohr };
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

// Beobachtungen (je Ohr, ungespiegelt und gespiegelt)
const beob = [];
for (const d of daten) {
  if (!d.ohr || !d.gesicht || !d.gesicht.faceLandmarks.length) continue;
  const person = d.bild + (d.crop[0] ? '#' : '');
  for (const spiegel of [false, true]) {
    const P = alsVektoren(zuBuehne(d.gesicht.faceLandmarks[0], d.W, d.H, spiegel));
    const paare = kopfRahmen(P, spiegel);
    const m = d.gesicht.facialTransformationMatrixes && d.gesicht.facialTransformationMatrixes[0];
    const matrix = rahmenAusMatrix(m && m.data, spiegel);
    const ppm = gesichtPxProMm(P);
    for (const [seiteBild, soll] of Object.entries(d.ohr)) {
      const xb = soll[0] - d.crop[0], yb = soll[1] - d.crop[1];
      const ziel = new THREE.Vector3(spiegel ? d.W - xb : xb, d.H - yb, 0);
      const seite = spiegel ? (seiteBild === 'L' ? 'R' : 'L') : seiteBild;
      beob.push({
        name: `${d.bild.slice(0, 22)}${d.crop[0] ? '(frau)' : ''} ${seiteBild}${spiegel ? ' s' : ''}`,
        person, P, rahmen: { paare, matrix }, ppm, seite, spiegel, ziel, w: soll[2] ?? 1,
        gier: paare.gier * 57.3, nick: paare.nick * 57.3,
        nickMatrix: matrix ? Math.asin(matrix.z.y) * 57.3 : NaN
      });
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

function zeilenFuer(o, bezug, rahmenArt) {
  const personRechts = (o.seite === 'L') !== o.spiegel;
  const ref = mittel(o.P, personRechts ? bezug.L : bezug.R);
  const aussen = o.seite === 'L' ? -1 : 1;
  const r = o.rahmen[rahmenArt];
  const m = [(o.ziel.x - ref.x) / o.ppm, (o.ziel.y - ref.y) / o.ppm];
  const A = [[aussen * r.x.x, r.y.x, r.z.x], [aussen * r.x.y, r.y.y, r.z.y]];
  return { m, A };
}

function fit(liste, bezug, rahmenArt, priorVorn, gewichtPrior) {
  const ATA = [[0, 0, 0], [0, 0, 0], [0, 0, 0]], ATb = [0, 0, 0];
  for (const o of liste) {
    const { m, A } = zeilenFuer(o, bezug, rahmenArt);
    for (let k = 0; k < 2; k++) for (let i = 0; i < 3; i++) {
      ATb[i] += o.w * A[k][i] * m[k];
      for (let j = 0; j < 3; j++) ATA[i][j] += o.w * A[k][i] * A[k][j];
    }
  }
  ATA[2][2] += gewichtPrior; ATb[2] += gewichtPrior * priorVorn;
  return loese3(ATA, ATb);
}

function fehler(o, d, bezug, rahmenArt) {
  const { m, A } = zeilenFuer(o, bezug, rahmenArt);
  const p = [0, 1].map((k) => A[k][0] * d[0] + A[k][1] * d[1] + A[k][2] * d[2]);
  return { mm: Math.hypot(p[0] - m[0], p[1] - m[1]), dx: p[0] - m[0], dy: p[1] - m[1] };
}

const personen = [...new Set(beob.map((o) => o.person))];
const sicher = (o) => o.w >= 1 && !o.spiegel;
const rms = (werte) => Math.sqrt(werte.reduce((s, x) => s + x * x, 0) / werte.length);

console.log('Neigung (Nicken) je Bild: Paare / Matrix');
for (const o of beob.filter((x) => !x.spiegel)) console.log('  ', o.name.padEnd(30), o.nick.toFixed(1).padStart(6), o.nickMatrix.toFixed(1).padStart(6), ' Gier', o.gier.toFixed(1));

console.log('\nRahmen / Bezug / Vorn-Prior: Versatz (aussen, oben, vorn) mm | Fehler auf allen | Kreuzvalidierung (Person ausgelassen)');
const ergebnisse = [];
for (const rahmenArt of ['paare', 'matrix']) {
  for (const [bName, bezug] of Object.entries(BEZUEGE)) {
    for (const [prior, g] of [[-30, 0.3], [-45, 0.3], [-60, 0.3]]) {
      const d = fit(beob, bezug, rahmenArt, prior, g);
      const alle = beob.filter(sicher).map((o) => fehler(o, d, bezug, rahmenArt).mm);
      const kv = [];
      for (const p of personen) {
        const dp = fit(beob.filter((o) => o.person !== p), bezug, rahmenArt, prior, g);
        for (const o of beob.filter((x) => x.person === p && sicher(x))) kv.push(fehler(o, dp, bezug, rahmenArt).mm);
      }
      ergebnisse.push({ rahmenArt, bName, prior, d, rms: rms(alle), max: Math.max(...alle), kvRms: rms(kv), kvMax: Math.max(...kv) });
      console.log(`${rahmenArt.padEnd(7)} ${bName.padEnd(18)} ${String(prior).padStart(4)}: ${d.map((x) => x.toFixed(1).padStart(6)).join(' ')} | RMS ${rms(alle).toFixed(2)} max ${Math.max(...alle).toFixed(1)} | KV RMS ${rms(kv).toFixed(2)} max ${Math.max(...kv).toFixed(1)}`);
    }
  }
}

const best = ergebnisse.reduce((a, b) => (b.kvRms < a.kvRms ? b : a));
console.log(`\nBeste Kreuzvalidierung: ${best.rahmenArt} ${best.bName} prior ${best.prior}`);
for (const o of beob) {
  const f = fehler(o, best.d, BEZUEGE[best.bName], best.rahmenArt);
  console.log('  ', o.name.padEnd(34), f.mm.toFixed(1), 'mm', `(seitl ${f.dx.toFixed(1)}, hoch ${f.dy.toFixed(1)})`, o.w < 1 ? 'unsicher' : '');
}

// Pruefung der Konstanten im Code (direkt ueber ohrlaeppchen())
console.log('\nKonstanten im Code', JSON.stringify(OHR_KALIBRIERUNG));
const imCode = [];
for (const o of beob) {
  const r = OHR_KALIBRIERUNG.rahmen === 'matrix' && o.rahmen.matrix
    ? { ...o.rahmen.paare, x: o.rahmen.matrix.x, y: o.rahmen.matrix.y, z: o.rahmen.matrix.z }
    : o.rahmen.paare;
  const a = ohrlaeppchen(o.P, r, o.ppm, o.seite, o.spiegel);
  const e = Math.hypot(a.position.x - o.ziel.x, a.position.y - o.ziel.y) / o.ppm;
  if (sicher(o)) imCode.push(e);
  console.log('  ', o.name.padEnd(34), e.toFixed(1), 'mm', `gier ${o.gier.toFixed(0)} nick ${o.nick.toFixed(0)}`, o.w < 1 ? 'unsicher' : '');
}
console.log(`   RMS ${rms(imCode).toFixed(2)} mm, max ${Math.max(...imCode).toFixed(1)} mm (sichere Punkte)`);
