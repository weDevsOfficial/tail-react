import React from 'react';
import { twMerge } from 'tailwind-merge';

interface DropdownItemProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ onClick, children, className }) => {
  return (
    <div
      className={twMerge(
        'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer',
        className
      )}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {children}
    </div>
  );
};

export default DropdownItem;
