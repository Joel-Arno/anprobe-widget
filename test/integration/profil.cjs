// Profil: wofuer geht die Frame-Zeit drauf (SwiftShader)?
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const { startServer } = await import('../server.mjs');
  const { kameraVideo } = await import('../kamera.mjs');
  const art = process.argv[2] || 'ohrringe';
  const bild = process.argv[3] || 'business-person.png';
  const delegate = process.argv[4] || 'CPU';
  const s = await startServer(8110);
  const video = await kameraVideo({ bild, art: 'rauschen' });
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist',
    '--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream', '--use-file-for-fake-video-capture=' + video] });
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
  await ctx.addInitScript((d) => { window.AnprobeKonfig = { mediapipe: '/mediapipe', modelle: { hand: '/modelle/hand_landmarker.task', gesicht: '/modelle/face_landmarker.task', koerper: '/modelle/pose_landmarker_lite.task' }, debug: true, delegate: d }; }, delegate);
  const p = await ctx.newPage();
  p.on('pageerror', e => console.log('ERR', e.message));
  await p.goto('http://localhost:8110/test/seite.html');
  await p.locator(`#p-${art} button`).click();
  await p.locator('[data-anprobe-fenster]').getByRole('button', { name: /Kamera starten/ }).click();
  await p.waitForFunction(() => window.__anprobe.zustand === 'live', null, { timeout: 120000 });
  const r = await p.evaluate(async () => {
    const app = window.__anprobe.app; const bu = app.buehne;
    const z = {};
    const wrap = (obj, name, key) => { const f = obj[name].bind(obj); obj[name] = (...a) => { const t0 = performance.now(); const r = f(...a); (z[key] = z[key] || []).push(performance.now() - t0); return r; }; };
    wrap(bu.umgebung, 'erzeuge', 'umgebung.erzeuge'); wrap(bu.schatten, 'zeichne', 'schatten.zeichne');
    wrap(bu, 'rendere', 'rendere'); wrap(bu, 'aktualisiere', 'aktualisiere'); wrap(app.tracker, 'verarbeite', 'tracker');
    wrap(bu.renderer, 'render', 'renderer.render');
    await new Promise(r => setTimeout(r, 15000));
    const aus = {}; for (const [k, v] of Object.entries(z)) aus[k] = { n: v.length, mittel: Math.round(v.reduce((a, b) => a + b, 0) / v.length), max: Math.round(Math.max(...v)) };
    return { aus, q: bu.qualitaetName, pr: bu.renderer.getPixelRatio(), groesse: [bu.ansicht.breite, bu.ansicht.hoehe], quelle: [bu.quelle.W, bu.quelle.H], stufe: window.__anprobe.qualitaet };
  });
  console.log(JSON.stringify(r, null, 1));
  await b.close(); s.close();
})();
