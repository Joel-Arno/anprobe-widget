// Gemeinsame Hilfen fuer die Playwright-Pruefungen in test/app.
const { chromium } = require('playwright');
const path = require('path');

const BASIS = 'http://localhost:8104/test/app/pruefseite.html';
const AUSGABE = path.join(__dirname, 'ausgabe');
const VIDEOS = path.join(__dirname, 'videos');

// Kamera-Attrappe: Streams merken, optional verzoegern oder verweigern
const KAMERA_HAKEN = () => {
  window.__streams = [];
  const md = navigator.mediaDevices;
  if (!md || !md.getUserMedia) return;
  const original = md.getUserMedia.bind(md);
  md.getUserMedia = async (c) => {
    const st = window.__kamera || {};
    if (st.verzoegerungMs) await new Promise((r) => setTimeout(r, st.verzoegerungMs));
    if (st.fehler) { const e = new Error('Attrappe: ' + st.fehler); e.name = st.fehler; throw e; }
    const s = await original(c);
    window.__streams.push(s);
    return s;
  };
};

async function starte({ video = 'business-person', handy = false, extraArgs = [], kontext = {} } = {}) {
  const browser = await chromium.launch({
    args: [
      '--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream',
      `--use-file-for-fake-video-capture=${path.join(VIDEOS, video + '.y4m')}`,
      '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', ...extraArgs
    ]
  });
  const ctx = await browser.newContext(handy
    ? { viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true, ...kontext }
    : { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1, ...kontext });
  await ctx.grantPermissions(['camera'], { origin: 'http://localhost:8104' });
  await ctx.addInitScript(KAMERA_HAKEN);
  const page = await ctx.newPage();
  const meldungen = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') meldungen.push(`[${m.type()}] ${m.text()}`); });
  page.on('pageerror', (e) => meldungen.push(`[pageerror] ${e.message}`));
  return { browser, ctx, page, meldungen };
}

const bild = (name) => path.join(AUSGABE, name + '.png');
const warte = (ms) => new Promise((r) => setTimeout(r, ms));
const zustand = (page) => page.evaluate(() => window.__anprobe && window.__anprobe.zustand);
async function warteZustand(page, z, ms = 15000) {
  await page.waitForFunction((z) => window.__anprobe && window.__anprobe.zustand === z, z, { timeout: ms });
}
/** Anzahl laufender Kamera-Spuren (aus dem Kamera-Haken). */
const laufendeSpuren = (page) => page.evaluate(() => window.__streams.flatMap((s) => s.getTracks()).filter((t) => t.readyState === 'live').length);
const klick = (page, sel) => page.locator(`[data-anprobe-fenster] ${sel}`).first().click();

module.exports = { starte, bild, warte, zustand, warteZustand, laufendeSpuren, klick, BASIS, AUSGABE };
