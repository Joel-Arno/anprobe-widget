// Prueft ladeGlb im Browser: Modell bauen, als GLB exportieren, wieder laden.
// Aufruf: NODE_PATH=$(npm root -g) node test/schmuck/glb.cjs   (Server auf 8102 wird bei Bedarf gestartet)
const { chromium } = require('playwright');
const path = require('path');
const http = require('http');
const { spawn } = require('child_process');

function laeuft() {
  return new Promise((ok) => {
    http.get('http://localhost:8102/test/schmuck/labor.html', (r) => { r.resume(); ok(r.statusCode === 200); }).on('error', () => ok(false));
  });
}

(async () => {
  let server = null;
  if (!(await laeuft())) {
    server = spawn(process.execPath, [path.join(__dirname, 'server.mjs')], { stdio: ['ignore', 'pipe', 'inherit'] });
    await new Promise((ok) => server.stdout.once('data', ok));
  }
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const page = await browser.newPage();
  page.on('pageerror', (e) => console.log('[fehler]', e.message));
  await page.goto('http://localhost:8102/test/schmuck/labor.html');
  await page.waitForFunction(() => window.bereit === true);
  const erg = await page.evaluate(async () => {
    const THREE = await import('three');
    const { GLTFExporter } = await import('three/addons/exporters/GLTFExporter.js');
    const { baueSchmuck, ladeGlb, VORLAGEN } = await import('/src/schmuck/index.js');
    const { geteilteRessourcen } = await import('/src/schmuck/materialien.js');
    const aus = [];
    for (const id of ['perlentropfen-ohrringe', 'solitaer-ring']) {
      const m = baueSchmuck(VORLAGEN[id].spec);
      // Materialnamen so setzen, wie ein GLB aus dem Editor sie haette
      m.gruppe.traverse((o) => {
        if (!o.isMesh) return;
        const n = o.material.name || '';
        o.material = o.material.clone();
        o.material.name = n.startsWith('metall') ? 'gold' : n.startsWith('perle') ? 'perle' : n.startsWith('stein') ? 'stein' : n;
      });
      const pendelName = m.pendel[0]?.knoten;
      if (pendelName) pendelName.name = 'pendel-tropfen';
      const glb = await new GLTFExporter().parseAsync(m.gruppe, { binary: true });
      const url = URL.createObjectURL(new Blob([glb], { type: 'model/gltf-binary' }));
      const g = await ladeGlb(url, { art: VORLAGEN[id].spec.art, metall: 'silber' });
      const mats = new Set();
      g.gruppe.traverse((o) => { if (o.isMesh) mats.add(o.material.name); });
      aus.push({ id, art: g.art, masse: g.masse, pendel: g.pendel.map((p) => [p.knoten.name, Math.round(p.laengeMm * 10) / 10, p.achse]), materialien: [...mats] });
      g.dispose();
      m.dispose();
    }
    return { aus, rest: geteilteRessourcen() };
  });
  console.log(JSON.stringify(erg, null, 1));
  await browser.close();
  if (server) server.kill();
})().catch((e) => { console.error(e); process.exit(1); });
