# Textarea Component

The `Textarea` component is a flexible and accessible textarea implementation built with React and Tailwind CSS. It provides a rich set of features for handling multi-line text input with proper styling, validation, and accessibility support.

## Features

- 📝 Multi-line text input
- 🏷️ Label support with required indicator
- ℹ️ Help text and error messages
- 🎨 Customizable styling
- ♿ Accessible design
- 🌙 Dark mode support
- 🔄 Controlled component support

## Installation

The Textarea component is part of the @wedevs/tail-react package:

```bash
npm install @wedevs/tail-react
# or
yarn add @wedevs/tail-react
```

## Usage

### Basic Textarea

```jsx
import { Textarea } from '@wedevs/tail-react';

function MyComponent() {
  const [value, setValue] = useState('');

  return (
    <Textarea
      label="About"
      value={value}
      onChange={setValue}
      placeholder="Tell us about yourself"
    />
  );
}
```

### With Help Text

```jsx
<Textarea
  label="Comments"
  value={comments}
  onChange={setComments}
  help="Please provide detailed feedback about your experience."
/>
```

### With Error State

```jsx
<Textarea
  label="Description"
  value={description}
  onChange={setDescription}
  required
  error="Description is required"
/>
```

## Props

- `label` (string, optional): The label text for the textarea.

- `value` (string, optional): The current value of the textarea.

- `onChange` ((value: string) => void, optional): Callback function called when the textarea value changes.

- `disabled` (boolean, optional, default: false): Whether the textarea is disabled.

- `required` (boolean, optional, default: false): Whether the textarea is required.

- `help` (React.ReactNode, optional): Help text displayed below the textarea.

- `error` (React.ReactNode, optional): Error message displayed below the textarea.

- `placeholder` (string, optional): Placeholder text for the textarea.

- `rows` (number, optional, default: 3): Number of visible text lines.

- `className` (string, optional): Additional CSS classes for the textarea element.

- `labelClassName` (string, optional): Additional CSS classes for the label.

- `wrapperClassName` (string, optional): Additional CSS classes for the wrapper div.

## Examples

### With Custom Rows

```jsx
<Textarea
  label="Long Description"
  value={description}
  onChange={setDescription}
  rows={6}
  help="Please provide a detailed description of your project."
/>
```

### Disabled State

```jsx
<Textarea
  label="Read-only Content"
  value="This content cannot be edited"
  disabled
  help="This field is disabled and cannot be modified."
/>
```

### With Custom Styling

```jsx
<Textarea
  label="Custom Styled"
  value={value}
  onChange={setValue}
  className="font-mono text-sm"
  labelClassName="text-purple-600"
  wrapperClassName="max-w-2xl"
/>
```

## Styling

The Textarea component uses Tailwind CSS for styling:

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

3. **Textarea**:

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

1. **className prop** for textarea styling
2. **labelClassName prop** for label styling
3. **wrapperClassName prop** for container styling
4. **Tailwind CSS classes** in help/error text

## Accessibility

The Textarea component follows accessibility best practices:

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
   - Use appropriate placeholders
   - Show validation feedback
   - Include help text when needed

3. **Performance**:

   - Optimize re-renders
   - Handle large content
   - Consider debouncing
   - Manage state efficiently

4. **Responsive Design**:
   - Test on all devices
   - Handle mobile input
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
