# Checkbox Component Documentation

The `Checkbox` component is a customizable form input that allows users to make binary choices. Built with React and Tailwind CSS, it provides a consistent and accessible checkbox experience with support for labels, help text, and various states.

## Usage

Import and use the Checkbox component in your React components:

```jsx
import { Checkbox } from '@wedevs/tail-react';

function MyForm() {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <Checkbox
      label="Subscribe to newsletter"
      checked={isChecked}
      onChange={setIsChecked}
      help="Receive updates about our latest products and offers"
    />
  );
}
```

## Props

The Checkbox component accepts the following props:

- `label` (string, required): The text label associated with the checkbox.

- `checked` (boolean, optional): Controls the checked state of the checkbox.

- `onChange` ((checked: boolean) => void, optional): Callback function that is called when the checkbox state changes. Receives the new checked state as an argument.

- `disabled` (boolean, optional, default: false): When true, the checkbox becomes non-interactive and appears dimmed.

- `help` (React.ReactNode, optional): Additional help text or description to display below the label.

- `className` (string, optional): Additional CSS classes to be applied to the checkbox input element.

- `labelClassName` (string, optional): Additional CSS classes to be applied to the label element.

## Examples

### Basic Usage

```jsx
import { Checkbox } from '@wedevs/tail-react';

function FormExample() {
  const [notifications, setNotifications] = React.useState(false);
  const [marketing, setMarketing] = React.useState(false);

  return (
    <div className="space-y-4">
      {/* Basic checkbox */}
      <Checkbox label="Enable notifications" checked={notifications} onChange={setNotifications} />

      {/* Checkbox with help text */}
      <Checkbox
        label="Receive marketing emails"
        checked={marketing}
        onChange={setMarketing}
        help="We'll send you updates about new features and special offers"
      />

      {/* Disabled checkbox */}
      <Checkbox label="Premium features" disabled help="Available only for premium users" />

      {/* Pre-checked checkbox */}
      <Checkbox
        label="Accept terms and conditions"
        checked
        onChange={(checked) => console.log('Terms accepted:', checked)}
      />

      {/* Custom styled checkbox */}
      <Checkbox
        label="Custom style"
        className="h-5 w-5 text-purple-600"
        labelClassName="text-purple-900 font-bold"
      />
    </div>
  );
}
```

## Styling

The Checkbox component comes with default styling using Tailwind CSS:

1. **Checkbox Input**:

   - Rounded corners
   - Indigo accent color (customizable)
   - Focus ring for better accessibility
   - Proper spacing and sizing
   - Dark mode support

2. **Label**:

   - Medium font weight
   - Proper text color with dark mode support
   - Automatic cursor styles

3. **Help Text**:
   - Muted gray color
   - Smaller font size
   - Dark mode support

## Dark Mode Support

The component automatically adapts to dark mode with appropriate colors for:

- Checkbox background and border
- Label text
- Help text
- Focus ring

## Accessibility Features

The Checkbox component follows accessibility best practices:

1. **Proper HTML Structure**:

   - Uses semantic `<input type="checkbox">` element
   - Associates label with input using `htmlFor`
   - Maintains proper focus states

2. **Keyboard Navigation**:

   - Fully keyboard accessible
   - Clear focus indicators
   - Proper tab order

3. **Screen Readers**:
   - Semantic HTML ensures proper screen reader announcement
   - Help text is associated with the input
   - Disabled state is properly conveyed

## Best Practices

1. **Labels**:

   - Use clear, concise labels
   - Make labels action-oriented when possible
   - Avoid negatively worded labels

2. **Help Text**:

   - Keep help text brief and helpful
   - Use for additional context, not critical information
   - Consider using help text for validation requirements

3. **Grouping**:

   - Group related checkboxes together
   - Use consistent spacing between checkboxes
   - Consider using fieldsets for groups of related checkboxes

4. **State Management**:
   - Always handle the `onChange` event
   - Keep checked state in parent component
   - Use controlled components pattern

## Implementation Notes

1. The component generates a unique ID for each instance to ensure proper label association
2. Uses Tailwind's `twMerge` for proper class name merging
3. Supports spreading additional props to the underlying input element
4. Properly handles disabled state styling for both input and label

For further customization and integration with your application, refer to the official documentation of React and Tailwind CSS.
