// Schneller Rauchtest: Seite laden, Knoepfe, Intro (Desktop).
const { starte, bild, warte, BASIS } = require('./werkzeug.cjs');
(async () => {
  const { browser, page, meldungen } = await starte();
  await page.goto(BASIS, { waitUntil: 'load' });
  await warte(500);
  const knoepfe = await page.evaluate(() => [...document.querySelectorAll('[data-anprobe]')].map((e) => ({ titel: e.dataset.titel, knopf: !!(e.shadowRoot && e.shadowRoot.querySelector('button')) })));
  console.log(JSON.stringify(knoepfe));
  await page.screenshot({ path: bild('d-seite') });
  await page.click('#k-ohrringe [data-anprobe] >> button');
  await warte(900);
  await page.screenshot({ path: bild('d-intro-ohrringe') });
  console.log('zustand', await page.evaluate(() => window.__anprobe && window.__anprobe.zustand));
  console.log(meldungen.join('\n'));
  await browser.close();
})();
