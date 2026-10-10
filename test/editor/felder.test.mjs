// Prueft die Feldlogik des Editors: Rundreise Vorlage -> kompakt -> leseJson,
// keine Pruef-Hinweise, sichtbare Felder je Vorlage.
//   node test/editor/felder.test.mjs
import { VORLAGEN, pruefeSpec } from '../../src/schmuck/index.js';
import { vollstaendig, kompakt, alsJson, leseJson, sichtbareAbschnitte, exportPfade, pruefeAusgabe, lies, setzeWert, text } from '../../editor/felder.js';

let fehler = 0;
const pruefe = (bed, msg) => { if (!bed) { fehler++; console.log('FEHLER', msg); } };

for (const [id, v] of Object.entries(VORLAGEN)) {
  const varianten = v.varianten.map((x) => vollstaendig(x.spec).spec);
  const json = alsJson(varianten);
  const zurueck = leseJson(json);
  pruefe(zurueck.hinweise.length === 0, `${id}: Hinweise ${zurueck.hinweise}`);
  pruefe(pruefeAusgabe(varianten).length === 0, `${id}: Ausgabe ${pruefeAusgabe(varianten)}`);
  // wirksame Felder bleiben gleich
  for (let i = 0; i < varianten.length; i++) {
    for (const p of exportPfade(varianten[i])) {
      const a = lies(varianten[i], p), b = lies(zurueck.varianten[i], p);
      pruefe(JSON.stringify(a) === JSON.stringify(b), `${id}: ${p} ${a} != ${b}`);
    }
  }
  // Vorlagenwerte, die das Modell beeinflussen, muessen im Export stehen
  const k = kompakt(varianten[0]);
  const orig = v.spec;
  for (const g of ['kette', 'perlen', 'anhaenger', 'ohrring', 'ring', 'stein', 'armband']) {
    for (const [f, w] of Object.entries(orig[g] || {})) {
      const drin = k[g] && k[g][f] !== undefined;
      if (!drin) console.log(`  info ${id}: ${g}.${f}=${w} nicht im Export (unwirksam?)`);
    }
  }
  const felder = sichtbareAbschnitte(varianten[0]).map((a) => text(a.titel, varianten[0]) + '[' + a.felder.map((f) => f.pfad.split('.').pop()).join(',') + ']');
  console.log(id.padEnd(24), felder.join(' '));
}
// Aenderungen
const s = vollstaendig({ art: 'ohrringe', ohrring: { typ: 'creole' } }).spec;
setzeWert(s, 'ohrring.typ', 'stecker');
pruefe(s.anhaenger.typ === 'stein', 'Stecker ohne Motiv -> stein');
const k2 = vollstaendig({ art: 'kette' }).spec;
setzeWert(k2, 'perlenAn', 'stationen');
pruefe(k2.perlen.anordnung === 'stationen' && k2.perlen.anzahl === 3, 'Stationen');
pruefe(JSON.stringify(kompakt(k2)).includes('stationen'), 'Export Stationen');
setzeWert(k2, 'perlenAn', 'keine');
pruefe(!kompakt(k2).perlen, 'keine Perlen im Export');
try { leseJson('{kaputt'); pruefe(false, 'kaputtes JSON'); } catch (e) { console.log('ok:', e.message); }
console.log(alsJson([vollstaendig(VORLAGEN['florea-kette'].spec).spec]));
console.log(fehler ? `${fehler} Fehler` : 'alles gut');
process.exit(fehler ? 1 : 0);
