import type { Meta, StoryObj } from '@storybook/react';
import { PlusIcon, TrashIcon, UserGroupIcon } from '@heroicons/react/24/outline';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    style: 'fill',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  name: 'Secondary',
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Danger: Story = {
  name: 'Danger',
  args: {
    variant: 'danger',
    children: 'Danger Button',
  },
};

export const PrimaryOutline: Story = {
  name: 'Primary Outline',
  args: {
    variant: 'primary',
    style: 'outline',
    children: 'Primary Outline Button',
  },
};

export const DangerOutline: Story = {
  name: 'Danger Outline',
  args: {
    variant: 'danger',
    style: 'outline',
    children: 'Danger Outline Button',
  },
};

export const PrimaryDisabled: Story = {
  name: 'Primary Disabled',
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Primary Disabled Button',
  },
};

export const PrimaryIcon: Story = {
  name: 'Primary Icon',
  args: {
    variant: 'primary',
    className: 'inline-flex',
    children: (
      <>
        <PlusIcon className="h-5 w-5 mr-2" />
        Add People
      </>
    ),
  },
};

export const SecondaryIcon: Story = {
  name: 'Secondary Icon',
  args: {
    variant: 'secondary',
    className: 'inline-flex',
    children: (
      <>
        <UserGroupIcon className="h-5 w-5 mr-2" />
        Add People
      </>
    ),
  },
};

export const DangerIcon: Story = {
  name: 'Delete Button Icon',
  args: {
    variant: 'danger',
    className: 'inline-flex',
    children: (
      <>
        <TrashIcon className="h-5 w-5 mr-2" />
        Delete
      </>
    ),
  },
};

export const PrimaryLarge: Story = {
  name: 'Primary Large',
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Primary Big Button',
  },
};

export const PrimarySmall: Story = {
  name: 'Primary Small',
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Primary Small Button',
  },
};

export const PrimaryLink: Story = {
  name: 'Primary Link',
  args: {
    variant: 'primary',
    style: 'fill',
    as: 'a',
    target: '_blank',
    href: 'https://www.google.com',
    children: 'Primary Link Button',
  },
};
