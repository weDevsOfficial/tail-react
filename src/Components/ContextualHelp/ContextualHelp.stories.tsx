import type { Meta, StoryObj } from '@storybook/react';

import { ContextualHelp } from './ContextualHelp';

const meta: Meta<typeof ContextualHelp> = {
  component: ContextualHelp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ContextualHelp>;

export const Default: Story = {
  args: {
    children: 'This is a contextual help component.',
  },
};

export const Formatted: Story = {
  name: 'Formatted',
  args: {
    children: (
      <div>
        <h3 className="mb-2 font-medium text-gray-900">Need Help?</h3>
        <p className="text-sm text-gray-500">
          If you're having trouble accessing your account, contact our customer
          support team for help.
        </p>
      </div>
    ),
  },
};
