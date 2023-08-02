import { Dropdown, DropdownItem } from '@/Components/Dropdown';
import { Button } from '../Button';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const DropdownExample = () => {
  return (
    <div className="flex mb-8">
      <Dropdown
        button={
          <Button variant="secondary" style="fill" size="medium" className="inline-flex">
            Options{' '}
            <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1 text-gray-400" aria-hidden="true" />
          </Button>
        }
        className="mx-4"
      >
        <div className="divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-4 py-3" role="none">
            <p className="text-sm" role="none">
              Signed in as
            </p>
            <p className="truncate text-sm font-medium text-gray-900" role="none">
              tom@example.com
            </p>
          </div>
          <div className="py-1" role="none">
            <DropdownItem onClick={() => console.log('Option 1')}>Account Settings</DropdownItem>
            <DropdownItem onClick={() => console.log('Option 2')}>Support</DropdownItem>
            <DropdownItem onClick={() => console.log('Option 3')}>License</DropdownItem>
          </div>

          <div className="py-1" role="none">
            <DropdownItem onClick={() => console.log('Option 4')}>Sign out</DropdownItem>
          </div>
        </div>
      </Dropdown>
    </div>
  );
};

export default DropdownExample;
