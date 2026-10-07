// End-to-End-Pruefung der fertigen App (dist/anprobe.js) mit Chromium, Fake-Kamera und echten Modellen.
//
//   node test/laufen.mjs                       alles (baut zuerst)
//   node test/laufen.mjs --nur ring            nur eine Art / ein Szenario / Teilname / RegExp (Komma = oder)
//   node test/laufen.mjs --port 8110 --kein-build --parallel 2 --ohne-intern --liste
//
// Ergebnis: test/ergebnisse/<szenario>/*.png, aufnahme.jpg, messung.json
//           test/ergebnisse/bericht.json und bericht.md
import { spawnSync, execSync } from 'node:child_process';
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startServer } from './server.mjs';
import { kameraVideo, BILDER } from './kamera.mjs';
import { SZENARIEN, GERAETE, waehleSzenarien } from './szenarien.mjs';

const HIER = path.dirname(fileURLToPath(import.meta.url));
const WURZEL = path.resolve(HIER, '..');
const ERGEBNISSE = path.join(HIER, 'ergebnisse');

// ---------------------------------------------------------------- Argumente

function argumente(argv) {
  const a = { nur: null, port: 8106, build: true, parallel: 2, intern: true, liste: false, delegate: 'CPU', qualitaet: 'hoch', zeitschritt: 33 };
  for (let i = 0; i < argv.length; i++) {
    const x = argv[i];
    const wert = () => argv[++i];
    if (x === '--nur') a.nur = wert();
    else if (x.startsWith('--nur=')) a.nur = x.slice(6);
    else if (x === '--port') a.port = Number(wert());
    else if (x.startsWith('--port=')) a.port = Number(x.slice(7));
    else if (x === '--kein-build') a.build = false;
    else if (x === '--parallel') a.parallel = Math.max(1, Number(wert()) || 1);
    else if (x.startsWith('--parallel=')) a.parallel = Math.max(1, Number(x.slice(11)) || 1);
    else if (x === '--ohne-intern') a.intern = false;
    else if (x === '--delegate') a.delegate = wert();
    else if (x === '--qualitaet') a.qualitaet = wert();
    else if (x === '--zeitschritt') a.zeitschritt = Number(wert()) || 0;
    else if (x === '--liste') a.liste = true;
    else if (x === '--hilfe' || x === '-h') a.hilfe = true;
    else if (!x.startsWith('-') && !a.nur) a.nur = x;
    else { console.error('Unbekanntes Argument:', x); process.exit(2); }
  }
  return a;
}

// Playwright ist global installiert: per CommonJS-Aufloesung (NODE_PATH) oder ueber npm root -g
function ladePlaywright() {
  const require = createRequire(import.meta.url);
  try { return require('playwright'); } catch { /* weiter */ }
  const global = execSync('npm root -g', { encoding: 'utf8' }).trim();
  return require(path.join(global, 'playwright'));
}

// ---------------------------------------------------------------- Seite: Messhaken

// Laeuft vor jedem Skript der Seite: Konfiguration, Kamera-Attrappe, Aufzeichnung der Ergebnisse
function initSkript({ konfig, ablauf }) {
  window.AnprobeKonfig = konfig;
  if (ablauf === 'verweigert' && navigator.mediaDevices) {
    navigator.mediaDevices.getUserMedia = async () => {
      const e = new Error('Permission denied (Test)');
      e.name = 'NotAllowedError';
      throw e;
    };
  }
  const p = { frames: [], aufzeichnen: false, letztes: null, zustaende: [] };
  window.__pruef = p;
  const kompakt = (a) => a && a.position ? {
    p: [a.position.x, a.position.y, a.position.z],
    q: [a.quaternion.x, a.quaternion.y, a.quaternion.z, a.quaternion.w],
    s: a.pxProMm, v: a.sichtbar
  } : null;
  let zustand = null;
  const schritt = () => {
    const d = window.__anprobe;
    if (d && d.zustand !== zustand) {
      zustand = d.zustand;
      p.zustaende.push({ z: zustand, t: performance.now() });
    }
    if (d && d.ergebnis && d.ergebnis !== p.letztes) {
      p.letztes = d.ergebnis;
      if (p.aufzeichnen) {
        const e = d.ergebnis;
        const anker = {};
        for (const [k, a] of Object.entries(e.anker || {})) {
          if (k === 'ring') {
            for (const [f, af] of Object.entries(a || {})) anker['ring.' + f] = kompakt(af);
          } else {
            anker[k] = kompakt(a);
          }
        }
        p.frames.push({ t: performance.now(), gefunden: !!e.gefunden, hinweis: e.hinweis && e.hinweis.code, anker,
          fps: d.fps, renderMs: d.renderMs, trackingMs: d.trackingMs });
      }
    }
    requestAnimationFrame(schritt);
  };
  requestAnimationFrame(schritt);
}

