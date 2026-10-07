// End-to-End: Demo-Produkt mit Fake-Kamera anprobieren (prueft, dass das Modell-JSON der Demo
// in der Anprobe ankommt und gerendert wird).
//   NODE_PATH=$(npm root -g) node test/editor/demo-kamera.cjs <video.y4m> [--knopf=<css>] [--name=x]
const path = require('path');
const { chromium } = require('playwright');
const PORT = 8105;
const AUS = path.join(__dirname, 'ausgabe');
const args = process.argv.slice(2);
const opt = Object.fromEntries(args.filter((a) => a.startsWith('--')).map((a) => { const i = a.indexOf('='); return i < 0 ? [a.slice(2), '1'] : [a.slice(2, i), a.slice(i + 1)]; }));
const video = args.find((a) => !a.startsWith('--'));

(async () => {
  const { startServer } = await import(path.join(__dirname, '..', 'server.mjs'));
  const server = await startServer(PORT).catch((e) => { if (e.code === 'EADDRINUSE') return null; throw e; });
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist',
    '--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream', `--use-file-for-fake-video-capture=${video}`] });
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 860 }, permissions: ['camera'] });
  await ctx.addInitScript(() => {
    window.AnprobeKonfig = { mediapipe: '/mediapipe', modelle: { hand: '/modelle/hand_landmarker.task', gesicht: '/modelle/face_landmarker.task', koerper: '/modelle/pose_landmarker_lite.task' }, debug: true };
  });
  const page = await ctx.newPage();
  page.on('pageerror', (e) => console.log('[fehler]', e.message));
  await page.goto(`http://localhost:${PORT}/demo/`);
  await page.waitForLoadState('networkidle');
  await page.locator(opt.knopf || '.knoepfe [data-anprobe]').click();
  await page.waitForTimeout(1500);
  // "Kamera starten" im Shadow DOM des Fensters
  await page.evaluate(() => {
    const w = document.querySelector('[data-anprobe-fenster]').shadowRoot;
    const k = [...w.querySelectorAll('button')].find((b) => /kamera starten/i.test(b.textContent));
    k && k.click();
  });
  await page.waitForFunction(() => window.__anprobe && window.__anprobe.ergebnis && window.__anprobe.ergebnis.gefunden, null, { timeout: 90000 }).catch(() => console.log('nichts gefunden'));
  await page.waitForTimeout(3000);
  const info = await page.evaluate(() => ({ zustand: window.__anprobe && window.__anprobe.zustand, fps: window.__anprobe && window.__anprobe.fps, fehler: window.__anprobe && window.__anprobe.fehler }));
  console.log(JSON.stringify(info));
  await page.screenshot({ path: path.join(AUS, `demo-kamera-${opt.name || 'ohrringe'}.png`) });
  await browser.close();
  if (server) server.close();
})().catch((e) => { console.error(e); process.exit(1); });
