// Rendert jede Vorlage/Pruef-Spec aus allen Ansichten als PNG (Playwright, headless Chromium).
// Aufruf: NODE_PATH=$(npm root -g) node test/schmuck/fotos.cjs [filter ...] [--metall=silber] [--ton=agx] [--ansicht=x]
//   filter: Teil einer ID (z. B. "ring", "perlen") – ohne Filter alle
// Ausgabe: test/schmuck/ausgabe/<id>-<ansicht>.png, Kontaktbogen je ID unter ausgabe/bogen/, statistik.json
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const { spawn, execFileSync } = require('child_process');

const AUS = path.join(__dirname, 'ausgabe');
const args = process.argv.slice(2);
const filter = args.filter((a) => !a.startsWith('--'));
const opt = Object.fromEntries(args.filter((a) => a.startsWith('--')).map((a) => a.slice(2).split('=')));

(async () => {
  fs.mkdirSync(path.join(AUS, 'bogen'), { recursive: true });
  const server = spawn(process.execPath, [path.join(__dirname, 'server.mjs')], { stdio: ['ignore', 'pipe', 'inherit'] });
  await new Promise((ok) => server.stdout.once('data', ok));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: 900, height: 900 } });
  const fehler = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') { console.log('[seite]', m.type(), m.text()); if (m.type() === 'error') fehler.push(m.text()); } });
  page.on('pageerror', (e) => { console.log('[fehler]', e.message); fehler.push(e.message); });
  const groesse = Number(opt.groesse || 900);
  await page.setViewportSize({ width: groesse, height: groesse });
  const extra = (opt.metallwerte ? '&metallwerte=' + encodeURIComponent(opt.metallwerte) : '') + (opt.umgebung ? '&umgebung=' + opt.umgebung : '');
  await page.goto(`http://localhost:8102/test/schmuck/pruefseite.html?auto&groesse=${groesse}${extra}`);
  await page.waitForFunction(() => window.bereit === true, null, { timeout: 60000 });
  const alle = await page.evaluate(() => Object.fromEntries(Object.entries(window.ALLE).map(([k, v]) => [k, v.art])));
  const ansichten = await page.evaluate(() => window.ANSICHTEN);
  const ids = Object.keys(alle).filter((id) => !filter.length || filter.some((f) => id.includes(f) || alle[id] === f));
  const statistik = [];
  for (const id of ids) {
    const art = alle[id] === 'ohrring' ? 'ohrringe' : alle[id];
    const liste = opt.ansicht ? [opt.ansicht] : ansichten[art];
    const dateien = [];
    for (const ansicht of liste) {
      const t0 = Date.now();
      const e = await page.evaluate((o) => window.zeige(o), { id, ansicht, metall: opt.metall || null, ton: opt.ton || 'aces' });
      const name = `${id}${opt.metall ? '-' + opt.metall : ''}${opt.ton ? '-' + opt.ton : ''}${opt.tag ? '-' + opt.tag : ''}-${ansicht}.png`;
      const datei = path.join(AUS, name);
      await page.locator('canvas').screenshot({ path: datei });
      dateien.push(datei);
      e.renderMs = Date.now() - t0;
      statistik.push(e);
      console.log(`${id.padEnd(26)} ${ansicht.padEnd(9)} ${String(e.dreiecke).padStart(7)} Dr  ${String(e.aufrufe).padStart(3)} Aufrufe  bau ${e.bauMs} ms  gesamt ${e.renderMs} ms`);
    }
    // Kontaktbogen: Ansichten nebeneinander, verkleinert
    if (dateien.length > 1) try {
      const eingaben = dateien.flatMap((d) => ['-i', d]);
      const filterText = dateien.map((_, i) => `[${i}:v]scale=600:600[v${i}]`).join(';') + ';' + dateien.map((_, i) => `[v${i}]`).join('') + `hstack=inputs=${dateien.length}`;
      execFileSync('ffmpeg', ['-y', '-loglevel', 'error', ...eingaben, '-filter_complex', filterText, path.join(AUS, 'bogen', `${id}${opt.metall ? '-' + opt.metall : ''}${opt.ton ? '-' + opt.ton : ''}${opt.tag ? '-' + opt.tag : ''}.png`)]);
    } catch (err) { console.log('ffmpeg:', err.message); }
  }
  fs.writeFileSync(path.join(AUS, 'statistik.json'), JSON.stringify(statistik, null, 1));
  await browser.close();
  server.kill();
  if (fehler.length) { console.log('FEHLER auf der Seite:', fehler.length); process.exitCode = 1; }
})().catch((e) => { console.error(e); process.exit(1); });