// Kuenstliche Tracker-Uhr (schrittMs je Ergebnis; 0 = wieder echte Zeit). Streng steigend fuer MediaPipe.
function setzeTestuhr(schrittMs) {
  const tr = window.__anprobe && window.__anprobe.app && window.__anprobe.app.tracker;
  if (!tr) return false;
  if (tr.__original) { tr.verarbeite = tr.__original; delete tr.__original; }
  if (!schrittMs) return true;
  const original = tr.verarbeite;
  tr.__original = original;
  let uhr = null;
  tr.verarbeite = function (quelle, zeitMs, o) {
    if (zeitMs != null) { uhr = uhr == null ? zeitMs : uhr + schrittMs; zeitMs = uhr; }
    return original.call(this, quelle, zeitMs, o);
  };
  return true;
}

// Bildschirmlage (CSS-Pixel) der Anker im Buehnenraum
function ankerAufBildschirm() {
  const d = window.__anprobe;
  const app = d && d.app;
  const b = app && app.buehne;
  const e = d && d.ergebnis;
  if (!b || !e || !e.anker) return null;
  const r = b.canvas.getBoundingClientRect();
  const s = b.sicht;
  const zu = (a) => a && a.position ? {
    x: r.left + (a.position.x - s.links) * s.cssProPx,
    y: r.top + (s.oben - a.position.y) * s.cssProPx,
    mm: a.pxProMm * s.cssProPx, sichtbar: a.sichtbar
  } : null;
  const aus = {};
  for (const [k, a] of Object.entries(e.anker)) {
    if (k === 'ring') for (const [f, af] of Object.entries(a || {})) aus['ring.' + f] = zu(af);
    else aus[k] = zu(a);
  }
  return { anker: aus, canvas: { x: r.left, y: r.top, b: r.width, h: r.height } };
}

// ---------------------------------------------------------------- Auswertung

const mittel = (xs) => xs.reduce((a, b) => a + b, 0) / Math.max(1, xs.length);
const std = (xs) => { const m = mittel(xs); return Math.sqrt(mittel(xs.map((x) => (x - m) ** 2))); };

/** Zittern eines Ankers: Positions-Std (px, x/y), pxProMm-Std (%), Rotation RMS (Grad) gegen Mittel. */
function zittern(serie) {
  const ok = serie.filter(Boolean);
  if (ok.length < 3) return null;
  const xs = ok.map((a) => a.p[0]);
  const ys = ok.map((a) => a.p[1]);
  const ss = ok.map((a) => a.s);
  // mittlere Rotation: Quaternionen auf eine Halbkugel, mitteln, normieren
  const q0 = ok[0].q;
  const m = [0, 0, 0, 0];
  for (const a of ok) {
    const sgn = a.q[0] * q0[0] + a.q[1] * q0[1] + a.q[2] * q0[2] + a.q[3] * q0[3] < 0 ? -1 : 1;
    for (let i = 0; i < 4; i++) m[i] += sgn * a.q[i];
  }
  const n = Math.hypot(...m) || 1;
  for (let i = 0; i < 4; i++) m[i] /= n;
  const winkel = ok.map((a) => {
    const d = Math.min(1, Math.abs(a.q[0] * m[0] + a.q[1] * m[1] + a.q[2] * m[2] + a.q[3] * m[3]));
    return 2 * Math.acos(d) * 180 / Math.PI;
  });
  // Sprung von Bild zu Bild (Rauschen hoher Frequenz)
  const spruenge = [];
  for (let i = 1; i < ok.length; i++) spruenge.push(Math.hypot(ok[i].p[0] - ok[i - 1].p[0], ok[i].p[1] - ok[i - 1].p[1]));
  return {
    n: ok.length,
    posStdPx: Math.hypot(std(xs), std(ys)),
    posSprungPx: mittel(spruenge),
    pxProMm: mittel(ss),
    pxProMmStdProzent: (std(ss) / Math.max(1e-9, mittel(ss))) * 100,
    rotRmsGrad: Math.sqrt(mittel(winkel.map((w) => w * w))),
    sichtbar: mittel(ok.map((a) => a.v ?? 1)),
    lage: [mittel(xs), mittel(ys)]
  };
}

