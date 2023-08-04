import { useState } from 'react';
import { Checkbox } from './Checkbox';

const CheckboxExample = () => {
  const [allowComments, setAllowComments] = useState(true);
  const [candidates, setCandidates] = useState(false);

  return (
    <div className="">
      <h1 className="text-2xl font-semibold border-b pb-4 mb-8">Checkbox</h1>

      <Checkbox
        label="Comments (disabled)"
        help="Get notified when someones posts a comment on a posting."
        checked={allowComments}
        disabled={true}
        onChange={(checked) => setAllowComments(checked)}
      />

      <Checkbox
        label="Candidates"
        help="Get notified when a candidate applies for a job."
        checked={candidates}
        onChange={(checked) => setCandidates(checked)}
      />
    </div>
  );
};

export default CheckboxExample;
