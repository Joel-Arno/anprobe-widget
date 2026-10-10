// Screenshots der Editor-Vorschau je Vorlage/Ansicht.
//   NODE_PATH=$(npm root -g) node test/editor/vorschau.cjs [vorlage[:ansicht][:metall] ...] [--groesse=800]
// Startet den Testserver auf Port 8105 (test/server.mjs), Bilder nach test/editor/ausgabe/.
const path = require('path');
const { chromium } = require('playwright');
const PORT = 8105;
const AUS = path.join(__dirname, 'ausgabe');
const args = process.argv.slice(2);
const opt = Object.fromEntries(args.filter((a) => a.startsWith('--')).map((a) => { const i = a.indexOf('='); return i < 0 ? [a.slice(2), '1'] : [a.slice(2, i), a.slice(i + 1)]; }));
const faelle = args.filter((a) => !a.startsWith('--'));

(async () => {
  const { startServer } = await import(path.join(__dirname, '..', 'server.mjs'));
  // laeuft schon ein Server auf dem Port (z. B. Produktbilder), diesen mitbenutzen
  const server = await startServer(PORT).catch((e) => { if (e.code === 'EADDRINUSE') return null; throw e; });
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const g = Number(opt.groesse || 800);
  const page = await browser.newPage({ viewport: { width: g, height: g } });
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') console.log('[seite]', m.text()); });
  page.on('pageerror', (e) => console.log('[fehler]', e.message));
  for (const f of faelle.length ? faelle : ['solitaer-ring']) {
    const [vorlage, ansicht = 'produkt', metall = 'gold'] = f.split(':');
    const extra = opt.extra ? '&' + opt.extra : '';
    await page.goto(`http://localhost:${PORT}/test/editor/vorschau.html?vorlage=${vorlage}&ansicht=${ansicht}&metall=${metall}${extra}`);
    await page.waitForFunction(() => window.__bereit, null, { timeout: 60000 });
    await page.waitForTimeout(300);
    const datei = path.join(AUS, `v-${vorlage}-${ansicht}-${metall}.png`);
    await page.screenshot({ path: datei });
    console.log(datei, 'bau', Math.round(await page.evaluate(() => window.__bauMs)), 'ms');
  }
  await browser.close();
  if (server) server.close();
})().catch((e) => { console.error(e); process.exit(1); });
