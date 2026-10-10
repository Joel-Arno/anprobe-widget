// Pruefung "code": Wie oft werden Shaderprogramme waehrend der Live-Anprobe neu erzeugt?
// (Umgebungstextur wechselt von Studio-PMREM 256 auf Raum-PMREM 128 -> envMapCubeUVHeight aendert sich)
//   NODE_PATH=$(npm root -g) node test/pruefung-code/programme.cjs [port]
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const WURZEL = path.resolve(__dirname, '../..');
const port = Number(process.argv[2] || 8151);
(async () => {
  const server = spawn(process.execPath, [path.join(WURZEL, 'test/server.mjs'), String(port)], { stdio: 'ignore' });
  await new Promise((r) => setTimeout(r, 800));
  const video = path.join(WURZEL, 'test/cache/kamera/business-person_rauschen_quer_2eaff790.y4m');
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist',
    '--autoplay-policy=no-user-gesture-required', '--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream', `--use-file-for-fake-video-capture=${video}`] });
  const basis = `http://localhost:${port}`;
  const aus = { proben: [] };
  try {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    await ctx.grantPermissions(['camera'], { origin: basis });
    await ctx.addInitScript((k) => { window.AnprobeKonfig = k; }, {
      mediapipe: '/mediapipe', modelle: { hand: '/modelle/hand_landmarker.task', gesicht: '/modelle/face_landmarker.task', koerper: '/modelle/pose_landmarker_lite.task' },
      debug: true, delegate: 'CPU', qualitaet: 'hoch' });
    const page = await ctx.newPage();
    await page.goto(`${basis}/test/seite.html`);
    await page.locator('#p-ohrringe button[part="knopf"]').click();
    await page.waitForFunction(() => window.__anprobe && window.__anprobe.zustand === 'intro');
    await page.locator('[data-anprobe-fenster]').getByRole('button', { name: /Kamera starten/i }).click();
    await page.waitForFunction(() => window.__anprobe.zustand === 'live', null, { timeout: 180000, polling: 100 });
    const t0 = Date.now();
    for (let i = 0; i < 8; i++) {
      const p = await page.evaluate(() => {
        const b = window.__anprobe.app.buehne;
        const r = b.renderer;
        const env = b.szene.environment;
        return { programme: r.info.programs.length, envHoehe: env && env.image ? env.image.height : null, gefunden: !!(window.__anprobe.ergebnis && window.__anprobe.ergebnis.gefunden) };
      });
      p.s = (Date.now() - t0) / 1000;
      aus.proben.push(p);
      await page.waitForTimeout(4000);
    }
  } catch (e) { aus.fehler = String(e.message).slice(0, 300); }
  await browser.close();
  server.kill();
  console.log(JSON.stringify(aus));
  fs.mkdirSync(path.join(__dirname, 'ausgabe'), { recursive: true });
  fs.writeFileSync(path.join(__dirname, 'ausgabe', 'programme.json'), JSON.stringify(aus, null, 1));
})();
