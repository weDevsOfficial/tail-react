# Tailwind CSS + React Component Library

This repository contains a collection of reusable React components styled with Tailwind CSS. The components are designed to be easily integrated into your React projects, providing a consistent and visually appealing user interface.

## Installation

To use this component library in your project, you can install it via `npm` or `yarn`.

```bash
npm install @wedevs/tail-react
# or
yarn add @wedevs/tail-react
```

## Usage

### Tailwind CSS v3

If you're using Tailwind CSS v3, update your `tailwind.config.js` file:

```diff
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
+    "node_modules/@wedevs/tail-react/dist/index.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
+    import('@tailwindcss/forms'),
  ],
}
```

### Tailwind CSS v4

For Tailwind CSS v4, configuration is done in your CSS file:

```css
@import 'tailwindcss';

/* Import tail-react components */
@source "node_modules/@wedevs/tail-react/dist/index.js";

@theme {
  /* Your theme customizations */
}
```

### Customizing the theme color

By default, the component library uses `indigo` as the primary color. You can customize this using the `TailReactBaseColorProvider`:

```jsx
import { TailReactBaseColorProvider, Button } from '@wedevs/tail-react';

function App() {
  return (
    <TailReactBaseColorProvider color="blue">
      {/* All components inside will use blue as the primary color */}
      <Button variant="primary">Primary Blue Button</Button>
    </TailReactBaseColorProvider>
  );
}
```

Available color options include all Tailwind CSS colors:

- `slate`, `gray`, `zinc`, `neutral`, `stone`
- `red`, `orange`, `amber`, `yellow`, `lime`
- `green`, `emerald`, `teal`, `cyan`, `sky`
- `blue`, `indigo` (default), `violet`, `purple`, `fuchsia`
- `pink`, `rose`

#### Important: Prevent color classes from being purged

##### Tailwind CSS v3

When using dynamic color classes with TailReactBaseColor context in Tailwind CSS v3, you need to safelist these classes in your Tailwind config to prevent them from being purged in production:

```js
// tailwind.config.js
module.exports = {
  // ... your existing config
  safelist: [
    // Safelist color variants that you plan to use dynamically
    {
      pattern: /bg-(red|blue|green|purple|indigo|etc)-(500|600|700)/,
    },
    {
      pattern: /text-(red|blue|green|purple|indigo|etc)-(500|600)/,
    },
    {
      pattern: /ring-(red|blue|green|purple|indigo|etc)-(400|500|600)/,
    },
    // Add other patterns based on which color utilities you use
  ],
  // ... rest of your config
};
```

This approach allows you to safelist utility classes using patterns, which is much more concise than listing each class individually.

## Development

To get started with development:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build the library:
   ```bash
   npm run build
   ```
5. Run Storybook:
   ```bash
   npm run storybook
   ```
