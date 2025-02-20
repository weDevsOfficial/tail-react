import React, { Fragment } from 'react';

import { ContextualHelp } from '../ContextualHelp';
import { cn } from '@/utils';

interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
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
  labelClassName?: string;
  wrapperClassName?: string;
  inputWrapperClassName?: string;
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
  labelClassName,
  wrapperClassName,
  inputWrapperClassName,
  addon,
  trailingAddon,
  onChange,
  ...rest
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const id = `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={cn('mb-4 w-full', wrapperClassName)}>
      {label && (
        <div className={cn('mb-2', { contextualHelp: ' flex' })}>
          <label
            htmlFor={id}
            className={cn(
              'block text-sm font-medium leading-6 text-gray-900 dark:text-white',
              labelClassName
            )}
          >
            {label} {required && <span className="text-red-500">*</span>}
          </label>

          {contextualHelp && <ContextualHelp>{contextualHelp}</ContextualHelp>}
        </div>
      )}

      <div
        className={cn(
          'relative',
          addon || trailingAddon
            ? 'flex bg-white dark:bg-white/5 ring-1 ring-inset ring-gray-300 dark:ring-white/10 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600'
            : '',
          inputWrapperClassName
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
          className={cn(
            'block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none bg-white dark:bg-white/5 dark:text-gray-300 dark:ring-gray-500',
            {
              className,
              addon: 'pl-1',
              disabled:
                'disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200',
              error: 'ring-red-300 text-red-900  placeholder:text-red-300 focus:ring-red-500',
            }
          )}
          {...rest}
        />

        {trailingAddon && <Fragment>{trailingAddon}</Fragment>}
      </div>
      {help && <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">{help}</p>}
      {error && <p className="text-red-600 dark:text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export { TextField };
