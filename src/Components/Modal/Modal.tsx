import { Fragment, PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import { cn } from '@/utils';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';

export interface ModalProps {
  isOpen: boolean;
  onClose(): void;
  maxWidth?: string;
}

const Modal = ({ isOpen, onClose, maxWidth = 'lg', children }: PropsWithChildren<ModalProps>) => {
  const maxWidthClass = {
    sm: 'sm:max-w-sm',
    md: 'sm:max-w-md',
    lg: 'sm:max-w-lg',
    xl: 'sm:max-w-xl',
    '2xl': 'sm:max-w-2xl',
  }[maxWidth];

  if (typeof window === 'undefined') {
    return null;
  }

  return ReactDOM.createPortal(
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        open={isOpen}
        onClose={onClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogPanel className="fixed inset-0 bg-gray-500/75 transition-opacity" />
          </TransitionChild>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className={cn(
                'inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full',
                maxWidthClass
              )}
            >
              {children}
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>,
    document.body
  );
};

const ModalHeader = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={cn(
        'text-lg font-medium text-gray-900 dark:text-gray-300 mb-4 px-5 pt-5',
        className
      )}
    >
      {children}
    </div>
  );
};

const ModalBody = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
  return <div className={cn('px-5 pt-0', className)}>{children}</div>;
};

const ModalActions = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={cn('px-5 py-4 mt-4 sm:px-6 sm:flex sm:flex-row-reverse', className)}>
      {children}
    </div>
  );
};

export { Modal, ModalHeader, ModalBody, ModalActions };
