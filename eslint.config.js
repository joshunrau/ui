import { createConfig } from '@joshunrau/eslint-config';

const baseConfig = createConfig({
  base: {
    env: 'browser'
  },
  jsx: true,
  ts: {
    project: './tsconfig.json'
  }
});

export default [{ ignores: ['dist/*'] }, baseConfig];
