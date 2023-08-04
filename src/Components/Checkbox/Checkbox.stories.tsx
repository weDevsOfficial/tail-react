import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Allow comments',
  },
};

export const WithDescription: Story = {
  name: 'With Description',
  args: {
    label: 'Candidates',
    help: 'Get notified when a candidate applies for a job.',
  },
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    label: 'I am disabled',
    disabled: true,
  },
};

export const Checked: Story = {
  name: 'Checked',
  args: {
    label: 'I am checked',
    checked: true,
  },
};
