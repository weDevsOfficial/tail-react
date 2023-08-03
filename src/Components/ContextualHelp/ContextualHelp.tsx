import React, { useState, useRef, useEffect, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { Transition } from '@headlessui/react';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const ContextualHelp = ({ children }: PropsWithChildren) => {
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

  return (
    <div className="relative inline-block">
      <div onClick={() => setIsOpen(!isOpen)}>
        <QuestionMarkCircleIcon className="inline-block w-4 h-4 ml-1 text-gray-500 hover:bg-gray-100" />
      </div>

      <Transition
        show={isOpen}
        ref={dropdownRef}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        className={twMerge('absolute z-10 mt-2 -ml-1 w-48 rounded-md shadow-lg')}
      >
        <div className="bg-white border border-gray-200 rounded-md shadow-md p-4 w-72">
          {children}
        </div>
      </Transition>
    </div>
  );
};

export { ContextualHelp };
