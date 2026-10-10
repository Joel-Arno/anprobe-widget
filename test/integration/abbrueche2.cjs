// Gegenprobe: fetch + getReader, langsam gelesen (wie in der App bei belegtem Hauptthread).
// Meldet Chromium dann ERR_ABORTED, obwohl alle Bytes ankommen?
const { chromium } = require('playwright');
(async () => {
  const { startServer } = await import('../server.mjs');
  const s = await startServer(8119);
  const b = await chromium.launch();
  const p = await b.newPage();
  p.on('requestfailed', (r) => console.log('FAIL', r.url().slice(-30), r.failure().errorText));
  p.on('requestfinished', (r) => { if (/task|wasm/.test(r.url())) console.log('FIN', r.url().slice(-30)); });
  await p.goto('http://localhost:8119/test/seite.html');
  const r = await p.evaluate(async () => {
    const aus = [];
    for (const [url, pause] of [['/modelle/hand_landmarker.task', 0], ['/modelle/face_landmarker.task', 30]]) {
      const a = await fetch(url, { credentials: 'same-origin' });
      const l = a.body.getReader(); let n = 0;
      for (;;) {
        const { done, value } = await l.read(); if (done) break; n += value.length;
        if (pause) { const t = performance.now(); while (performance.now() - t < pause) {} }   // Hauptthread belegt
      }
      aus.push([url, n, a.headers.get('content-length')]);
    }
    return aus;
  });
  console.log(JSON.stringify(r));
  await new Promise((r) => setTimeout(r, 500));
  await b.close(); s.close();
})();
