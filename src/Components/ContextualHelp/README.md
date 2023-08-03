# ContextualHelp Component

The `ContextualHelp` component is a reusable React component that provides a simple and customizable contextual help tooltip. It allows you to display additional information or content when clicking on an icon, providing users with helpful hints or explanations.

## Usage

Once installed, you can import and use the `ContextualHelp` component in your React application as follows:

```jsx
import React from 'react';
import { ContextualHelp } from '@wedevs/tail-react';

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <ContextualHelp>
        <h3 className="font-medium text-gray-900 mb-2">Need Help?</h3>
        <p className="text-sm text-gray-500">
          If you're having trouble accessing your account, contact our customer support team for
          help.
        </p>
      </ContextualHelp>
    </div>
  );
};

export default App;
```

## Components

The `ContextualHelp` component library includes the following component:

1. `ContextualHelp`: The main component that wraps the tooltip content and handles its display.

## Features

- Customizable tooltip that appears when hovering or clicking on an icon.
- Smooth transition animation when showing and hiding the tooltip.
- Clicking outside the tooltip area closes the tooltip.

## Props

### ContextualHelp Component Props

- `children` (React.ReactNode, required): The content that will be displayed in the tooltip.

## Customization

The `ContextualHelp` component can be easily customized to fit your project's design and requirements. You can adjust the appearance, position, and content of the tooltip based on your specific use case.
