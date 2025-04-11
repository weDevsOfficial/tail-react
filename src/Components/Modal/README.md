# Modal Component

The `Modal` component is a flexible, accessible modal dialog implementation built with React and Tailwind CSS. It uses Headless UI's `Dialog` component under the hood, providing robust keyboard navigation and accessibility features out of the box.

## Features

- 🎯 Click-triggered modal dialog
- ⌨️ Full keyboard navigation support
- 🎨 Smooth animations with configurable transitions
- 🖱️ Click-outside behavior to dismiss
- 📱 Responsive and properly positioned
- 🌙 Dark mode compatible
- ♿ WAI-ARIA compliant

## Installation

The Modal component is part of the @wedevs/tail-react package:

```bash
npm install @wedevs/tail-react
# or
yarn add @wedevs/tail-react
```

## Usage

### Basic Modal

```jsx
import { Modal, ModalHeader, ModalBody, ModalActions } from '@wedevs/tail-react';
import { Button } from '@wedevs/tail-react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader>Need Help?</ModalHeader>
        <ModalBody>
          <p className="text-sm text-gray-500">
            If you're having trouble accessing your account, contact our customer support team for
            help.
          </p>
        </ModalBody>
        <ModalActions>
          <Button variant="primary" onClick={() => setIsOpen(false)}>
            Contact Support
          </Button>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </ModalActions>
      </Modal>
    </>
  );
}
```

## Components

### Modal Component

The main wrapper component that handles the modal functionality.

#### Props

- `isOpen` (boolean, required): Controls the visibility of the modal.

- `onClose` (() => void, required): Callback function called when the modal should close.

- `maxWidth` ('sm' | 'md' | 'lg' | 'xl' | '2xl', optional, default: 'lg'): Controls the maximum width of the modal content.

### ModalHeader Component

The header section of the modal, typically used for titles.

#### Props

- `children` (React.ReactNode, required): The content of the header.
- `className` (string, optional): Additional CSS classes.

### ModalBody Component

The main content section of the modal.

#### Props

- `children` (React.ReactNode, required): The content of the body.
- `className` (string, optional): Additional CSS classes.

### ModalActions Component

The footer section of the modal, typically used for action buttons.

#### Props

- `children` (React.ReactNode, required): The content of the actions section.
- `className` (string, optional): Additional CSS classes.

## Examples

### Different Sizes

```jsx
<Modal isOpen={isOpen} onClose={onClose} maxWidth="sm">
  {/* Small modal content */}
</Modal>

<Modal isOpen={isOpen} onClose={onClose} maxWidth="lg">
  {/* Large modal content */}
</Modal>

<Modal isOpen={isOpen} onClose={onClose} maxWidth="2xl">
  {/* Extra large modal content */}
</Modal>
```

### Custom Styling

```jsx
<Modal isOpen={isOpen} onClose={onClose}>
  <ModalHeader className="bg-gray-50">Custom Header</ModalHeader>
  <ModalBody className="bg-white">
    <div className="custom-content">{/* Custom content */}</div>
  </ModalBody>
  <ModalActions className="bg-gray-50">{/* Custom actions */}</ModalActions>
</Modal>
```

## Styling

The Modal component uses Tailwind CSS for styling:

### Default Styles

1. **Modal Overlay**:

   - Semi-transparent gray background
   - Smooth fade transition
   - Full viewport coverage

2. **Modal Content**:

   - White background (dark mode compatible)
   - Rounded corners
   - Drop shadow
   - Responsive padding
   - Proper spacing between sections

3. **Animations**:
   - Fade-in/out for overlay
   - Scale and slide for content
   - Smooth transitions

### Customization

You can customize the appearance using:

1. **className prop** on all modal components
2. **maxWidth prop** for different sizes
3. **Tailwind CSS classes** in the content

## Accessibility

The Modal component follows WAI-ARIA practices for dialogs:

1. **Keyboard Navigation**:

   - `Esc` to close modal
   - `Tab` to navigate focusable elements
   - `Shift + Tab` for reverse navigation
   - Focus trapping within modal

2. **ARIA Attributes**:

   - Proper role attributes
   - State management (open/closed)
   - Focus management
   - Proper labeling

3. **Screen Reader Support**:
   - Announces modal state changes
   - Proper heading hierarchy
   - Clear interaction model

## Best Practices

1. **Content Structure**:

   - Use clear, descriptive titles
   - Keep content focused and concise
   - Group related actions together
   - Use proper heading hierarchy

2. **Interaction**:

   - Provide clear action buttons
   - Include a way to dismiss
   - Handle loading states
   - Consider mobile interactions

3. **Positioning**:

   - Center modal in viewport
   - Ensure content is visible
   - Handle overflow gracefully
   - Consider mobile viewports

4. **State Management**:
   - Control modal state in parent
   - Handle async operations
   - Provide feedback for actions
   - Clean up on unmount

## ConfirmModal Component

The `ConfirmModal` is a specialized modal for confirmation dialogs:

```jsx
import { ConfirmModal } from '@wedevs/tail-react';

function DeleteConfirmation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="danger" onClick={() => setIsOpen(true)}>
        Delete Account
      </Button>

      <ConfirmModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Delete Account"
        message="Are you sure you want to delete your account? This action cannot be undone."
        buttonVariant="danger"
        buttonLabel="Delete"
        onConfirm={async () => {
          // Handle deletion
          await deleteAccount();
          setIsOpen(false);
        }}
      />
    </>
  );
}
```

### ConfirmModal Props

- `isOpen` (boolean, required): Controls modal visibility
- `title` (string, required): Confirmation title
- `message` (string, required): Confirmation message
- `buttonVariant` ('primary' | 'secondary' | 'danger', optional): Action button style
- `buttonLabel` (string, optional): Action button text
- `onClose` (() => void, required): Close handler
- `onConfirm` (() => Promise<void> | void, required): Confirmation handler

## Implementation Details

The component uses:

- Headless UI's `Dialog` for core functionality
- `Transition` for smooth animations
- `ReactDOM.createPortal` for proper rendering
- `twMerge` for class name handling

## Browser Support

The component is compatible with all modern browsers and degrades gracefully in older browsers. The animations may not be available in browsers that don't support CSS transitions.

For further customization and integration with your application, refer to the official documentation of React, Headless UI, and Tailwind CSS.
