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

On your `tailwind.config.js` file, update the content entry:

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
