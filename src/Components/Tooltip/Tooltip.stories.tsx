import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './Tooltip';

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
    children: 'Hover Me',
    tooltipContent: 'Hello from Tooltip',
  },
};

export const WithCustomTrigger: Story = {
  name: 'With Custom Trigger',
  args: {
    children: (
      <>
        <button>Hover Me</button>
      </>
    ),
    tooltipContent: 'This is tooltip content',
    sideOffset: 2,
  },
};
