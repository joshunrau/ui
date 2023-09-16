# UI

## Install

```shell
bun add @joshunrau/ui
```

## Setup

**tailwind.config.js**
```javascript
import config from '@joshunrau/ui/tailwind.config';

/** @type {import('tailwindcss').Config} */
export default {
  content: [...config.content, './src/**/*.{js,ts,jsx,tsx}'],
  presets: [config]
};
```

