# Button Component Documentation

The `Button` component is a customizable button element built using React and Tailwind CSS. It allows developers to create buttons with various styles and sizes to match the design requirements of their application.

## Usage

To use the `Button` component, import it into your React component and pass the required props to customize its appearance and behavior.

### Props

The `Button` component accepts the following props:

- `children` (React.ReactNode, required): The content of the button.

- `variant` ('primary' | 'secondary' | 'danger', optional, default: 'primary'): The visual style of the button. You can choose from 'primary', 'secondary', or 'danger'.

- `style` ('fill' | 'outline' | 'link', optional, default: 'fill'): The visual style type of the button. Options are 'fill' (solid background), 'outline' (border only), or 'link' (no background).

- `type` ('button' | 'submit' | 'reset', optional, default: 'button'): The type attribute of the button element.

- `size` ('small' | 'medium' | 'large', optional, default: 'medium'): The size of the button. Options are 'small', 'medium', or 'large'.

- `disabled` (boolean, optional, default: false): If true, the button will be disabled and not clickable.

- `loading` (boolean, optional, default: false): If true, displays a spinning loading indicator before the button content.

- `as` (React.ElementType, optional, default: 'button'): The HTML element type or React component to be used as the underlying element. This allows you to render the button as an anchor (`<a>`) or any other valid HTML element.

- `className` (string, optional): Additional CSS classes to be applied to the button.

- `onClick` (() => void, optional): The callback function to be executed when the button is clicked.

- `href` (string, optional): If provided and `as` is set to 'a', the button will be rendered as an anchor with the provided URL.

- `target` (string, optional): If `href` is provided and `as` is set to 'a', the value of the `target` attribute for the anchor element.

- `rel` (string, optional): If `href` is provided and `as` is set to 'a', the value of the `rel` attribute for the anchor element.

### Examples

```jsx
import React, { useState } from 'react';
import { Button } from '@wedevs/tail-react';

const MyComponent = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      {/* Basic Button */}
      <Button onClick={() => console.log('Clicked!')}>Click Me</Button>

      {/* Different Variants */}
      <div className="space-x-2">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
      </div>

      {/* Different Styles */}
      <div className="space-x-2">
        <Button style="fill">Fill</Button>
        <Button style="outline">Outline</Button>
        <Button style="link">Link</Button>
      </div>

      {/* Different Sizes */}
      <div className="space-x-2">
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>

      {/* Loading State */}
      <Button loading={isLoading} onClick={handleSubmit}>
        {isLoading ? 'Submitting...' : 'Submit Form'}
      </Button>

      {/* Link Button */}
      <Button as="a" href="https://example.com" target="_blank" rel="noopener noreferrer">
        Visit Website
      </Button>
    </div>
  );
};

export default MyComponent;
```

## Styles Object

The `Button` component uses a predefined `Styles` object to handle the visual styles based on the provided `variant` and `style` props. The styles are defined using Tailwind CSS classes.

The `Styles` object includes the following style options:

- Primary Styles:

  - `primary:fill`: Primary button with a solid background and hover effects
  - `primary:outline`: Primary button with a border and transparent background
  - `primary:link`: Primary button styled as a link with no background

- Secondary Styles:

  - `secondary:fill`: Secondary button with a solid background
  - `secondary:outline`: Secondary button with a border and transparent background
  - `secondary:link`: Secondary button styled as a link with no background

- Danger Styles:
  - `danger:fill`: Danger button with a solid background
  - `danger:outline`: Danger button with a border and transparent background
  - `danger:link`: Danger button styled as a link with no background

## Dark Mode Support

The Button component includes built-in dark mode support through Tailwind CSS's dark mode classes. The styles automatically adjust when dark mode is enabled in your application.

## Accessibility

The Button component follows accessibility best practices:

- Uses semantic HTML elements
- Maintains proper focus states
- Disables interaction when the `disabled` prop is true
- Provides visual feedback during loading states

## Customization

You can customize the appearance and behavior of the `Button` component by:

1. Using the provided props to configure the button
2. Adding custom CSS classes through the `className` prop
3. Extending the `Styles` object in your theme configuration

For further customization and integration with your application, refer to the official documentation of React and Tailwind CSS.
