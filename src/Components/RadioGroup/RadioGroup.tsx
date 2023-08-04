import { twMerge } from 'tailwind-merge';

interface Option {
  key: string;
  value: string;
}

interface RadioGroupProps {
  options: Option[];
  value: string;
  label?: string;
  help?: React.ReactNode;
  required?: boolean;
  onChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  required,
  onChange,
  help,
  ...props
}) => {
  return (
    <div className="mb-4">
      {props.label && (
        <div className="mb-3">
          <label
            htmlFor={props.label}
            className={twMerge('block text-sm font-medium leading-6 text-gray-900')}
          >
            {props.label} {required && <span className="text-red-500">*</span>}
          </label>

          {help && <div className="text-gray-500 text-sm mt-1">{help}</div>}
        </div>
      )}

      <div className="space-y-1">
        {options.map((option) => (
          <div key={option.key} className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                type="radio"
                id={option.key}
                name={props.label}
                value={option.key}
                checked={value === option.key}
                onChange={() => onChange(option.key)}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>

            <div className="ml-3 text-sm leading-6">
              <label htmlFor={option.key} className="block text-sm text-gray-900">
                {option.value}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { RadioGroup };
