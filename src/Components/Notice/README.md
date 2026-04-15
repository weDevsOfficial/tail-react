# Notice Component

The `Notice` component is a flexible and accessible notification component built with React and Tailwind CSS. It provides a consistent way to display different types of notifications (success, warning, error, info) with appropriate styling and icons.

## Features

- 🎨 Multiple variants (success, warning, error, info)
- 🖼️ Automatic icon selection based on type
- 🎯 Dismissible option
- 🌙 Dark mode support
- ♿ Accessible design
- 📱 Responsive layout

## Installation

The Notice component is part of the @wedevs/tail-react package:

```bash
npm install @wedevs/tail-react
# or
yarn add @wedevs/tail-react
```

## Usage

### Basic Notice

```jsx
import { Notice } from '@wedevs/tail-react';

function MyComponent() {
  return <Notice label="Order completed" type="success" />;
}
```

### With Description

```jsx
<Notice label="Order completed" type="success">
  Your order has been successfully processed and will be shipped within 2-3 business days.
</Notice>
```

### Dismissible Notice

```jsx
<Notice label="New feature available" type="info" dismissible>
  Check out our new dashboard layout with improved navigation.
</Notice>
```

## Props

- `label` (React.ReactNode, optional): The main text or title of the notice. Can be a string or any React node.

- `type` ('success' | 'warning' | 'error' | 'info', optional, default: 'success'): The type of notice which determines its color scheme and icon.

- `className` (string, optional): Additional CSS classes to apply to the notice container.

- `children` (React.ReactNode, optional): Additional content to display below the label. Can be used for descriptions, lists, or other content.

- `dismissible` (boolean, optional, default: false): Whether the notice can be dismissed by the user.

## Examples

### Different Types

```jsx
<Notice type="success" label="Operation successful" />
<Notice type="warning" label="Please review your changes" />
<Notice type="error" label="An error occurred" />
<Notice type="info" label="New update available" />
```

### With List Content

```jsx
<Notice type="error" label="There were errors with your submission">
  <ul className="list-disc list-inside">
    <li>Email is required</li>
    <li>Password must be at least 8 characters</li>
  </ul>
</Notice>
```

### With Links

```jsx
<Notice
  type="warning"
  label={
    <span>
      Your subscription will expire soon.{' '}
      <a href="#" className="font-medium text-yellow-700 underline hover:text-yellow-600">
        Renew now
      </a>
    </span>
  }
/>
```

## Styling

The Notice component uses Tailwind CSS for styling:

### Default Styles

1. **Container**:

   - Rounded corners
   - Ring border
   - Responsive padding
   - Full width

2. **Colors by Type**:

   - Success: Green theme
   - Warning: Yellow theme
   - Error: Red theme
   - Info: Blue theme

3. **Dark Mode**:
   - Automatic dark mode support
   - Adjusted colors for better contrast
   - Preserved readability

### Customization

You can customize the appearance using:

1. **className prop** for additional styles
2. **Custom content** through children prop
3. **Tailwind CSS classes** in the content

## Accessibility

The Notice component follows accessibility best practices:

1. **ARIA Attributes**:

   - Proper role attributes
   - Icon aria-hidden
   - Clear labeling

2. **Keyboard Navigation**:

   - Dismiss button accessible
   - Focus management
   - Proper tab order

3. **Screen Reader Support**:
   - Clear content structure
   - Proper heading hierarchy
   - Icon descriptions

## Best Practices

1. **Content Structure**:

   - Use clear, concise labels
   - Keep descriptions focused
   - Use proper heading hierarchy
   - Include relevant links when needed

2. **Type Selection**:

   - Success: Positive outcomes
   - Warning: Important notices
   - Error: Problem notifications
   - Info: General information

3. **Dismissible Usage**:

   - Use for non-critical notices
   - Allow user control
   - Consider persistence needs
   - Handle state appropriately

4. **Responsive Design**:
   - Test on different screens
   - Ensure readability
   - Maintain proper spacing
   - Consider mobile interactions

## Implementation Details

The component uses:

- Heroicons for icons
- Tailwind CSS for styling
- twMerge for class name handling
- React state for dismissible functionality

## Browser Support

The component is compatible with all modern browsers and degrades gracefully in older browsers. The icons and animations may not be available in browsers that don't support modern features.

For further customization and integration with your application, refer to the official documentation of React and Tailwind CSS.
