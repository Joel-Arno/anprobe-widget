// Screenshots des Editors (Entwicklungsseite, ungebuendelt) und einfache Bedienpruefung.
//   NODE_PATH=$(npm root -g) node test/editor/editor.cjs [--breite=1440 --hoehe=900] [--vorlage=id] [--schritte]
// Bilder nach test/editor/ausgabe/editor-*.png
const path = require('path');
const { chromium } = require('playwright');
const PORT = 8105;
const AUS = path.join(__dirname, 'ausgabe');
const opt = Object.fromEntries(process.argv.slice(2).filter((a) => a.startsWith('--')).map((a) => { const [k, v] = a.slice(2).split('='); return [k, v ?? '1']; }));

(async () => {
  const { startServer } = await import(path.join(__dirname, '..', 'server.mjs'));
  // laeuft schon ein Server auf dem Port (z. B. Produktbilder), diesen mitbenutzen
  const server = await startServer(PORT).catch((e) => { if (e.code === 'EADDRINUSE') return null; throw e; });
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const b = Number(opt.breite || 1440), h = Number(opt.hoehe || 900);
  const ctx = await browser.newContext({ viewport: { width: b, height: h }, deviceScaleFactor: Number(opt.dpr || 1), acceptDownloads: true });
  const page = await ctx.newPage();
  const fehler = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') { console.log('[seite]', m.text()); if (m.type() === 'error') fehler.push(m.text()); } });
  page.on('pageerror', (e) => { console.log('[fehler]', e.message); fehler.push(e.message); });
  const url = opt.url || `http://localhost:${PORT}/test/editor/editor.html?neu${opt.vorlage ? '&vorlage=' + opt.vorlage : ''}`;
  await page.goto(url);
  await page.waitForFunction(() => window.__editor && window.__editor.vorschau && window.__editor.vorschau.modell, null, { timeout: 60000 });
  await page.waitForTimeout(600);
  const name = opt.name || `editor-${b}x${h}${opt.vorlage ? '-' + opt.vorlage : ''}`;
  await page.screenshot({ path: path.join(AUS, name + '.png') });
  console.log('Bild', name);
  if (opt.schritte) {
    // Bedienung: Art wechseln, Chips, Regler, Variante, Import, Vorlagen, Bild speichern
    await page.click('.ed-art[data-art="kette"]');
    await page.waitForTimeout(400);
    await page.click('.ed-chip[data-wert="figaro"]');
    await page.waitForTimeout(300);
    await page.click('[data-aktion="variante-neu"]');
    await page.waitForTimeout(300);
    const json = await page.$eval('.ed-json code', (c) => c.textContent);
    console.log('JSON nach Schritten:', json.replace(/\s+/g, ' ').slice(0, 400));
    await page.screenshot({ path: path.join(AUS, name + '-kette.png') });
    await page.click('[data-aktion="vorlagen"]');
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(AUS, name + '-vorlagen.png') });
    await page.keyboard.press('Escape');
    await page.click('[data-aktion="bild-menue"]');
    const [dl] = await Promise.all([page.waitForEvent('download'), page.click('[data-aktion="bild"][data-hintergrund="hell"]')]);
    const ziel = path.join(AUS, 'editor-export.png');
    await dl.saveAs(ziel);
    console.log('Export:', dl.suggestedFilename(), '->', ziel);
    await page.keyboard.press('Control+z');
    await page.waitForTimeout(300);
  }
  if (opt.foto) {
    // Produktfoto-Abgleich: darueber (ausrichten) und daneben
    await page.setInputFiles('#ed-foto-datei', opt.foto);
    await page.waitForTimeout(400);
    await page.click('[data-aktion="foto-ausrichten"]');
    const b = await page.locator('.ed-foto-ebene').boundingBox();
    await page.mouse.move(b.x + b.width / 2, b.y + b.height / 2);
    await page.mouse.down();
    await page.mouse.move(b.x + b.width / 2 + 30, b.y + b.height / 2 + 10, { steps: 5 });
    await page.mouse.up();
    await page.mouse.wheel(0, -120);
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(AUS, name + '-foto-darueber.png') });
    await page.click('[data-fotomodus="daneben"]');
    await page.waitForTimeout(600);
    await page.screenshot({ path: path.join(AUS, name + '-foto-daneben.png') });
    console.log('Foto-Abgleich ok');
  }
  if (opt.echt) {
    await page.click('[data-schalter="echteGroesse"]');
    await page.waitForTimeout(800);
    const pxmm = await page.evaluate(() => window.__editor.vorschau.pxProMm());
    console.log('1:1 px/mm', pxmm.toFixed(3), '(Soll', (96 / 25.4).toFixed(3) + ')');
    await page.screenshot({ path: path.join(AUS, name + '-echt.png') });
  }
  console.log(fehler.length ? `${fehler.length} Fehler` : 'keine Fehler');
  await browser.close();
  if (server) server.close();
})().catch((e) => { console.error(e); process.exit(1); });