function werteAus(frames, szenario) {
  const fingerKey = szenario.art === 'ring' ? `ring.${szenario.finger || 'ring'}` : null;
  const schluessel = szenario.art === 'ring' ? [fingerKey] : szenario.erwartet.anker;
  const anker = {};
  for (const k of schluessel) anker[k] = zittern(frames.map((f) => f.anker[k]));
  const letzte = frames[frames.length - 1] || {};
  return {
    frames: frames.length,
    gefundenAnteil: frames.length ? frames.filter((f) => f.gefunden).length / frames.length : 0,
    dauerS: frames.length > 1 ? (frames[frames.length - 1].t - frames[0].t) / 1000 : 0,
    ergebnisseProS: frames.length > 1 ? (frames.length - 1) / ((frames[frames.length - 1].t - frames[0].t) / 1000) : 0,
    fps: letzte.fps || 0,
    renderMs: letzte.renderMs || 0,
    trackingMs: letzte.trackingMs || 0,
    hinweise: [...new Set(frames.map((f) => f.hinweis).filter(Boolean))],
    anker
  };
}

// Harmlose Konsolenmeldungen (MediaPipe/TFLite-Logs, Treiberhinweise)
const HARMLOS = [
  /^(INFO|WARNING): /, /^[IW]\d{4} /, /TensorFlow Lite/i, /XNNPACK/i, /GL Driver Message/i, /GPU stall due to ReadPixels/i,
  /WebGL: CONTEXT_LOST_WEBGL/i, /Automatic fallback to software WebGL/i, /OpenGL ES 3\.0 or higher/i,
  /gl_context\.cc/i, /Graph successfully started/i, /landmark_projection_calculator/i, /Feedback manager requires/i
];
const istHarmlos = (t) => HARMLOS.some((r) => r.test(t));

// ---------------------------------------------------------------- Szenario ausfuehren

const warte = (ms) => new Promise((r) => setTimeout(r, ms));

async function ffmpegVergroessern(datei, faktor) {
  if (faktor <= 1.01) return;
  const tmp = datei.replace(/\.png$/, '.tmp.png');
  const r = spawnSync('ffmpeg', ['-v', 'error', '-y', '-i', datei, '-vf', `scale=iw*${faktor}:ih*${faktor}:flags=lanczos`, tmp]);
  if (r.status === 0) fs.renameSync(tmp, datei);
}

