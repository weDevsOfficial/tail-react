import React from 'react';
import { Menu } from '@headlessui/react';
import { cn } from '@/utils';

interface DropdownItemProps {
  children: React.ReactNode;
  className?: string;
  activeClass?: string;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  activeClass = 'bg-gray-100 text-gray-900',
  className,
}) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <div
          className={cn(
            'hover:cursor-pointer',
            active ? activeClass : '',
            className,
          )}
        >
          {children}
        </div>
      )}
    </Menu.Item>
  );
};

export default DropdownItem;
