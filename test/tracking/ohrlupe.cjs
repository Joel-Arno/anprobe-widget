// Speichert Lupenbilder der Ohren (Soll gruen, Schaetzung rot) nach ausgabe/ohr/.
//   NODE_PATH=$(npm root -g) node test/tracking/ohrlupe.cjs
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
  const ziel = path.join(__dirname, 'ausgabe/ohr');
  fs.mkdirSync(ziel, { recursive: true });
  const faelle = KALIBRIERUNG.filter((k) => k.ohr || process.argv[2] === 'alle');
  for (const fall of faelle) {
    const r = await seite.evaluate((f) => window.__ohrlupe(f), fall);
    for (const o of r) {
      const name = `${fall.bild.replace(/\.\w+$/, '')}${fall.crop ? '_ausschnitt' : ''}_${o.seite}.png`;
      fs.writeFileSync(path.join(ziel, name), Buffer.from(o.png.split(',')[1], 'base64'));
      console.log(name, 'ppm', o.ppm.toFixed(3));
    }
  }
  await browser.close();
  server.close();
})();
