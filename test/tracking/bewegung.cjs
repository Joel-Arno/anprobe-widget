// Misst das Nachziehen der Glaettung bei gleichfoermiger Bewegung (siehe bewegung.html).
//   NODE_PATH=$(npm root -g) node test/tracking/bewegung.cjs
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const FAELLE = [
  { art: 'ring', bild: 'paper_165.jpg', geschw: 300 },
  { art: 'ring', bild: 'paper_165.jpg', geschw: 900 },
  { art: 'armband', bild: 'paper_165.jpg', geschw: 600 },
  { art: 'ohrringe', bild: 'business-person.png', ausschnitt: [180, 60, 600, 500], geschw: 300 },
  { art: 'ohrringe', bild: 'business-person.png', ausschnitt: [180, 60, 600, 500], geschw: 900 },
  { art: 'kette', bild: 'business-person.png', ausschnitt: [60, 60, 840, 760], geschw: 600 }
];
(async () => {
  const { starteServer } = await import('./server.mjs');
  const server = await starteServer(8101);
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const filter = process.argv[2] ? new RegExp(process.argv[2]) : null;
  const alle = [];
  for (const fall of FAELLE) {
    const name = `${fall.art}_${fall.geschw}`;
    if (filter && !filter.test(name)) continue;
    const seite = await browser.newPage();
    seite.on('pageerror', (e) => console.log('[fehler]', e.message));
    await seite.goto('http://localhost:8101/test/tracking/bewegung.html');
    await seite.waitForFunction(() => window.__bereit);
    const r = await seite.evaluate((f) => window.__bewegung(f), fall);
    await seite.close();
    alle.push({ name, ...r });
    console.log(`${name.padEnd(14)} gefunden ${r.gefunden}  Verzoegerung ${r.verzoegerungPx.toFixed(1)} px = ${r.verzoegerungMs.toFixed(0)} ms  Anlauf ${JSON.stringify(r.anlaufPx)}  Ueberschwingen ${r.ueberschwingenPx.toFixed(1)} px  Einschwingen ${r.einschwingenFrames} Frames  Drehabweichung max ${r.maxDrehAbweichungGrad.toFixed(1)} Grad`);
  }
  fs.writeFileSync(path.join(__dirname, 'ausgabe/bewegung.json'), JSON.stringify(alle, null, 1));
  await browser.close();
  server.close();
})();
