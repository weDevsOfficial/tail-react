import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Components/Button';
import { TailReactBaseColorProvider } from './TailReactBaseColor';

const meta: Meta = {
  title: 'Context/TailReactBaseColor',
  component: TailReactBaseColorProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: [
        'slate',
        'gray',
        'zinc',
        'neutral',
        'stone',
        'red',
        'orange',
        'amber',
        'yellow',
        'lime',
        'green',
        'emerald',
        'teal',
        'cyan',
        'sky',
        'blue',
        'indigo',
        'violet',
        'purple',
        'fuchsia',
        'pink',
        'rose',
      ],
      defaultValue: 'indigo',
    },
  },
};

export default meta;

type Story = StoryObj<typeof TailReactBaseColorProvider>;

export const Default: Story = {
  args: {
    color: 'indigo',
  },
  render: (args) => (
    <TailReactBaseColorProvider color={args.color}>
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Primary Buttons</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="primary" style="fill">
            Fill Button
          </Button>
          <Button variant="primary" style="outline">
            Outline Button
          </Button>
          <Button variant="primary" style="link">
            Link Button
          </Button>
        </div>

        <h3 className="text-lg font-medium mt-4">Custom Color: {args.color}</h3>
        <p className="text-sm text-gray-500">
          The primary color has been changed from the default indigo to {args.color}. Try changing
          the color using the controls below!
        </p>
      </div>
    </TailReactBaseColorProvider>
  ),
};

export const ColorSamples: Story = {
  args: {
    color: 'indigo',
  },
  render: () => {
    const colors: string[] = [
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'indigo',
      'purple',
      'pink',
    ];

    return (
      <div className="space-y-6">
        <h3 className="text-lg font-medium">Color Samples</h3>
        <div className="grid grid-cols-4 gap-4">
          {colors.map((color) => (
            <div key={color}>
              <TailReactBaseColorProvider color={color}>
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium">{color}</span>
                  <Button variant="primary" style="fill">
                    {color}
                  </Button>
                </div>
              </TailReactBaseColorProvider>
            </div>
          ))}
        </div>
      </div>
    );
  },
};