async function fuehreAus(pw, szenario, opt) {
  const ordner = path.join(ERGEBNISSE, szenario.name);
  fs.rmSync(ordner, { recursive: true, force: true });
  fs.mkdirSync(ordner, { recursive: true });
  const bericht = {
    name: szenario.name, art: szenario.art, bild: szenario.bild, geraet: szenario.geraet, ablauf: szenario.ablauf,
    video: szenario.ablauf === 'kamera' ? szenario.video : null, intern: !!szenario.intern,
    ok: false, gefunden: false, schritte: [], fehler: [], konsole: [], harmlos: 0, screenshots: [], zeiten: {}, messung: null
  };
  const schritt = (t) => { bericht.schritte.push(t); };
  const fehler = (t) => { bericht.fehler.push(t); };
  const t0 = Date.now();

  const args = ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist',
    '--autoplay-policy=no-user-gesture-required'];
  if (szenario.ablauf === 'kamera' || szenario.ablauf === 'verweigert') {
    const video = await kameraVideo({
      // Die App fordert am Desktop 1280x720, am Handy (hochkant) 720x1280 an; Chromium schneidet
      // abweichende Formate zu (resizeMode crop-and-scale) -> Video im angeforderten Format erzeugen.
      bild: szenario.bild, art: szenario.video,
      format: szenario.format !== 'auto' ? szenario.format : szenario.geraet === 'handy' ? 'hoch' : 'quer',
      crop: szenario.crop, einpassen: szenario.einpassen
    });
    bericht.videoDatei = path.relative(WURZEL, video);
    args.push('--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream', `--use-file-for-fake-video-capture=${video}`);
  }
  const browser = await pw.chromium.launch({ args });
  const basis = `http://localhost:${opt.port}`;
  try {
    const ctx = await browser.newContext({ ...GERAETE[szenario.geraet], acceptDownloads: true, locale: 'de-DE' });
    if (szenario.ablauf === 'kamera') await ctx.grantPermissions(['camera'], { origin: basis });
    const konfig = {
      mediapipe: '/mediapipe',
      modelle: { hand: '/modelle/hand_landmarker.task', gesicht: '/modelle/face_landmarker.task', koerper: '/modelle/pose_landmarker_lite.task' },
      debug: true,
      shopName: 'ARLISE'
    };
    if (opt.delegate) konfig.delegate = opt.delegate;
    if (opt.qualitaet) konfig.qualitaet = opt.qualitaet;
    await ctx.addInitScript(initSkript, { konfig, ablauf: szenario.ablauf });
    const page = await ctx.newPage();
    page.setDefaultTimeout(60000);
    page.on('console', (m) => {
      const typ = m.type();
      if (typ !== 'error' && typ !== 'warning') return;
      const text = m.text();
      if (istHarmlos(text)) { bericht.harmlos++; return; }
      bericht.konsole.push(`[${typ}] ${text}`.slice(0, 400));
    });
    page.on('pageerror', (e) => fehler(`Seitenfehler: ${e.message}`.slice(0, 400)));
    page.on('requestfailed', (r) => {
      const u = r.url();
      // Chromium meldet per body.getReader() vollstaendig gelesene fetch-Antworten zeitabhaengig als
      // ERR_ABORTED, obwohl alle Bytes ankommen (Gegenprobe: test/integration/abbrueche2.cjs). Die App
      // prueft die Laenge selbst (mediapipe.js ladeDatei) und meldet echte Abbrueche als Fehler.
      if (r.resourceType() === 'fetch' && /ERR_ABORTED/.test((r.failure() && r.failure().errorText) || '')) {
        bericht.harmlos++;
        (bericht.abgebrochen = bericht.abgebrochen || []).push(`${((Date.now() - t0) / 1000).toFixed(1)} s ${u.replace(basis, '')}`);
        return;
      }
      if (!u.startsWith('blob:') && !u.startsWith('data:')) fehler(`Anfrage fehlgeschlagen nach ${((Date.now() - t0) / 1000).toFixed(1)} s: ${u} (${r.failure() && r.failure().errorText})`);
    });
    page.on('response', (r) => { if (r.status() >= 400) fehler(`HTTP ${r.status()}: ${r.url()}`); });

    const bild = async (name, clip = null, vergroessern = 1) => {
      const datei = path.join(ordner, `${name}.png`);
      await page.screenshot({ path: datei, clip: clip || undefined });
      if (vergroessern > 1) await ffmpegVergroessern(datei, vergroessern);
      bericht.screenshots.push(path.relative(WURZEL, datei));
      return datei;
    };
    const zustand = () => page.evaluate(() => window.__anprobe && window.__anprobe.zustand);
    const warteZustand = (z, ms = 30000) => page.waitForFunction((zz) => {
      const d = window.__anprobe;
      return d && (Array.isArray(zz) ? zz.includes(d.zustand) : d.zustand === zz);
    }, z, { timeout: ms, polling: 100 });
    const fenster = page.locator('[data-anprobe-fenster]');

    // 1. Seite und Knopf
    await page.goto(`${basis}/test/seite.html`, { waitUntil: 'load' });
    const knopf = page.locator(`${szenario.produkt} button[part="knopf"]`);
    await knopf.waitFor({ state: 'visible', timeout: 15000 });
    if (szenario.geraet === 'handy') await knopf.scrollIntoViewIfNeeded();
    schritt('Knopf sichtbar');
    await knopf.click();
    await warteZustand('intro', 10000);
    await warte(2600);   // Einblend- und Zeichenanimation der Anleitung
    await bild('01-intro');
    schritt('Intro offen');

    if (szenario.ablauf === 'foto') {
      await fotoHochladen(page, fenster, szenario);
    } else {
      const tStart = Date.now();
      await fenster.getByRole('button', { name: /Kamera starten/i }).click();
      try {
        await warteZustand('laden', 5000);
        await warte(250);
        await bild('02-laden');
      } catch { /* Laden kann sehr kurz sein */ }
      if (szenario.ablauf === 'ohne-kamera' || szenario.ablauf === 'verweigert') {
        await warteZustand('fehler', 30000);
        await warte(400);
        await bild('03-fehler');
        bericht.fehlerArt = await page.evaluate(() => window.__anprobe.fehlerArt);
        schritt(`Fehlerzustand (${bericht.fehlerArt})`);
        await fotoHochladen(page, fenster, szenario, '.a-fehler');
      } else {
        await warteZustand('live', 120000);
        bericht.zeiten.bisLiveS = (Date.now() - tStart) / 1000;
        schritt(`live nach ${bericht.zeiten.bisLiveS.toFixed(1)} s`);
      }
    }

    // 2. Warten, bis der Schmuck sichtbar ist
    const tSuche = Date.now();
    const erwartet = szenario.erwartet;
    try {
      await page.waitForFunction(({ art, finger, anker, mindestens }) => {
        const e = window.__anprobe && window.__anprobe.ergebnis;
        if (!e || !e.gefunden || !e.anker) return false;
        if (art === 'ring') { const r = e.anker.ring && e.anker.ring[finger]; return r && r.sichtbar > 0.9; }
        return anker.filter((k) => e.anker[k] && e.anker[k].sichtbar > 0.5).length >= mindestens;
      }, { art: szenario.art, finger: 'ring', anker: erwartet.anker, mindestens: erwartet.mindestens }, { timeout: 45000, polling: 200 });
      bericht.gefunden = true;
      bericht.zeiten.bisGefundenS = (Date.now() - tSuche) / 1000;
      schritt(`gefunden nach ${bericht.zeiten.bisGefundenS.toFixed(1)} s`);
    } catch {
      fehler('Schmuck-Anker nicht gefunden (Zeitlimit 45 s)');
    }

    // 3. Ring: Finger umstellen
    if (szenario.finger && szenario.finger !== 'ring') {
      const fk = fenster.locator(`[data-finger="${szenario.finger}"]`).first();
      try {
        await fk.click({ timeout: 30000, force: true });
        schritt(`Finger: ${szenario.finger}`);
      } catch (e) { fehler(`Fingerwahl ${szenario.finger} nicht moeglich: ${e.message.split('\n')[0]}`); }
    }

    // 4. Einschwingen (1 s, mindestens 4 Ergebnisse), dann messen. Bei stehendem Video laeuft die
    //    Tracker-Uhr kuenstlich mit 30 fps (zeitschritt), damit die Filter wie auf einem Handy arbeiten.
    const live = szenario.ablauf === 'kamera';
    const testuhr = live && !szenario.bewegt && opt.zeitschritt > 0;
    if (testuhr) await page.evaluate(setzeTestuhr, opt.zeitschritt);
    bericht.testuhrMs = testuhr ? opt.zeitschritt : null;
    await page.evaluate(() => { window.__pruef.frames = []; window.__pruef.aufzeichnen = true; });
    const tEin = Date.now();
    while (Date.now() - tEin < 20000) {
      const n = await page.evaluate(() => window.__pruef.frames.length);
      if (Date.now() - tEin > 1000 && (n >= 4 || !live)) break;
      await warte(200);
    }
    await page.evaluate(() => { window.__pruef.frames = []; });
    await bild('03-live');
    await bildNah(page, szenario, bild, '04-nah');
    if (live) {
      // Messfenster: mindestens 3 s und 24 Ergebnisse, hoechstens 45 s
      const tMess = Date.now();
      while (Date.now() - tMess < 45000) {
        const n = await page.evaluate(() => window.__pruef.frames.length);
        if (Date.now() - tMess > 3000 && n >= 24) break;
        await warte(250);
      }
    } else {
      await warte(1500);
    }
    const frames = await page.evaluate(() => { window.__pruef.aufzeichnen = false; return window.__pruef.frames; });
    if (testuhr) await page.evaluate(setzeTestuhr, 0);
    bericht.messung = werteAus(frames, szenario);
    fs.writeFileSync(path.join(ordner, 'messung.json'), JSON.stringify({ messung: bericht.messung, frames }, null, 1));
    if (live) await bild('05-live-ende');

    // 5. Variante wechseln (zweite Variante), kurz zeigen
    const swatch = fenster.locator('[data-variante="1"]').first();
    if (await swatch.count()) {
      try {
        await swatch.click({ timeout: 30000, force: true });
        await warte(live ? 1500 : 900);
        await bildNah(page, szenario, bild, '06-variante-nah');
        schritt('Variante 2 gezeigt');
        await fenster.locator('[data-variante="0"]').first().click({ timeout: 30000, force: true });
        await warte(800);
      } catch (e) { fehler(`Variantenwechsel: ${e.message.split('\n')[0]}`); }
    }

    // 6. Aufnahme
    try {
      // Ausloeser: live "Foto aufnehmen", im Foto-Modus "Bild speichern" (gleicher Knopf)
      await fenster.locator('[data-aktion="ausloesen"]').first().click({ timeout: 30000, force: true });
      await warteZustand('ergebnis', 60000);
      await warte(600);
      await bild('07-ergebnis');
      const [download] = await Promise.all([
        page.waitForEvent('download', { timeout: 15000 }),
        fenster.getByRole('button', { name: /^Speichern$/i }).click({ force: true })
      ]);
      const ziel = path.join(ordner, 'aufnahme.jpg');
      await download.saveAs(ziel);
      bericht.aufnahme = { datei: path.relative(WURZEL, ziel), name: download.suggestedFilename(), bytes: fs.statSync(ziel).size };
      schritt(`Aufnahme gespeichert (${download.suggestedFilename()}, ${(bericht.aufnahme.bytes / 1024).toFixed(0)} KB)`);
      // zurueck zur Anprobe
      await fenster.getByRole('button', { name: /Zurück zur Anprobe/i }).click({ force: true });
      await warteZustand(['live', 'foto', 'laden'], 30000);
      schritt('zurück zur Anprobe');
    } catch (e) {
      fehler(`Aufnahme fehlgeschlagen: ${e.message.split('\n')[0]}`);
    }

    // 7. Schliessen: Kamera muss aus sein
    await page.keyboard.press('Escape');
    try {
      await warteZustand('zu', 30000);
      await warte(300);
      const kameraAktiv = await page.evaluate(() => window.__anprobe.kameraAktiv);
      if (kameraAktiv) fehler('Kamera laeuft nach dem Schliessen weiter');
      else schritt('geschlossen, Kamera aus');
    } catch { fehler('Fenster schliesst nicht mit Escape'); }

    const appFehler = await page.evaluate(() => (window.__anprobe && window.__anprobe.fehler) || []);
    for (const f of appFehler) fehler(`App: ${f}`);
    bericht.zustaende = await page.evaluate(() => window.__pruef.zustaende.map((z) => z.z));
    await ctx.close();
  } catch (e) {
    fehler(`Abbruch: ${e.message.split('\n')[0]}`);
  } finally {
    await browser.close().catch(() => {});
  }
  bericht.zeiten.gesamtS = (Date.now() - t0) / 1000;
  bericht.ok = bericht.gefunden && bericht.fehler.length === 0 && bericht.konsole.filter((k) => k.startsWith('[error]')).length === 0;
  fs.writeFileSync(path.join(ordner, 'bericht.json'), JSON.stringify(bericht, null, 1));
  return bericht;
}

