# SelectInput Component

The `SelectInput` component is a flexible and accessible select input implementation built with React and Tailwind CSS. It provides a rich set of features for handling single-selection scenarios with proper styling, validation, and accessibility support.

## Features

- 🎯 Single selection support
- 🏷️ Label support with required indicator
- ℹ️ Help text and error messages
- 🎨 Customizable styling
- ♿ Accessible design
- 🌙 Dark mode support
- 🔄 Controlled component support

## Installation

The SelectInput component is part of the @wedevs/tail-react package:

```bash
npm install @wedevs/tail-react
# or
yarn add @wedevs/tail-react
```

## Usage

### Basic SelectInput

```jsx
import { SelectInput } from '@wedevs/tail-react';

function MyComponent() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <SelectInput
      label="Select an option"
      options={[
        { value: 'Option 1', key: 'option1' },
        { value: 'Option 2', key: 'option2' },
        { value: 'Option 3', key: 'option3' },
      ]}
      selectedKey={selectedOption?.key}
      onChange={setSelectedOption}
    />
  );
}
```

### With Help Text

```jsx
<SelectInput
  label="Select a category"
  help="Please choose the most appropriate category for your content"
  options={categories}
  selectedKey={selectedCategory}
  onChange={setSelectedCategory}
/>
```

### With Error State

```jsx
<SelectInput
  label="Select a plan"
  error="Please select a plan to continue"
  required
  options={plans}
  selectedKey={selectedPlan}
  onChange={setSelectedPlan}
/>
```

## Props

- `label` (string, optional): The label text for the select input.

- `help` (React.ReactNode, optional): Help text displayed below the select input.

- `error` (React.ReactNode, optional): Error message displayed below the select input.

- `required` (boolean, optional, default: false): Whether the select input is required.

- `options` (Option[], required): Array of options to display. Each option must have a unique `key` and a `value`.

- `selectedKey` (string, optional): The key of the currently selected option.

- `className` (string, optional): Additional CSS classes for the select element.

- `wrapperClassName` (string, optional): Additional CSS classes for the wrapper div.

- `onChange` ((option: Option) => void, optional): Callback function called when an option is selected.

- `props` (React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, optional): Additional HTML select element props.

## Examples

### With Custom Styling

```jsx
<SelectInput
  label="Select a theme"
  options={themes}
  className="bg-gray-100 dark:bg-gray-800"
  wrapperClassName="max-w-md"
  selectedKey={selectedTheme}
  onChange={setSelectedTheme}
/>
```

### With Additional HTML Props

```jsx
<SelectInput
  label="Select a timezone"
  options={timezones}
  selectedKey={selectedTimezone}
  onChange={setSelectedTimezone}
  props={{
    disabled: true,
    name: 'timezone',
    'aria-label': 'Select timezone',
  }}
/>
```

## Styling

The SelectInput component uses Tailwind CSS for styling:

### Default Styles

1. **Container**:

   - Full width
   - Proper spacing
   - Responsive design
   - Dark mode support

2. **Label**:

   - Clear typography
   - Required indicator
   - Proper spacing
   - Dark mode support

3. **Select Input**:

   - Clean borders
   - Focus states
   - Placeholder styling
   - Dark mode support

4. **Helper Text**:
   - Proper spacing
   - Clear typography
   - Error states
   - Dark mode support

### Customization

You can customize the appearance using:

1. **className prop** for select element styling
2. **wrapperClassName prop** for container styling
3. **Tailwind CSS classes** in help/error text
4. **Additional HTML props** for native select styling

## Accessibility

The SelectInput component follows accessibility best practices:

1. **Semantic Structure**:

   - Proper label association
   - Required field indication
   - Error message handling
   - Screen reader support

2. **Keyboard Navigation**:

   - Focus management
   - Proper tab order
   - Keyboard interaction
   - Form submission

3. **Visual Design**:
   - Clear focus states
   - Proper contrast
   - Error indication
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

   - Optimize option rendering
   - Handle large option sets efficiently
   - Consider virtualization for many options
   - Manage state effectively

4. **Responsive Design**:
   - Test on all devices
   - Handle mobile interactions
   - Consider touch targets
   - Adapt layout as needed

## Implementation Details

The component uses:

- Tailwind CSS for styling
- twMerge for class name handling
- React for state management
- TypeScript for type safety

## Browser Support

The component is compatible with all modern browsers and degrades gracefully in older browsers. The styling may vary in browsers that don't support modern CSS features.

For further customization and integration with your application, refer to the official documentation of React and Tailwind CSS.
