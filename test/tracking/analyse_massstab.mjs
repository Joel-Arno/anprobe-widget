// Analyse: Hand-Massstab nach Spezifikation (2D-Laengen / XY-Laengen der Weltpunkte)
// gegen den Massstab aus 3D-Bildlaengen und Normhand. Braucht ausgabe/roh.json.
import fs from 'node:fs';
import * as THREE from 'three';
import { zuBuehne, alsVektoren } from '../../src/tracking/raum.js';
import { handPxProMm } from '../../src/tracking/hand.js';
const roh = JSON.parse(fs.readFileSync('/home/user/anprobe-widget/test/tracking/ausgabe/roh.json'));
const KN = [[0,5],[0,9],[0,13],[0,17],[5,9],[9,13],[13,17],[5,6],[9,10],[13,14],[17,18],[1,2],[2,3]];
for (const [name, r] of Object.entries(roh)) {
  if (!r.hand || !r.hand.landmarks || !r.hand.landmarks.length) continue;
  const P = alsVektoren(zuBuehne(r.hand.landmarks[0], r.W, r.H, false));
  const Wp = r.hand.worldLandmarks[0].map((p) => new THREE.Vector3(p.x, -p.y, -p.z).multiplyScalar(1000));
  let s2 = 0, sw = 0;
  const einzel = [];
  for (const [a,b] of KN.slice(0,7)) {
    const l2 = Math.hypot(P[a].x-P[b].x, P[a].y-P[b].y);
    const lw = Math.hypot(Wp[a].x-Wp[b].x, Wp[a].y-Wp[b].y);
    s2 += l2; sw += lw; einzel.push((l2/lw).toFixed(2));
  }
  const spec = s2/sw;
  const akt = handPxProMm(P);
  const w517 = Wp[5].distanceTo(Wp[17]), w09 = Wp[0].distanceTo(Wp[9]);
  const i517 = P[5].distanceTo(P[17])/akt, i09 = P[0].distanceTo(P[9])/akt;
  console.log(name.padEnd(28), 'spec', spec.toFixed(3), 'akt', akt.toFixed(3), 'ratio', (spec/akt).toFixed(2), ' einzel', einzel.join(' '), ' Welt 5-17', w517.toFixed(0), '0-9', w09.toFixed(0), ' Bild3D 5-17', i517.toFixed(0), '0-9', i09.toFixed(0));
}
