// Analyse: Geometrische Hinweise auf die Handflaechenseite (ohne Haendigkeit).
// Vorzeichen der Abstaende von Daumen- und Fingergelenken zur Handebene,
// bezogen auf die Normale, die laut Haendigkeit zum Handruecken zeigt.
//   node test/tracking/analyse_handflaeche.mjs   (braucht ausgabe/roh.json aus roh.cjs)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as THREE from 'three';
import { zuBuehne, alsVektoren, newellNormale } from '../../src/tracking/raum.js';

const hier = path.dirname(fileURLToPath(import.meta.url));
const roh = JSON.parse(fs.readFileSync(path.join(hier, 'ausgabe/roh.json')));
// Sichtpruefung der Bilder: true = Handruecken zur Kamera
const WAHR = {
  'right_hands.jpg': true, 'left_hands.jpg': true, 'woman_hands.jpg': false,
  'paper_103.jpg': false, 'paper_119.jpg': false, 'paper_142.jpg': false, 'paper_143.jpg': true,
  'paper_146.jpg': true, 'paper_158.jpg': true, 'paper_165.jpg': true, 'paper_166.jpg': false,
  'paper_170.jpg': true, 'paper_176.jpg': false, 'fist.jpg': false, 'thumb_up.jpg': false,
  'pointing_up.jpg': false, 'victory.jpg': false
};
const f = (x) => (x >= 0 ? ' ' : '') + x.toFixed(2);
for (const [name, r] of Object.entries(roh)) {
  if (!r.hand || !r.hand.landmarks || !r.hand.landmarks.length || !(name in WAHR)) continue;
  const P = alsVektoren(zuBuehne(r.hand.landmarks[0], r.W, r.H, false));
  const Wp = r.hand.worldLandmarks[0].map((p) => new THREE.Vector3(p.x, -p.y, -p.z).multiplyScalar(1000));
  const kat = r.hand.handedness[0][0];
  const rechts = kat.categoryName === 'Right';
  const aus = [];
  for (const [Q, einheit] of [[P, P[0].distanceTo(P[9])], [Wp, Wp[0].distanceTo(Wp[9])]]) {
    const n = newellNormale(Q, [0, 5, 9, 13, 17]);
    // geometrische Normale: fuer rechte Hand (ungespiegelt) ist -newell der Handruecken
    if (rechts) n.negate();
    const mitte = new THREE.Vector3();
    for (const i of [0, 5, 9, 13, 17]) mitte.add(Q[i]);
    mitte.multiplyScalar(1 / 5);
    const d = (i) => Q[i].clone().sub(mitte).dot(n) / einheit;
    const daumen = (d(2) + d(3) + d(4)) / 3;
    const finger = [6, 7, 8, 10, 11, 12, 14, 15, 16, 18, 19, 20].reduce((s, i) => s + d(i), 0) / 12;
    aus.push(`daumen ${f(daumen)} finger ${f(finger)} n.z ${f(n.z)}`);
  }
  console.log(name.padEnd(18), (WAHR[name] ? 'RUECKEN' : 'flaeche').padEnd(8), `${kat.categoryName} ${kat.score.toFixed(2)}`.padEnd(11), 'Bild:', aus[0], ' | Welt:', aus[1]);
}
