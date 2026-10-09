// Tracker im Einzelbildmodus auf mehreren Bildern: Anker-Sichtbarkeit, Achsen, Hinweise.
//   NODE_PATH=$(npm root -g) node test/gesamt/messe.cjs ring bild1.jpg,bild2.jpg [port]
const { chromium } = require('playwright');
(async () => {
  const art = process.argv[2];
  const bilder = process.argv[3].split(',');
  const port = Number(process.argv[4] || 8162);
  const { startServer } = await import('../server.mjs');
  const s = await startServer(port);
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const p = await b.newPage();
  p.on('pageerror', (e) => console.log('[seitenfehler]', e.message));
  await p.goto(`http://localhost:${port}/test/render/pruefung.html`);
  const aus = await p.evaluate(async ({ art, bilder }) => {
    const THREE = await import('three');
    const { Tracker } = await import('/src/tracking/tracker.js');
    const t = new Tracker(art, { konfig: { mediapipe: '/mediapipe', modelle: { hand: '/modelle/hand_landmarker.task', gesicht: '/modelle/face_landmarker.task', koerper: '/modelle/pose_landmarker_lite.task' }, delegate: 'CPU' } });
    await t.laden();
    if (t.handZusatzLaden) await t.handZusatzLaden;
    window.__t = t;
    const z = [];
    for (const name of bilder) {
      const img = new Image(); img.src = `/test/cache/bilder/${name}`; await img.decode();
      const e = t.verarbeite(img, null, { W: img.naturalWidth, H: img.naturalHeight, spiegel: false });
      const anker = {};
      const flach = { ...e.anker }; delete flach.ring; for (const [k, a] of Object.entries(e.anker.ring || {})) flach['ring.' + k] = a;
      for (const [k, a] of Object.entries(flach)) {
        const zA = new THREE.Vector3(0, 0, 1).applyQuaternion(a.quaternion);
        const yA = new THREE.Vector3(0, 1, 0).applyQuaternion(a.quaternion);
        anker[k] = { sichtbar: +a.sichtbar.toFixed(2), z: +zA.z.toFixed(2), yz: +yA.z.toFixed(2), pos: [Math.round(a.position.x), Math.round(a.position.y)] };
      }
      z.push({ name, gefunden: e.gefunden, hinweis: e.hinweis && e.hinweis.code, anker, verdecker: e.verdecker.length, debug: Object.fromEntries(Object.entries(e.debug || {}).filter(([k]) => !/punkte2d|gesicht2d/.test(k))) });
    }
    return z;
  }, { art, bilder });
  for (const z of aus) console.log(JSON.stringify(z));
  await b.close(); s.close();
})();
