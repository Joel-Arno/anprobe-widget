// Laesst den Tracker im Einzelbildmodus ueber die Testbilder laufen und
// speichert Debugbilder (Landmarken, Ankerachsen X rot / Y gruen / Z blau,
// Verdecker-Umrisse gelb, Ohrlaeppchen, Drosselgrube) nach ausgabe/.
//   NODE_PATH=$(npm root -g) node test/tracking/pruefung.cjs [filter]
// portrait.jpg nur fuer interne Pruefungen (Ausgabe ist nicht im Git).
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { FAELLE } = require('./faelle.cjs');

(async () => {
  const { starteServer } = await import('./server.mjs');
  const server = await starteServer(8101);
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const seite = await browser.newPage();
  seite.on('pageerror', (e) => console.log('[fehler]', e.message));
  seite.on('console', (m) => { if (m.type() === 'error') console.log('[konsole]', m.text()); });
  await seite.goto('http://localhost:8101/test/tracking/pruefung.html');
  await seite.waitForFunction(() => window.__bereit);
  const filter = process.argv[2] ? new RegExp(process.argv[2]) : null;
  const ziel = path.join(__dirname, 'ausgabe');
  fs.mkdirSync(ziel, { recursive: true });
  const alle = {};
  for (const fall of FAELLE) {
    const name = fall.name || `${fall.bild.replace(/\.\w+$/, '')}_${fall.art}${fall.spiegel ? '_s' : ''}`;
    if (filter && !filter.test(name)) continue;
    const r = await seite.evaluate((f) => window.__pruefe(f), fall);
    fs.writeFileSync(path.join(ziel, name + '.png'), Buffer.from(r.png.split(',')[1], 'base64'));
    alle[name] = r.info;
    console.log(name.padEnd(42), JSON.stringify(r.info.hinweis ? r.info.hinweis.code : null), JSON.stringify(r.info.debug), JSON.stringify(r.info.anker).slice(0, 400));
  }
  fs.writeFileSync(path.join(ziel, 'pruefung.json'), JSON.stringify(alle, null, 1));
  await browser.close();
  server.close();
})();
