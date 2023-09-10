# UI

## Install

```shell
npm install @joshunrau/ui
```

## Setup

**tailwind.config.js**
```javascript
const { createConfig } = require('@joshunrau/ui/tailwind.helpers.cjs');

module.exports = createConfig({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
});
```