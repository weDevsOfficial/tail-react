# Modal Component

The `Modal` component is a customizable and accessible modal dialog built with React and Tailwind CSS. It allows you to create responsive, visually appealing, and interactive modal windows for displaying content or gathering user input.

## Usage

Once installed, you can import and use the `Modal` component in your React application as follows:

```jsx
import React, { useState } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalActions,
} from '@wedevs/tail-react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        className="rounded-md bg-blue-500 px-4 py-2 text-white"
        onClick={handleOpenModal}
      >
        Open Modal
      </button>

      <Modal isOpen={isOpen} onClose={handleCloseModal} maxWidth="lg">
        <ModalHeader>Modal Title</ModalHeader>
        <ModalBody>
          <p>This is the modal content.</p>
        </ModalBody>
        <ModalActions>
          <button
            className="mr-2 rounded-md bg-red-500 px-4 py-2 text-white"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
          <button
            className="rounded-md bg-green-500 px-4 py-2 text-white"
            onClick={handleCloseModal}
          >
            Save
          </button>
        </ModalActions>
      </Modal>
    </div>
  );
};

export default App;
```

## Components

The `Modal` component library includes the following components:

1. `Modal`: The main modal component that wraps the modal dialog and handles its state and interactions.

2. `ModalHeader`: Represents the header section of the modal dialog, usually used for displaying the modal title.

3. `ModalBody`: Represents the main content section of the modal dialog.

4. `ModalActions`: Represents the footer section of the modal dialog, usually used for adding action buttons.

## Features

- Responsive and customizable modal dialog.
- Smooth transition animations for modal opening and closing.
- Accessible design with ARIA roles and attributes.

## Props

### Modal Component Props

- `isOpen` (boolean, required): Indicates whether the modal is open or closed.

- `onClose` (() => void, required): A callback function to be executed when the modal is closed.

- `maxWidth` (string, optional): The maximum width of the modal dialog. Supported values: 'sm', 'md', 'lg', 'xl', '2xl'.

### ModalHeader, ModalBody, and ModalActions Props

These components do not have any specific props and can be used as child components within the `Modal` component.

## Customization

The `Modal` component can be easily customized to fit your project's design and requirements. You can adjust the modal's appearance, animation, and behavior by modifying the Tailwind CSS classes or adding custom styles.

# ConfirmModal Component

The `ConfirmModal` component is a reusable and customizable confirmation modal built on top of the `Modal` component. It provides a simple way to create a confirmation dialog with an optional icon, a title, a message, and action buttons for confirming or canceling an action.

## Installation

Make sure you have the required dependencies installed in your project:

## Usage

Once installed, you can import and use the `ConfirmModal` component in your React application as follows:

```jsx
import React, { useState } from 'react';
import { ConfirmModal } from '@wedevs/tail-react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleConfirmAction = () => {
    // Handle the confirmed action here
    console.log('Action confirmed');
    setIsOpen(false);
  };

  return (
    <div>
      <button
        className="rounded-md bg-red-500 px-4 py-2 text-white"
        onClick={handleOpenModal}
      >
        Delete Item
      </button>

      <ConfirmModal
        isOpen={isOpen}
        title="Confirm Delete"
        message="Are you sure you want to delete this item? This action cannot be undone."
        buttonVariant="danger"
        buttonLabel="Delete"
        onClose={handleCloseModal}
        onConfirm={handleConfirmAction}
      />
    </div>
  );
};

export default App;
```

## Props

### ConfirmModal Component Props

- `isOpen` (boolean, required): Indicates whether the confirmation modal is open or closed.

- `title` (string, required): The title of the confirmation modal.

- `message` (string, required): The message or content of the confirmation modal.

- `buttonVariant` ('primary' | 'secondary' | 'danger', optional): The variant of the confirmation button. Default is 'danger'.

- `buttonLabel` (string, optional): The label text for the confirmation button. Default is 'Delete'.

- `onClose` (() => void, required): A callback function to be executed when the modal is closed or canceled.

- `onConfirm` (() => void, optional): A callback function to be executed when the confirmation button is clicked.

## Customization

The `ConfirmModal` component can be easily customized to fit your project's design and requirements. You can adjust the appearance, button labels, and other content based on your specific use case.
