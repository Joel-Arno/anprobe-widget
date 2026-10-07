// Analyse: seitliche Lage der Drosselgrube gegen Kopf- und Schulter-Bezuege
// (Bildkoordinaten, mm ueber den Iris-Massstab). Braucht ausgabe/kalib.json.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { zuBuehne, alsVektoren, mittel } from '../../src/tracking/raum.js';
import { gesichtPxProMm, kopfRahmen, rahmenAusMatrix } from '../../src/tracking/gesicht.js';

const hier = path.dirname(fileURLToPath(import.meta.url));
const { KALIBRIERUNG } = createRequire(import.meta.url)('./kalib_soll.cjs');
const daten = JSON.parse(fs.readFileSync(path.join(hier, 'ausgabe/kalib.json')));
for (const d of daten) {
  const k = KALIBRIERUNG.find((x) => x.bild === d.bild && !x.crop);
  if (!k || !k.drossel || !d.gesicht || !d.gesicht.faceLandmarks.length || !d.koerper.landmarks.length) continue;
  const P = alsVektoren(zuBuehne(d.gesicht.faceLandmarks[0], d.W, d.H, false));
  const Pp = alsVektoren(zuBuehne(d.koerper.landmarks[0], d.W, d.H, false));
  const ppm = gesichtPxProMm(P);
  const m = d.gesicht.facialTransformationMatrixes[0].data;
  const r = kopfRahmen(P, false, rahmenAusMatrix(m, false));
  const soll = { x: k.drossel[0], y: d.H - k.drossel[1] };
  const f = (p) => `${((p.x - soll.x) / ppm).toFixed(1).padStart(6)},${((p.y - soll.y) / ppm).toFixed(1).padStart(7)}`;
  console.log(d.bild, 'ppm', ppm.toFixed(3), 'gier', (r.gier * 57.3).toFixed(1), 'nick', (r.nick * 57.3).toFixed(1), 'roll', (Math.atan2(r.x.y, r.x.x) * 57.3).toFixed(1));
  console.log('  Kinn 152        ', f(P[152]));
  console.log('  Kiefer 172/397  ', f(mittel(P, [172, 397])));
  console.log('  Kiefer 58/288   ', f(mittel(P, [58, 288])));
  console.log('  Mitte 234/454   ', f(r.ursprung));
  console.log('  Schultern 11/12 ', f(mittel(Pp, [11, 12])));
  console.log('  Mund Pose 9/10  ', f(mittel(Pp, [9, 10])));
}

// Drehpunkt des Kopfes (etwa Atlas, hinter/unter dem Ohr) als rumpffester Bezug:
// Vektor Drehpunkt -> Soll-Drosselgrube im Rumpf-Rahmen (X Schulterlinie, Y hoch), mm
console.log('\nDrehpunkt (o + R·(0, -25, -60) mm) -> Soll, im Rumpf-Rahmen (seitlich, hoch) mm:');
for (const d of daten) {
  const k = KALIBRIERUNG.find((x) => x.bild === d.bild && !x.crop);
  if (!k || !k.drossel || !d.gesicht || !d.gesicht.faceLandmarks.length || !d.koerper.landmarks.length) continue;
  const P = alsVektoren(zuBuehne(d.gesicht.faceLandmarks[0], d.W, d.H, false));
  const Pp = alsVektoren(zuBuehne(d.koerper.landmarks[0], d.W, d.H, false));
  const ppm = gesichtPxProMm(P);
  const r = kopfRahmen(P, false, rahmenAusMatrix(d.gesicht.facialTransformationMatrixes[0].data, false));
  const dreh = r.ursprung.clone().addScaledVector(r.y, -25 * ppm).addScaledVector(r.z, -60 * ppm);
  const sx = Pp[11].clone().sub(Pp[12]); sx.z = 0; sx.normalize();
  const sy = { x: -sx.y, y: sx.x };
  const v = { x: k.drossel[0] - dreh.x, y: (d.H - k.drossel[1]) - dreh.y };
  console.log(' ', d.bild.padEnd(22), 'seitlich', ((v.x * sx.x + v.y * sx.y) / ppm).toFixed(1), 'hoch', ((v.x * sy.x + v.y * sy.y) / ppm).toFixed(1),
    ' nick', (r.nick * 57.3).toFixed(1));
}
