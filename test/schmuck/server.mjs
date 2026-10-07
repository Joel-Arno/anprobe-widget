// Einfacher statischer Server fuer die Schmuck-Pruefseite (Port 8102).
// Aufruf: node test/schmuck/server.mjs  ->  http://localhost:8102/test/schmuck/pruefseite.html
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const WURZEL = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const PORT = Number(process.env.PORT || 8102);
const TYPEN = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.json': 'application/json', '.wasm': 'application/wasm', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml', '.glb': 'model/gltf-binary', '.css': 'text/css', '.task': 'application/octet-stream'
};

http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  const datei = path.join(WURZEL, url);
  if (!datei.startsWith(WURZEL)) { res.writeHead(403); res.end(); return; }
  fs.stat(datei, (err, st) => {
    if (err || !st.isFile()) { res.writeHead(404); res.end('nicht gefunden'); return; }
    res.writeHead(200, { 'Content-Type': TYPEN[path.extname(datei)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    fs.createReadStream(datei).pipe(res);
  });
}).listen(PORT, () => console.log(`Pruefserver: http://localhost:${PORT}/test/schmuck/pruefseite.html`));
