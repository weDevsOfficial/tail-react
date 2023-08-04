import { Modal, ModalActions, ModalBody, ModalHeader } from './Modal';
import { Button } from '@/Components/Button';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  buttonLabel?: string;
  buttonVariant?: 'primary' | 'secondary' | 'danger';
  onClose: () => void;
  onConfirm: () => void;
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
  return (
    <Modal isOpen={isOpen} onClose={() => onClose()}>
      <div className="flex">
        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:h-10 sm:w-10 ml-5 mt-5">
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
              onClick={() => {
                if (onConfirm) {
                  onConfirm();
                }
              }}
              className="ml-3"
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
