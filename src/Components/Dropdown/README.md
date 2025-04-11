# Dropdown Component

The `Dropdown` component is a flexible and accessible dropdown menu implementation built with React and Tailwind CSS. It uses Headless UI's `Menu` component under the hood, providing robust keyboard navigation and accessibility features out of the box.

## Features

- 🎯 Click-triggered dropdown menu
- ⌨️ Full keyboard navigation support
- 🎨 Smooth animations with configurable transitions
- 🖱️ Click-outside behavior to dismiss
- 📱 Responsive and properly positioned
- 🌙 Dark mode compatible
- ♿ WAI-ARIA compliant

## Installation

The Dropdown component is part of the @wedevs/tail-react package:

```bash
npm install @wedevs/tail-react
# or
yarn add @wedevs/tail-react
```

## Usage

Import and use the `Dropdown` component in your React application:

```jsx
import { Dropdown, DropdownItem } from '@wedevs/tail-react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

function MyComponent() {
  return (
    <Dropdown
      button={
        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
          Options
          <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
        </button>
      }
    >
      <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
        <DropdownItem className="block px-4 py-2 text-sm text-gray-700">Edit</DropdownItem>
        <DropdownItem className="block px-4 py-2 text-sm text-gray-700">Duplicate</DropdownItem>
        <DropdownItem className="block px-4 py-2 text-sm text-gray-700">Delete</DropdownItem>
      </div>
    </Dropdown>
  );
}
```

## Components

### Dropdown Component

The main wrapper component that handles the dropdown functionality.

#### Props

- `button` (React.ReactNode, required): The trigger element that opens the dropdown. Usually a button or similar interactive element.

- `children` (React.ReactNode, required): The content of the dropdown menu. Usually a container with `DropdownItem` components.

- `className` (string, optional): Additional CSS classes to be applied to the dropdown wrapper.

### DropdownItem Component

A component for individual menu items within the dropdown.

#### Props

- `children` (React.ReactNode, required): The content of the menu item.

- `className` (string, optional): Additional CSS classes to be applied to the menu item.

- `activeClass` (string, optional, default: 'bg-gray-100 text-gray-900'): Classes to apply when the item is active (hovered or focused).

## Examples

### Basic Dropdown

```jsx
<Dropdown
  button={
    <Button variant="secondary">
      Options <ChevronDownIcon className="w-5 h-5 ml-2" />
    </Button>
  }
>
  <div className="py-1">
    <DropdownItem className="px-4 py-2 text-sm">Account settings</DropdownItem>
    <DropdownItem className="px-4 py-2 text-sm">Support</DropdownItem>
    <DropdownItem className="px-4 py-2 text-sm">Sign out</DropdownItem>
  </div>
</Dropdown>
```

### With Header and Dividers

```jsx
<Dropdown
  button={
    <Button variant="secondary">
      Settings <ChevronDownIcon className="w-5 h-5 ml-2" />
    </Button>
  }
>
  <div className="divide-y divide-gray-100">
    {/* Header section */}
    <div className="px-4 py-3">
      <p className="text-sm">Signed in as</p>
      <p className="text-sm font-medium text-gray-900">tom@example.com</p>
    </div>

    {/* Main menu items */}
    <div className="py-1">
      <DropdownItem className="px-4 py-2 text-sm">Your Profile</DropdownItem>
      <DropdownItem className="px-4 py-2 text-sm">Settings</DropdownItem>
    </div>

    {/* Footer section */}
    <div className="py-1">
      <DropdownItem className="px-4 py-2 text-sm text-red-700">Sign out</DropdownItem>
    </div>
  </div>
</Dropdown>
```

## Styling

The Dropdown component uses Tailwind CSS for styling:

### Default Styles

1. **Dropdown Wrapper**:

   - Relative positioning for proper menu placement
   - Left-aligned text by default

2. **Menu Items Container**:

   - White background
   - Rounded corners
   - Drop shadow
   - Ring/border for definition
   - Focus outline handling

3. **Menu Items**:
   - Hover state background
   - Proper text sizing and spacing
   - Cursor pointer on hover

### Customization

You can customize the appearance using:

1. **className prop** on both Dropdown and DropdownItem
2. **activeClass prop** on DropdownItem for hover/focus states
3. **Tailwind CSS classes** in the children content

## Accessibility

The Dropdown component follows WAI-ARIA practices for menus:

1. **Keyboard Navigation**:

   - `Space`/`Enter` to open/close menu
   - `Arrow` keys to navigate items
   - `Esc` to close menu
   - `Tab` to move focus out of menu

2. **ARIA Attributes**:

   - Proper role attributes
   - State management (expanded/collapsed)
   - Focus management

3. **Screen Reader Support**:
   - Announces menu state changes
   - Proper labeling of menu items
   - Clear interaction model

## Best Practices

1. **Button Content**:

   - Use clear, action-oriented labels
   - Include visual indicators (e.g., chevron icon)
   - Maintain consistent styling

2. **Menu Items**:

   - Group related items together
   - Use dividers to separate groups
   - Keep lists manageable (not too many items)
   - Consider using icons for visual aid

3. **Positioning**:

   - Ensure menu doesn't overflow viewport
   - Consider mobile viewports
   - Maintain proper spacing between items

4. **Interaction**:
   - Close menu when item is selected
   - Provide feedback for actions
   - Handle loading states appropriately

## Implementation Details

The component uses:

- Headless UI's `Menu` component for core functionality
- `Transition` for smooth animations
- `Fragment` for proper rendering
- `twMerge` for class name handling

## Browser Support

The component is compatible with all modern browsers and degrades gracefully in older browsers. The animations may not be available in browsers that don't support CSS transitions.

For further customization and integration with your application, refer to the official documentation of React, Headless UI, and Tailwind CSS.
