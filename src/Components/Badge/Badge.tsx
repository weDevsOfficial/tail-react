import { cn } from '@/utils';
import React from 'react';

interface BadgeProps {
  label: React.ReactNode;
  type?: 'success' | 'warning' | 'error' | 'info' | 'neutral';
  className?: string;
  border?: boolean;
}

const getBadgeColor = (type: BadgeProps['type'], border: BadgeProps['border']) => {
  switch (type) {
    case 'success':
      return border ? 'bg-green-50 text-green-700' : 'bg-green-100 text-green-700';
    case 'warning':
      return border ? 'bg-yellow-50 text-yellow-800' : 'bg-yellow-100 text-yellow-800';
    case 'error':
      return border ? 'bg-red-50 text-red-700' : 'bg-red-100 text-red-700';
    case 'info':
      return border ? 'bg-blue-50 text-blue-700' : 'bg-blue-100 text-blue-700';
    case 'neutral':
    default:
      return border ? 'bg-gray-50 text-gray-600' : 'bg-gray-100 text-gray-600';
  }
};

const getBadgeBorderColor = (type: BadgeProps['type']) => {
  switch (type) {
    case 'success':
      return 'ring-1 ring-inset ring-green-600/20';
    case 'warning':
      return 'ring-1 ring-inset ring-yellow-600/20';
    case 'error':
      return 'ring-1 ring-inset ring-red-600/10';
    case 'info':
      return 'ring-1 ring-inset ring-blue-700/10';
    case 'neutral':
    default:
      return 'ring-1 ring-inset ring-gray-500/10';
  }
};

const Badge: React.FC<BadgeProps> = ({ label, type = 'neutral', className, border = true }) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium',
        getBadgeColor(type, border),
        border && getBadgeBorderColor(type),
        className
      )}
    >
      {label}
    </span>
  );
};

export { Badge };
