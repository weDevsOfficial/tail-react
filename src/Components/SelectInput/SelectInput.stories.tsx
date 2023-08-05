import { Meta, StoryObj } from '@storybook/react';

import { SelectInput } from './SelectInput';

const meta: Meta<typeof SelectInput> = {
  component: SelectInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SelectInput>;

export const Default: Story = {
  args: {
    label: 'Select an option',
    options: [
      { value: 'Option 1', key: 'option1' },
      { value: 'Option 2', key: 'option2' },
      { value: 'Option 3', key: 'option3' },
      { value: 'Option 4', key: 'option4' },
    ],
  },
};

export const WithDescription: Story = {
  name: 'With Help Text',
  args: {
    label: 'Select an option',
    help: 'This is a help text',
    options: [
      { value: 'Option 1', key: 'option1' },
      { value: 'Option 2', key: 'option2' },
      { value: 'Option 3', key: 'option3' },
      { value: 'Option 4', key: 'option4' },
    ],
  },
};
