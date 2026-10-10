// Prueft Haendigkeit und Handruecken-Richtung des Trackers an Einzelbildern (VIDEO-Modus,
// mehrere Bilder hintereinander wie live).
//   NODE_PATH=$(npm root -g) node test/gesamt/haendigkeit.cjs <bild-url> [spiegel 0|1] [port]
// bild-url relativ zur Repo-Wurzel, z. B. /test/cache/abgeleitet/woman_hands_ring.png
const { chromium } = require('playwright');
(async () => {
  const url = process.argv[2];
  const spiegel = process.argv[3] !== '0';
  const port = Number(process.argv[4] || 8161);
  const { startServer } = await import('../server.mjs');
  const s = await startServer(port);
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage();
  p.on('pageerror', (e) => console.log('[seitenfehler]', e.message));
  await p.goto(`http://localhost:${port}/test/render/pruefung.html`);
  await p.waitForFunction(() => window.__bereit, null, { timeout: 30000 });
  const r = await p.evaluate(async ({ url, spiegel }) => {
    const { Tracker } = await import('/src/tracking/tracker.js');
    const t = new Tracker('ring', { konfig: { mediapipe: '/mediapipe', modelle: { hand: '/modelle/hand_landmarker.task' }, delegate: 'CPU', debug: true } });
    await t.laden();
    const img = new Image();
    img.src = url;
    await img.decode();
    const aus = [];
    for (let i = 0; i < 6; i++) {
      const e = t.verarbeite(img, 1000 + i * 33, { W: img.naturalWidth, H: img.naturalHeight, spiegel });
      const d = e.debug || {};
      const a = e.anker && e.anker.ring && e.anker.ring.ring;
      const z = a ? new a.quaternion.constructor().copy(a.quaternion) : null;
      let zAchse = null;
      if (z) {
        const v = { x: 0, y: 0, z: 1 };
        // Z-Achse des Rings im Buehnenraum (q * (0,0,1))
        const { x, y, z: qz, w } = z;
        zAchse = [2 * (x * qz + w * y), 2 * (y * qz - w * x), 1 - 2 * (x * x + y * y)].map((c) => +c.toFixed(2));
      }
      aus.push({ gefunden: e.gefunden, hinweis: e.hinweis && e.hinweis.code, roh: d.haendigkeitRoh, stimme: d.haendigkeit, rechts: d.rechts, rueckenZurKamera: d.rueckenZurKamera, zAchse });
    }
    return aus;
  }, { url, spiegel });
  console.log(JSON.stringify(r, null, 0));
  await b.close();
  s.close();
})();
