import React from 'react';
import { twMerge } from 'tailwind-merge';

interface TextareaProps {
  label: string;
  className?: string;
  help?: React.ReactNode;
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  required?: boolean;
  rows?: number;
  error?: React.ReactNode;
  onChange?: (value: string) => void;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  help,
  error,
  className,
  onChange,
  disabled = false,
  required = false,
  rows = 3,
  placeholder,
  ...props
}) => {
  const id = `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="mb-4 w-full">
      <div className="mb-2">
        <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      </div>

      <div className="relative">
        <textarea
          id={id}
          rows={rows}
          className={twMerge(
            'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
            className,
            disabled &&
              'disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200',
            error && 'ring-red-300 text-red-900  placeholder:text-red-300 focus:ring-red-500'
          )}
          defaultValue={''}
          onChange={(e) => onChange && onChange(e.target.value)}
          disabled={disabled}
          placeholder={placeholder}
          {...props}
        />

        {help && <div className="text-gray-500 text-sm mt-2">{help}</div>}
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      </div>
    </div>
  );
};

export { Textarea };
