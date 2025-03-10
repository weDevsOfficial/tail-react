import { cn } from '@/utils';
import React from 'react';

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
      <table
        className={cn(
          'min-w-full divide-y divide-gray-200 dark:divide-gray-700 dark:border-gray-700',
          className,
        )}
      >
        {children}
      </table>
    </div>
  );
};

export const TableHeader = ({ className, children }: TableHeaderProps) => {
  return (
    <thead className={cn('bg-gray-50 dark:bg-gray-800', className)}>
      <tr>{children}</tr>
    </thead>
  );
};

export const TableBody = <T extends object>({
  items,
  className,
  renderRow,
}: TableBodyProps<T>) => {
  return (
    <tbody
      className={cn('divide-y divide-gray-200 dark:divide-gray-700', className)}
    >
      {items.map((item, index) => renderRow(item, index))}
    </tbody>
  );
};
