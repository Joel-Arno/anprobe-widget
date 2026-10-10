// Prueft shopify/anprobe.liquid mit liquidjs und Testdaten (Shopify-Filter nachgebildet).
//   einmalig: npm i liquidjs --prefix test/cache/liquid --no-save
//   node test/liquid.mjs
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const HIER = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(HIER, 'cache/liquid/node_modules/'));
let Liquid;
try {
  ({ Liquid } = require('liquidjs'));
} catch {
  console.error('liquidjs fehlt: npm i liquidjs --prefix test/cache/liquid --no-save');
  process.exit(2);
}

const engine = new Liquid({ strictFilters: true, strictVariables: false });
// Shopify-Filter (vereinfacht)
engine.registerFilter('money', (cent) => `${(Number(cent) / 100).toFixed(2).replace('.', ',')} €`);
engine.registerFilter('image_url', (bild) => `//arlise.de/cdn/shop/files/${bild && bild.src}?width=600`);
engine.registerFilter('asset_url', (name) => `//arlise.de/cdn/shop/t/1/assets/${name}?v=1`);

const vorlage = fs.readFileSync(path.join(HIER, '../shopify/anprobe.liquid'), 'utf8');

const modell = [
  { name: 'Gold', art: 'ohrringe', metall: 'gold', ohrring: { typ: 'huggie', durchmesserMm: 12 }, anhaenger: { typ: 'perle', groesseMm: 8 } },
  { name: 'Silber', art: 'ohrringe', metall: 'silber', ohrring: { typ: 'huggie', durchmesserMm: 12 }, anhaenger: { typ: 'perle', groesseMm: 8 } }
];
const produkt = (extra) => ({
  title: 'Perlentropfen "Lumi" <Ohrringe>',
  type: 'Ohrringe',
  tags: ['Perle', 'Gold & Silber'],
  featured_image: { src: 'perle.jpg' },
  selected_or_first_available_variant: { price: 4990, title: 'Gold' },
  variants: [{ id: 4711, title: 'Gold', available: true }, { id: 4712, title: 'Silber / "Edel"', available: false }],
  metafields: { anprobe: {} },
  ...extra
});

const faelle = [
  { name: 'mit Modell und Art', p: produkt({ metafields: { anprobe: { modell: { value: modell }, art: { value: 'ohrringe ' } } } }), modell: true, art: 'ohrringe' },
  { name: 'ohne Modell', p: produkt(), modell: false, art: null },
  { name: 'ohne Bild, Modell als Objekt', p: produkt({ featured_image: null, metafields: { anprobe: { modell: { value: modell[0] } } } }), modell: true, art: null }
];

let fehler = 0;
const pruefe = (bed, text) => { if (!bed) { fehler++; console.log('  FEHLER:', text); } };
const attr = (html, name) => {
  const m = new RegExp(`${name}="([^"]*)"`).exec(html);
  return m ? m[1].replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n))).replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&') : null;
};

for (const f of faelle) {
  const html = await engine.parseAndRender(vorlage, { product: f.p, routes: { cart_add_url: '/cart/add', cart_url: '/cart' } });
  console.log(`• ${f.name}`);
  pruefe(/<div data-anprobe\s/.test(html), 'data-anprobe fehlt');
  pruefe(attr(html, 'data-titel') === f.p.title, `Titel falsch: ${attr(html, 'data-titel')}`);
  pruefe(attr(html, 'data-preis') === '49,90 €', `Preis falsch: ${attr(html, 'data-preis')}`);
  pruefe(attr(html, 'data-typ') === 'Ohrringe', 'Typ falsch');
  pruefe(attr(html, 'data-tags') === 'Perle,Gold & Silber', `Tags falsch: ${attr(html, 'data-tags')}`);
  pruefe((attr(html, 'data-bild') !== null) === Boolean(f.p.featured_image), 'Bild falsch');
  pruefe(attr(html, 'data-art') === f.art, `Art falsch: ${attr(html, 'data-art')}`);
  const json = /<script type="application\/json" data-anprobe-modell>([\s\S]*?)<\/script>/.exec(html);
  pruefe(Boolean(json) === f.modell, 'Modell-Skript ' + (f.modell ? 'fehlt' : 'unerwartet'));
  if (json) {
    try {
      const daten = JSON.parse(json[1]);
      pruefe(JSON.stringify(daten) === JSON.stringify(f.p.metafields.anprobe.modell.value), 'Modell-JSON veraendert');
    } catch (e) { pruefe(false, 'Modell-JSON ungueltig: ' + e.message); }
  }
  const shop = /<script type="application\/json" data-anprobe-shop>([\s\S]*?)<\/script>/.exec(html);
  pruefe(Boolean(shop), 'Shop-Skript fehlt');
  if (shop) {
    try {
      const d = JSON.parse(shop[1]);
      pruefe(d.hinzufuegen === '/cart/add.js' && d.warenkorb === '/cart', `Shop-Adressen falsch: ${shop[1]}`);
      pruefe(JSON.stringify(d.varianten) === JSON.stringify([{ id: 4711, titel: 'Gold', verfuegbar: true }, { id: 4712, titel: 'Silber / "Edel"', verfuegbar: false }]), `Shop-Varianten falsch: ${shop[1]}`);
    } catch (e) { pruefe(false, 'Shop-JSON ungueltig: ' + e.message); }
  }
  pruefe(/<script type="module" src="\/\/arlise\.de\/cdn\/shop\/t\/1\/assets\/anprobe\.js\?v=1"><\/script>/.test(html), 'Skript-Tag fehlt');
  if (f === faelle[0]) console.log(html.trim().split('\n').map((z) => '    ' + z).join('\n'));
}
console.log(fehler ? `${fehler} Fehler` : 'Liquid-Block in Ordnung.');
process.exitCode = fehler ? 1 : 0;
