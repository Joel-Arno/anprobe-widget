// Speichert Lupenbilder fuer Ketten (Drosselgrube, Normkette 42/50 cm) nach ausgabe/kette/.
//   NODE_PATH=$(npm root -g) node test/tracking/kettelupe.cjs
// portrait.jpg nur intern (Ausgabe ist nicht im Git).
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { KALIBRIERUNG } = require('./kalib_soll.cjs');
(async () => {
  const { starteServer } = await import('./server.mjs');
  const server = await starteServer(8101);
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const seite = await browser.newPage();
  seite.on('pageerror', (e) => console.log('[fehler]', e.message));
  await seite.goto('http://localhost:8101/test/tracking/pruefung.html');
  await seite.waitForFunction(() => window.__bereit);
  const ziel = path.join(__dirname, 'ausgabe/kette');
  fs.mkdirSync(ziel, { recursive: true });
  const faelle = [
    ...KALIBRIERUNG.filter((k) => !k.crop && k.bild !== 'face.png'),
    { bild: 'business-person.png', drossel: [495, 560], spiegel: true }
  ];
  for (const fall of faelle) {
    const r = await seite.evaluate((f) => window.__kettelupe(f), fall);
    const name = `${fall.bild.replace(/\.\w+$/, '')}${fall.spiegel ? '_s' : ''}.png`;
    if (!r) { console.log(name, 'keine Kette'); continue; }
    fs.writeFileSync(path.join(ziel, name), Buffer.from(r.png.split(',')[1], 'base64'));
    console.log(name);
  }
  await browser.close();
  server.close();
})();
