// @ts-check

import path from 'path';

import headlessui from '@headlessui/tailwindcss';
import formsPlugin from '@tailwindcss/forms';
import plugin from 'tailwindcss/plugin';

/**
 * Note, using `__dirname` is a hack which will work when run with bun (e.g., vite dev server)
 * and also when resolved as a CommonJS module by storybook. Once Bun has implemented the
 * necessary Node libraries, this can be replaced by `import.meta.dir`.
 */

/** @type {import('tailwindcss').Config & { content: any[] }} */
export default {
  // eslint-disable-next-line no-undef
  content: [path.resolve(__dirname, './src/**/*.{js,jsx,ts,tsx}')],
  darkMode: ['class', '[data-mode="dark"]'],
  plugins: [
    headlessui,
    formsPlugin,
    plugin(({ addBase, addUtilities, theme }) => {
      addBase({
        html: {
          '&[data-mode="dark"]': {
            backgroundColor: theme('colors.slate.900'),
            color: theme('colors.slate.100')
          },
          backgroundColor: theme('colors.slate.100'),
          color: theme('colors.slate.900')
        }
      });
      addUtilities({
        '.backdrop-emphasize': {
          '@apply backdrop-brightness-95 dark:backdrop-brightness-150': {}
        },
        '.scrollbar-none': {
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        },
        '.text-muted': {
          '@apply text-slate-700 dark:text-slate-300': {}
        }
      });
    })
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      screens: {
        xs: '512px'
      },
      spacing: {
        112: '28rem',
        128: '32rem'
      }
    }
  }
};
