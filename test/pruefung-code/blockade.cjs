// Pruefung "code": Hauptthread-Blockade der Live-Schleife (Problem 1).
// Vergleicht die unveraenderte App mit einer per Init-Skript eingespritzten
// Pausenregel (nach jedem Schleifenschritt mindestens so lange frei lassen,
// wie der Schritt gedauert hat = hoechstens 50 % Belegung). Produktcode bleibt unberuehrt.
//
//   NODE_PATH=$(npm root -g) node test/pruefung-code/blockade.cjs <art> <modus: roh|pause> [port]
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const WURZEL = path.resolve(__dirname, '../..');
const art = process.argv[2] || 'armband';
const modus = process.argv[3] || 'roh';
const port = Number(process.argv[4] || 8151);
const VIDEO = {
  armband: 'hand-woman-man_rauschen_quer_f2d2c031.y4m',
  kette: 'business-person_rauschen_quer_2eaff790.y4m',
  ring: 'woman_hands_rauschen_quer_3e1d1bc7.y4m'
}[art];

function init({ konfig, pause }) {
  window.AnprobeKonfig = konfig;
  const m = { lag: 0, lagMax: 0, ergebnisse: 0, letztes: null, dauern: [] };
  window.__mess = m;
  // Ereignisschleifen-Verzoegerung messen (setInterval 50 ms)
  let soll = performance.now() + 50;
  setInterval(() => {
    const jetzt = performance.now();
    const lag = jetzt - soll;
    m.lagMax = Math.max(m.lagMax, lag);
    soll = jetzt + 50;
    const d = window.__anprobe;
    if (d && d.ergebnis && d.ergebnis !== m.letztes) { m.letztes = d.ergebnis; m.ergebnisse++; }
  }, 50);
  const P = HTMLVideoElement.prototype;
  const orig = P.requestVideoFrameCallback;
  const origCancel = P.cancelVideoFrameCallback;
  let letzteDauer = 0;
  let laufStart = 0;   // Beginn des gerade laufenden Rueckrufs (0 = keiner)
  let n = 0;
  const offen = new Map();
  P.requestVideoFrameCallback = function (cb) {
    const id = ++n;
    const wrapped = (t, meta) => {
      offen.delete(id);
      const s = performance.now();
      laufStart = s;
      cb(t, meta);
      laufStart = 0;
      letzteDauer = performance.now() - s;
      m.dauern.push(Math.round(letzteDauer));
      if (m.dauern.length > 200) m.dauern.shift();
    };
    if (!pause) {
      const echt = orig.call(this, wrapped);
      offen.set(id, { echt, video: this });
      return id;
    }
    const video = this;
    // Pause so lang wie der gerade laufende Schritt (die App plant am Ende ihres
    // Schritts neu; three.js-VideoTexture plant ausserhalb und wartet nicht)
    const pauseMs = laufStart ? performance.now() - laufStart : 0;
    const timer = setTimeout(() => {
      const echt = orig.call(video, wrapped);
      offen.set(id, { echt, video });
    }, pauseMs);
    offen.set(id, { timer, video });
    return id;
  };
  P.cancelVideoFrameCallback = function (id) {
    const e = offen.get(id);
    if (!e) return;
    if (e.timer) clearTimeout(e.timer);
    if (e.echt != null) origCancel.call(e.video, e.echt);
    offen.delete(id);
  };
}

(async () => {
  const server = spawn(process.execPath, [path.join(WURZEL, 'test/server.mjs'), String(port)], { stdio: 'ignore' });
  await new Promise((r) => setTimeout(r, 800));
  const video = path.join(WURZEL, 'test/cache/kamera', VIDEO);
  const browser = await chromium.launch({
    args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist',
      '--autoplay-policy=no-user-gesture-required', '--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream',
      `--use-file-for-fake-video-capture=${video}`]
  });
  const basis = `http://localhost:${port}`;
  const ergebnis = { art, modus };
  try {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
    await ctx.grantPermissions(['camera'], { origin: basis });
    const konfig = {
      mediapipe: '/mediapipe',
      modelle: { hand: '/modelle/hand_landmarker.task', gesicht: '/modelle/face_landmarker.task', koerper: '/modelle/pose_landmarker_lite.task' },
      debug: true, shopName: 'ARLISE', delegate: 'CPU', qualitaet: 'hoch'
    };
    await ctx.addInitScript(init, { konfig, pause: modus === 'pause' });
    const page = await ctx.newPage();
    page.on('pageerror', (e) => console.log('Seitenfehler', e.message));
    await page.goto(`${basis}/test/seite.html`);
    await page.locator(`#p-${art} button[part="knopf"]`).click();
    await page.waitForFunction(() => window.__anprobe && window.__anprobe.zustand === 'intro');
    await page.waitForTimeout(1500);
    const fenster = page.locator('[data-anprobe-fenster]');
    const t0 = Date.now();
    await fenster.getByRole('button', { name: /Kamera starten/i }).click();
    await page.waitForFunction(() => window.__anprobe.zustand === 'live', null, { timeout: 180000, polling: 200 });
    ergebnis.bisLiveS = (Date.now() - t0) / 1000;
    await page.waitForFunction(() => window.__anprobe.ergebnis && window.__anprobe.ergebnis.gefunden, null, { timeout: 90000, polling: 200 });
    await page.evaluate(() => { window.__mess.lagMax = 0; window.__mess.ergebnisse = 0; });
    const tMess = Date.now();
    await page.waitForTimeout(12000);
    const m1 = await page.evaluate(() => ({ lagMax: window.__mess.lagMax, ergebnisse: window.__mess.ergebnisse, dauern: window.__mess.dauern.slice(-10), fps: window.__anprobe.fps, trackingMs: window.__anprobe.trackingMs, renderMs: window.__anprobe.renderMs }));
    m1.ergebnisseProS = m1.ergebnisse / ((Date.now() - tMess) / 1000);
    ergebnis.messung = m1;
    // Klicks: Variante 1, dann 0
    ergebnis.klicks = [];
    for (const i of [1, 0, 1]) {
      const t = Date.now();
      let ok = true;
      try {
        await fenster.locator(`[data-variante="${i}"]`).first().click({ timeout: 60000, force: true });
        await page.waitForFunction((ii) => window.__anprobe.variante === ii, i, { timeout: 60000, polling: 100 });
      } catch (e) { ok = false; }
      ergebnis.klicks.push({ variante: i, ok, ms: Date.now() - t });
    }
  } catch (e) {
    ergebnis.fehler = String(e.message).slice(0, 300);
  } finally {
    await browser.close();
    server.kill();
  }
  console.log(JSON.stringify(ergebnis));
  fs.mkdirSync(path.join(__dirname, 'ausgabe'), { recursive: true });
  fs.writeFileSync(path.join(__dirname, 'ausgabe', `blockade-${art}-${modus}.json`), JSON.stringify(ergebnis, null, 1));
})();
