// Playwright-Treiber fuer die Render-Pruefseite.
//   node test/render/server.mjs &   (Port 8103)
//   NODE_PATH=$(npm root -g) node test/render/pruefe.cjs <faelle.json | name> [name...]
// Faelle stehen in test/render/faelle.cjs; Ausgabe nach test/render/ausgabe/.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const FAELLE = require('./faelle.cjs');

const AUSGABE = path.join(__dirname, 'ausgabe');
fs.mkdirSync(AUSGABE, { recursive: true });

(async () => {
  const namen = process.argv.slice(2);
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: 1500, height: 1100 }, deviceScaleFactor: Number(process.env.DSF || 2) });
  page.on('console', (m) => { if (m.type() !== 'debug') console.log('[konsole]', m.type(), m.text().slice(0, 300)); });
  page.on('pageerror', (e) => console.log('[seitenfehler]', e.message));
  await page.goto('http://localhost:8103/test/render/pruefung.html');
  await page.waitForFunction(() => window.__bereit, null, { timeout: 30000 });

  for (const name of namen) {
    const fall = FAELLE[name];
    if (!fall) { console.log('unbekannter Fall', name); continue; }
    const t0 = Date.now();
    try {
      const ergebnis = await fall.lauf(page, { AUSGABE, name, speichere: (datei, daten) => fs.writeFileSync(path.join(AUSGABE, datei), daten) });
      console.log(`== ${name} (${Date.now() - t0} ms)`);
      console.log(JSON.stringify(ergebnis, null, 1).slice(0, 3000));
    } catch (e) {
      console.log(`!! ${name}:`, e.message);
    }
  }
  await browser.close();
})();
