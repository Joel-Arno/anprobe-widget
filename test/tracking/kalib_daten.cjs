// Speichert Landmarken fuer die Kalibrierfaelle (Ohrlaeppchen, Drosselgrube) nach ausgabe/kalib.json.
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
  const aus = [];
  for (const fall of KALIBRIERUNG) {
    const r = await seite.evaluate((f) => window.__landmarken(f), fall);
    aus.push({ ...fall, ...r });
    console.log(fall.bild, fall.art, Object.keys(r));
  }
  fs.writeFileSync(path.join(__dirname, 'ausgabe/kalib.json'), JSON.stringify(aus));
  await browser.close();
  server.close();
})();
