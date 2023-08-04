import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface Option {
  key: string;
  value: string;
}

interface SelectProps {
  label?: string;
  help?: React.ReactNode;
  required?: boolean;
  options: Option[];
  selectedKey?: string;
  className?: string;
  onChange?: (selectedOption: Option) => void;
  props?: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
}

const SelectInput: React.FC<SelectProps> = ({
  label,
  help,
  options,
  required = false,
  selectedKey,
  className,
  onChange,
  ...props
}) => {
  const [selectedOption, setSelectedOption] = useState(
    options.find((option) => option.key === selectedKey) || options[0]
  );

  const id = `input-${Math.random().toString(36).substr(2, 9)}`;
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = options.find((option) => option.key == event.target.value);

    if (selectedOption) {
      setSelectedOption(selectedOption);

      if (onChange) {
        onChange(selectedOption);
      }
    }
  };

  return (
    <div className="mb-4">
      {label && (
        <div className="mb-2">
          <label
            htmlFor={id}
            className={twMerge('block text-sm font-medium leading-6 text-gray-900')}
          >
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        </div>
      )}
      <select
        className={twMerge(
          'block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none',
          className
        )}
        value={selectedOption.key}
        onChange={handleChange}
        required={required}
        {...props}
      >
        {options.map((option) => (
          <option key={option.key} value={option.key}>
            {option.value}
          </option>
        ))}
      </select>

      {help && <p className="text-gray-500 text-sm mt-2">{help}</p>}
    </div>
  );
};

export { SelectInput };
