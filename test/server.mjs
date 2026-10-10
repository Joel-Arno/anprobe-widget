// Statischer Testserver fuer das Repo (nur node:http, kein Paket).
//   node test/server.mjs [port]          (Standard 8106)
//   import { startServer } from './server.mjs'; const s = await startServer(8106); s.close();
//
// Zusaetzliche Pfade:
//   /mediapipe/...  -> node_modules/@mediapipe/tasks-vision/...
//   /modelle/...    -> test/cache/modelle/...
// Kein Caching (Cache-Control: no-store), Range-Anfragen fuer Videos.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const WURZEL = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.cjs': 'text/javascript; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.wasm': 'application/wasm',
  '.task': 'application/octet-stream',
  '.tflite': 'application/octet-stream',
  '.glb': 'model/gltf-binary',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.y4m': 'video/x-yuv4mpeg',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.woff2': 'font/woff2'
};

const UMLEITUNGEN = [
  ['/mediapipe/', path.join(WURZEL, 'node_modules/@mediapipe/tasks-vision')],
  ['/modelle/', path.join(WURZEL, 'test/cache/modelle')]
];

/** URL-Pfad -> Datei im Dateisystem (oder null, wenn ausserhalb). */
function dateiZu(pfad) {
  let basis = WURZEL;
  let rest = pfad;
  for (const [vor, ziel] of UMLEITUNGEN) {
    if (pfad.startsWith(vor)) { basis = ziel; rest = pfad.slice(vor.length - 1); break; }
  }
  const datei = path.normalize(path.join(basis, rest));
  if (datei !== basis && !datei.startsWith(basis + path.sep)) return null;
  return datei;
}

function antworte(anf, ant, datei, info) {
  const typ = MIME[path.extname(datei).toLowerCase()] || 'application/octet-stream';
  const kopf = { 'Content-Type': typ, 'Cache-Control': 'no-store', 'Accept-Ranges': 'bytes' };
  const range = /^bytes=(\d*)-(\d*)$/.exec(anf.headers.range || '');
  if (range) {
    const start = range[1] ? Number(range[1]) : Math.max(0, info.size - Number(range[2]));
    const ende = range[1] && range[2] ? Math.min(Number(range[2]), info.size - 1) : info.size - 1;
    if (start > ende || start >= info.size) {
      ant.writeHead(416, { 'Content-Range': `bytes */${info.size}` }).end();
      return;
    }
    ant.writeHead(206, { ...kopf, 'Content-Range': `bytes ${start}-${ende}/${info.size}`, 'Content-Length': ende - start + 1 });
    if (anf.method === 'HEAD') { ant.end(); return; }
    fs.createReadStream(datei, { start, end: ende }).pipe(ant);
    return;
  }
  ant.writeHead(200, { ...kopf, 'Content-Length': info.size });
  if (anf.method === 'HEAD') { ant.end(); return; }
  fs.createReadStream(datei).pipe(ant);
}

/** Startet den Server; liefert ein Promise auf den http.Server (mit .close()). */
export function startServer(port = 8106, { leise = true } = {}) {
  const server = http.createServer((anf, ant) => {
    let pfad;
    try {
      pfad = decodeURIComponent(new URL(anf.url, 'http://x').pathname);
    } catch {
      ant.writeHead(400).end('Ungueltige Adresse');
      return;
    }
    // Shopify-Warenkorb nachgebildet (Kauf-Aktion der Ergebnisseite)
    if (pfad === '/cart/add.js' && anf.method === 'POST') {
      let roh = '';
      anf.on('data', (t) => { roh += t; });
      anf.on('end', () => {
        let items = [];
        try { items = JSON.parse(roh).items || []; } catch { /* leer */ }
        ant.writeHead(items.length ? 200 : 422, { 'Content-Type': 'application/json' }).end(JSON.stringify({ items }));
      });
      return;
    }
    let datei = dateiZu(pfad);
    if (!datei) { ant.writeHead(403).end('Verboten'); return; }
    fs.stat(datei, (fehler, info) => {
      if (!fehler && info.isDirectory()) {
        datei = path.join(datei, 'index.html');
        info = fs.existsSync(datei) ? fs.statSync(datei) : null;
      }
      if (fehler || !info) {
        if (!leise) console.log('404', pfad);
        ant.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Nicht gefunden: ' + pfad);
        return;
      }
      antworte(anf, ant, datei, info);
    });
  });
  return new Promise((ok, nein) => {
    server.once('error', nein);
    server.listen(port, () => ok(server));
  });
}

// CLI
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const port = Number(process.argv[2]) || 8106;
  startServer(port, { leise: false }).then(() => {
    console.log(`Testserver: http://localhost:${port}/  (Wurzel ${WURZEL})`);
    console.log(`  /mediapipe/ -> node_modules/@mediapipe/tasks-vision/, /modelle/ -> test/cache/modelle/`);
  }, (e) => {
    console.error('Server konnte nicht starten:', e.message);
    process.exit(1);
  });
}
