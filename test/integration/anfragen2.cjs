const { chromium } = require('playwright');
(async () => {
  const { startServer } = await import('../server.mjs');
  const s = await startServer(8110);
  const b = await chromium.launch({ args: [] });
  const p = await b.newPage();
  p.on('requestfailed', r => console.log('FAIL', r.url().slice(-40), r.failure().errorText));
  p.on('requestfinished', r => console.log('FIN', r.url().slice(-40)));
  await p.goto('http://localhost:8110/test/seite.html');
  const r = await p.evaluate(async () => {
    const aus = [];
    for (const url of ['/mediapipe/wasm/vision_wasm_internal.wasm', '/modelle/hand_landmarker.task']) {
      const a = await fetch(url, { credentials: 'same-origin' });
      const l = a.body.getReader(); let n = 0;
      for (;;) { const { done, value } = await l.read(); if (done) break; n += value.length; }
      aus.push([url, n, a.headers.get('content-length')]);
    }
    return aus;
  });
  console.log(JSON.stringify(r));
  await new Promise(r => setTimeout(r, 500));
  await b.close(); s.close();
})();
