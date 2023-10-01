// @ts-check

import path from 'path';
import process from 'process';

import esbuild from 'esbuild';

const watch = process.argv.includes('--watch');

/** @type {import('esbuild').BuildOptions} */
const options = {
  bundle: true,
  entryPoints: [path.resolve(import.meta.dir, 'src', 'index.ts')],
  format: 'esm',
  outdir: path.resolve(import.meta.dir, 'dist'),
  packages: 'external',
  platform: 'browser',
  sourcemap: 'external'
};

if (watch) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
  console.log('Watching...');
} else {
  await esbuild.build(options);
  console.log('Done!');
}
