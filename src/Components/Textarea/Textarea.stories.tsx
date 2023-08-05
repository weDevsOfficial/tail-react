import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: 'About',
  },
};

export const WithHelp: Story = {
  name: 'With Help',
  args: {
    label: 'About',
    help: 'Write a few sentences about yourself.',
    onChange(value) {
      console.log(value);
    },
  },
};

export const WithPlaceholder: Story = {
  name: 'With Placeholder',
  args: {
    label: 'Comments',
    placeholder: 'Tell us what you think.',
  },
};

export const WithValue: Story = {
  name: 'With Value',
  args: {
    label: 'About',
    value:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliqu',
  },
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    label: 'About',
    help: 'Write a few sentences about yourself.',
    disabled: true,
  },
};
