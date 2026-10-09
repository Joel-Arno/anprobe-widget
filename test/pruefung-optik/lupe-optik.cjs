// Optik-Pruefung: mehrere Einzelbild-Faelle ueber test/render/pruefung.html (echter Tracker
// im IMAGE-Modus, echte Buehne, Qualitaet "hoch", DPR 2). Ausgabe nach test/pruefung-optik/ausgabe.
//   NODE_PATH=$(npm root -g) node test/pruefung-optik/lupe-optik.cjs <faelle.json> [port]
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
(async () => {
  const faelle = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
  const port = Number(process.argv[3] || 8150);
  const aus = path.join(__dirname, 'ausgabe');
  fs.mkdirSync(aus, { recursive: true });
  const { startServer } = await import('../server.mjs');
  const s = await startServer(port);
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  for (const [name, f] of Object.entries(faelle)) {
    const fall = { breite: 900, pixelRatio: 2, frames: 30, ...f };
    const p = await b.newPage({ viewport: { width: 1500, height: 1300 }, deviceScaleFactor: 2 });
    p.on('pageerror', (e) => console.log('[seitenfehler]', e.message));
    await p.goto(`http://localhost:${port}/test/render/pruefung.html`);
    await p.waitForFunction(() => window.__bereit, null, { timeout: 30000 });
    const t0 = Date.now();
    const r = await p.evaluate((x) => window.__lauf(x), fall);
    const canvas = await p.$('#buehne canvas');
    const box = await canvas.boundingBox();
    await p.screenshot({ path: path.join(aus, `${name}.png`), clip: box, timeout: 120000 });
    for (const [i, a] of (r.ausschnitte || []).entries()) {
      const rand = Math.max(a.b, a.h) * 0.35;
      const clip = { x: Math.max(box.x, a.x - rand), y: Math.max(box.y, a.y - rand), width: a.b + 2 * rand, height: a.h + 2 * rand };
      clip.width = Math.min(clip.width, box.x + box.width - clip.x); clip.height = Math.min(clip.height, box.y + box.height - clip.y);
      await p.screenshot({ path: path.join(aus, `${name}-nah${i}.png`), clip, timeout: 120000 });
    }
    console.log(name, ((Date.now() - t0) / 1000).toFixed(1) + ' s', JSON.stringify({ masse: r.masse, ausschnitte: r.ausschnitte }).slice(0, 400));
    await p.close();
  }
  await b.close(); s.close();
})();
