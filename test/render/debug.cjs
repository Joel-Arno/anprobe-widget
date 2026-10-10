// Kleiner Debug-Lauf: NODE_PATH=$(npm root -g) node test/render/debug.cjs '<fall-json>' '<ausdruck>'
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: 1500, height: 1100 }, deviceScaleFactor: 1 });
  page.on('pageerror', (e) => console.log('[seitenfehler]', e.message));
  page.on('console', (m) => { if (/warn|error/.test(m.type()) && !/GL Driver|gl_context|landmark_projection/.test(m.text())) console.log('[konsole]', m.text().slice(0, 300)); });
  await page.goto('http://localhost:8103/test/render/pruefung.html');
  await page.waitForFunction(() => window.__bereit);
  const fall = JSON.parse(process.argv[2]);
  await page.evaluate((f) => window.__lauf(f), fall);
  const r = await page.evaluate(process.argv[3]);
  console.log(JSON.stringify(r, null, 1));
  if (process.argv[4]) await (await page.$('#buehne canvas')).screenshot({ path: process.argv[4] });
  await browser.close();
})();
