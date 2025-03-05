import type { Meta, StoryObj } from '@storybook/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

import { Dropdown, DropdownItem } from '@/Components/Dropdown';
import { Button } from '../Button';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    button: (
      <Button variant="secondary" style="fill" size="medium" className="inline-flex">
        Options <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1 text-gray-400" aria-hidden="true" />
      </Button>
    ),
    children: (
      <div className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden">
        <DropdownItem className="text-gray-700 block px-4 py-2 text-sm">
          Account Settings
        </DropdownItem>
        <DropdownItem className="text-gray-700 block px-4 py-2 text-sm">Support</DropdownItem>
        <DropdownItem className="text-gray-700 block px-4 py-2 text-sm">License</DropdownItem>
      </div>
    ),
  },
};

export const WithSimpleHeader: Story = {
  args: {
    button: (
      <Button variant="secondary" style="fill" size="medium" className="inline-flex">
        Settings <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1 text-gray-400" aria-hidden="true" />
      </Button>
    ),
    children: (
      <div className="absolute left-0 z-10 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-black/5 focus:outline-hidden">
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
          <DropdownItem className="text-gray-700 block px-4 py-2 text-sm">Sign out</DropdownItem>
        </div>
      </div>
    ),
  },
};

export const WithDivider: Story = {
  args: {
    button: (
      <Button variant="secondary" style="fill" size="medium" className="inline-flex">
        Options <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1 text-gray-400" aria-hidden="true" />
      </Button>
    ),
    children: (
      <div className="absolute left-0 z-10 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-black/5 focus:outline-hidden">
        <div className="py-1">
          <DropdownItem className="text-gray-700 block px-4 py-2 text-sm">Edit</DropdownItem>
          <DropdownItem className="text-gray-700 block px-4 py-2 text-sm">Duplicate</DropdownItem>
        </div>

        <div className="py-1">
          <DropdownItem className="text-gray-700 block px-4 py-2 text-sm">Archive</DropdownItem>
          <DropdownItem className="text-gray-700 block px-4 py-2 text-sm">Move</DropdownItem>
        </div>

        <div className="py-1">
          <DropdownItem className="text-gray-700 block px-4 py-2 text-sm">Share</DropdownItem>
          <DropdownItem className="text-gray-700 block px-4 py-2 text-sm">
            Add to favorites
          </DropdownItem>
        </div>

        <div className="py-1">
          <DropdownItem className="text-gray-700 block px-4 py-2 text-sm">Delete</DropdownItem>
        </div>
      </div>
    ),
  },
};
