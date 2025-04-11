# TextField Component

The `TextField` component is a flexible and accessible input field implementation built with React and Tailwind CSS. It provides a rich set of features for handling text input with proper styling, validation, and accessibility support.

## Features

- 📝 Multiple input types (text, password, email, number, etc.)
- 🏷️ Label support with required indicator
- ℹ️ Help text and error messages
- 🎯 Contextual help integration
- 🎨 Customizable styling
- ♿ Accessible design
- 🌙 Dark mode support
- 🔄 Addon support (prefix and suffix)

## Installation

The TextField component is part of the @wedevs/tail-react package:

```bash
npm install @wedevs/tail-react
# or
yarn add @wedevs/tail-react
```

## Usage

### Basic TextField

```jsx
import { TextField } from '@wedevs/tail-react';

function MyComponent() {
  const [value, setValue] = useState('');

  return (
    <TextField
      label="First Name"
      value={value}
      onChange={setValue}
      placeholder="Enter your first name"
    />
  );
}
```

### With Validation

```jsx
<TextField
  label="Email"
  value={email}
  onChange={setEmail}
  type="email"
  required
  error={emailError}
  help="We will never share your email with anyone else."
/>
```

### With Addons

```jsx
<TextField
  label="Website"
  value={website}
  onChange={setWebsite}
  addon={<span className="text-gray-500">https://</span>}
  trailingAddon={<span className="text-gray-500">.com</span>}
/>
```

## Props

- `label` (string, optional): The label text for the input field.

- `value` (string, required): The current value of the input field.

- `onChange` ((value: string) => void, required): Callback function called when the input value changes.

- `type` ('text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search', optional, default: 'text'): The type of input field.

- `disabled` (boolean, optional, default: false): Whether the input is disabled.

- `readonly` (boolean, optional, default: false): Whether the input is read-only.

- `required` (boolean, optional, default: false): Whether the input is required.

- `help` (React.ReactNode, optional): Help text displayed below the input.

- `error` (React.ReactNode, optional): Error message displayed below the input.

- `autoComplete` (string, optional): HTML autocomplete attribute value.

- `maxLength` (number, optional): Maximum length of the input value.

- `minLength` (number, optional): Minimum length of the input value.

- `pattern` (string, optional): HTML pattern attribute for validation.

- `placeholder` (string, optional): Placeholder text for the input.

- `name` (string, optional): Name attribute for the input.

- `contextualHelp` (React.ReactNode, optional): Contextual help content.

- `className` (string, optional): Additional CSS classes for the input element.

- `labelClassName` (string, optional): Additional CSS classes for the label.

- `wrapperClassName` (string, optional): Additional CSS classes for the wrapper div.

- `inputWrapperClassName` (string, optional): Additional CSS classes for the input wrapper.

- `addon` (React.ReactNode, optional): Content to display before the input.

- `trailingAddon` (React.ReactNode, optional): Content to display after the input.

## Examples

### With Icon Addon

```jsx
import { UserIcon } from '@heroicons/react/24/outline';

<TextField
  label="Username"
  value={username}
  onChange={setUsername}
  addon={
    <span className="text-gray-500">
      <UserIcon className="h-5 w-5" />
    </span>
  }
/>;
```

### With Keyboard Shortcut

```jsx
<TextField
  label="Search"
  value={search}
  onChange={setSearch}
  trailingAddon={
    <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
      ⌘K
    </kbd>
  }
/>
```

### With Contextual Help

```jsx
<TextField
  label="Password"
  value={password}
  onChange={setPassword}
  type="password"
  contextualHelp={
    <>
      <h3 className="font-medium text-gray-900">Password Requirements</h3>
      <ul className="mt-2 text-sm text-gray-500">
        <li>At least 8 characters</li>
        <li>One uppercase letter</li>
        <li>One number</li>
      </ul>
    </>
  }
/>
```

## Styling

The TextField component uses Tailwind CSS for styling:

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

3. **Input**:

   - Clean borders
   - Focus states
   - Placeholder styling
   - Dark mode support

4. **Addons**:
   - Proper alignment
   - Consistent spacing
   - Icon support
   - Dark mode support

### Customization

You can customize the appearance using:

1. **className prop** for input styling
2. **labelClassName prop** for label styling
3. **wrapperClassName prop** for container styling
4. **inputWrapperClassName prop** for input wrapper styling
5. **Tailwind CSS classes** in addons

## Accessibility

The TextField component follows accessibility best practices:

1. **Semantic Structure**:

   - Proper label association
   - Required field indication
   - Error message handling
   - Screen reader support

2. **Keyboard Navigation**:

   - Focus management
   - Proper tab order
   - Keyboard shortcuts
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
   - Handle large forms
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
- ContextualHelp for help content

## Browser Support

The component is compatible with all modern browsers and degrades gracefully in older browsers. The styling may vary in browsers that don't support modern CSS features.

For further customization and integration with your application, refer to the official documentation of React and Tailwind CSS.
