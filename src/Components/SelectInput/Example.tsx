import { useState } from 'react';

import { SelectInput } from './SelectInput';

const SelectExample = () => {
  const [selection, setselection] = useState('option3');
  return (
    <div className="">
      <h1 className="text-2xl font-semibold border-b pb-4 mb-8">Select</h1>

      <SelectInput
        label="Select an option"
        required={true}
        help="This is a help text"
        selectedKey={selection}
        options={[
          { value: 'Option 1', key: 'option1' },
          { value: 'Option 2', key: 'option2' },
          { value: 'Option 3', key: 'option3' },
          { value: 'Option 4', key: 'option4' },
        ]}
        onChange={(selectedOption) => setselection(selectedOption.key)}
      />
    </div>
  );
};

export default SelectExample;
