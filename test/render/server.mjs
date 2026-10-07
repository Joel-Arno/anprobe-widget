// Statischer Server fuer die Render-Pruefseiten (Wurzel = Projekt).
//   node test/render/server.mjs [port]   (Standard 8103)
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const wurzel = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const port = Number(process.argv[2]) || 8103;
const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.json': 'application/json', '.wasm': 'application/wasm', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.css': 'text/css',
  '.task': 'application/octet-stream', '.tflite': 'application/octet-stream', '.map': 'application/json'
};

export function starteServer(p = port) {
  const server = http.createServer((req, res) => {
    const url = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    let datei = path.join(wurzel, url);
    if (!datei.startsWith(wurzel)) { res.writeHead(403); res.end(); return; }
    if (fs.existsSync(datei) && fs.statSync(datei).isDirectory()) datei = path.join(datei, 'index.html');
    fs.stat(datei, (fehler, st) => {
      if (fehler) { res.writeHead(404); res.end('nicht gefunden'); return; }
      res.writeHead(200, {
        'Content-Type': MIME[path.extname(datei).toLowerCase()] || 'application/octet-stream',
        'Content-Length': st.size,
        'Cache-Control': 'no-store'
      });
      fs.createReadStream(datei).pipe(res);
    });
  });
  return new Promise((ok) => server.listen(p, () => ok(server)));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  starteServer().then(() => console.log(`Server: http://localhost:${port}/test/render/pruefung.html`));
}
