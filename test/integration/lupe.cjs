// Schnelle Einzelbild-Pruefung ueber test/render/pruefung.html (echter Tracker im IMAGE-Modus,
// echte Buehne), optional mit eingeblendeten Verdeckern. Schreibt Gesamtbild und Nahausschnitt.
//   NODE_PATH=$(npm root -g) node test/integration/lupe.cjs '<fall-json>' <name> [port]
// Beispiel: '{"bild":"hand-woman-man.jpg","art":"armband","vorlage":"lunara-armband","zeigeVerdecker":true}'
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
(async () => {
  const fall = { breite: 900, pixelRatio: 2, frames: 40, ...JSON.parse(process.argv[2]) };
  const name = process.argv[3] || 'lupe';
  const port = Number(process.argv[4] || 8118);
  const aus = path.join(__dirname, 'ausgabe');
  fs.mkdirSync(aus, { recursive: true });
  const { startServer } = await import('../server.mjs');
  const s = await startServer(port);
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: 1500, height: 1300 }, deviceScaleFactor: Number(process.env.DSF || 2) });
  p.on('pageerror', (e) => console.log('[seitenfehler]', e.message));
  p.on('console', (m) => { if (/warn|error/.test(m.type()) && !/GL Driver|gl_context|landmark_projection|GPU stall/.test(m.text())) console.log('[konsole]', m.text().slice(0, 300)); });
  await p.goto(`http://localhost:${port}/test/render/pruefung.html`);
  await p.waitForFunction(() => window.__bereit, null, { timeout: 30000 });
  const r = await p.evaluate((f) => window.__lauf(f), fall);
  const extra = process.argv[5] ? await p.evaluate(process.argv[5]) : null;
  const canvas = await p.$('#buehne canvas');
  const box = await canvas.boundingBox();
  await p.screenshot({ path: path.join(aus, `${name}.png`), clip: box, timeout: 120000 });
  for (const [i, a] of (r.ausschnitte || []).entries()) {
    const rand = Math.max(a.b, a.h) * 0.35;
    const clip = { x: Math.max(box.x, a.x - rand), y: Math.max(box.y, a.y - rand), width: a.b + 2 * rand, height: a.h + 2 * rand };
    clip.width = Math.min(clip.width, box.x + box.width - clip.x); clip.height = Math.min(clip.height, box.y + box.height - clip.y);
    await p.screenshot({ path: path.join(aus, `${name}-nah${i}.png`), clip, timeout: 120000 });
  }
  console.log(JSON.stringify({ masse: r.masse, anker: r.anker, verdecker: r.verdecker, ms: r.msProFrame, ausschnitte: r.ausschnitte, extra }, null, 1).slice(0, 2500));
  await b.close(); s.close();
})();
