import path from 'path';

import esbuild from 'esbuild';

await esbuild.build({
  bundle: true,
  entryPoints: [path.resolve(import.meta.dir, 'src', 'index.ts')],
  format: 'esm',
  outdir: path.resolve(import.meta.dir, 'dist'),
  packages: 'external',
  platform: 'browser',
  sourcemap: 'external'
});
