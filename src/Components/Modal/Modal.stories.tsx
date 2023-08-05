import { useState } from 'react';
import { Meta } from '@storybook/react';

import { Button } from '@/Components/Button';
import { Modal, ModalHeader, ModalBody, ModalActions } from './Modal';
import { ConfirmModal } from './ConfirmModal';

const meta: Meta<typeof Modal> = {
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="">
          <ModalHeader>Need Help?</ModalHeader>
          <ModalBody>
            <p className="text-sm text-gray-500 mb-4">
              If you're having trouble accessing your account, contact our customer support team for
              help.
            </p>
          </ModalBody>

          <ModalActions>
            <Button variant="primary" onClick={() => setIsOpen(false)} className="ml-3">
              Contact Support
            </Button>

            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </ModalActions>
        </div>
      </Modal>
    </>
  );
};

export const Confirm = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="danger" style="outline" onClick={() => setIsOpen(true)}>
        Delete
      </Button>
      <ConfirmModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Are you sure?"
        message="Are you sure you want to deactivate your account? All of your data will be permanently removed from our servers forever. This action cannot be undone."
        onConfirm={() => {
          setIsOpen(false);
          alert('Account deleted!');
        }}
      />
    </>
  );
};
