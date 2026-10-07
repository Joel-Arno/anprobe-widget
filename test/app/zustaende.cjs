// Screenshots aller Zustaende fuer eine Art auf Handy oder Desktop.
//   node zustaende.cjs <ohrringe|ring|kette|armband> <handy|desktop> [video]
const { starte, bild, warte, warteZustand, laufendeSpuren, klick, BASIS } = require('./werkzeug.cjs');
const VIDEO = { ohrringe: 'business-person', ring: 'woman_hands', kette: 'pose', armband: 'hand-woman-man' };
const HINWEIS = {
  ohrringe: { code: 'kopf-drehen', text: 'Dreh den Kopf leicht zur Seite' },
  ring: { code: 'finger-spreizen', text: 'Spreiz die Finger ein wenig' },
  kette: { code: 'schultern', text: 'Halte das Handy etwas weiter weg, sodass Hals und Schultern zu sehen sind' },
  armband: { code: 'naeher', text: 'Etwas näher heran' }
};
(async () => {
  const art = process.argv[2] || 'ohrringe';
  const geraet = process.argv[3] || 'desktop';
  const handy = geraet === 'handy';
  const k = handy ? 'h' : 'd';
  const { browser, page, meldungen } = await starte({ video: process.argv[4] || VIDEO[art], handy });
  await page.goto(BASIS + '?ladezeit=7000', { waitUntil: 'load' });
  await warte(400);
  await page.locator(`#k-${art} [data-anprobe] >> button`).click();
  await warte(1700);
  await page.screenshot({ path: bild(`${k}-${art}-1-intro`) });
  await klick(page, '[data-aktion="kameraStarten"]');
  await warte(handy ? 1200 : 1500);
  await page.screenshot({ path: bild(`${k}-${art}-2-laden`) });
  await warteZustand(page, 'live');
  await page.evaluate((h) => { window.__stub.hinweis = h; }, HINWEIS[art]);
  await warte(1800);
  await page.screenshot({ path: bild(`${k}-${art}-3-live`) });
  await page.evaluate(() => { window.__stub.hinweis = null; });
  // Variante wechseln
  const swatches = page.locator('[data-anprobe-fenster] .a-swatch');
  if (await swatches.count() > 1) await swatches.nth(1).click();
  if (art === 'ring') await page.locator('[data-anprobe-fenster] [data-finger="mittel"]').click();
  await warte(600);
  await page.screenshot({ path: bild(`${k}-${art}-4-variante`) });
  await klick(page, '.a-ausloeser');
  await warteZustand(page, 'ergebnis');
  await warte(500);
  await page.screenshot({ path: bild(`${k}-${art}-5-ergebnis`) });
  await klick(page, '[data-aktion="zurueck"]');
  await warteZustand(page, 'live');
  await page.keyboard.press('Escape');
  await warte(500);
  const d = await page.evaluate(() => ({ leistung: [window.__anprobe.fps, window.__anprobe.renderMs, window.__anprobe.trackingMs, window.__anprobe.qualitaet], zustand: window.__anprobe.zustand, fehler: window.__anprobe.fehler, protokoll: (window.__stubProtokoll || []).map((p) => p[0]).join(',') }));
  console.log(art, geraet, JSON.stringify(d).slice(0, 600));
  console.log('Kamera-Spuren nach Schliessen:', await laufendeSpuren(page));
  console.log(meldungen.join('\n'));
  await browser.close();
})().catch((e) => { console.error('FEHLER', e); process.exit(1); });
