// Anleitungsgrafiken zu mehreren Zeitpunkten aufnehmen.
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1280, height: 560 }, deviceScaleFactor: 1 });
  for (const t of (process.argv[2] || '0,3').split(',')) {
    await p.goto(`http://localhost:8104/test/app/anleitung.html?t=${t}`);
    await p.waitForTimeout(400);
    await p.screenshot({ path: path.join(__dirname, 'ausgabe', `anleitung-t${t}.png`) });
  }
  await b.close();
})();
