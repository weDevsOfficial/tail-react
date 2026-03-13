import { cn } from '@/utils';
import React from 'react';
import { getColorClass } from '../../utils/colorUtils';

interface CheckboxProps {
  label: React.ReactNode;
  checked?: boolean;
  className?: string;
  labelClassName?: string;
  help?: React.ReactNode;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({
  label,
  help,
  className,
  labelClassName,
  onChange,
  disabled = false,
  ...props
}, ref) => {
  const id = `input-${Math.random().toString(36).substr(2, 9)}`;

  // Get color classes
  const textColor = getColorClass('text', '600');
  const darkTextColor = getColorClass('dark:text', '500');
  const focusRingColor = getColorClass('focus:ring', '600');

  return (
    <div className="relative mb-4 flex gap-x-3">
      <div className="flex h-6 items-center">
        <input
          ref={ref}
          type="checkbox"
          checked={props.checked}
          id={id}
          disabled={disabled}
          {...props}
          className={cn(
            `form-checkbox h-4 w-4 rounded-sm border-gray-300 ${textColor} ${darkTextColor} ${focusRingColor}`,
            className,
            disabled && 'cursor-not-allowed disabled:opacity-50',
          )}
          onChange={event => {
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
            disabled && 'cursor-not-allowed',
          )}
        >
          {label}
        </label>

        {help && <div className="text-gray-500 dark:text-gray-400">{help}</div>}
      </div>
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export { Checkbox };
