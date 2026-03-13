import type { Meta, StoryObj } from '@storybook/react';

import { Notice } from './Notice';

const meta: Meta<typeof Notice> = {
  component: Notice,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Notice>;

export const Default: Story = {
  args: {
    label: 'Order completed',
    type: 'success',
  },
};

export const Warning: Story = {
  name: 'Warning',
  args: {
    label: 'Attention needed',
    type: 'warning',
  },
};

export const Error: Story = {
  name: 'Error',
  args: {
    label: 'There were 2 errors with your submission',
    type: 'error',
  },
};

export const Info: Story = {
  name: 'Info',
  args: {
    label: 'This is a notice',
    type: 'info',
  },
};

export const SuccessWithDescription: Story = {
  name: 'Success with description',
  args: {
    label: 'Order completed',
    type: 'success',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.',
  },
};

export const ErrorWithList: Story = {
  name: 'Error with list',
  args: {
    label: 'There were 2 errors with your submission',
    type: 'error',
    children: (
      <ul className="list-inside list-disc">
        <li>Your password must be at least 8 characters</li>
        <li>
          Your password must include at least one pro wrestling finishing move
        </li>
      </ul>
    ),
  },
};

export const WarningWithLink: Story = {
  name: 'Warning without label',
  args: {
    type: 'warning',
    label: (
      <span>
        You have no credits left.{' '}
        <a
          href="#"
          className="font-medium text-yellow-700 underline hover:text-yellow-600"
        >
          Upgrade your account to add more credits.
        </a>
      </span>
    ),
  },
};
