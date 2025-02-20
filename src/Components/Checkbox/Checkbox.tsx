import { cn } from '@/utils';
import React from 'react';

interface CheckboxProps {
  label: string;
  checked?: boolean;
  className?: string;
  labelClassName?: string;
  help?: React.ReactNode;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  help,
  className,
  labelClassName,
  onChange,
  disabled = false,
  ...props
}) => {
  const id = `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="relative flex gap-x-3 mb-4">
      <div className="flex h-6 items-center">
        <input
          type="checkbox"
          checked={props.checked}
          id={id}
          disabled={disabled}
          {...props}
          className={cn(
            'h-4 w-4 rounded form-checkbox border-gray-300 text-indigo-600 dark:text-indigo-500 focus:ring-indigo-600',
            className,
            disabled && 'disabled:opacity-50 cursor-not-allowed'
          )}
          onChange={(event) => {
            if (onChange) {
              onChange(event.target.checked);
            }
          }}
        />
      </div>
      <div className="text-sm leading-6">
        <label
          htmlFor={id}
          className={cn(
            'font-medium text-gray-900 dark:text-gray-300',
            labelClassName,
            disabled && 'cursor-not-allowed'
          )}
        >
          {label}
        </label>

        {help && <div className="text-gray-500 dark:text-gray-400">{help}</div>}
      </div>
    </div>
  );
};

export { Checkbox };
