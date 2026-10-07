// Rendert das Material-Labor mit einer Konfiguration (JSON-Datei) als PNG.
// Aufruf: NODE_PATH=$(npm root -g) node test/schmuck/labor.cjs konfig.json ausgabe.png
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const http = require('http');
const { spawn } = require('child_process');

function laeuft() {
  return new Promise((ok) => {
    http.get('http://localhost:8102/test/schmuck/labor.html', (r) => { r.resume(); ok(r.statusCode === 200); }).on('error', () => ok(false));
  });
}

(async () => {
  const [konfigDatei, ausgabe] = process.argv.slice(2);
  const konfig = JSON.parse(fs.readFileSync(konfigDatei, 'utf8'));
  let server = null;
  if (!(await laeuft())) {
    server = spawn(process.execPath, [path.join(__dirname, 'server.mjs')], { stdio: ['ignore', 'pipe', 'inherit'] });
    await new Promise((ok) => server.stdout.once('data', ok));
  }
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });
  let fehler = 0;
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') { console.log('[seite]', m.text()); if (m.type() === 'error') fehler++; } });
  page.on('pageerror', (e) => { console.log('[fehler]', e.message); fehler++; });
  await page.goto('http://localhost:8102/test/schmuck/labor.html' + (konfig.query || ''));
  await page.waitForFunction(() => window.bereit === true, null, { timeout: 60000 });
  const g = await page.evaluate((k) => window.labor(k), konfig);
  await page.setViewportSize({ width: g.breite, height: g.hoehe });
  await page.locator('#raster').screenshot({ path: ausgabe });
  await browser.close();
  if (server) server.kill();
  console.log('geschrieben', ausgabe, fehler ? `(${fehler} Fehler)` : '');
})().catch((e) => { console.error(e); process.exit(1); });
