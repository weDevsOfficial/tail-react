import type { Meta, StoryObj } from '@storybook/react';

import { Fragment } from 'react';
import { UserIcon } from '@heroicons/react/24/outline';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: 'First Name',
    placeholder: 'John',
  },
};

export const WithDescription: Story = {
  name: 'With Description',
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    help: 'We will never share your email with anyone else.',
    required: true,
    autoComplete: 'email',
  },
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    label: 'I am disabled',
    disabled: true,
    type: 'email',
    value: 'john@example.com',
  },
};

export const WithContextualHelp: Story = {
  name: 'With Contextual Help',
  args: {
    label: 'Password',
    placeholder: '********',
    type: 'password',
    required: true,
    contextualHelp: (
      <Fragment>
        <h3 className="font-medium text-gray-900 mb-2">Need Help?</h3>
        <p className="text-sm text-gray-500">
          If you're having trouble accessing your account, contact our customer support team for
          help.
        </p>
      </Fragment>
    ),
  },
};

export const WithError: Story = {
  name: 'With Error',
  args: {
    label: 'Name',
    placeholder: 'John Doe',
    required: true,
    error: 'Name is required',
  },
};

export const Readonly: Story = {
  name: 'Readonly',
  args: {
    label: 'Name',
    value: 'John Doe',
    readonly: true,
  },
};

export const WithAddon: Story = {
  name: 'With Addon',
  args: {
    label: 'Company Website',
    value: 'example.com',
    className: 'flex-1 border-0 ring-0 focus:ring-0 bg-transparent',
    addon: (
      <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">https://</span>
    ),
  },
};

export const WithTrailingAddon: Story = {
  name: 'With Trailing Addon',
  args: {
    label: 'Price',
    value: '100',
    className: 'flex-1 border-0 ring-0 focus:ring-0 bg-transparent',
    addon: <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">$</span>,
    trailingAddon: (
      <span className="flex select-none items-center pr-3 text-gray-500 sm:text-sm">USD</span>
    ),
  },
};

export const WithIconAddon: Story = {
  name: 'With Icon Addon',
  args: {
    label: 'Name',
    value: 'John Doe',
    className: 'flex-1 border-0 ring-0 focus:ring-0 bg-transparent',
    addon: (
      <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
        <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </span>
    ),
  },
};

export const WithTrailingIconAddon: Story = {
  name: 'With Trailing Addon',
  args: {
    label: 'Search',
    placeholder: 'Search',
    className: 'flex-1 border-0 ring-0 focus:ring-0 bg-transparent',
    trailingAddon: (
      <span className="flex select-none items-center pl-3 pr-2 text-gray-500 sm:text-sm">
        <kbd className="inline-flex items-center rounded-sm border border-gray-200 px-1 font-sans text-xs text-gray-400">
          ⌘K
        </kbd>
      </span>
    ),
  },
};
