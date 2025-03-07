# SwitchInput Component

The `SwitchInput` component is a customizable and accessible switch input built with React and Tailwind CSS. It allows you to create interactive toggle switches for various settings or options in your application.

## Usage

Once installed, you can import and use the `SwitchInput` component in your React application as follows:

```jsx
import React, { useState } from 'react';
import { SwitchInput } from '@wedevs/tail-react';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = status => {
    setIsEnabled(status);
    // Your custom logic here when the switch is toggled
  };

  return (
    <div>
      <SwitchInput
        label="Enable Feature"
        initialValue={isEnabled}
        onChange={handleToggle}
        help="Toggle to enable or disable the feature"
      />
    </div>
  );
};

export default App;
```

## Props

### SwitchInput Component Props

- `label` (string, required): The label text for the switch input.

- `initialValue` (boolean, optional): The initial value of the switch input. Default is `false`.

- `help` (ReactNode, optional): Additional help or description text displayed below the label.

- `disabled` (boolean, optional): Indicates whether the switch input is disabled. Default is `false`.

- `onChange` ((status: boolean) => void, optional): A callback function that is triggered when the switch is toggled. It receives the current status of the switch (true for ON and false for OFF) as an argument.

## Customization

The `SwitchInput` component can be easily customized to fit your project's design and requirements. You can adjust the appearance, size, and other styles based on your specific use case.
