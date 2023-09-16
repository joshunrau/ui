// @ts-check

import path from 'path'

/** @type {import('tailwindcss').Config} */
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
