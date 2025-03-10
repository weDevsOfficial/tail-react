import React, { useState } from 'react';

import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { cn } from '@/utils';

interface Option {
  key: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  disabled?: boolean;
}

interface SelectCardProps {
  label?: string;
  help?: React.ReactNode;
  error?: React.ReactNode;
  required?: boolean;
  options: Option[];
  selectedKey?: string;
  className?: string;
  onChange?: (selectedOption: Option) => void;
  renderItem: (option: Option) => React.JSX.Element;
}

const SelectCard = ({
  label,
  help,
  error,
  options,
  required = false,
  selectedKey,
  className,
  onChange,
  renderItem,
}: SelectCardProps) => {
  const [selectedOption, setSelectedOption] = useState(() => {
    if (!selectedKey) {
      return { key: '' };
    }

    return (
      options.find((option: { key: string }) => option.key === selectedKey) ||
      options[0]
    );
  });

  const handleChange = (option: Option) => {
    if (option.disabled) {
      return;
    }

    setSelectedOption(option);

    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div className="mb-4">
      {label && (
        <div className="mb-2">
          <label
            className={cn(
              'block text-sm leading-6 font-medium text-gray-900 dark:text-white',
            )}
          >
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        </div>
      )}

      <div className={cn('flex space-x-4', className)}>
        {options.map((option: Option, index: React.Key | null | undefined) => (
          <div
            key={index}
            className={cn(
              selectedOption.key === option.key
                ? 'border-indigo-600 dark:border-indigo-300'
                : 'border-gray-200 dark:border-gray-600',
              'relative flex cursor-pointer rounded-lg border-2 bg-white p-4 text-center focus:outline-hidden dark:bg-white/10 dark:text-gray-200',
              option.disabled ? 'cursor-not-allowed opacity-75 grayscale' : '',
            )}
            onClick={() => handleChange(option)}
          >
            {renderItem(option)}

            <div
              className={cn(
                'absolute top-0 right-0 rounded-full p-1',
                selectedOption.key === option.key
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'invisible',
              )}
            >
              <CheckCircleIcon className="h-5 w-5" />
            </div>
          </div>
        ))}
      </div>

      {help && (
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{help}</p>
      )}
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};

export { SelectCard };
