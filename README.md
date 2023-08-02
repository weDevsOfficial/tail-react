# Tailwind CSS + React Component Library

This repository contains a collection of reusable React components styled with Tailwind CSS. The components are designed to be easily integrated into your React projects, providing a consistent and visually appealing user interface.

## Installation

To use this component library in your project, you can install it via `npm` or `yarn`.

```bash
npm install @wedevs/tail-react
# or
yarn add @wedevs/tail-react
```

## Usage

Once installed, you can import and use the components in your React application as follows:

```jsx
import React from 'react';
import { Button, Table } from '@wedevs/tail-react';

const App = () => {
  return (
    <div>
      <Button variant="primary" style="fill" size="medium" onClick={() => alert('Button clicked!')}>
        Click Me
      </Button>

      <Table>
        <Table.Header>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </Table.Header>
        <Table.Body
          items={users}
          renderRow={(item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          )}
        />
      </Table>
    </div>
  );
};

export default App;
```

## Components

The component library includes the following components:

- `Button`: A customizable button component with various styles and sizes.

- `Table`: A flexible and customizable table component for displaying data in tabular format.

## Customization

The components are built with Tailwind CSS, providing you with the flexibility to customize their appearance by leveraging Tailwind's utility classes. You can also pass custom CSS classes using the `className` prop to apply additional styles specific to your project.

## Documentation

For detailed information on each component and its available props, please refer to the documentation provided with the component library.

## License

This component library is open-source and distributed under the MIT License. You are free to use, modify, and distribute it in your projects.

## Contributing

Contributions to this component library are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the project's GitHub repository.

## Acknowledgments

A special thanks to the Tailwind CSS and React communities for their efforts in creating and maintaining these powerful tools. Their contributions have made it easier for developers like us to create beautiful and functional user interfaces.
