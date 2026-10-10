// Funktionspruefungen: Fehler + Foto, Schliessen waehrend des Ladens, Tastatur,
// verborgener Tab, Gesten. Gibt Ergebnisse als JSON-Zeilen aus.
//   node ablaeufe.cjs [handy]
const path = require('path');
const { starte, bild, warte, warteZustand, laufendeSpuren, klick, BASIS } = require('./werkzeug.cjs');
const FOTOS = path.join(__dirname, '../cache/bilder');
const pruefe = (name, ok, extra = '') => console.log(`${ok ? 'OK  ' : 'FEHL'} ${name} ${extra}`);

(async () => {
  const handy = process.argv[2] === 'handy';
  const k = handy ? 'h' : 'd';
  const { browser, page, meldungen } = await starte({ handy, video: handy ? 'business-person' : 'business-person-quer' });
  const fenster = (sel) => page.locator(`[data-anprobe-fenster] ${sel}`).first();

  // ---- A: Kamera verweigert -> Fehler -> Foto waehlen
  await page.goto(BASIS + '?ladezeit=800', { waitUntil: 'load' });
  await warte(300);
  await page.evaluate(() => { window.__kamera = { fehler: 'NotAllowedError' }; });
  await page.locator('#k-ohrringe [data-anprobe] >> button').click();
  await warte(400);
  await klick(page, '[data-aktion="kameraStarten"]');
  await warteZustand(page, 'fehler');
  await warte(500);
  await page.screenshot({ path: bild(`${k}-fehler`) });
  const fokusFehler = await page.evaluate(() => document.querySelector('[data-anprobe-fenster]').shadowRoot.activeElement?.textContent.trim());
  pruefe('Fehlerzustand bei verweigerter Kamera, Fokus auf Foto', /Foto/.test(fokusFehler || ''), fokusFehler);
  const [wahl] = await Promise.all([page.waitForEvent('filechooser'), klick(page, '.a-fehler [data-aktion="fotoWaehlen"]')]);
  await wahl.setFiles(path.join(FOTOS, 'business-person.png'));
  await warteZustand(page, 'foto');
  await warte(700);
  await page.screenshot({ path: bild(`${k}-foto`) });
  const proto = await page.evaluate(() => window.__stubProtokoll.filter((p) => p[0] === 'setzeQuelle' || p[0] === 'setzeAnsicht').slice(-2));
  pruefe('Foto als Quelle (Canvas, nicht gespiegelt, contain)', JSON.stringify(proto).includes('"CANVAS"') && JSON.stringify(proto).includes('contain'), JSON.stringify(proto));
  const aufrufe = await page.evaluate(() => window.__stubBuehne && window.__anprobe.app.tracker.aufrufe.slice(-1)[0]);
  pruefe('Tracker im Einzelbildmodus (zeitMs null)', aufrufe && aufrufe.zeitMs === null, JSON.stringify(aufrufe));
  // Foto ohne Fund: Hinweis
  await page.evaluate(() => { window.__stub.gefunden = false; });
  const [wahl2] = await Promise.all([page.waitForEvent('filechooser'), klick(page, '.a-links')]);
  await wahl2.setFiles(path.join(FOTOS, 'fist.jpg'));
  await warteZustand(page, 'foto');
  await warte(600);
  const hinweis = await page.evaluate(() => document.querySelector('[data-anprobe-fenster]').shadowRoot.querySelector('.a-hinweis.an .a-hinweis-text')?.textContent);
  pruefe('Hinweis bei Foto ohne Gesicht', !!hinweis, hinweis);
  await page.screenshot({ path: bild(`${k}-foto-ohne-fund`) });
  await page.evaluate(() => { window.__stub.gefunden = true; window.__kamera = {}; });
  // Speichern im Foto-Modus -> Ergebnis
  await klick(page, '.a-ausloeser');
  await warteZustand(page, 'ergebnis');
  const [download] = await Promise.all([page.waitForEvent('download'), klick(page, '[data-aktion="speichern"]')]);
  const name = download.suggestedFilename();
  pruefe('Download mit ASCII-Dateinamen', /^[a-z0-9-]+\.jpg$/.test(name), name);
  await page.keyboard.press('Escape');
  await warte(500);

  // ---- B: Schliessen waehrend des Ladens -> Kamera sicher aus
  await page.goto(BASIS + '?ladezeit=3000', { waitUntil: 'load' });
  await warte(300);
  await page.evaluate(() => { window.__kamera = { verzoegerungMs: 1500 }; });
  await page.locator('#k-ring [data-anprobe] >> button').click();
  await warte(300);
  await klick(page, '[data-aktion="kameraStarten"]');
  await warte(400);
  await page.keyboard.press('Escape');
  await warte(2600);
  const nachB = await page.evaluate(() => ({ zustand: window.__anprobe.zustand, streams: window.__streams.length, live: window.__streams.flatMap((s) => s.getTracks()).filter((t) => t.readyState === 'live').length }));
  pruefe('Schliessen waehrend Laden: Kamera aus, Zustand zu', nachB.zustand === 'zu' && nachB.live === 0 && nachB.streams >= 1, JSON.stringify(nachB));
  // erneut oeffnen und Abbrechen-Knopf benutzen
  await page.evaluate(() => { window.__kamera = { verzoegerungMs: 800 }; });
  await page.locator('#k-ring [data-anprobe] >> button').click();
  await warte(300);
  await klick(page, '[data-aktion="kameraStarten"]');
  await warte(200);
  await klick(page, '.a-laden [data-aktion="schliessen"]');
  await warte(1500);
  pruefe('Abbrechen-Knopf: Kamera aus', (await laufendeSpuren(page)) === 0);
  await page.evaluate(() => { window.__kamera = {}; });

  // ---- C: Tastatur
  await page.goto(BASIS + '?ladezeit=600', { waitUntil: 'load' });
  await warte(300);
  await page.locator('#k-kette [data-anprobe] >> button').focus();
  await page.keyboard.press('Enter');
  await warte(600);
  const aktiv = () => page.evaluate(() => {
    const a = document.querySelector('[data-anprobe-fenster]').shadowRoot.activeElement;
    return a ? (a.getAttribute('aria-label') || a.textContent.trim()).slice(0, 30) : `(aussen: ${document.activeElement && document.activeElement.tagName})`;
  });
  const folge = [await aktiv()];
  for (let i = 0; i < 5; i++) { await page.keyboard.press('Tab'); folge.push(await aktiv()); }
  pruefe('Fokusfalle im Intro', folge.every((f) => !f.startsWith('(aussen')) && folge[0] === folge[3], folge.join(' > '));
  await page.keyboard.press('Shift+Tab');
  folge.push(await aktiv());
  await page.keyboard.press('Escape');
  await warte(500);
  const zurueck = await page.evaluate(() => document.activeElement && document.activeElement.dataset.titel);
  pruefe('Escape schliesst, Fokus zurueck auf Knopf', zurueck === 'Florea Kette mit Blütenanhänger', zurueck);
  // Live mit Tastatur: Variante per Pfeil, Verschieben per Pfeil auf der Buehne
  await page.keyboard.press('Enter');
  await warte(400);
  await page.keyboard.press('Enter');   // Kamera starten (Fokus liegt dort)
  await warteZustand(page, 'live');
  await warte(400);
  const imLive = await aktiv();
  pruefe('Fokus im Live-Zustand auf Ausloeser', /aufnehmen/.test(imLive), imLive);
  await fenster('.a-swatch[aria-checked="true"]').focus();
  await page.keyboard.press('ArrowRight');
  await warte(300);
  const variante = await page.evaluate(() => window.__anprobe.variante);
  pruefe('Pfeiltaste wechselt Variante', variante === 1, String(variante));
  await fenster('.a-buehne').focus();
  for (let i = 0; i < 3; i++) await page.keyboard.press('ArrowUp');
  await page.keyboard.press('+');
  const anp = await page.evaluate(() => window.__anprobe.anpassung);
  pruefe('Pfeil/Plus auf der Buehne: Versatz und Groesse', anp.versatzMm[1] > 0 && anp.skala > 1, JSON.stringify(anp));
  await page.keyboard.press('0');
  const anp0 = await page.evaluate(() => window.__anprobe.anpassung);
  pruefe('Taste 0 setzt zurueck', anp0.skala === 1 && anp0.versatzMm.every((v) => v === 0), JSON.stringify(anp0));

  // ---- D: Gesten mit der Maus
  if (!handy) {
    const box = await fenster('.a-buehne').boundingBox();
    const cx = box.x + box.width / 2;
    const cy = box.y + box.height / 2;
    await page.mouse.move(cx, cy);
    await page.mouse.down();
    await page.mouse.move(cx + 30, cy + 40, { steps: 5 });
    await page.mouse.up();
    await page.mouse.wheel(0, -200);
    await warte(100);
    const g = await page.evaluate(() => window.__anprobe.anpassung);
    pruefe('Ziehen und Mausrad', Math.hypot(...g.versatzMm) > 1 && g.skala > 1.1, JSON.stringify(g));
    await page.screenshot({ path: bild(`${k}-angepasst`) });
    await page.mouse.dblclick(cx, cy);
    await warte(100);
    const g0 = await page.evaluate(() => window.__anprobe.anpassung);
    pruefe('Doppelklick setzt zurueck', g0.skala === 1, JSON.stringify(g0));
  }

  // ---- E: Tab verborgen -> Kamera aus, wieder sichtbar -> Kamera an
  await page.evaluate(() => {
    Object.defineProperty(document, 'hidden', { configurable: true, get: () => true });
    Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'hidden' });
    document.dispatchEvent(new Event('visibilitychange'));
  });
  await warte(300);
  const verborgen = await laufendeSpuren(page);
  await page.evaluate(() => {
    Object.defineProperty(document, 'hidden', { configurable: true, get: () => false });
    Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'visible' });
    document.dispatchEvent(new Event('visibilitychange'));
  });
  await warte(1200);
  const sichtbar = await laufendeSpuren(page);
  const z = await page.evaluate(() => window.__anprobe.zustand);
  pruefe('Tab verborgen: Kamera pausiert und kommt zurueck', verborgen === 0 && sichtbar === 1 && z === 'live', `${verborgen}/${sichtbar}/${z}`);
  await page.keyboard.press('Escape');
  await warte(500);
  pruefe('Nach Schliessen keine Kamera', (await laufendeSpuren(page)) === 0);
  const fehler = await page.evaluate(() => window.__anprobe.fehler);
  console.log('Debug-Fehler:', JSON.stringify(fehler));
  console.log(meldungen.filter((m) => !/Attrappe/.test(m)).join('\n'));
  await browser.close();
})().catch((e) => { console.error('ABBRUCH', e); process.exit(1); });
