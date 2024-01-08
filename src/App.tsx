import React, { useState } from 'react';
import { TextField, Textarea } from '.';

const App = () => {
  const [value, setValue] = useState('');

  return (
    <div className="p-6 space-y-4">
      <TextField
        label="Label"
        value={value}
        onChange={(value) => setValue(value)}
        onBlur={() => console.log('on blur')}
        onFocus={() => console.log('on focus')}
      />

      <Textarea
        label="Label"
        value={value}
        onChange={(value) => setValue(value)}
        onBlur={() => console.log('on blur')}
        onFocus={() => console.log('on focus')}
      />
    </div>
  );
};

export default App;
