// Weitere Ansichten: Intro ohne Serifenschrift, Ergebnis mit Teilen, reduzierte
// Bewegung, Handy quer, Kette live.
const { starte, bild, warte, warteZustand, klick, BASIS } = require('./werkzeug.cjs');
(async () => {
  // a) Desktop-Intro, Titel-Schrift geerbt (keine Serife)
  let r = await starte();
  await r.page.goto(BASIS + '?serifenlos', { waitUntil: 'load' });
  await warte(300);
  await r.page.locator('#k-armband [data-anprobe] >> button').click();
  await warte(1500);
  await r.page.screenshot({ path: bild('d-intro-armband-serifenlos'), clip: { x: 200, y: 100, width: 1040, height: 700 } });
  await r.browser.close();

  // b) Handy-Ergebnis mit Teilen-Knopf (navigator.share als Attrappe)
  r = await starte({ handy: true, video: 'pose' });
  await r.ctx.addInitScript(() => {
    navigator.canShare = () => true;
    navigator.share = async (d) => { window.__geteilt = d.files.map((f) => f.name); };
  });
  await r.page.goto(BASIS + '?ladezeit=500', { waitUntil: 'load' });
  await warte(300);
  await r.page.locator('#k-kette [data-anprobe] >> button').click();
  await warte(500);
  await klick(r.page, '[data-aktion="kameraStarten"]');
  await warteZustand(r.page, 'live');
  await warte(1200);
  await r.page.screenshot({ path: bild('h-kette-live') });
  await klick(r.page, '.a-ausloeser');
  await warteZustand(r.page, 'ergebnis');
  await warte(500);
  await r.page.screenshot({ path: bild('h-ergebnis-teilen') });
  await klick(r.page, '[data-aktion="teilen"]');
  await warte(300);
  console.log('geteilt:', await r.page.evaluate(() => window.__geteilt));
  await r.browser.close();

  // c) Reduzierte Bewegung: Anleitung muss vollstaendig sichtbar sein
  r = await starte({ handy: true, kontext: { reducedMotion: 'reduce' } });
  await r.page.goto(BASIS, { waitUntil: 'load' });
  await warte(300);
  await r.page.locator('#k-ohrringe [data-anprobe] >> button').click();
  await warte(600);
  await r.page.screenshot({ path: bild('h-intro-reduziert') });
  await r.browser.close();

  // d) Handy quer, Ring live
  r = await starte({ handy: true, video: 'paper_119', kontext: { viewport: { width: 844, height: 390 } } });
  await r.page.goto(BASIS + '?ladezeit=500', { waitUntil: 'load' });
  await warte(300);
  await r.page.locator('#k-ring [data-anprobe] >> button').click();
  await warte(900);
  await r.page.screenshot({ path: bild('q-intro') });
  await klick(r.page, '[data-aktion="kameraStarten"]');
  await warteZustand(r.page, 'live');
  await warte(1000);
  await r.page.screenshot({ path: bild('q-live') });
  console.log(r.meldungen.join('\n'));
  await r.browser.close();
})().catch((e) => { console.error('ABBRUCH', e); process.exit(1); });
