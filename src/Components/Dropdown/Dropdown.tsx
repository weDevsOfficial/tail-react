import React, { useState, useRef, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

import DropdownItem from './DropdownItem';

interface DropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ button, children, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={twMerge('relative', className)}>
      <div onClick={() => setIsOpen(!isOpen)}>{button}</div>
      {isOpen && (
        <div
          ref={dropdownRef}
          className={twMerge(
            'absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg transition-opacity duration-300 ease-in-out'
          )}
        >
          {React.Children.map(children, (child) =>
            React.isValidElement(child)
              ? React.cloneElement(child as React.ReactElement, { onClick: handleItemClick }) // Add onClick prop to children
              : child
          )}
        </div>
      )}
    </div>
  );
};

export { Dropdown, DropdownItem };
