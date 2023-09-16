// @ts-check

import path from 'path';

/**
 * Note, using `__dirname` is a hack which will work when run with bun (e.g., vite dev server)
 * and also when resolved as a CommonJS module by storybook. Once Bun has implemented the
 * necessary Node libraries, this can be replaced by `import.meta.dir`.
 */

/** @type {import('tailwindcss').Config & { content: any[] }} */
export default {
  content: [path.resolve(__dirname, './src/**/*.{js,jsx,ts,tsx}')],
  theme: {
    extend: {
      container: {
        center: true
      }
    }
  },
  plugins: []
};
