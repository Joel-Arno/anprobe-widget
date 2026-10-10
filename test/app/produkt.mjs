// Pruefung der Art-Erkennung und Vorlagenwahl (node test/app/produkt.mjs)
import { artAusText, waehleVorlage, metallAusName } from '../../src/produkt.js';

const faelle = [
  ['Ohrringe', 'ohrringe'], ['Perlen-Ohrringe Gold', 'ohrringe'], ['Ohrring', 'ohrringe'], ['Creolen Basic', 'ohrringe'],
  ['Sonnen Ohrstecker', 'ohrringe'], ['Perlentropfen Huggies', 'ohrringe'], ['Ring', 'ring'], ['Solitärring Aurora', 'ring'],
  ['Kettenring', 'ring'], ['Perlenkette', 'kette'], ['Halskette Florea', 'kette'], ['Collier Mira', 'kette'],
  ['Armband Lunara', 'armband'], ['Perlenarmband', 'armband'], ['Armreif', 'armband'], ['Armbänder', 'armband'],
  ['Anhänger Mond', 'kette'], ['Geschenkbox', null], ['Pearl Drop Earrings', 'ohrringe'], ['Ringe', 'ring'], ['Halsketten', 'kette']
];
let fehler = 0;
for (const [text, soll] of faelle) {
  const ist = artAusText(text);
  if (ist !== soll) { fehler++; console.log('FEHL', text, '->', ist, 'statt', soll); }
}
const vorlagen = [
  ['ohrringe', 'Perlentropfen-Ohrringe', 'perlentropfen-ohrringe'], ['ohrringe', 'Creolen Basic', 'basic-creolen'],
  ['ohrringe', 'Sonne Ohrstecker', 'sonnen-ohrstecker'], ['ohrringe', 'Perlen-Hänger', 'perlen-haenger'],
  ['kette', 'Florea Kette mit Blütenanhänger', 'florea-kette'], ['kette', 'Herzkette Mira', 'herz-kette'],
  ['kette', 'Münzkette', 'muenz-kette'], ['ring', 'Solitärring Aurora', 'solitaer-ring'], ['ring', 'Perlenring', 'perlen-ring'],
  ['armband', 'Lunara Armband', 'lunara-armband'], ['armband', 'Perlenarmband', 'perlen-armband']
];
for (const [art, titel, soll] of vorlagen) {
  const ist = waehleVorlage(art, titel)?.id;
  if (ist !== soll) { fehler++; console.log('FEHL Vorlage', titel, '->', ist, 'statt', soll); }
}
for (const [n, soll] of [['Gold', 'gold'], ['Silber', 'silber'], ['Roségold', 'rosegold'], ['Weißgold', 'weissgold'], ['Perle', null]]) {
  if (metallAusName(n) !== soll) { fehler++; console.log('FEHL Metall', n); }
}
console.log(fehler ? `${fehler} Fehler` : `alle ${faelle.length + vorlagen.length + 5} Faelle ok`);
