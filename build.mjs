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

const ziele = [
  { ...gemeinsam, entryPoints: ['src/main.js'], outfile: 'dist/anprobe.js' },
  { ...gemeinsam, entryPoints: ['editor/editor.js'], outfile: 'dist/editor.js' }
];

if (process.argv.includes('--watch')) {
  for (const z of ziele) (await esbuild.context(z)).watch();
} else {
  await Promise.all(ziele.map((z) => esbuild.build(z)));
}
