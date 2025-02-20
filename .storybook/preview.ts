import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

import '../src/index.css';

const preview: Preview = {
  parameters: {
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

  tags: ['autodocs', 'autodocs']
};

export default preview;
