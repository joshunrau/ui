// @ts-check

import fs from 'fs';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { defineConfig } from 'tsup';

const componentsDir = path.resolve(__dirname, 'src/components');

const entryPoints = [];
for (const directory of fs.readdirSync(componentsDir, 'utf-8')) {
  const entry = path.join(componentsDir, directory, 'index.ts');
  if (fs.existsSync(entry)) {
    entryPoints.push(entry);
  }
}

export default defineConfig({
  clean: true,
  dts: true,
  entry: entryPoints,
  format: 'esm',
  sourcemap: true,
  target: 'esnext'
});
