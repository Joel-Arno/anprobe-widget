// Zittermessung: Standbild als Fake-Kamera (y4m, 1280x720), VIDEO-Modus,
// 60 Frames nach Einschwingen; je mit Filtern und ohne (roh).
//   bash test/tracking/videos.sh   (einmal, erzeugt die Videos)
//   NODE_PATH=$(npm root -g) node test/tracking/zittern.cjs [filter]
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const FAELLE = [
  { video: 'hand', art: 'ring' },
  { video: 'hand_rauschen', art: 'ring' },
  { video: 'hand_ruecken_rauschen', art: 'ring' },
  { video: 'hand_rauschen', art: 'armband' },
  { video: 'gesicht', art: 'ohrringe' },
  { video: 'gesicht_rauschen', art: 'ohrringe' },
  { video: 'kette_rauschen', art: 'kette' }
];

(async () => {
  const { starteServer } = await import('./server.mjs');
  const server = await starteServer(8101);
  const filter = process.argv[2] ? new RegExp(process.argv[2]) : null;
  const ergebnisse = [];
  for (const fall of FAELLE) {
    for (const roh of [false, true]) {
      const name = `${fall.video}_${fall.art}${roh ? '_roh' : ''}`;
      if (filter && !filter.test(name)) continue;
      const browser = await chromium.launch({
        args: [
          '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader',
          '--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream',
          `--use-file-for-fake-video-capture=${path.join(__dirname, 'ausgabe/videos', fall.video + '.y4m')}`
        ]
      });
      const seite = await browser.newPage();
      seite.on('pageerror', (e) => console.log('[fehler]', e.message));
      await seite.goto('http://localhost:8101/test/tracking/zittern.html');
      await seite.waitForFunction(() => window.__bereit);
      const r = await seite.evaluate((f) => window.__messe(f), { art: fall.art, roh, n: 60, vor: 20 });
      await browser.close();
      ergebnisse.push({ name, ...r });
      console.log(`\n${name}: ${r.W}x${r.H} gefunden ${r.gefunden}/${r.frames}  ${r.msProFrame.toFixed(0)} ms/Frame  Hinweise ${JSON.stringify(r.hinweise)}`);
      for (const [k, a] of Object.entries(r.anker)) {
        console.log(`  ${k.padEnd(12)} Position σ ${a.posStdPx.toFixed(3)} px  (Tiefe ${a.tiefeStdPx.toFixed(2)})  pxProMm σ ${a.pxProMmStdProzent.toFixed(3)} %  Rotation RMS ${a.rotRmsGrad.toFixed(3)}°  sichtbar ${a.sichtbarMittel}`);
      }
    }
  }
  fs.writeFileSync(path.join(__dirname, 'ausgabe/zittern.json'), JSON.stringify(ergebnisse, null, 1));
  server.close();
})();
