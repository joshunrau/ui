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
  content: [path.resolve(__dirname, './src/**/*.{js,jsx,ts,tsx}')],
  darkMode: ['class', '[data-mode="dark"]'],
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
  },
  plugins: [
    headlessui,
    formsPlugin,
    plugin(({ addBase, addUtilities, theme }) => {
      addBase({
        html: {
          backgroundColor: theme('colors.slate.100'),
          color: theme('colors.slate.900'),
          '&[data-mode="dark"]': {
            backgroundColor: theme('colors.slate.900'),
            color: theme('colors.slate.100')
          }
        }
      });
      addUtilities({
        '.scrollbar-none': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        '.backdrop-emphasize': {
          '@apply backdrop-brightness-95 dark:backdrop-brightness-150': {}
        },
        '.text-muted': {
          color: theme('colors.slate.600'),
          '&[data-mode="dark"]': {
            color: theme('colors.slate.300')
          }
        }
      });
    })
  ]
};
