import React from 'react';
import { twMerge } from 'tailwind-merge';
import { getColorClass } from '../../utils/colorUtils';

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

  // Get color classes
  const textColor = getColorClass('text', '600');
  const darkTextColor = getColorClass('dark:text', '500');
  const focusRingColor = getColorClass('focus:ring', '600');

  return (
    <div className="relative flex gap-x-3 mb-4">
      <div className="flex h-6 items-center">
        <input
          type="checkbox"
          checked={props.checked}
          id={id}
          disabled={disabled}
          {...props}
          className={twMerge(
            `h-4 w-4 rounded form-checkbox border-gray-300 ${textColor} ${darkTextColor} ${focusRingColor}`,
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
          className={twMerge(
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
