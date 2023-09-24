import React from 'react';
import { twMerge } from 'tailwind-merge';
import {
  ExclamationTriangleIcon,
  XCircleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/20/solid';

export interface NoticeProps {
  label?: React.ReactNode;
  type?: 'success' | 'warning' | 'error' | 'info';
  className?: string;
  children?: React.ReactNode;
}

const getNoticeColor = (type: NoticeProps['type']) => {
  switch (type) {
    case 'warning':
      return 'bg-yellow-50 text-yellow-800 ring-yellow-600/20';
    case 'error':
      return 'bg-red-50 text-red-700 ring-red-600/10';
    case 'info':
      return 'bg-blue-50 text-blue-700 ring-blue-700/10';
    case 'success':
    default:
      return 'bg-green-50 text-green-700 ring-green-600/20';
  }
};

const getIcon = (type: NoticeProps['type']) => {
  switch (type) {
    case 'warning':
      return <ExclamationTriangleIcon className="h-5 w-5" aria-hidden="true" />;
    case 'error':
      return <XCircleIcon className="h-5 w-5" aria-hidden="true" />;
    case 'info':
      return <InformationCircleIcon className="h-5 w-5" aria-hidden="true" />;
    case 'success':
    default:
      return <CheckCircleIcon className="h-5 w-5" aria-hidden="true" />;
  }
};

const Notice: React.FC<NoticeProps> = ({ label, type = 'success', className, children }) => {
  const color = getNoticeColor(type);

  return (
    <div className={twMerge('rounded-md p-4 ring-1 ring-inset w-full', color, className)}>
      <div className="flex">
        <div className="flex-shrink-0">{getIcon(type)}</div>
        <div className="ml-3">
          {label && <h3 className="text-sm font-medium">{label}</h3>}
          {children && <div className="text-sm mt-2">{children}</div>}
        </div>
      </div>
    </div>
  );
};

export { Notice };
