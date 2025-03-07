import { cn } from '@/utils';
import React from 'react';

interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  label?: string;
  className?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  help?: React.ReactNode;
  disabled?: boolean;
  placeholder?: string;
  id?: string;
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
  labelClassName,
  wrapperClassName,
  onChange,
  id = `input-${Math.random().toString(12)}`,
  value = '',
  disabled = false,
  required = false,
  rows = 3,
  placeholder,
  ...props
}) => {
  return (
    <div className={cn('mb-4 w-full', wrapperClassName)}>
      {label && (
        <div className="mb-2">
          <label
            htmlFor={id}
            className={cn(
              'block text-sm leading-6 font-medium text-gray-900 dark:text-gray-300',
              labelClassName,
            )}
          >
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        </div>
      )}

      <div className="relative">
        <textarea
          id={id}
          rows={rows}
          className={cn(
            'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6 dark:bg-white/5 dark:text-gray-300',
            className,
            {
              disabled:
                'disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 dark:disabled:bg-gray-600',
              error:
                'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500',
            },
          )}
          value={value}
          onChange={e => onChange && onChange(e.target.value)}
          disabled={disabled}
          placeholder={placeholder}
          {...props}
        />

        {help && <div className="mt-2 text-sm text-gray-500">{help}</div>}
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export { Textarea };
