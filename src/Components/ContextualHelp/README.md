# ContextualHelp Component

The `ContextualHelp` component is a reusable React component that provides a simple and customizable contextual help tooltip. It displays a question mark icon that, when clicked, reveals additional information or content in a styled popup. This component is perfect for providing in-context help, explanations, or additional details without cluttering the interface.

## Features

- 🎯 Click-triggered tooltip display
- 🎨 Clean, modern design with smooth animations
- 🖱️ Click-outside behavior to dismiss
- 📱 Responsive and properly positioned
- 🌙 Dark mode compatible
- ♿ Accessible interaction pattern

## Installation

The ContextualHelp component is part of the @wedevs/tail-react package:

```bash
npm install @wedevs/tail-react
# or
yarn add @wedevs/tail-react
```

## Usage

Import and use the `ContextualHelp` component in your React application:

```jsx
import { ContextualHelp } from '@wedevs/tail-react';

function MyComponent() {
  return (
    <div className="flex items-center gap-2">
      <span>Account Status</span>
      <ContextualHelp>
        <h3 className="font-medium text-gray-900 mb-2">Account Status Help</h3>
        <p className="text-sm text-gray-500">
          Your account status indicates whether your account is active, pending, or requires
          verification. A verified account has full access to all features.
        </p>
      </ContextualHelp>
    </div>
  );
}
```

### With Rich Content

The component accepts any valid React node as children, allowing for rich content:

```jsx
function RichHelpExample() {
  return (
    <ContextualHelp>
      <div className="space-y-4">
        <h3 className="font-medium text-gray-900">Payment Methods</h3>
        <ul className="list-disc pl-4 text-sm text-gray-500 space-y-1">
          <li>Credit/Debit Cards</li>
          <li>PayPal</li>
          <li>Bank Transfer</li>
        </ul>
        <a href="/payment-help" className="text-sm text-indigo-600 hover:text-indigo-500">
          Learn more about payment options →
        </a>
      </div>
    </ContextualHelp>
  );
}
```

## Props

The `ContextualHelp` component accepts the following props:

- `children` (React.ReactNode, required): The content to be displayed in the tooltip popup. Can be any valid React node, including text, HTML, or components.

## Styling

The component uses Tailwind CSS for styling and includes:

### Icon Styling

- Gray question mark icon (`text-gray-500`)
- Hover effect with light gray background (`hover:bg-gray-100`)
- Consistent sizing (`w-4 h-4`)

### Popup Styling

- White background (`bg-white`)
- Subtle border (`border-gray-200`)
- Rounded corners (`rounded-md`)
- Drop shadow for depth (`shadow-md`)
- Comfortable padding (`p-4`)
- Fixed width for readability (`w-72`)

### Animation

Uses Headless UI's `Transition` component for smooth animations:

- Scale and fade-in effect on open
- Scale and fade-out effect on close
- Customizable duration for enter/leave animations

## Accessibility

The ContextualHelp component follows accessibility best practices:

1. **Keyboard Navigation**

   - Can be triggered via keyboard interaction
   - Properly handles focus management

2. **Screen Readers**

   - Uses semantic HTML structure
   - Maintains proper heading hierarchy in content

3. **Interactive Elements**
   - Clear visual feedback on hover/focus
   - Sufficient color contrast
   - Proper click targets

## Best Practices

### When to Use

Use ContextualHelp when you need to:

- Provide additional explanation for complex features
- Offer help without cluttering the interface
- Give context-sensitive information
- Display supplementary details on demand

### Content Guidelines

1. **Keep it Concise**

   - Write clear, brief explanations
   - Use bullet points for lists
   - Avoid lengthy paragraphs

2. **Structure Content**

   - Use headings for organization
   - Include visual hierarchy
   - Break up complex information

3. **Placement**
   - Position near the relevant element
   - Avoid overlapping with important content
   - Consider mobile viewports

### Example Use Cases

```jsx
// Form field explanation
<div className="form-group">
  <label>API Key</label>
  <ContextualHelp>
    <h4 className="font-medium">About API Keys</h4>
    <p className="text-sm text-gray-600">
      API keys are used to authenticate your requests.
      Keep them secure and never share them publicly.
    </p>
  </ContextualHelp>
  <input type="text" />
</div>

// Feature explanation
<div className="feature-card">
  <h3>Advanced Analytics
    <ContextualHelp>
      <div className="space-y-2">
        <p className="text-sm">
          Advanced Analytics provides deeper insights into your data:
        </p>
        <ul className="list-disc pl-4 text-sm">
          <li>Custom report generation</li>
          <li>Real-time data tracking</li>
          <li>Predictive analysis</li>
        </ul>
      </div>
    </ContextualHelp>
  </h3>
</div>
```

## Implementation Details

The component uses:

- `useRef` for handling click-outside behavior
- `useState` for managing tooltip visibility
- `useEffect` for setting up event listeners
- Headless UI's `Transition` for animations
- Tailwind's `twMerge` for class name handling

## Browser Support

The component is compatible with all modern browsers and degrades gracefully in older browsers. The animations may not be available in browsers that don't support CSS transitions.

For further customization and integration with your application, refer to the official documentation of React and Tailwind CSS.
