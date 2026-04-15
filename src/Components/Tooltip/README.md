# Tooltip Component

The `Tooltip` component is a flexible and accessible tooltip implementation built with React and Radix UI. It provides a simple way to display additional information when users hover over or focus on an element.

## Features

- 🎯 Hover/focus triggered tooltip
- 🎨 Smooth animations with slide-up fade effect
- 🖼️ Customizable content (text or React nodes)
- 🎯 Configurable positioning (top, bottom, left, right)
- 🎨 Customizable styling
- ♿ Accessible design
- 📱 Responsive layout

## Installation

The Tooltip component is part of the @wedevs/tail-react package:

```bash
npm install @wedevs/tail-react
# or
yarn add @wedevs/tail-react
```

## Usage

### Basic Tooltip

```jsx
import { Tooltip } from '@wedevs/tail-react';

function MyComponent() {
  return (
    <Tooltip content="Click to edit">
      <button className="p-2 border rounded">Edit</button>
    </Tooltip>
  );
}
```

### With Custom Position

```jsx
<Tooltip content="This appears on the right" side="right">
  <button>Hover me</button>
</Tooltip>
```

### With Custom Content

```jsx
<Tooltip
  content={
    <div className="p-4 bg-gray-900 text-white rounded-md shadow-lg">
      <h3 className="text-lg font-semibold">Important Information</h3>
      <p className="text-sm">This is a custom tooltip with rich content.</p>
    </div>
  }
>
  <button>Hover me</button>
</Tooltip>
```

## Props

- `content` (React.ReactNode | string, required): The content to display in the tooltip. Can be a string or any React node.

- `children` (React.ReactNode, required): The element that triggers the tooltip when hovered or focused.

- `side` ('top' | 'bottom' | 'left' | 'right', optional, default: 'top'): The position of the tooltip relative to the trigger element.

- `className` (string, optional): Additional CSS classes to apply to the tooltip content container.

- `arrowClassName` (string, optional): Additional CSS classes to apply to the tooltip arrow.

- `offset` (number, optional, default: 5): The distance in pixels between the tooltip and the trigger element.

## Examples

### Different Positions

```jsx
<div className="space-x-4">
  <Tooltip content="Top tooltip" side="top">
    <button>Top</button>
  </Tooltip>
  <Tooltip content="Right tooltip" side="right">
    <button>Right</button>
  </Tooltip>
  <Tooltip content="Bottom tooltip" side="bottom">
    <button>Bottom</button>
  </Tooltip>
  <Tooltip content="Left tooltip" side="left">
    <button>Left</button>
  </Tooltip>
</div>
```

### With Custom Styling

```jsx
<Tooltip
  content="Custom styled tooltip"
  className="bg-white text-gray-900 text-sm shadow-lg border border-gray-200"
  arrowClassName="fill-gray-200"
>
  <button>Hover me</button>
</Tooltip>
```

### With Different Offsets

```jsx
<Tooltip content="Tooltip with larger offset" offset={20}>
  <button>Hover me</button>
</Tooltip>
```

## Styling

The Tooltip component uses Tailwind CSS for styling:

### Default Styles

1. **Content Container**:

   - Dark background (bg-gray-900)
   - White text
   - Rounded corners
   - Shadow effect
   - Opacity for subtle appearance
   - Maximum width constraint

2. **Arrow**:

   - Matches content background
   - Proper positioning
   - Opacity matching content

3. **Animation**:
   - Slide-up fade effect
   - Smooth transitions
   - Proper z-index handling

### Customization

You can customize the appearance using:

1. **className prop** for content styling
2. **arrowClassName prop** for arrow styling
3. **Tailwind CSS classes** in custom content

## Accessibility

The Tooltip component follows accessibility best practices:

1. **Keyboard Navigation**:

   - Focusable trigger element
   - Proper focus management
   - Keyboard-triggered tooltips

2. **Screen Reader Support**:

   - Proper ARIA attributes
   - Content announcement
   - State management

3. **Interaction**:
   - Hover and focus triggers
   - Proper timing
   - Clear visual feedback

## Best Practices

1. **Content Guidelines**:

   - Keep tooltips concise
   - Use clear, simple language
   - Avoid complex content
   - Consider mobile users

2. **Positioning**:

   - Choose appropriate side
   - Ensure visibility
   - Avoid viewport edges
   - Consider content flow

3. **Usage**:

   - Use for supplementary info
   - Avoid critical content
   - Consider alternatives
   - Test on all devices

4. **Performance**:
   - Keep content lightweight
   - Avoid complex animations
   - Consider mobile impact
   - Test performance

## Implementation Details

The component uses:

- Radix UI for core functionality
- Tailwind CSS for styling
- twMerge for class name handling
- React state for content management

## Browser Support

The component is compatible with all modern browsers and degrades gracefully in older browsers. The animations may not be available in browsers that don't support CSS transitions.

For further customization and integration with your application, refer to the official documentation of React, Radix UI, and Tailwind CSS.
