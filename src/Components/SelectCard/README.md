# SelectCard Component

The `SelectCard` component is a flexible and accessible card-based selection interface built with React and Tailwind CSS. It provides a rich set of features for handling single-selection scenarios with customizable content rendering and styling options.

## Features

- 🎯 Single selection support
- 🎨 Customizable content rendering
- 🏷️ Label and help text support
- ⚠️ Error state handling
- ♿ Accessible design
- 🌙 Dark mode support
- 🚫 Disabled state support
- 🔄 Controlled component support

## Installation

The SelectCard component is part of the @wedevs/tail-react package:

```bash
npm install @wedevs/tail-react
# or
yarn add @wedevs/tail-react
```

## Usage

### Basic SelectCard

```jsx
import { SelectCard } from '@wedevs/tail-react';

function MyComponent() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <SelectCard
      label="Select an option"
      options={[
        { value: 'Option 1', key: 'option1' },
        { value: 'Option 2', key: 'option2' },
        { value: 'Option 3', key: 'option3' },
      ]}
      selectedKey={selectedOption?.key}
      onChange={setSelectedOption}
      renderItem={(item) => item.value}
    />
  );
}
```

### With Custom Content

```jsx
<SelectCard
  label="Select a cloud provider"
  options={[
    {
      key: 'aws',
      title: 'AWS',
      icon: <AWSIcon />,
    },
    {
      key: 'gcp',
      title: 'Google Cloud',
      icon: <GCPIcon />,
    },
  ]}
  renderItem={(item) => (
    <div className="flex flex-col items-center gap-2">
      <div className="w-12">{item.icon}</div>
      <span>{item.title}</span>
    </div>
  )}
/>
```

### With Help Text and Error

```jsx
<SelectCard
  label="Select an option"
  help="Please choose one of the available options"
  error="This field is required"
  required
  options={options}
  renderItem={(item) => item.value}
/>
```

## Props

- `label` (string, optional): The label text for the selection.

- `help` (React.ReactNode, optional): Help text displayed below the selection.

- `error` (React.ReactNode, optional): Error message displayed below the selection.

- `required` (boolean, optional, default: false): Whether the selection is required.

- `options` (Option[], required): Array of options to display. Each option must have a unique `key` and can have any additional properties.

- `selectedKey` (string, optional): The key of the currently selected option.

- `className` (string, optional): Additional CSS classes for the container.

- `onChange` ((option: Option) => void, optional): Callback function called when an option is selected.

- `renderItem` ((option: Option) => React.JSX.Element, required): Function to render each option's content.

## Examples

### With Disabled Options

```jsx
<SelectCard
  label="Select a plan"
  options={[
    { key: 'basic', title: 'Basic', disabled: false },
    { key: 'pro', title: 'Pro', disabled: true },
    { key: 'enterprise', title: 'Enterprise', disabled: false },
  ]}
  renderItem={(item) => item.title}
/>
```

### With Custom Styling

```jsx
<SelectCard
  label="Select a theme"
  options={themes}
  className="grid grid-cols-3 gap-4"
  renderItem={(item) => (
    <div className="p-4 rounded-lg border-2">
      <div className="w-full h-24" style={{ backgroundColor: item.color }} />
      <span className="mt-2 block text-center">{item.name}</span>
    </div>
  )}
/>
```

## Styling

The SelectCard component uses Tailwind CSS for styling:

### Default Styles

1. **Container**:

   - Flex layout
   - Proper spacing
   - Responsive design
   - Dark mode support

2. **Label**:

   - Clear typography
   - Required indicator
   - Proper spacing
   - Dark mode support

3. **Cards**:

   - Clean borders
   - Hover and focus states
   - Selected state indication
   - Dark mode support

4. **Helper Text**:
   - Proper spacing
   - Clear typography
   - Error states
   - Dark mode support

### Customization

You can customize the appearance using:

1. **className prop** for container styling
2. **Custom renderItem function** for card content
3. **Tailwind CSS classes** in help/error text
4. **Option-specific styling** through the renderItem function

## Accessibility

The SelectCard component follows accessibility best practices:

1. **Semantic Structure**:

   - Proper label association
   - Required field indication
   - Error message handling
   - Screen reader support

2. **Keyboard Navigation**:

   - Focus management
   - Proper tab order
   - Keyboard interaction
   - Selection handling

3. **Visual Design**:
   - Clear focus states
   - Proper contrast
   - Error indication
   - Help text visibility

## Best Practices

1. **Content Structure**:

   - Use clear, concise labels
   - Provide meaningful help text
   - Handle error states appropriately
   - Use consistent card layouts

2. **User Experience**:

   - Keep options visually distinct
   - Provide clear selection feedback
   - Handle disabled states gracefully
   - Consider touch targets

3. **Performance**:

   - Optimize renderItem function
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
