# Table Component

The `Table` component is a flexible and accessible table implementation built with React and Tailwind CSS. It provides a simple way to display tabular data with proper styling and dark mode support.

## Features

- 📊 Structured table layout
- 🎨 Responsive design
- 🌙 Dark mode support
- ♿ Accessible markup
- 🔄 Type-safe data rendering
- 🎯 Customizable styling

## Installation

The Table component is part of the @wedevs/tail-react package:

```bash
npm install @wedevs/tail-react
# or
yarn add @wedevs/tail-react
```

## Usage

### Basic Table

```jsx
import { Table, TableHeader, TableBody } from '@wedevs/tail-react';

function MyComponent() {
  const data = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 28 },
  ];

  return (
    <Table>
      <TableHeader>
        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">ID</th>
        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Name</th>
        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Age</th>
      </TableHeader>
      <TableBody
        items={data}
        renderRow={(item) => (
          <tr>
            <td className="px-3 py-4 text-sm text-gray-500">{item.id}</td>
            <td className="px-3 py-4 text-sm text-gray-500">{item.name}</td>
            <td className="px-3 py-4 text-sm text-gray-500">{item.age}</td>
          </tr>
        )}
      />
    </Table>
  );
}
```

### With Custom Styling

```jsx
<Table className="border border-gray-200">
  <TableHeader className="bg-gray-100">{/* Header content */}</TableHeader>
  <TableBody
    className="bg-white"
    items={data}
    renderRow={(item) => <tr className="hover:bg-gray-50">{/* Row content */}</tr>}
  />
</Table>
```

## Components

### Table

The main table container component.

#### Props

- `children` (React.ReactNode, required): The table content (TableHeader and TableBody)
- `className` (string, optional): Additional CSS classes to apply to the table

### TableHeader

The table header component that wraps the header row.

#### Props

- `children` (React.ReactNode, required): The header cells (th elements)
- `className` (string, optional): Additional CSS classes to apply to the header

### TableBody

The table body component that handles data rendering.

#### Props

- `items` (T[], required): Array of data items to render
- `renderRow` ((item: T, index: number) => React.ReactNode, required): Function to render each row
- `className` (string, optional): Additional CSS classes to apply to the body

## Examples

### With Actions

```jsx
<Table>
  <TableHeader>
    <th>Name</th>
    <th>Email</th>
    <th>Actions</th>
  </TableHeader>
  <TableBody
    items={users}
    renderRow={(user) => (
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
          <button onClick={() => handleEdit(user)}>Edit</button>
          <button onClick={() => handleDelete(user)}>Delete</button>
        </td>
      </tr>
    )}
  />
</Table>
```

### With Status Indicators

```jsx
<Table>
  <TableHeader>
    <th>Order ID</th>
    <th>Status</th>
    <th>Amount</th>
  </TableHeader>
  <TableBody
    items={orders}
    renderRow={(order) => (
      <tr>
        <td>{order.id}</td>
        <td>
          <span
            className={`px-2 py-1 rounded-full text-xs ${
              order.status === 'completed'
                ? 'bg-green-100 text-green-800'
                : order.status === 'pending'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {order.status}
          </span>
        </td>
        <td>${order.amount}</td>
      </tr>
    )}
  />
</Table>
```

## Styling

The Table component uses Tailwind CSS for styling:

### Default Styles

1. **Table Container**:

   - Minimum width
   - Proper spacing
   - Border handling
   - Dark mode support

2. **Header**:

   - Light background
   - Proper text styling
   - Border handling
   - Dark mode support

3. **Body**:
   - Alternating row colors
   - Proper text styling
   - Border handling
   - Dark mode support

### Customization

You can customize the appearance using:

1. **className prop** on each component
2. **Tailwind CSS classes** in cells
3. **Custom components** in renderRow

## Accessibility

The Table component follows accessibility best practices:

1. **Semantic Structure**:

   - Proper table markup
   - Header and body separation
   - Scope attributes
   - Screen reader support

2. **Keyboard Navigation**:

   - Focusable elements
   - Proper tab order
   - Action handling

3. **Visual Design**:
   - Clear hierarchy
   - Proper contrast
   - Responsive layout
   - Dark mode support

## Best Practices

1. **Data Structure**:

   - Use proper types
   - Keep data consistent
   - Handle empty states
   - Consider pagination

2. **Performance**:

   - Virtualize large lists
   - Optimize renders
   - Handle updates efficiently
   - Consider memoization

3. **Responsive Design**:

   - Test on all devices
   - Handle overflow
   - Consider mobile views
   - Use proper breakpoints

4. **User Experience**:
   - Clear column headers
   - Consistent alignment
   - Proper spacing
   - Action placement

## Implementation Details

The component uses:

- Tailwind CSS for styling
- twMerge for class name handling
- TypeScript for type safety
- React for rendering

## Browser Support

The component is compatible with all modern browsers and degrades gracefully in older browsers. The styling may vary in browsers that don't support modern CSS features.

For further customization and integration with your application, refer to the official documentation of React and Tailwind CSS.
