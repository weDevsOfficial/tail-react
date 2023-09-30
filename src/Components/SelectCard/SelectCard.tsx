import React, { useState } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

interface Option {
  key: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
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
  renderItem: (item: Option) => React.ReactNode;
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

    return options.find((option: { key: string }) => option.key === selectedKey) || options[0];
  });

  const handleChange = (option: Option) => {
    setSelectedOption(option);

    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div className="mb-4">
      {label && (
        <div className="mb-2">
          <label className={twMerge('block text-sm font-medium leading-6 text-gray-900')}>
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        </div>
      )}

      <div className={twMerge('flex space-x-4', className)}>
        {options.map((option: Option, index: React.Key | null | undefined) => (
          <div
            key={index}
            className={classNames(
              selectedOption.key === option.key ? 'border-indigo-600' : 'border-gray-200',
              'relative flex cursor-pointer text-center rounded-lg border-2 p-4 bg-white focus:outline-none'
            )}
            onClick={() => handleChange(option)}
          >
            {renderItem(option)}

            <div
              className={classNames(
                'absolute top-0 right-0 p-1 rounded-full',
                selectedOption.key === option.key ? ' text-indigo-600' : 'invisible'
              )}
            >
              <CheckCircleIcon className="h-5 w-5" />
            </div>
          </div>
        ))}
      </div>

      {help && <p className="text-gray-500 text-sm mt-2">{help}</p>}
      {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
    </div>
  );
};

export { SelectCard };