async function fotoHochladen(page, fenster, szenario, bereich = '.a-intro') {
  const knopf = fenster.locator(`${bereich} [data-aktion="fotoWaehlen"]`).first();
  const [wahl] = await Promise.all([page.waitForEvent('filechooser', { timeout: 10000 }), knopf.click()]);
  await wahl.setFiles(path.join(BILDER, szenario.bild));
  await page.waitForFunction(() => ['foto', 'fehler'].includes(window.__anprobe.zustand), null, { timeout: 120000, polling: 200 });
}

/** Ausschnitt um die erwarteten Anker (mm-Rand je Art), vergroessert gespeichert. */
async function bildNah(page, szenario, bild, name) {
  const lage = await page.evaluate(ankerAufBildschirm);
  if (!lage) return;
  const keys = szenario.art === 'ring' ? [`ring.${szenario.finger || 'ring'}`] : szenario.erwartet.anker;
  const punkte = keys.map((k) => lage.anker[k]).filter((a) => a && a.sichtbar > 0.05);
  if (!punkte.length) return;
  const rand = { ring: 28, armband: 55, kette: 110, ohrringe: 30 }[szenario.art];
  const mm = mittel(punkte.map((p) => p.mm));
  const r = Math.max(60, rand * mm);
  let x0 = Math.min(...punkte.map((p) => p.x)) - r;
  let x1 = Math.max(...punkte.map((p) => p.x)) + r;
  let y0 = Math.min(...punkte.map((p) => p.y)) - r * (szenario.art === 'kette' ? 0.6 : 1);
  let y1 = Math.max(...punkte.map((p) => p.y)) + r * (szenario.art === 'kette' ? 1.6 : szenario.art === 'ohrringe' ? 1.4 : 1);
  const c = lage.canvas;
  x0 = Math.max(c.x, x0); y0 = Math.max(c.y, y0);
  x1 = Math.min(c.x + c.b, x1); y1 = Math.min(c.y + c.h, y1);
  if (x1 - x0 < 10 || y1 - y0 < 10) return;
  const dpr = await page.evaluate(() => window.devicePixelRatio);
  const faktor = Math.min(4, Math.max(1, 700 / ((x1 - x0) * dpr)));
  await bild(name, { x: x0, y: y0, width: x1 - x0, height: y1 - y0 }, Math.round(faktor * 10) / 10);
}

