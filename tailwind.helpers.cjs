// @ts-check

const path = require('node:path');
const baseConfig = require('./tailwind.config.cjs');

/** @typedef {import('tailwindcss').Config & { content: any[] }} Config */

/**
 *
 * @param {Config} config
 * @returns {Config}
 */
const createConfig = ({ content, presets, ...rest }) => {
  return {
    content: [path.resolve(__dirname, 'dist', '**/*.js'), ...content],
    presets: [baseConfig, ...(presets ?? [])],
    ...rest
  };
};

module.exports = { createConfig };
