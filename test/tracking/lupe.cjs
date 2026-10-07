// Speichert Lupenbilder der Finger (Ringkalibrierung) nach ausgabe/lupe/.
//   NODE_PATH=$(npm root -g) node test/tracking/lupe.cjs
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const BILDER = ['right_hands.jpg', 'paper_143.jpg', 'paper_146.jpg', 'paper_158.jpg', 'paper_165.jpg', 'paper_170.jpg',
  'paper_119.jpg', 'paper_103.jpg', 'paper_176.jpg', 'paper_166.jpg', 'woman_hands.jpg', 'paper_142.jpg'];
(async () => {
  const { starteServer } = await import('./server.mjs');
  const server = await starteServer(8101);
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const seite = await browser.newPage();
  seite.on('pageerror', (e) => console.log('[fehler]', e.message));
  await seite.goto('http://localhost:8101/test/tracking/pruefung.html');
  await seite.waitForFunction(() => window.__bereit);
  const ziel = path.join(__dirname, 'ausgabe/lupe');
  fs.mkdirSync(ziel, { recursive: true });
  for (const bild of BILDER) {
    const r = await seite.evaluate((b) => window.__lupe({ bild: b }), bild);
    if (!r) { console.log(bild, 'keine Hand'); continue; }
    fs.writeFileSync(path.join(ziel, bild.replace(/\.\w+$/, '.png')), Buffer.from(r.png.split(',')[1], 'base64'));
    console.log(bild, 'ppm', r.ppm.toFixed(3), 'Ausschnitt', r.ausschnitt.map((x) => x.toFixed(0)).join(','), 'm', r.m.toFixed(2));
  }
  await browser.close();
  server.close();
})();
