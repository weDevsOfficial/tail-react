import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { twMerge } from 'tailwind-merge';

interface TooltipProps {
  children: string | React.ReactNode;
  sideOffset?: number;
  tooltipContent: string | React.ReactNode;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  sideOffset = 5,
  tooltipContent,
  className,
}): JSX.Element => {
  const triggerContent = typeof children === 'string' ? <span>{children}</span> : children;

  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{triggerContent}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            className={twMerge(
              'z-50 overflow-hidden rounded-md border bg-white px-3 py-1.5 text-sm text-black shadow-md',
              className
            )}
            sideOffset={sideOffset}
          >
            {tooltipContent}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export { Tooltip };
