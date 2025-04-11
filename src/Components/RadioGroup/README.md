# RadioGroup Component

The `RadioGroup` component is a flexible and accessible radio button group implementation built with React and Tailwind CSS. It provides a rich set of features for handling single-selection scenarios with proper styling, validation, and accessibility support.

## Features

- 🎯 Single selection support
- 🏷️ Label support with required indicator
- ℹ️ Help text support
- 🎨 Customizable styling
- ♿ Accessible design
- 🌙 Dark mode support
- 🔄 Controlled component support

## Installation

The RadioGroup component is part of the @wedevs/tail-react package:

```bash
npm install @wedevs/tail-react
# or
yarn add @wedevs/tail-react
```

## Usage

### Basic RadioGroup

```jsx
import { RadioGroup } from '@wedevs/tail-react';

function MyComponent() {
  const [selectedOption, setSelectedOption] = useState('option1');

  return (
    <RadioGroup
      label="Select an option"
      options={[
        { value: 'Option 1', key: 'option1' },
        { value: 'Option 2', key: 'option2' },
        { value: 'Option 3', key: 'option3' },
      ]}
      value={selectedOption}
      onChange={setSelectedOption}
    />
  );
}
```

### With Help Text

```jsx
<RadioGroup
  label="Select a plan"
  help="Choose the plan that best fits your needs"
  options={plans}
  value={selectedPlan}
  onChange={setSelectedPlan}
/>
```

### With Required Field

```jsx
<RadioGroup
  label="Select a payment method"
  required
  options={paymentMethods}
  value={selectedMethod}
  onChange={setSelectedMethod}
/>
```

## Props

- `label` (string, optional): The label text for the radio group.

- `help` (React.ReactNode, optional): Help text displayed below the label.

- `required` (boolean, optional, default: false): Whether the selection is required.

- `options` (Option[], required): Array of options to display. Each option must have a unique `key` and a `value`.

- `value` (string, required): The key of the currently selected option.

- `onChange` ((value: string) => void, required): Callback function called when an option is selected.

## Examples

### With Custom Options

```jsx
<RadioGroup
  label="Select a theme"
  options={[
    { value: 'Light', key: 'light' },
    { value: 'Dark', key: 'dark' },
    { value: 'System', key: 'system' },
  ]}
  value={selectedTheme}
  onChange={setSelectedTheme}
/>
```

### With Form Integration

```jsx
<form onSubmit={handleSubmit}>
  <RadioGroup
    label="Select a category"
    required
    options={categories}
    value={selectedCategory}
    onChange={setSelectedCategory}
  />
  <button type="submit">Submit</button>
</form>
```

## Styling

The RadioGroup component uses Tailwind CSS for styling:

### Default Styles

1. **Container**:

   - Proper spacing
   - Responsive design
   - Dark mode support

2. **Label**:

   - Clear typography
   - Required indicator
   - Proper spacing
   - Dark mode support

3. **Radio Buttons**:

   - Clean borders
   - Focus states
   - Selected state indication
   - Dark mode support

4. **Helper Text**:
   - Proper spacing
   - Clear typography
   - Dark mode support

### Customization

You can customize the appearance using:

1. **Tailwind CSS classes** for specific elements
2. **CSS variables** for theme customization
3. **Custom styles** for radio buttons
4. **Theme overrides** for dark mode

## Accessibility

The RadioGroup component follows accessibility best practices:

1. **Semantic Structure**:

   - Proper label association
   - Required field indication
   - Screen reader support
   - ARIA attributes

2. **Keyboard Navigation**:

   - Focus management
   - Proper tab order
   - Keyboard interaction
   - Form submission

3. **Visual Design**:
   - Clear focus states
   - Proper contrast
   - State indication
   - Help text visibility

## Best Practices

1. **Form Handling**:

   - Use controlled components
   - Implement proper validation
   - Handle form submission
   - Manage form state

2. **User Experience**:

   - Provide clear labels
   - Use meaningful option values
   - Show validation feedback
   - Include help text when needed

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

- Tailwind CSS for styling
- React for state management
- TypeScript for type safety

## Browser Support

The component is compatible with all modern browsers and degrades gracefully in older browsers. The styling may vary in browsers that don't support modern CSS features.

For further customization and integration with your application, refer to the official documentation of React and Tailwind CSS.
