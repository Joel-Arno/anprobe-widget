// Integration mit dem echten Tracker (MediaPipe) und der Buehnen-Attrappe.
//   node echt.cjs <art> <video> [handy]
const { starte, bild, warte, warteZustand, laufendeSpuren, klick, BASIS } = require('./werkzeug.cjs');
(async () => {
  const art = process.argv[2] || 'ohrringe';
  const video = process.argv[3] || 'business-person-quer';
  const handy = process.argv[4] === 'handy';
  const { browser, page, meldungen } = await starte({ video, handy });
  await page.goto(BASIS + '?echt' + (process.env.ECHTE_BUEHNE ? '&echteBuehne' : ''), { waitUntil: 'load' });
  await warte(300);
  await page.locator(`#k-${art} [data-anprobe] >> button`).click();
  await warte(300);
  // Fortschritt mitschreiben
  await page.evaluate(() => {
    window.__fortschritt = [];
    const sr = document.querySelector('[data-anprobe-fenster]').shadowRoot;
    new MutationObserver(() => window.__fortschritt.push(sr.querySelector('.a-prozent').textContent + ' ' + sr.querySelector('.a-ladetext').textContent))
      .observe(sr.querySelector('.a-prozent'), { childList: true, characterData: true, subtree: true });
  });
  await klick(page, '[data-aktion="kameraStarten"]');
  await warteZustand(page, 'live', 60000);
  await warte(Number(process.env.WARTE || 3500));
  const info = await page.evaluate(() => {
    const e = window.__anprobe.ergebnis;
    const a = {};
    for (const [k, v] of Object.entries(e.anker || {})) {
      if (v && v.position) a[k] = [Math.round(v.position.x), Math.round(v.position.y), +v.pxProMm.toFixed(2), +v.sichtbar.toFixed(2)];
      else if (v) a[k] = Object.fromEntries(Object.entries(v).map(([f, w]) => [f, [Math.round(w.position.x), Math.round(w.position.y)]]));
    }
    const q = window.__stubBuehne ? window.__stubBuehne.info : 'echte Buehne';
    return { gefunden: e.gefunden, hinweis: e.hinweis, anker: a, quelle: q, fps: window.__anprobe.fps.toFixed(1), trackingMs: window.__anprobe.trackingMs.toFixed(1), fortschritt: window.__fortschritt.filter((x, i, l) => l.indexOf(x) === i).slice(0, 40) };
  });
  console.log(JSON.stringify(info, null, 1));
  await page.screenshot({ path: bild(`echt-${art}-${handy ? 'h' : 'd'}`) });
  await page.keyboard.press('Escape');
  await warte(500);
  console.log('Kamera-Spuren nach Schliessen:', await laufendeSpuren(page));
  console.log(meldungen.slice(0, 10).join('\n'));
  await browser.close();
})().catch((e) => { console.error('ABBRUCH', e); process.exit(1); });
