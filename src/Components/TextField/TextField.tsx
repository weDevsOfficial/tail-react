import React, { useState, useRef, useEffect, Fragment } from 'react';
import { Transition } from '@headlessui/react';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { twMerge } from 'tailwind-merge';

interface TextFieldProps {
  label: string;
  value: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  help?: React.ReactNode;
  error?: React.ReactNode;
  autoComplete?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  placeholder?: string;
  name?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
  contextualHelp?: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
  addon?: React.ReactNode;
  trailingAddon?: React.ReactNode;
  onChange: (value: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  disabled = false,
  readonly = false,
  required = false,
  help,
  error,
  autoComplete,
  maxLength,
  minLength,
  pattern,
  placeholder,
  name,
  type = 'text',
  contextualHelp,
  className,
  wrapperClassName,
  addon,
  trailingAddon,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

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

  const id = `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={twMerge('mb-4')}>
      <div className={twMerge('mb-2', contextualHelp && ' flex')}>
        <label
          htmlFor={id}
          className={twMerge('block text-sm font-medium leading-6 text-gray-900')}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>

        {contextualHelp && (
          <div>
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
              {contextualHelp}
            </Transition>
          </div>
        )}
      </div>

      <div
        className={twMerge(
          'relative',
          addon || trailingAddon
            ? 'flex ring-1 ring-inset ring-gray-300 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600'
            : '',
          wrapperClassName
        )}
      >
        {addon && <Fragment>{addon}</Fragment>}

        <input
          id={id}
          type={type}
          value={value}
          disabled={disabled}
          readOnly={readonly}
          autoComplete={autoComplete}
          maxLength={maxLength}
          minLength={minLength}
          pattern={pattern}
          placeholder={placeholder}
          name={name}
          onChange={handleChange}
          className={twMerge(
            'block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none',
            className,
            addon && 'pl-1',
            disabled &&
              'disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200',
            error && 'ring-red-300 text-red-900  placeholder:text-red-300 focus:ring-red-500'
          )}
        />

        {trailingAddon && <Fragment>{trailingAddon}</Fragment>}
      </div>
      {help && <p className="text-gray-500 text-sm mt-2">{help}</p>}
      {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default TextField;