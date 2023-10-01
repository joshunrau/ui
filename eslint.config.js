import path from 'path';

import { createConfig } from '@joshunrau/eslint-config';

export default createConfig({
  jsx: true,
  project: './tsconfig.json'
});
