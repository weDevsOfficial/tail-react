import { useState } from 'react';
import { RadioGroup } from './RadioGroup';

const RadioExample = () => {
  const [radio, setRadio] = useState('option1');

  return (
    <div className="">
      <h1 className="mb-8 border-b border-gray-200 pb-4 text-2xl font-semibold">
        Radio Group
      </h1>

      <RadioGroup
        label="Notifications"
        required={true}
        value={radio}
        help="How do you prefer to receive notifications?"
        options={[
          { value: 'Email', key: 'option1' },
          { value: 'SMS', key: 'option2' },
          { value: 'Push notification', key: 'option3' },
        ]}
        onChange={selectedOption => setRadio(selectedOption)}
      />
    </div>
  );
};

export default RadioExample;
