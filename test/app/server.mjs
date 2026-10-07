// Statischer Pruefserver fuer test/app (Port 8104), Wurzel = Projektordner.
//   node test/app/server.mjs [port]
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const wurzel = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const port = Number(process.argv[2]) || 8104;
const TYPEN = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.cjs': 'text/javascript',
  '.json': 'application/json', '.wasm': 'application/wasm', '.css': 'text/css', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.task': 'application/octet-stream',
  '.tflite': 'application/octet-stream', '.glb': 'model/gltf-binary', '.map': 'application/json'
};

http.createServer((anf, ant) => {
  const url = new URL(anf.url, 'http://x');
  let datei = path.join(wurzel, decodeURIComponent(url.pathname));
  if (!datei.startsWith(wurzel)) { ant.writeHead(403).end(); return; }
  fs.stat(datei, (fehler, info) => {
    if (!fehler && info.isDirectory()) datei = path.join(datei, 'index.html');
    fs.stat(datei, (f2, i2) => {
      if (f2) { ant.writeHead(404).end('nicht gefunden'); return; }
      ant.writeHead(200, {
        'Content-Type': TYPEN[path.extname(datei).toLowerCase()] || 'application/octet-stream',
        'Content-Length': i2.size,
        'Cache-Control': 'no-store'
      });
      fs.createReadStream(datei).pipe(ant);
    });
  });
}).listen(port, () => console.log(`Pruefserver http://localhost:${port}/`));
