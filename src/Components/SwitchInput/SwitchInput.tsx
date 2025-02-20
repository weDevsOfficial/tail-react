import { useState, useEffect, ReactNode } from 'react';
import { Switch } from '@headlessui/react';
import { cn } from '@/utils';

type Props = {
  label: string;
  initialValue?: boolean;
  help?: ReactNode;
  disabled?: boolean;
  html?: boolean;
  className?: string;
  onChange?: (status: boolean) => void;
};

const SwitchInput = ({
  initialValue = false,
  label,
  help,
  disabled = false,
  html = false,
  className,
  onChange,
}: Props) => {
  const [enabled, setState] = useState(initialValue);

  // Reset the state when the initialValue changes
  useEffect(() => {
    setState(initialValue);
  }, [initialValue]);

  const toggleInput = (status: boolean) => {
    setState(status);

    if (onChange) {
      onChange(status);
    }
  };

  return (
    <Switch.Group as="div" className={cn('relative flex items-start mb-4', className)}>
      <Switch
        checked={enabled}
        disabled={disabled}
        onChange={toggleInput}
        className={cn(
          enabled ? 'bg-indigo-600 dark:bg-indigo-500' : 'bg-gray-200 dark:bg-gray-600',
          'relative mt-1 inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
          disabled ? 'cursor-not-allowed opacity-50' : ''
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
          )}
        />
      </Switch>
      <Switch.Label as="span" className="ml-3">
        <div className="text-sm leading-6">
          <label className={cn('font-medium cursor-pointer text-gray-900 dark:text-white')}>
            {label}
          </label>

          {help && !html && <p className="text-gray-500 dark:text-gray-400 text-sm">{help}</p>}

          {help && html && (
            <p
              className="text-gray-500 dark:text-gray-400 text-sm"
              dangerouslySetInnerHTML={{ __html: help }}
            />
          )}
        </div>
      </Switch.Label>
    </Switch.Group>
  );
};

export { SwitchInput };
