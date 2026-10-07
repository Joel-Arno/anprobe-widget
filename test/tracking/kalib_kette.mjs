// Prueft die geschaetzte Drosselgrube gegen von Hand abgelesene Soll-Punkte.
//   node test/tracking/kalib_kette.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as THREE from 'three';
import { zuBuehne, alsVektoren } from '../../src/tracking/raum.js';
import { kopfRahmen, gesichtPxProMm } from '../../src/tracking/gesicht.js';
import { berechneKoerper } from '../../src/tracking/koerper.js';

import { createRequire } from 'node:module';

const hier = path.dirname(fileURLToPath(import.meta.url));
// Landmarken aus kalib_daten.cjs, Soll-Punkte immer frisch aus kalib_soll.cjs
const { KALIBRIERUNG } = createRequire(import.meta.url)('./kalib_soll.cjs');
const daten = JSON.parse(fs.readFileSync(path.join(hier, 'ausgabe/kalib.json'))).map((d) => {
  const soll = KALIBRIERUNG.find((k) => k.bild === d.bild && String(k.crop || '') === String(d.crop[0] ? d.crop : ''));
  return { ...d, ohr: soll && soll.ohr, drossel: soll && soll.drossel };
});

for (const d of daten) {
  if (!d.koerper || !d.koerper.landmarks.length) continue;
  for (const spiegel of [false, true]) {
    const lm = d.koerper.landmarks[0];
    const pose = {
      P: alsVektoren(zuBuehne(lm, d.W, d.H, spiegel)),
      welt: d.koerper.worldLandmarks[0].map((p) => new THREE.Vector3(spiegel ? -p.x : p.x, -p.y, -p.z).multiplyScalar(1000)),
      sichtbarkeit: lm.map((p) => p.visibility ?? 1)
    };
    let gesicht = null;
    if (d.gesicht && d.gesicht.faceLandmarks.length) {
      const P = alsVektoren(zuBuehne(d.gesicht.faceLandmarks[0], d.W, d.H, spiegel));
      gesicht = { P, rahmen: kopfRahmen(P, spiegel), ppm: gesichtPxProMm(P) };
    }
    const e = berechneKoerper(pose, gesicht, { W: d.W, H: d.H, spiegel });
    const p = e.anker.position;
    const bildX = spiegel ? d.W - p.x : p.x, bildY = d.H - p.y;
    let txt = `${(d.bild + (d.crop[0] ? ' (Ausschnitt)' : '')).padEnd(34)}${spiegel ? ' s' : '  '} Drossel (${bildX.toFixed(0)}, ${bildY.toFixed(0)})  ppm ${e.anker.pxProMm.toFixed(3)}  Hals ${e.halsRadiusMm.toFixed(1)} mm  Schulter ${e.info.schulterMm.toFixed(0)} mm  Gesicht ${gesicht ? 'ja' : 'nein'}`;
    if (d.drossel) {
      const fx = (bildX - d.drossel[0]) / e.anker.pxProMm, fy = (bildY - d.drossel[1]) / e.anker.pxProMm;
      txt += `  Fehler ${Math.hypot(fx, fy).toFixed(1)} mm (x ${fx.toFixed(1)}, y ${fy.toFixed(1)} nach unten)`;
    }
    console.log(txt);
  }
}
