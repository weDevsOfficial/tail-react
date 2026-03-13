import { useState, useRef, useEffect, PropsWithChildren } from 'react';
import { Transition } from '@headlessui/react';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const ContextualHelp = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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
        <QuestionMarkCircleIcon className="ml-1 inline-block h-4 w-4 text-gray-500 hover:bg-gray-100" />
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
      >
        <div className="absolute z-10 mt-2 -ml-1 w-72 rounded-md border border-gray-200 bg-white p-4 shadow-md">
          {children}
        </div>
      </Transition>
    </div>
  );
};

export { ContextualHelp };
