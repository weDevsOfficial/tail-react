# SwitchInput Component

The `SwitchInput` component is a flexible and accessible toggle switch implementation built with React, Headless UI, and Tailwind CSS. It provides a rich set of features for handling boolean state with proper styling, accessibility, and dark mode support.

## Features

- 🎯 Boolean state management
- 🏷️ Label support
- ℹ️ Help text support (plain text or HTML)
- 🎨 Customizable styling
- ♿ Accessible design
- 🌙 Dark mode support
- 🚫 Disabled state support
- 🔄 Controlled component support

## Installation

The SwitchInput component is part of the @wedevs/tail-react package:

```bash
npm install @wedevs/tail-react
# or
yarn add @wedevs/tail-react
```

## Usage

### Basic SwitchInput

```jsx
import { SwitchInput } from '@wedevs/tail-react';

function MyComponent() {
  const [enabled, setEnabled] = useState(false);

  return <SwitchInput label="Enable notifications" initialValue={enabled} onChange={setEnabled} />;
}
```

### With Help Text

```jsx
<SwitchInput
  label="Enable dark mode"
  help="Switch between light and dark theme"
  initialValue={isDarkMode}
  onChange={setIsDarkMode}
/>
```

### With HTML Help Text

```jsx
<SwitchInput
  label="Enable advanced features"
  help="<strong>Warning:</strong> This will enable experimental features that may be unstable."
  html
  initialValue={isAdvanced}
  onChange={setIsAdvanced}
/>
```

### Disabled State

```jsx
<SwitchInput
  label="Premium features"
  help="Upgrade to enable premium features"
  disabled
  initialValue={false}
/>
```

## Props

- `label` (string, required): The label text for the switch.

- `initialValue` (boolean, optional, default: false): The initial state of the switch.

- `help` (React.ReactNode, optional): Help text displayed below the switch. Can be plain text or HTML.

- `disabled` (boolean, optional, default: false): Whether the switch is disabled.

- `html` (boolean, optional, default: false): Whether the help text should be rendered as HTML.

- `className` (string, optional): Additional CSS classes for the switch container.

- `onChange` ((status: boolean) => void, optional): Callback function called when the switch state changes.

## Examples

### With Custom Styling

```jsx
<SwitchInput
  label="Custom styled switch"
  className="bg-gray-100 p-4 rounded-lg"
  initialValue={isEnabled}
  onChange={setIsEnabled}
/>
```

### With Different Colors

```jsx
<SwitchInput
  label="Success switch"
  className="[&>div>button]:bg-green-600 [&>div>button]:focus:ring-green-500"
  initialValue={isSuccess}
  onChange={setIsSuccess}
/>
```

## Styling

The SwitchInput component uses Tailwind CSS for styling:

### Default Styles

1. **Container**:

   - Flex layout
   - Proper spacing
   - Responsive design
   - Dark mode support

2. **Switch**:

   - Clean borders
   - Smooth transitions
   - Focus states
   - Dark mode support

3. **Label**:

   - Clear typography
   - Proper spacing
   - Dark mode support

4. **Help Text**:
   - Proper spacing
   - Clear typography
   - Dark mode support

### Customization

You can customize the appearance using:

1. **className prop** for container styling
2. **Tailwind CSS classes** for specific elements
3. **Custom color classes** for the switch
4. **CSS variables** for theme customization

## Accessibility

The SwitchInput component follows accessibility best practices:

1. **Semantic Structure**:

   - Proper label association
   - ARIA attributes
   - Screen reader support
   - Keyboard navigation

2. **Keyboard Navigation**:

   - Focus management
   - Proper tab order
   - Keyboard interaction
   - State management

3. **Visual Design**:
   - Clear focus states
   - Proper contrast
   - State indication
   - Help text visibility

## Best Practices

1. **State Management**:

   - Use controlled components
   - Handle state changes
   - Manage form state
   - Consider persistence

2. **User Experience**:

   - Provide clear labels
   - Use meaningful help text
   - Handle disabled states
   - Consider touch targets

3. **Performance**:

   - Optimize re-renders
   - Handle state efficiently
   - Consider memoization
   - Manage event handlers

4. **Responsive Design**:
   - Test on all devices
   - Handle mobile interactions
   - Consider touch targets
   - Adapt layout as needed

## Implementation Details

The component uses:

- Headless UI for accessibility
- Tailwind CSS for styling
- twMerge for class name handling
- React for state management
- TypeScript for type safety

## Browser Support

The component is compatible with all modern browsers and degrades gracefully in older browsers. The styling may vary in browsers that don't support modern CSS features.

For further customization and integration with your application, refer to the official documentation of React, Headless UI, and Tailwind CSS.
