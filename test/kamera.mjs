// Fake-Kamera-Videos (y4m) fuer Chromium aus Testbildern, zwischengespeichert in test/cache/kamera/.
//
//   import { kameraVideo } from './kamera.mjs';
//   const datei = await kameraVideo({ bild: 'business-person.png', art: 'statisch', format: 'auto' });
//
//   CLI: node test/kamera.mjs <bild> [statisch|rauschen|bewegt] [auto|quer|hoch] [crop=w:h:x:y]
//
// Arten:
//   statisch  Bild unveraendert (2 s, 30 fps; Chromium spielt die Datei in Schleife)
//   rauschen  wie statisch, aber mit leichtem zeitlichem Sensorrauschen (wie eine echte Kamera auf Stativ)
//   bewegt    sanfte synthetische Bewegung: Schwenk, Zoom, leichte Drehung (4 s, 30 fps, nahtlose Schleife)
// Format: quer = 1280x720, hoch = 720x1280, auto = nach Seitenverhaeltnis des (beschnittenen) Bildes.
// Einpassen: Bild vollstaendig ("einpassen", Rand = weichgezeichnete Vergroesserung des Bildes)
// oder fuellend ("fuellen", Beschnitt). Vorher optional crop (Pixel des Originals).
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const HIER = path.dirname(fileURLToPath(import.meta.url));
export const BILDER = path.join(HIER, 'cache/bilder');
export const KAMERA = path.join(HIER, 'cache/kamera');
const VERSION = 3;   // erhoehen, wenn sich die Filter aendern (erzwingt Neuerzeugung)

const FORMATE = { quer: [1280, 720], hoch: [720, 1280] };

function ffmpeg(args) {
  return new Promise((ok, nein) => {
    const p = spawn('ffmpeg', ['-v', 'error', '-y', ...args], { stdio: ['ignore', 'ignore', 'pipe'] });
    let fehler = '';
    p.stderr.on('data', (d) => { fehler += d; });
    p.on('error', nein);
    p.on('close', (code) => (code === 0 ? ok() : nein(new Error(`ffmpeg Fehler ${code}: ${fehler.slice(-800)}`))));
  });
}

