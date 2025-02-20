import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

import DropdownItem from './DropdownItem';
import { cn } from '@/utils';

interface DropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ button, children, className }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button as="div" className={cn('flex items-center space-x-2', className)}>
        {button}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items as="div" className="focus:outline-none">
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export { Dropdown, DropdownItem };
