const { chromium } = require('playwright');
(async () => {
  const { startServer } = await import('../server.mjs');
  const s = await startServer(8110);
  for (const args of [['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'], ['--enable-unsafe-swiftshader']]) {
    const b = await chromium.launch({ args });
    const p = await b.newPage();
    p.on('pageerror', e => console.log('ERR', e.message));
    await p.goto('http://localhost:8110/test/integration/bench.html');
    await p.waitForFunction(() => window.__aus, null, { timeout: 120000 });
    console.log(args.join(' '), JSON.stringify(await p.evaluate(() => window.__aus)));
    const gl = await p.evaluate(() => { const g = document.createElement('canvas').getContext('webgl2'); const d = g.getExtension('WEBGL_debug_renderer_info'); return g.getParameter(d.UNMASKED_RENDERER_WEBGL); });
    console.log(gl);
    await b.close();
  }
  s.close();
})();
