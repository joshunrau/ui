import { createConfig } from '@joshunrau/eslint-config';

export default createConfig({
  base: {
    env: 'browser'
  },
  jsx: true,
  ts: {
    project: './tsconfig.json'
  }
});

