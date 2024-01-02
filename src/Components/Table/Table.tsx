import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface TableProps {
  children: React.ReactNode;
  className?: string;
}

export interface TableHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export interface TableBodyProps<T> {
  className?: string;
  items: T[];
  renderRow: (item: T, index: number) => React.ReactNode;
}

export const Table = ({ className, children }: TableProps) => {
  return (
    <div>
      <table className={twMerge('min-w-full divide-y divide-gray-300', className)}>
        {children}
      </table>
    </div>
  );
};

export const TableHeader = ({ className, children }: TableHeaderProps) => {
  return (
    <thead className={twMerge('bg-gray-50', className)}>
      <tr>{children}</tr>
    </thead>
  );
};

export const TableBody = <T extends object>({ items, className, renderRow }: TableBodyProps<T>) => {
  return (
    <tbody className={twMerge('divide-y divide-gray-200', className)}>
      {items.map((item, index) => renderRow(item, index))}
    </tbody>
  );
};
