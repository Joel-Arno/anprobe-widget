// Prueft, welche Anfragen beim Oeffnen der Anprobe abgebrochen werden (ERR_ABORTED) und warum.
//   NODE_PATH=$(npm root -g) node test/integration/abbrueche.cjs [art] [port]
const { chromium } = require('playwright');
(async () => {
  const art = process.argv[2] || 'ring';
  const port = Number(process.argv[3] || 8117);
  const { startServer } = await import('../server.mjs');
  const { kameraVideo } = await import('../kamera.mjs');
  const s = await startServer(port);
  const bild = { ring: 'woman_hands.jpg', armband: 'hand-woman-man.jpg', ohrringe: 'business-person.png', kette: 'business-person.png' }[art];
  const video = await kameraVideo({ bild, art: 'rauschen', format: 'quer' });
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist',
    '--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream', '--use-file-for-fake-video-capture=' + video] });
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
  await ctx.addInitScript(() => { window.AnprobeKonfig = { mediapipe: '/mediapipe', modelle: { hand: '/modelle/hand_landmarker.task', gesicht: '/modelle/face_landmarker.task', koerper: '/modelle/pose_landmarker_lite.task' }, debug: true, delegate: 'CPU' }; });
  const p = await ctx.newPage();
  const t0 = Date.now();
  const t = () => ((Date.now() - t0) / 1000).toFixed(1);
  p.on('request', (r) => { if (/modelle|wasm|mediapipe/.test(r.url())) console.log(t(), 'REQ', r.resourceType(), r.url().replace(/^.*\/\/[^/]+/, '')); });
  p.on('requestfailed', (r) => console.log(t(), 'FAIL', r.resourceType(), r.url().replace(/^.*\/\/[^/]+/, ''), r.failure().errorText));
  p.on('requestfinished', (r) => { if (/modelle|wasm|mediapipe/.test(r.url())) console.log(t(), 'FIN', r.url().replace(/^.*\/\/[^/]+/, '')); });
  p.on('pageerror', (e) => console.log('SEITENFEHLER', e.message));
  await p.goto(`http://localhost:${port}/test/seite.html`);
  await p.locator(`#p-${art} button[part="knopf"]`).click();
  await p.locator('[data-anprobe-fenster]').getByRole('button', { name: /Kamera starten/ }).click();
  await p.waitForFunction(() => window.__anprobe && window.__anprobe.zustand === 'live', null, { timeout: 120000 });
  console.log(t(), 'live');
  await new Promise((r) => setTimeout(r, 3000));
  await b.close(); s.close();
})();