function ffprobeGroesse(datei) {
  return new Promise((ok, nein) => {
    const p = spawn('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'csv=p=0', datei]);
    let aus = '';
    p.stdout.on('data', (d) => { aus += d; });
    p.on('error', nein);
    p.on('close', (code) => {
      const [w, h] = aus.trim().split(',').map(Number);
      if (code !== 0 || !w || !h) nein(new Error('ffprobe: Groesse unbekannt fuer ' + datei));
      else ok({ w, h });
    });
  });
}

/**
 * Liefert den Pfad eines y4m-Videos (erzeugt es nur, wenn noetig).
 * bild: Dateiname in test/cache/bilder oder absoluter Pfad
 * art: 'statisch' | 'rauschen' | 'bewegt'
 * format: 'auto' | 'quer' | 'hoch'
 * einpassen: 'einpassen' | 'fuellen'
 * crop: 'w:h:x:y' (Pixel des Originalbilds) oder null
 */
export async function kameraVideo({ bild, art = 'statisch', format = 'auto', einpassen = 'einpassen', crop = null, sekunden } = {}) {
  const quelle = path.isAbsolute(bild) ? bild : path.join(BILDER, bild);
  if (!fs.existsSync(quelle)) throw new Error(`Testbild fehlt: ${quelle}`);
  let groesse = await ffprobeGroesse(quelle);
  if (crop) {
    const [w, h] = crop.split(':').map(Number);
    groesse = { w, h };
  }
  const fmt = format === 'auto' ? (groesse.h > groesse.w * 1.05 ? 'hoch' : 'quer') : format;
  const [W, H] = FORMATE[fmt];
  const dauer = sekunden || (art === 'bewegt' ? 4 : 2);

  const schluessel = crypto.createHash('sha1')
    .update(JSON.stringify({ VERSION, quelle, art, fmt, einpassen, crop, dauer, mtime: fs.statSync(quelle).mtimeMs }))
    .digest('hex').slice(0, 8);
  const name = `${path.basename(quelle).replace(/\.[^.]+$/, '')}_${art}_${fmt}_${schluessel}.y4m`;
  const ziel = path.join(KAMERA, name);
  if (fs.existsSync(ziel) && fs.statSync(ziel).size > 0) return ziel;
  fs.mkdirSync(KAMERA, { recursive: true });

  // Grundbild W x H: Vordergrund eingepasst (oder fuellend), Rand = weichgezeichneter Hintergrund
  const vor = crop ? `crop=${crop},` : '';
  const gross = art === 'bewegt' ? 1.22 : 1;   // Reserve fuer Schwenk/Zoom
  const GW = Math.round((W * gross) / 2) * 2;
  const GH = Math.round((H * gross) / 2) * 2;
  let grund;
  if (einpassen === 'fuellen') {
    grund = `[0:v]${vor}scale=${GW}:${GH}:force_original_aspect_ratio=increase,crop=${GW}:${GH},setsar=1[g]`;
  } else {
    grund = `[0:v]${vor}split[a][b];`
      + `[a]scale=${GW}:${GH}:force_original_aspect_ratio=increase,crop=${GW}:${GH},boxblur=24:2,eq=brightness=-0.04:saturation=0.8[hg];`
      + `[b]scale=${GW}:${GH}:force_original_aspect_ratio=decrease[vg];`
      + `[hg][vg]overlay=(W-w)/2:(H-h)/2,setsar=1[g]`;
  }
  let kette;
  if (art === 'bewegt') {
    // Perioden teilen die Dauer (4 s) -> nahtlose Schleife
    const T = dauer;
    kette = `[g]scale=w='trunc(iw*(0.9+0.06*sin(2*PI*t/${T}))/2)*2':h=-2:eval=frame,`
      + `rotate=a='0.035*sin(2*PI*t/${T / 2})':fillcolor=0x3a3632,`
      + `crop=${W}:${H}:x='(iw-${W})/2*(1+0.85*sin(2*PI*t/${T}))':y='(ih-${H})/2*(1+0.7*sin(2*PI*t/${T / 2}+1))',`
      + 'format=yuv420p[v]';
  } else if (art === 'rauschen') {
    kette = '[g]noise=alls=6:allf=t+u,format=yuv420p[v]';
  } else {
    kette = '[g]format=yuv420p[v]';
  }
  const tmp = ziel + '.tmp.y4m';
  await ffmpeg(['-loop', '1', '-framerate', '30', '-i', quelle, '-t', String(dauer), '-r', '30',
    '-filter_complex', `${grund};${kette}`, '-map', '[v]', '-pix_fmt', 'yuv420p', '-f', 'yuv4mpegpipe', tmp]);
  fs.renameSync(tmp, ziel);
  return ziel;
}

/** Erstes Bild eines Videos als PNG (zur Sichtpruefung). */
export async function vorschau(video, png) {
  await ffmpeg(['-i', video, '-frames:v', '1', png]);
  return png;
}

// CLI
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const [bild, art = 'statisch', format = 'auto', ...rest] = process.argv.slice(2);
  if (!bild) {
    console.log('Aufruf: node test/kamera.mjs <bild> [statisch|rauschen|bewegt] [auto|quer|hoch] [crop=w:h:x:y] [fuellen]');
    process.exit(1);
  }
  const crop = (rest.find((r) => r.startsWith('crop=')) || '').slice(5) || null;
  const einpassen = rest.includes('fuellen') ? 'fuellen' : 'einpassen';
  const t0 = Date.now();
  kameraVideo({ bild, art, format, crop, einpassen }).then(async (d) => {
    const png = d.replace(/\.y4m$/, '.png');
    await vorschau(d, png);
    console.log(`${d} (${((Date.now() - t0) / 1000).toFixed(1)} s)\nVorschau: ${png}`);
  }, (e) => { console.error(e.message); process.exit(1); });
}
