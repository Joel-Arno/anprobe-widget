// Kamera wechseln: zweite (vorgetaeuschte) Kamera, Knopf sichtbar, Wechsel haelt Live-Zustand.
const { starte, warte, warteZustand, laufendeSpuren, klick, BASIS } = require('./werkzeug.cjs');
(async () => {
  const { browser, ctx, page, meldungen } = await starte({ video: 'business-person-quer' });
  await ctx.addInitScript(() => {
    const md = navigator.mediaDevices;
    const orig = md.enumerateDevices.bind(md);
    md.enumerateDevices = async () => {
      const l = await orig();
      return [...l, { kind: 'videoinput', deviceId: 'zweite-kamera', label: 'Zweite', groupId: 'x' }];
    };
  });
  await page.goto(BASIS + '?ladezeit=300', { waitUntil: 'load' });
  await warte(300);
  await page.locator('#k-ohrringe [data-anprobe] >> button').click();
  await warte(400);
  await klick(page, '[data-aktion="kameraStarten"]');
  await warteZustand(page, 'live');
  await warte(500);
  const sichtbar = await page.locator('[data-anprobe-fenster] .a-rechts').isVisible();
  console.log(sichtbar ? 'OK  ' : 'FEHL', 'Wechselknopf sichtbar bei zwei Kameras');
  const vorher = await page.evaluate(() => window.__stubProtokoll.length);
  await klick(page, '.a-rechts');
  await warte(1500);
  const d = await page.evaluate((v) => ({ z: window.__anprobe.zustand, neu: window.__stubProtokoll.slice(v).map((p) => p[0]), streams: window.__streams.length }), vorher);
  const spuren = await laufendeSpuren(page);
  console.log(d.z === 'live' && spuren === 1 && d.neu.includes('zuruecksetzen') && d.neu.includes('setzeQuelle') ? 'OK  ' : 'FEHL', 'Wechsel', JSON.stringify(d), 'Spuren', spuren);
  console.log(meldungen.join('\n'));
  await browser.close();
})().catch((e) => { console.error('ABBRUCH', e); process.exit(1); });
