// Rendert Produktbilder aus den 3D-Modellen (Editor-Vorschau, Studiolicht, heller Hintergrund):
//   demo/bilder/<id>.webp (+ <id>-silber.webp)   fuer die Demo-Produktseite (je < 150 KB)
//   editor/bilder/vorlagen/<id>.webp             Vorschaubilder im Vorlagen-Dialog des Editors
//   NODE_PATH=$(npm root -g) node test/editor/produktbilder.cjs [--nur=demo|vorlagen] [id ...]
// Nutzt test/editor/vorschau.html (Importmap, direkt aus src/ und editor/, kein Build).
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const PORT = Number(process.env.PORT || 8105);
const WURZEL = path.join(__dirname, '..', '..');
const args = process.argv.slice(2);
const opt = Object.fromEntries(args.filter((a) => a.startsWith('--')).map((a) => { const i = a.indexOf('='); return i < 0 ? [a.slice(2), '1'] : [a.slice(2, i), a.slice(i + 1)]; }));
const nurIds = args.filter((a) => !a.startsWith('--'));

// Demo-Produkte (muss zu demo/index.html passen)
const DEMO = ['perlentropfen-ohrringe', 'perlen-ohrstecker', 'basic-creolen', 'florea-kette', 'perlenkette', 'herz-kette',
  'lunara-armband', 'perlen-armband', 'zartes-perlenarmband', 'solitaer-ring', 'perlen-ring', 'offener-perlenring'];
const MAX_KB = 150;

async function render(page, { id, metall = 'gold', groesse, typ = 'image/webp', extra = '' }) {
  await page.goto(`http://localhost:${PORT}/test/editor/vorschau.html?vorlage=${id}&metall=${metall}&lineal=0${extra}`);
  await page.waitForFunction(() => window.__bereit, null, { timeout: 60000 });
  await page.waitForTimeout(150);
  let q = 0.9;
  for (;;) {
    const url = await page.evaluate(([g, t, qq]) => window.__v.alsBild({ groesse: g, hintergrund: 'hell', typ: t, qualitaet: qq })
      .then((b) => new Promise((ok) => { const r = new FileReader(); r.onload = () => ok(r.result); r.readAsDataURL(b); })), [groesse, typ, q]);
    const daten = Buffer.from(url.split(',')[1], 'base64');
    if (daten.length / 1024 <= MAX_KB || q <= 0.5) return daten;
    q -= 0.08;
  }
}

(async () => {
  const { startServer } = await import(path.join(__dirname, '..', 'server.mjs'));
  const server = await startServer(PORT);
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: 900, height: 900 } });
  page.on('pageerror', (e) => console.log('[fehler]', e.message));
  page.on('console', (m) => { if (m.type() === 'error') console.log('[seite]', m.text()); });
  const vorlagen = await (async () => {
    await page.goto(`http://localhost:${PORT}/test/editor/vorschau.html`);
    await page.waitForFunction(() => window.__bereit, null, { timeout: 60000 });
    return page.evaluate(async () => {
      const m = await import('/src/schmuck/index.js');
      return Object.fromEntries(Object.entries(m.VORLAGEN).map(([id, v]) => [id, { art: v.spec.art, metalle: v.varianten.map((x) => x.spec.metall) }]));
    });
  })();

  // Produktbilder etwas enger gerahmt als die Editor-Vorschau (Kette: Nahaufnahme auf der Bueste)
  const rand = (id) => ({ kette: '&detail=1', ring: '&rand=1.08', ohrringe: '&rand=1.0' }[vorlagen[id].art] || '&rand=0.96');
  if (opt.nur !== 'vorlagen') {
    const ziel = path.join(WURZEL, 'demo', 'bilder');
    fs.mkdirSync(ziel, { recursive: true });
    for (const id of DEMO) {
      if (nurIds.length && !nurIds.includes(id)) continue;
      const metalle = ['gold', ...(vorlagen[id].metalle.includes('silber') ? ['silber'] : [])];
      for (const metall of metalle) {
        const daten = await render(page, { id, metall, groesse: 1000, extra: rand(id) });
        const datei = path.join(ziel, `${id}${metall === 'gold' ? '' : '-' + metall}.webp`);
        fs.writeFileSync(datei, daten);
        console.log(path.relative(WURZEL, datei), Math.round(daten.length / 1024), 'KB');
      }
    }
  }
  if (opt.nur !== 'demo') {
    const ziel = path.join(WURZEL, 'editor', 'bilder', 'vorlagen');
    fs.mkdirSync(ziel, { recursive: true });
    for (const id of Object.keys(vorlagen)) {
      if (nurIds.length && !nurIds.includes(id)) continue;
      const daten = await render(page, { id, groesse: 400, extra: rand(id) });
      const datei = path.join(ziel, `${id}.webp`);
      fs.writeFileSync(datei, daten);
      console.log(path.relative(WURZEL, datei), Math.round(daten.length / 1024), 'KB');
    }
  }
  await browser.close();
  server.close();
})().catch((e) => { console.error(e); process.exit(1); });
