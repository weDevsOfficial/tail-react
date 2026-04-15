# Badge Component Documentation

The `Badge` component is a lightweight, versatile component for displaying status indicators, labels, or tags in your application. Built with React and Tailwind CSS, it offers various styles and types to match your design needs.

## Usage

Import and use the Badge component in your React components to display short pieces of information, status indicators, or labels.

```jsx
import { Badge } from '@wedevs/tail-react';

function MyComponent() {
  return (
    <div className="space-x-2">
      <Badge label="New" />
      <Badge label="Success" type="success" />
      <Badge label="Warning" type="warning" />
      <Badge label="Error" type="error" />
      <Badge label="Info" type="info" />
    </div>
  );
}
```

## Props

The Badge component accepts the following props:

- `label` (React.ReactNode, required): The content to display inside the badge. Can be text or any valid React node.

- `type` ('success' | 'warning' | 'error' | 'info' | 'neutral', optional, default: 'neutral'): Determines the color scheme and style of the badge.

  - `neutral`: Gray color scheme (default)
  - `success`: Green color scheme for positive or successful states
  - `warning`: Yellow color scheme for warning states
  - `error`: Red color scheme for error states
  - `info`: Blue color scheme for informational states

- `border` (boolean, optional, default: true): When true, adds a subtle border ring around the badge. Set to false for a flat appearance.

- `className` (string, optional): Additional CSS classes to be applied to the badge. These will be merged with the default styles.

## Examples

### Basic Usage

```jsx
import { Badge } from '@wedevs/tail-react';

function StatusIndicators() {
  return (
    <div className="space-y-4">
      {/* Basic badges with different types */}
      <div className="space-x-2">
        <Badge label="Default" />
        <Badge label="Completed" type="success" />
        <Badge label="Pending" type="warning" />
        <Badge label="Failed" type="error" />
        <Badge label="Note" type="info" />
      </div>

      {/* Flat badges (no border) */}
      <div className="space-x-2">
        <Badge label="Default" border={false} />
        <Badge label="Completed" type="success" border={false} />
        <Badge label="Pending" type="warning" border={false} />
        <Badge label="Failed" type="error" border={false} />
        <Badge label="Note" type="info" border={false} />
      </div>

      {/* With custom className */}
      <Badge label="Custom" className="px-4 py-2 text-sm" />

      {/* With React node as label */}
      <Badge
        label={
          <span className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-current mr-1" />
            Active
          </span>
        }
        type="success"
      />
    </div>
  );
}
```

## Style Variations

The Badge component comes with two main style variations:

1. **Bordered** (default, `border={true}`):

   - Includes a subtle border ring
   - Lighter background color
   - Provides more depth and definition

2. **Flat** (`border={false}`):
   - No border
   - Slightly darker background color
   - Clean, minimal appearance

## Color Schemes

Each type has its own color scheme that automatically adjusts based on the `border` prop:

- **Neutral** (`type="neutral"`):

  - Border: Gray-50 background with Gray-600 text
  - Flat: Gray-100 background with Gray-600 text

- **Success** (`type="success"`):

  - Border: Green-50 background with Green-700 text
  - Flat: Green-100 background with Green-700 text

- **Warning** (`type="warning"`):

  - Border: Yellow-50 background with Yellow-800 text
  - Flat: Yellow-100 background with Yellow-800 text

- **Error** (`type="error"`):

  - Border: Red-50 background with Red-700 text
  - Flat: Red-100 background with Red-700 text

- **Info** (`type="info"`):
  - Border: Blue-50 background with Blue-700 text
  - Flat: Blue-100 background with Blue-700 text

## Customization

The Badge component can be customized in several ways:

1. **Via Props**: Use the `type` and `border` props to change the appearance
2. **Via className**: Add custom classes to override or extend the default styles
3. **Via Content**: Use React nodes as labels to create more complex badge content

## Accessibility

The Badge component is rendered as a `<span>` element with appropriate text contrast ratios for all color schemes. When using custom content via the `label` prop, ensure that:

1. Color contrast meets WCAG guidelines
2. Any interactive elements are properly focusable
3. Screen reader text is provided where necessary

## Best Practices

1. Keep badge labels short and concise
2. Use appropriate types to convey meaning (e.g., 'error' for error states)
3. Maintain consistent usage patterns throughout your application
4. Consider using the flat style (border={false}) when displaying multiple badges in close proximity

For further customization and integration with your application, refer to the official documentation of React and Tailwind CSS.
