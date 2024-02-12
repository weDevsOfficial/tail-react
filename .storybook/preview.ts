import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

import '../src/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    darkMode: {
      dark: { ...themes.dark, appBg: 'black', base: 'dark', appPreviewBg: 'black' },
      stylePreview: true,
      classTarget: 'html',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
