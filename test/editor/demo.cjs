// Screenshots der Demo-Seite (Handy 390x844 und Desktop 1440x900) und Pruefung der Anprobe-Knoepfe.
//   NODE_PATH=$(npm root -g) node test/editor/demo.cjs [--oeffnen]
// --oeffnen: klickt den ersten Knopf und prueft, ob die Anprobe aufgeht (Fake-Kamera noetig fuer mehr).
const path = require('path');
const { chromium } = require('playwright');
const PORT = 8105;
const AUS = path.join(__dirname, 'ausgabe');
const opt = Object.fromEntries(process.argv.slice(2).filter((a) => a.startsWith('--')).map((a) => { const i = a.indexOf('='); return i < 0 ? [a.slice(2), '1'] : [a.slice(2, i), a.slice(i + 1)]; }));

async function server() {
  const { startServer } = await import(path.join(__dirname, '..', 'server.mjs'));
  try { return await startServer(PORT); } catch (e) { if (e.code === 'EADDRINUSE') return null; throw e; }
}

(async () => {
  const s = await server();
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'] });
  const ansichten = [
    { name: 'handy', viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
    { name: 'desktop', viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 }
  ];
  for (const a of ansichten) {
    const ctx = await browser.newContext({ viewport: a.viewport, deviceScaleFactor: a.deviceScaleFactor, isMobile: !!a.isMobile, hasTouch: !!a.hasTouch });
    await ctx.addInitScript(() => {
      window.AnprobeKonfig = { mediapipe: '/mediapipe', modelle: { hand: '/modelle/hand_landmarker.task', gesicht: '/modelle/face_landmarker.task', koerper: '/modelle/pose_landmarker_lite.task' }, debug: true };
    });
    const page = await ctx.newPage();
    const fehler = [];
    page.on('pageerror', (e) => { fehler.push(e.message); console.log('[fehler]', e.message); });
    page.on('console', (m) => { if (m.type() === 'error') { fehler.push(m.text()); console.log('[seite]', m.text()); } });
    await page.goto(`http://localhost:${PORT}/demo/`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
    const info = await page.evaluate(() => {
      const els = [...document.querySelectorAll('[data-anprobe]')];
      return {
        anzahl: els.length,
        mitKnopf: els.filter((e) => e.shadowRoot && e.shadowRoot.querySelector('button')).length,
        bilderKaputt: [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.getAttribute('src')),
        breiteUeberlauf: document.documentElement.scrollWidth > innerWidth
      };
    });
    console.log(a.name, JSON.stringify(info));
    await page.screenshot({ path: path.join(AUS, `demo-${a.name}.png`) });
    await page.screenshot({ path: path.join(AUS, `demo-${a.name}-voll.png`), fullPage: true });
    if (opt.oeffnen && a.name === 'desktop') {
      await page.locator('.knoepfe [data-anprobe]').click();
      await page.waitForTimeout(2500);
      await page.screenshot({ path: path.join(AUS, 'demo-anprobe-offen.png') });
      const offen = await page.evaluate(() => !!document.querySelector('[data-anprobe-fenster]'));
      console.log('Anprobe-Fenster:', offen);
    }
    console.log(fehler.length ? `${fehler.length} Fehler` : 'keine Fehler');
    await ctx.close();
  }
  await browser.close();
  if (s) s.close();
})().catch((e) => { console.error(e); process.exit(1); });
