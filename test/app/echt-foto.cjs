// Foto-Weg mit echtem Tracker und echter Buehne (Handy).
const path = require('path');
const { starte, bild, warte, warteZustand, klick, BASIS } = require('./werkzeug.cjs');
(async () => {
  const { browser, page, meldungen } = await starte({ handy: true });
  await page.goto(BASIS + '?echt&echteBuehne', { waitUntil: 'load' });
  await warte(300);
  await page.locator('#k-ohrringe [data-anprobe] >> button').click();
  await warte(400);
  const [wahl] = await Promise.all([page.waitForEvent('filechooser'), klick(page, '.a-intro [data-aktion="fotoWaehlen"]')]);
  await wahl.setFiles(path.join(__dirname, '../cache/bilder/business-person.png'));
  await warteZustand(page, 'foto', 90000);
  await warte(3000);
  await page.screenshot({ path: bild('echt-foto-h') });
  const e = await page.evaluate(() => ({ gefunden: window.__anprobe.ergebnis.gefunden, fehler: window.__anprobe.fehler }));
  console.log(JSON.stringify(e));
  await klick(page, '.a-ausloeser');
  await warteZustand(page, 'ergebnis', 30000);
  await warte(600);
  await page.screenshot({ path: bild('echt-foto-ergebnis-h') });
  console.log(meldungen.filter((m) => !/GL Driver|xnnpack|XNNPACK|OpenGL error/.test(m)).slice(0, 8).join('\n'));
  await browser.close();
})().catch((e) => { console.error('ABBRUCH', e); process.exit(1); });