// ---------------------------------------------------------------- Bericht

const f = (x, n = 2) => (x == null || Number.isNaN(x) ? '–' : Number(x).toFixed(n));

function berichtMd(alle, dauerS) {
  const zeilen = [];
  zeilen.push('# Anprobe – End-to-End-Bericht', '');
  zeilen.push(`${new Date().toISOString().replace('T', ' ').slice(0, 16)} UTC · ${alle.length} Szenarien · ${f(dauerS / 60, 1)} min · `
    + `${alle.filter((b) => b.ok).length} ok`, '');
  zeilen.push('Zittern: Standardabweichung der Ankerposition (Kamerapixel), der Skala pxProMm (%) und RMS-Rotation (Grad), '
    + 'gemessen nach 1 s Einschwingen auf dem Video (rauschen = Standbild mit Sensorrauschen). '
    + 'fps/Zeiten aus window.__anprobe (Headless-Chromium mit SwiftShader: nur relativ aussagekräftig).', '');
  zeilen.push('| Szenario | Gerät | Ablauf | gefunden | bis live s | Anker | Pos σ px | Skala σ % | Rot ° | Erg./s | fps | render ms | tracking ms | Fehler |');
  zeilen.push('|---|---|---|---|---|---|---|---|---|---|---|---|---|---|');
  for (const b of alle) {
    const m = b.messung || {};
    const anker = Object.entries(m.anker || {});
    const zelle = (fn) => anker.map(([, a]) => (a ? fn(a) : '–')).join(' / ') || '–';
    const fehlerZahl = b.fehler.length + b.konsole.length;
    zeilen.push(`| ${b.name}${b.intern ? ' (intern)' : ''} | ${b.geraet} | ${b.ablauf}${b.video ? ' ' + b.video : ''} | ${b.gefunden ? 'ja' : '**nein**'} `
      + `| ${f(b.zeiten.bisLiveS, 1)} | ${anker.map(([k]) => k).join(' / ') || '–'} | ${zelle((a) => f(a.posStdPx))} | ${zelle((a) => f(a.pxProMmStdProzent))} `
      + `| ${zelle((a) => f(a.rotRmsGrad))} | ${f(m.ergebnisseProS, 1)} | ${f(m.fps, 1)} | ${f(m.renderMs, 0)} | ${f(m.trackingMs, 0)} | ${fehlerZahl ? '**' + fehlerZahl + '**' : '0'} |`);
  }
  zeilen.push('');
  for (const b of alle) {
    if (!b.fehler.length && !b.konsole.length) continue;
    zeilen.push(`## ${b.name}`, '');
    for (const t of [...b.fehler, ...b.konsole]) zeilen.push(`- ${t.replace(/\n/g, ' ')}`);
    zeilen.push('');
  }
  zeilen.push('Screenshots: `test/ergebnisse/<szenario>/` (01-intro, 02-laden, 03-live, 04-nah, 05-live-ende, 06-variante-nah, 07-ergebnis, aufnahme.jpg).', '');
  return zeilen.join('\n');
}

