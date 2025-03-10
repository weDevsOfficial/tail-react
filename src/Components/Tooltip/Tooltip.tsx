import React, { ReactNode } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '@/utils';

interface TooltipProps {
  content: ReactNode | string;
  children: React.ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  arrowClassName?: string;
  offset?: number;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  side = 'top',
  offset = 5,
  className,
  arrowClassName,
}) => {
  return (
    <TooltipPrimitive.Provider delayDuration={100}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          {typeof children === 'string' ? <span>{children}</span> : children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          sideOffset={offset}
          side={side}
          className="animate-slide-up-fade z-[99] items-center overflow-hidden"
        >
          {typeof content === 'string' ? (
            <span
              className={cn(
                'block max-w-xs rounded-md bg-gray-900 px-2.5 py-1.5 text-center text-xs text-white opacity-90 shadow-lg',
                className,
              )}
            >
              {content}
            </span>
          ) : (
            content
          )}
          <TooltipPrimitive.Arrow
            className={cn('fill-gray-900 opacity-90', arrowClassName)}
          />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export { Tooltip };
