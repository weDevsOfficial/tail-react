import type { Meta, StoryObj } from '@storybook/react';

import { Table, TableHeader, TableBody } from '@/Components/Table';

const rows = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 28 },
  { id: 3, name: 'Bob Johnson', age: 35 },
];

const meta: Meta<typeof Table> = {
  component: Table,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    children: (
      <>
        <TableHeader>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
          >
            Name
          </th>
          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
            Title
          </th>
          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
            Email
          </th>
          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
            Role
          </th>
          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
            <span className="sr-only">Edit</span>
          </th>
        </TableHeader>
        <TableBody
          items={rows}
          renderRow={(item, index) => (
            <tr key={index}>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                {item.id}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.name}</td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.age}</td>
            </tr>
          )}
        />
      </>
    ),
  },
};
