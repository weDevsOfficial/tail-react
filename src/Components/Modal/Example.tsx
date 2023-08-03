import React, { useState } from 'react';

import { Modal, ModalActions, ModalBody, ModalHeader } from './Modal';
import { Button } from '@/Components/Button';
import ConfirmModal from './ConfirmModal';

const ModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Modal</h1>

      <Button variant="secondary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>

      <Button
        variant="danger"
        style="outline"
        onClick={() => setIsDeleteOpen(true)}
        className="ml-4"
      >
        Delete
      </Button>

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

      <ConfirmModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        title="Are you sure?"
        message="Are you sure you want to deactivate your account? All of your data will be permanently removed from our servers forever. This action cannot be undone."
        onConfirm={() => {
          setIsDeleteOpen(false);
          alert('Account deleted!');
        }}
      />
    </div>
  );
};

export default ModalExample;
