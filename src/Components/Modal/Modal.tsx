import { PropsWithChildren } from 'react';
import { cn } from '@/utils';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';

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

  return (
    <>
      <Dialog
        transition
        open={isOpen}
        onClose={onClose}
        className="fixed z-10 overflow-auto inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0 data-[closed]:ease-in data-[closed]:duration-200"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel
            transition
            className={cn(
              'inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left shadow-xl sm:my-8 sm:align-middle sm:w-full overflow-scroll max-h-[calc(100vh-4rem)] transition duration-300 ease-out translate-y-4 sm:translate-y-0 sm:scale-95 data-[open]:translate-y-0 data-[open]:scale-100 data-[open]:opacity-100 data-[closed]:opacity-0 data-[closed]:translate-y-4 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 data-[closed]:ease-in data-[closed]:duration-200',
              maxWidthClass
            )}
          >
            {children}
          </DialogPanel>
        </div>
      </Dialog>
    </>
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
