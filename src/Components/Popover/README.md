# Popover Component

The `Popover` component is a flexible and accessible popover implementation built with React, Radix UI, and Tailwind CSS. It provides a rich set of features for displaying floating content with proper positioning, animations, and accessibility support.

## Features

- 🎯 Flexible positioning (top, right, bottom, left)
- 🎨 Customizable styling
- ♿ Accessible design
- 🎭 Smooth animations
- ✖️ Optional close button
- ➡️ Optional arrow indicator
- 🌙 Dark mode support
- 🔄 Controlled component support

## Installation

The Popover component is part of the @wedevs/tail-react package:

```bash
npm install @wedevs/tail-react
# or
yarn add @wedevs/tail-react
```

## Usage

### Basic Popover

```jsx
import { Popover } from '@wedevs/tail-react';

function MyComponent() {
  return (
    <Popover trigger={<button>Click Me</button>} side="top">
      <div className="p-4">
        <h3 className="text-lg font-semibold">Popover Title</h3>
        <p>This is the popover content.</p>
      </div>
    </Popover>
  );
}
```

### With Close Button

```jsx
<Popover trigger={<button>Click Me</button>} side="right" showCloseButton>
  <div className="p-4">
    <p>Click the X to close this popover.</p>
  </div>
</Popover>
```

### With Arrow

```jsx
<Popover trigger={<button>Click Me</button>} side="bottom" showArrow>
  <div className="p-4">
    <p>This popover has an arrow pointing to the trigger.</p>
  </div>
</Popover>
```

### With Custom Styling

```jsx
<Popover
  trigger={<button>Click Me</button>}
  side="left"
  className="bg-gray-900 text-white"
  arrowClassName="fill-gray-900"
  showArrow
>
  <div className="p-4">
    <p>This is a dark-themed popover.</p>
  </div>
</Popover>
```

## Props

- `trigger` (React.ReactNode, required): The element that triggers the popover.

- `children` (React.ReactNode, required): The content to display in the popover.

- `side` ('top' | 'right' | 'bottom' | 'left', required): The side where the popover should appear relative to the trigger.

- `className` (string, optional): Additional CSS classes for the popover content.

- `sideOffset` (number, optional, default: 10): The distance in pixels between the trigger and the popover.

- `showCloseButton` (boolean, optional, default: false): Whether to show a close button.

- `showArrow` (boolean, optional, default: false): Whether to show an arrow pointing to the trigger.

- `arrowClassName` (string, optional): Additional CSS classes for the arrow.

## Examples

### With Form Content

```jsx
<Popover trigger={<button>Edit Profile</button>} side="bottom" showCloseButton>
  <form className="p-4 space-y-4">
    <div>
      <label className="block text-sm font-medium">Name</label>
      <input type="text" className="mt-1 block w-full" />
    </div>
    <button type="submit" className="w-full">
      Save
    </button>
  </form>
</Popover>
```

### With List Content

```jsx
<Popover trigger={<button>Options</button>} side="right" showArrow>
  <ul className="py-2">
    <li className="px-4 py-2 hover:bg-gray-100">Option 1</li>
    <li className="px-4 py-2 hover:bg-gray-100">Option 2</li>
    <li className="px-4 py-2 hover:bg-gray-100">Option 3</li>
  </ul>
</Popover>
```

## Styling

The Popover component uses Tailwind CSS for styling:

### Default Styles

1. **Container**:

   - White background
   - Rounded corners
   - Shadow effect
   - Ring border
   - Dark mode support

2. **Content**:

   - Proper padding
   - Overflow handling
   - Animation support
   - Dark mode support

3. **Arrow**:

   - White fill
   - Customizable color
   - Proper positioning
   - Dark mode support

4. **Close Button**:
   - Proper positioning
   - Hover effects
   - Icon support
   - Dark mode support

### Customization

You can customize the appearance using:

1. **className prop** for content styling
2. **arrowClassName prop** for arrow styling
3. **Tailwind CSS classes** for specific elements
4. **CSS variables** for theme customization

## Accessibility

The Popover component follows accessibility best practices:

1. **Semantic Structure**:

   - Proper ARIA attributes
   - Keyboard navigation
   - Focus management
   - Screen reader support

2. **Keyboard Navigation**:

   - Focus trapping
   - Escape key support
   - Tab order
   - Focus restoration

3. **Visual Design**:
   - Clear focus states
   - Proper contrast
   - Animation timing
   - State indication

## Best Practices

1. **Content Structure**:

   - Keep content concise
   - Use proper headings
   - Maintain focus order
   - Consider mobile layout

2. **User Experience**:

   - Position appropriately
   - Handle edge cases
   - Consider touch targets
   - Provide clear triggers

3. **Performance**:

   - Optimize animations
   - Handle state efficiently
   - Consider portal usage
   - Manage event handlers

4. **Responsive Design**:
   - Test on all devices
   - Handle mobile interactions
   - Consider viewport edges
   - Adapt positioning

## Implementation Details

The component uses:

- Radix UI for accessibility
- Tailwind CSS for styling
- twMerge for class name handling
- React for state management
- TypeScript for type safety

## Browser Support

The component is compatible with all modern browsers and degrades gracefully in older browsers. The styling may vary in browsers that don't support modern CSS features.

For further customization and integration with your application, refer to the official documentation of React, Radix UI, and Tailwind CSS.
