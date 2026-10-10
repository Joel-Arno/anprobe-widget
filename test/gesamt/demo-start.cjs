// Prueft die Demo-Seite mit dem aufgeteilten Bundle: Knopf vorhanden, anprobe-app.js
// laedt erst bei Bedarf, Intro oeffnet, keine Konsolenfehler.
//   NODE_PATH=$(npm root -g) node test/gesamt/demo-start.cjs [port]
const { chromium } = require('playwright');
(async () => {
  const port = Number(process.argv[2] || 8164);
  const { startServer } = await import('../server.mjs');
  const s = await startServer(port);
  const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const p = await b.newPage({ viewport: { width: 1280, height: 860 } });
  const fehler = [];
  const geladen = [];
  p.on('pageerror', (e) => fehler.push('seite: ' + e.message));
  p.on('console', (m) => { if (m.type() === 'error') fehler.push('konsole: ' + m.text()); });
  p.on('request', (r) => { if (/anprobe(-app)?\.js/.test(r.url())) geladen.push(r.url().replace(/^.*\/dist\//, '')); });
  await p.goto(`http://localhost:${port}/demo/index.html`, { waitUntil: 'load' });
  await p.waitForTimeout(800);
  const vorKlick = [...geladen];
  const knopf = p.locator('[data-anprobe] >> button[part="knopf"]').first();
  await knopf.waitFor({ state: 'visible', timeout: 10000 });
  await knopf.click();
  await p.waitForFunction(() => {
    const host = document.querySelector('[data-anprobe-fenster]');
    const el = host && host.shadowRoot && host.shadowRoot.querySelector('.anprobe');
    return el && el.dataset.zustand === 'intro';
  }, null, { timeout: 20000 });
  console.log(JSON.stringify({ vorKlick, nachKlick: geladen, fehler }));
  await b.close();
  s.close();
})().catch((e) => { console.error(e); process.exit(1); });