// ---------------------------------------------------------------- Hauptprogramm

async function main() {
  const opt = argumente(process.argv.slice(2));
  if (opt.hilfe) {
    console.log('node test/laufen.mjs [--nur <art|szenario|teil|regex>] [--port 8106] [--kein-build] [--parallel 2] [--ohne-intern] [--liste]\n'
      + '                      [--delegate CPU|auto] [--qualitaet hoch|mittel|niedrig|auto] [--zeitschritt 33|0]');
    return;
  }
  const liste = waehleSzenarien(opt.nur, { intern: opt.intern });
  if (opt.liste) {
    for (const s of (opt.nur ? liste : SZENARIEN)) console.log(`${s.name.padEnd(40)} ${s.art.padEnd(9)} ${s.geraet.padEnd(8)} ${s.ablauf.padEnd(12)} ${s.bild}${s.intern ? '  (intern)' : ''}`);
    return;
  }
  if (!liste.length) { console.error(`Keine Szenarien passen zu "${opt.nur}". --liste zeigt alle.`); process.exit(2); }

  if (opt.build) {
    console.log('Baue (node build.mjs) …');
    const r = spawnSync(process.execPath, ['build.mjs'], { cwd: WURZEL, encoding: 'utf8' });
    if (r.status !== 0) {
      console.error('BUILD FEHLGESCHLAGEN:\n' + (r.stderr || '') + (r.stdout || ''));
      process.exit(1);
    }
  }
  if (!fs.existsSync(path.join(WURZEL, 'dist/anprobe.js'))) { console.error('dist/anprobe.js fehlt (ohne --kein-build bauen).'); process.exit(1); }

  const pw = ladePlaywright();
  const server = await startServer(opt.port);
  console.log(`Server http://localhost:${opt.port}/ · ${liste.length} Szenarien · parallel ${opt.parallel}`);
  fs.mkdirSync(ERGEBNISSE, { recursive: true });
  const t0 = Date.now();
  const alle = new Array(liste.length);
  let naechstes = 0;
  const arbeiter = async () => {
    while (naechstes < liste.length) {
      const i = naechstes++;
      const s = liste[i];
      console.log(`▶ ${s.name}`);
      const b = await fuehreAus(pw, s, opt);
      alle[i] = b;
      const m = b.messung || {};
      const z = Object.entries(m.anker || {}).map(([k, a]) => (a ? `${k} σ${f(a.posStdPx)}px ${f(a.pxProMmStdProzent)}% ${f(a.rotRmsGrad)}°` : `${k} –`)).join(', ');
      console.log(`${b.ok ? '✔' : '✘'} ${s.name} (${f(b.zeiten.gesamtS, 0)} s) gefunden=${b.gefunden} ${z} fps=${f(m.fps, 1)} `
        + `Erg/s=${f(m.ergebnisseProS, 1)}${b.fehler.length || b.konsole.length ? `\n   Fehler: ${[...b.fehler, ...b.konsole].slice(0, 6).join('\n          ')}` : ''}`);
    }
  };
  await Promise.all(Array.from({ length: Math.min(opt.parallel, liste.length) }, arbeiter));
  server.close();
  const dauerS = (Date.now() - t0) / 1000;

  // Bericht zusammenfuehren (bei --nur bleiben fruehere Ergebnisse anderer Szenarien erhalten)
  const gesamt = [];
  for (const s of SZENARIEN) {
    const neu = alle.find((b) => b && b.name === s.name);
    if (neu) { gesamt.push(neu); continue; }
    const datei = path.join(ERGEBNISSE, s.name, 'bericht.json');
    if (fs.existsSync(datei)) { try { gesamt.push({ ...JSON.parse(fs.readFileSync(datei, 'utf8')), alt: true }); } catch { /* egal */ } }
  }
  fs.writeFileSync(path.join(ERGEBNISSE, 'bericht.json'), JSON.stringify(gesamt, null, 1));
  fs.writeFileSync(path.join(ERGEBNISSE, 'bericht.md'), berichtMd(gesamt, dauerS));
  const ok = alle.filter((b) => b.ok).length;
  console.log(`\n${ok}/${alle.length} ok in ${f(dauerS / 60, 1)} min. Bericht: test/ergebnisse/bericht.md`);
  process.exitCode = ok === alle.length ? 0 : 1;
}

main().catch((e) => { console.error(e); process.exit(1); });
