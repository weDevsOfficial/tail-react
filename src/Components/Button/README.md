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

- `as` (React.ElementType, optional, default: 'button'): The HTML element type or React component to be used as the underlying element. This allows you to render the button as an anchor (`<a>`) or any other valid HTML element.

- `className` (string, optional): Additional CSS classes to be applied to the button.

- `onClick` (() => void, optional): The callback function to be executed when the button is clicked.

- `href` (string, optional): If provided and `as` is set to 'a', the button will be rendered as an anchor with the provided URL.

- `target` (string, optional): If `href` is provided and `as` is set to 'a', the value of the `target` attribute for the anchor element.

- `rel` (string, optional): If `href` is provided and `as` is set to 'a', the value of the `rel` attribute for the anchor element.

### Example

```jsx
import React from 'react';
import { Button } from '@wedevs/tail-react';

const MyComponent = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <Button
        onClick={handleButtonClick}
        variant="primary"
        style="fill"
        size="medium"
      >
        Click Me
      </Button>

      <Button variant="secondary" style="outline" size="large">
        Learn More
      </Button>

      <Button variant="danger" style="link" size="small" disabled>
        Disabled Button
      </Button>
    </div>
  );
};

export default MyComponent;
```

In this example, the `Button` component is used with different styles, sizes, and states. When the button is clicked, the `handleButtonClick` function is executed, and the console will log "Button clicked!". The last button is disabled and cannot be clicked due to the `disabled` prop being set to `true`.

## Styles Object

The `Button` component uses a predefined `Styles` object to handle the visual styles based on the provided `variant` and `style` props. The styles are defined using Tailwind CSS classes.

The `Styles` object includes the following style options:

- Primary Styles:

  - `primary:fill`: Primary button with a solid background.
  - `primary:outline`: Primary button with a border and transparent background.
  - `primary:link`: Primary button styled as a link with no background.

- Secondary Styles:

  - `secondary:fill`: Secondary button with a solid background.
  - `secondary:outline`: Secondary button with a border and transparent background.
  - `secondary:link`: Secondary button styled as a link with no background.

- Danger Styles:
  - `danger:fill`: Danger button with a solid background.
  - `danger:outline`: Danger button with a border and transparent background.
  - `danger:link`: Danger button styled as a link with no background.

## Customization

You can customize the appearance and behavior of the `Button` component by adjusting the `Styles` object or adding custom CSS classes to the `className` prop.

Please note that this documentation assumes you have set up your project with React and Tailwind CSS properly. For further customization and integration with your application, refer to the official documentation of React and Tailwind CSS.
