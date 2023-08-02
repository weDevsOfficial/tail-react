# Table Component

The `Table` component is a reusable and customizable table element for React applications, designed to work seamlessly with Tailwind CSS.

## Components

The `Table` component library consists of three main components: `Table`, `TableHeader`, and `TableBody`.

### `Table`

#### Props

- `children` (React.ReactNode, required): The content of the table, including `TableHeader` and `TableBody` components.

- `className` (string, optional): Additional CSS classes to be applied to the table.

- `loading` (boolean, optional): If true, the table will display a loading message while waiting for data to load.

### `TableHeader`

#### Props

- `children` (React.ReactNode, required): The content of the table header, typically `th` elements.

- `className` (string, optional): Additional CSS classes to be applied to the table header.

### `TableBody`

#### Props

- `items` (T[], required): An array of objects representing the rows of the table.

- `renderRow` ((item: T) => React.ReactNode, required): A callback function that renders each row of the table based on the item data.

- `className` (string, optional): Additional CSS classes to be applied to the table body.

#### Example

```jsx
import React from 'react';
import { Table, TableHeader, TableBody } from '@wedevs/tail-react';

interface User {
  id: number;
  name: string;
  age: number;
}

const rows: User[] = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 28 },
  { id: 3, name: 'Bob Johnson', age: 35 },
];

const MyComponent = () => {
  return (
    <Table>
      <TableHeader>
        <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          ID
        </th>
        <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Name
        </th>
        <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Age
        </th>
      </TableHeader>
      <TableBody
        items={rows}
        renderRow={(item: User) => (
          <>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
              {item.id}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.name}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.age}</td>
          </>
        )}
      />
    </Table>
  );
};

export default MyComponent;
```
