import type { Meta, StoryObj } from '@storybook/react';

import { SwitchInput } from './SwitchInput';

const meta: Meta<typeof SwitchInput> = {
  component: SwitchInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SwitchInput>;

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
    initialValue: true,
    disabled: true,
  },
};
