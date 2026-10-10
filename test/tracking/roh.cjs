// Speichert MediaPipe-Rohdaten fuer alle Testbilder als JSON (fuer Analysen).
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
(async () => {
  const { starteServer } = await import('./server.mjs');
  const server = await starteServer(8101);
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const seite = await browser.newPage();
  seite.on('console', (m) => console.log('[seite]', m.text()));
  seite.on('pageerror', (e) => console.log('[fehler]', e.message));
  await seite.goto('http://localhost:8101/test/tracking/roh.html');
  await seite.waitForFunction(() => window.__bereit);
  const bilder = fs.readdirSync(path.join(__dirname, '../cache/bilder')).filter((n) => /\.(png|jpg)$/.test(n));
  const aus = await seite.evaluate(([b]) => window.__lauf(b, ['hand', 'gesicht', 'koerper']), [bilder]);
  fs.mkdirSync(path.join(__dirname, 'ausgabe'), { recursive: true });
  fs.writeFileSync(path.join(__dirname, 'ausgabe/roh.json'), JSON.stringify(aus));
  const fl = await seite.evaluate(() => window.__fortschritt);
  console.log('fortschritt', JSON.stringify(fl.filter((_, i) => i % Math.ceil(fl.length / 25) === 0 || i === fl.length - 1)));
  console.log('delegate', aus.__delegate);
  for (const [n, r] of Object.entries(aus)) {
    if (n.startsWith('__')) continue;
    console.log(n, r.W + 'x' + r.H,
      'hand', r.hand && r.hand.landmarks.length ? r.hand.handedness[0][0].categoryName + ' ' + r.hand.handedness[0][0].score.toFixed(2) : '-',
      'gesicht', r.gesicht && r.gesicht.faceLandmarks.length ? r.gesicht.faceLandmarks[0].length : '-',
      'pose', r.koerper && r.koerper.landmarks.length ? 'ja' : '-',
      'ms', [r.handMs, r.gesichtMs, r.koerperMs].map((x) => x.toFixed(0)).join('/'));
  }
  await browser.close();
  server.close();
})();
