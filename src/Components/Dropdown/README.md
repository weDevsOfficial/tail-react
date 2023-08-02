# Dropdown Component

The `Dropdown` component is a reusable React component that provides a customizable dropdown menu with fade-in/fade-out animation. It is designed to work seamlessly with Tailwind CSS, allowing you to easily integrate it into your React projects.

## Usage

Once installed, you can import and use the `Dropdown` component in your React application as follows:

```jsx
import React from 'react';
import { Dropdown, DropdownItem } from '@wedevs/tail-react';

const MyComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Dropdown
        button={
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Toggle Dropdown</button>
        }
        className="mx-4"
      >
        <DropdownItem onClick={() => console.log('Option 1')}>Option 1</DropdownItem>
        <DropdownItem onClick={() => console.log('Option 2')}>Option 2</DropdownItem>
        <DropdownItem onClick={() => console.log('Option 3')}>Option 3</DropdownItem>
      </Dropdown>
    </div>
  );
};

export default MyComponent;
```

## Components

The `Dropdown` component library includes the following components:

1. `Dropdown`: The main dropdown component that renders the dropdown menu and handles its state and interactions.

2. `DropdownItem`: Represents each item inside the dropdown menu. It can trigger custom actions when clicked.

## Features

- Smooth fade-in/fade-out animation when toggling the dropdown.
- Easy integration with Tailwind CSS for seamless customization.

## Customization

The `Dropdown` component can be easily customized to fit your project's design and requirements. You can style the dropdown button, menu, and items using Tailwind CSS utility classes. Additionally, you can modify the animation duration and timing function by adjusting the transition classes in the component.

## Props

### Dropdown Component Props

- `button` (React.ReactNode, required): The content of the button that triggers the dropdown.

- `children` (React.ReactNode, required): The content of the dropdown menu, including `DropdownItem` components.

- `className` (string, optional): Additional CSS classes to be applied to the `Dropdown` component.

### DropdownItem Component Props

- `onClick` (() => void, optional): A callback function to be executed when the `DropdownItem` is clicked.

- `children` (React.ReactNode, required): The content of the `DropdownItem`.

- `className` (string, optional): Additional CSS classes to be applied to the `DropdownItem`.
