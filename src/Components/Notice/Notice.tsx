import React, { useState } from 'react';

import {
  ExclamationTriangleIcon,
  XCircleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/20/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { cn } from '@/utils';

export interface NoticeProps {
  label?: React.ReactNode;
  type?: 'success' | 'warning' | 'error' | 'info';
  className?: string;
  children?: React.ReactNode;
  dismissible?: boolean;
}

const getNoticeColor = (type: NoticeProps['type']) => {
  switch (type) {
    case 'warning':
      return 'bg-yellow-50 text-yellow-800 ring-yellow-600/20 dark:bg-yellow-700 dark:text-yellow-200 dark:ring-yellow-500/50';
    case 'error':
      return 'bg-red-50 text-red-700 ring-red-600/10 dark:bg-red-700 dark:text-red-200 dark:ring-red-500/50';
    case 'info':
      return 'bg-blue-50 text-blue-700 ring-blue-700/10 dark:bg-blue-700 dark:text-blue-200 dark:ring-blue-500/50';
    case 'success':
    default:
      return 'bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-700 dark:text-green-200 dark:ring-green-500/50';
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

const Notice: React.FC<NoticeProps> = ({
  label,
  type = 'success',
  className,
  dismissible = false,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const color = getNoticeColor(type);

  if (!isVisible) return null;

  return (
    <div className={cn('rounded-md p-4 ring-1 ring-inset w-full', color, className)}>
      <div className="flex justify-between">
        <div className="flex">
          <div className="flex-shrink-0">{getIcon(type)}</div>
          <div className="ml-3">
            {label && <h3 className="text-sm font-medium">{label}</h3>}
            {children && <div className="text-sm mt-2">{children}</div>}
          </div>
        </div>

        {dismissible && (
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 ml-4"
            title="Dismiss the notice"
          >
            <XMarkIcon className="h-4 w-4 text-gray-500 dark:text-gray-300" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
};

export { Notice };
