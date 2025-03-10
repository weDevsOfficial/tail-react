import { cn } from '@/utils';
import React, { useEffect, useState } from 'react';

interface Option {
  key: string;
  value: string;
}

interface SelectProps {
  label?: string;
  help?: React.ReactNode;
  error?: React.ReactNode;
  required?: boolean;
  options: Option[];
  selectedKey?: string;
  className?: string;
  wrapperClassName?: string;
  onChange?: (selectedOption: Option) => void;
  props?: React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >;
}

const SelectInput: React.FC<SelectProps> = ({
  label,
  help,
  error,
  options,
  required = false,
  selectedKey,
  className,
  wrapperClassName,
  onChange,
  ...props
}) => {
  const [selectedOption, setSelectedOption] = useState(
    options.find(option => option.key === selectedKey) ?? options[0],
  );

  useEffect(() => {
    if (!selectedKey) {
      return;
    }

    setSelectedOption(
      options.find(option => option.key === selectedKey) ?? options[0],
    );
  }, [options, selectedKey]);

  const id = `input-${Math.random().toString(36).substr(2, 9)}`;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = options.find(
      option => option.key == event.target.value,
    );

    if (selectedOption) {
      setSelectedOption(selectedOption);

      if (onChange) {
        onChange(selectedOption);
      }
    }
  };

  return (
    <div className={cn('mb-4', wrapperClassName)}>
      {label && (
        <div className="mb-2">
          <label
            htmlFor={id}
            className={
              'block text-sm leading-6 font-medium text-gray-900 dark:text-white'
            }
          >
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        </div>
      )}
      <select
        className={cn(
          'block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-xs ring-1 ring-gray-300 outline-hidden ring-inset focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6 dark:bg-white/5 dark:text-gray-300 dark:ring-gray-500',
          className,
          {
            error:
              'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500',
          },
        )}
        value={selectedOption.key}
        onChange={handleChange}
        required={required}
        {...props}
      >
        {options.map(option => (
          <option key={option.key} value={option.key}>
            {option.value}
          </option>
        ))}
      </select>

      {help && (
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{help}</p>
      )}
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error}</p>
      )}
    </div>
  );
};

export { SelectInput };
