// Baut das Widget und den Editor mit esbuild.
//   node build.mjs          einmal bauen
//   node build.mjs --watch  bei Aenderungen neu bauen
import * as esbuild from 'esbuild';

const gemeinsam = {
  bundle: true,
  format: 'esm',
  target: ['es2020', 'safari15'],
  minify: true,
  sourcemap: true,
  legalComments: 'none',
  logLevel: 'info'
};

// Widget in zwei Dateien: anprobe.js (Knopf, Produktdaten, klein) laedt die eigentliche
// Anprobe anprobe-app.js (three.js, Erkennung, Oberflaeche) erst bei Bedarf nach.
// Beide muessen nebeneinander liegen (Shopify: beide als Assets hochladen).
const ziele = [
  { ...gemeinsam, entryPoints: ['src/main.js'], outfile: 'dist/anprobe.js', define: { __ANPROBE_APP__: '"./anprobe-app.js"' } },
  { ...gemeinsam, entryPoints: ['src/app.js'], outfile: 'dist/anprobe-app.js' },
  { ...gemeinsam, entryPoints: ['editor/editor.js'], outfile: 'dist/editor.js' }
];

if (process.argv.includes('--watch')) {
  for (const z of ziele) (await esbuild.context(z)).watch();
} else {
  await Promise.all(ziele.map((z) => esbuild.build(z)));
}
