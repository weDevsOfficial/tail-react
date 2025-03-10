import { Fragment } from 'react';
import { ContextualHelp } from '../ContextualHelp';
import { cn } from '@/utils';

interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
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
  id?: string;
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
  id = `input-${Math.random().toString(12)}`,
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

  return (
    <div className={cn('mb-4 w-full', wrapperClassName)}>
      {label && (
        <div className={cn('mb-2', { flex: contextualHelp })}>
          <label
            htmlFor={id}
            className={cn(
              'block text-sm leading-6 font-medium text-gray-900 dark:text-white',
              labelClassName,
            )}
          >
            {label} {required && <span className="text-red-500">*</span>}
          </label>

          {contextualHelp && <ContextualHelp>{contextualHelp}</ContextualHelp>}
        </div>
      )}

      <div
        className={cn('relative', inputWrapperClassName, {
          'flex rounded-md bg-white shadow-xs ring-1 ring-gray-300 ring-inset focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-inset dark:bg-white/5 dark:ring-white/10':
            addon || trailingAddon,
        })}
      >
        {addon ? <>{addon}</> : null}

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
            'block w-full rounded-md border-0 bg-white px-3 py-1.5 text-gray-900 shadow-xs ring-1 ring-gray-300 outline-hidden ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6 dark:bg-white/5 dark:text-gray-300 dark:ring-gray-500',
            className,
            {
              'pl-1': addon,
              'disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200':
                disabled,
              'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500':
                error,
            },
          )}
          {...rest}
        />

        {trailingAddon && <Fragment>{trailingAddon}</Fragment>}
      </div>
      {help && (
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{help}</p>
      )}
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error}</p>
      )}
    </div>
  );
};

export { TextField };
