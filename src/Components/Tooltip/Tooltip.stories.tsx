import type { Meta, StoryObj } from '@storybook/react';

import Tooltip from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'Hello, world!',
    children: 'Hover me',
  },
};

export const WithOffset: Story = {
  args: {
    content: 'Hello, world!',
    offset: 20,
    children: 'Hover me',
  },
};

export const WithCustomContent: Story = {
  args: {
    content: (
      <div className="p-4 bg-gray-900 text-white rounded-md shadow-lg">
        <h3 className="text-lg font-semibold">Hello, world!</h3>
        <p className="text-sm">This is a custom tooltip content.</p>
      </div>
    ),
    children: 'Hover me',
  },
};

export const WithCustomArrow: Story = {
  args: {
    content: 'Hello, world!',
    arrowClassName: 'fill-red-500',
    className: 'bg-red-500',
    children: 'Hover me',
  },
};

// with white background
export const WithWhiteBackground: Story = {
  args: {
    content: 'Hello, world!',
    className: 'bg-white text-gray-900 text-sm shadow-lg border border-gray-200',
    arrowClassName: 'fill-gray-200',
    children: 'Hover me',
  },
};
