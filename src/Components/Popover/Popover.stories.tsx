import type { Meta, StoryObj } from '@storybook/react';

import { Popover } from './Popover';

const meta: Meta<typeof Popover> = {
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    trigger: <button>Click Me</button>,
    children: 'Hello, world!',
    side: 'top',
  },
};

export const WithCloseButton: Story = {
  args: {
    trigger: <button>Click Me</button>,
    children: 'Hello, world!',
    showCloseButton: true,
  },
};

export const WithArrow: Story = {
  args: {
    trigger: <button>Click Me</button>,
    children: 'Hello, world!',
    showArrow: true,
  },
};

export const WithCustomArrow: Story = {
  args: {
    trigger: <button>Click Me</button>,
    children: 'Hello, world!',
    showArrow: true,
    arrowClassName: 'fill-red-500',
  },
};
