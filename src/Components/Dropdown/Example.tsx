import { Dropdown, DropdownItem } from '@/Components/Dropdown';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

import { Button } from '../Button';

const DropdownExample = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold border-b pb-4 mb-8">Dropdown</h1>
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
          <div className="mt-2 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-4 py-3" role="none">
              <p className="text-sm" role="none">
                Signed in as
              </p>
              <p className="truncate text-sm font-medium text-gray-900" role="none">
                tom@example.com
              </p>
            </div>
            <div className="py-1" role="none">
              <DropdownItem className="text-gray-700 block px-4 py-2 text-sm">
                Account Settings
              </DropdownItem>
              <DropdownItem className="text-gray-700 block px-4 py-2 text-sm">Support</DropdownItem>
              <DropdownItem className="text-gray-700 block px-4 py-2 text-sm">License</DropdownItem>
            </div>

            <div className="py-1" role="none">
              <DropdownItem className="text-gray-700 block px-4 py-2 text-sm">
                Sign out
              </DropdownItem>
            </div>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default DropdownExample;
