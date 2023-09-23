import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Preview, ReactRenderer } from '@storybook/react';

import './tailwind.css';

const preview: Preview = {
  decorators: [
    withThemeByDataAttribute<ReactRenderer>({
      attributeName: 'data-mode',
      defaultTheme: 'light',
      themes: {
        light: 'light',
        dark: 'dark'
      }
    })
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;
