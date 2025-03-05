import { Modal, ModalActions, ModalBody, ModalHeader } from './Modal';
import { Button } from '@/Components/Button';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  buttonLabel?: string;
  buttonVariant?: 'primary' | 'secondary' | 'danger';
  onClose: () => void;
  onConfirm: () => Promise<void> | void;
}

const ConfirmModal = ({
  title,
  message,
  buttonVariant = 'danger',
  buttonLabel = 'Delete',
  isOpen,
  onClose,
  onConfirm,
}: ConfirmModalProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = async () => {
    setIsLoading(true);
    try {
      await onConfirm();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={() => onClose()}>
      <div className="flex">
        <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:h-10 sm:w-10 ml-5 mt-5">
          <ExclamationTriangleIcon className="h-6 w-6 text-red-600" />
        </div>

        <div className="flex-1">
          <ModalHeader>{title}</ModalHeader>
          <ModalBody>
            <p className="text-sm text-gray-500 mb-4">{message}</p>
          </ModalBody>

          <ModalActions>
            <Button
              variant={buttonVariant}
              onClick={handleConfirm}
              className="ml-3"
              disabled={isLoading}
              loading={isLoading}
            >
              {buttonLabel}
            </Button>

            <Button variant="secondary" onClick={() => onClose()}>
              Close
            </Button>
          </ModalActions>
        </div>
      </div>
    </Modal>
  );
};

export { ConfirmModal };
