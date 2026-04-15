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

### Tailwind CSS v4

On your app.css file, add the source file:

```diff
+ @source './node_modules/@wedevs/tail-react/dist/index.{js,ts,jsx,tsx}';
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

#### Important

Tailwind v4 setup depends on the `@source` entry above so Tailwind can scan classes used by this package.

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
