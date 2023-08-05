import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Neutral: Story = {
  args: {
    label: 'Badge',
  },
};

export const Success: Story = {
  name: 'Success',
  args: {
    label: 'Badge',
    type: 'success',
  },
};

export const Warning: Story = {
  name: 'Warning',
  args: {
    label: 'Badge',
    type: 'warning',
  },
};

export const Error: Story = {
  name: 'Error',
  args: {
    label: 'Badge',
    type: 'error',
  },
};

export const Info: Story = {
  name: 'Info',
  args: {
    label: 'Badge',
    type: 'info',
  },
};

export const NeutralNoBorder: Story = {
  name: 'Neutral Flat',
  args: {
    label: 'Badge',
    border: false,
  },
};

export const SuccessNoBorder: Story = {
  name: 'Success Flat',
  args: {
    label: 'Badge',
    type: 'success',
    border: false,
  },
};

export const WarningNoBorder: Story = {
  name: 'Warning Flat',
  args: {
    label: 'Badge',
    type: 'warning',
    border: false,
  },
};

export const ErrorNoBorder: Story = {
  name: 'Error Flat',
  args: {
    label: 'Badge',
    type: 'error',
    border: false,
  },
};

export const InfoNoBorder: Story = {
  name: 'Info Flat',
  args: {
    label: 'Badge',
    type: 'info',
    border: false,
  },
};
