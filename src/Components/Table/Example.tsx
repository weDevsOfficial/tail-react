import { useEffect, useState } from 'react';
import { Table, TableHeader, TableBody } from '@/Components/Table';

interface User {
  id: number;
  name: string;
  age: number;
}

const rows: User[] = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 28 },
  { id: 3, name: 'Bob Johnson', age: 35 },
];

const TableExample = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="">
      <Table loading={loading}>
        <TableHeader>
          <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            ID
          </th>
          <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Age
          </th>
        </TableHeader>
        <TableBody
          items={rows}
          renderRow={(item: User) => (
            <>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                {item.id}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.name}</td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.age}</td>
            </>
          )}
        />
      </Table>
    </div>
  );
};

export default TableExample;
