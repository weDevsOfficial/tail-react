import React, { ForwardedRef } from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { cn } from '@/utils';

type Props = {
  trigger: React.ReactNode;
  className?: string;
  children: React.ReactNode;
  sideOffset?: number;
  showCloseButton?: boolean;
  showArrow?: boolean;
  arrowClassName?: string;
  side: 'top' | 'right' | 'bottom' | 'left';
};

const Popover = React.forwardRef(
  (
    {
      trigger,
      className,
      children,
      sideOffset = 10,
      showCloseButton = false,
      showArrow = false,
      arrowClassName,
      side,
      ...props
    }: Props,
    forwardedRef: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <PopoverPrimitive.Root>
        <PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            className={cn(
              'bg-white px-4 py-2 overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade',
              className
            )}
            sideOffset={sideOffset}
            side={side}
            {...props}
            ref={forwardedRef}
          >
            {children}

            {showArrow && (
              <PopoverPrimitive.Arrow className={cn('fill-white opacity-100', arrowClassName)} />
            )}

            {showCloseButton && (
              <PopoverPrimitive.Close className="absolute top-1.5 right-1.5">
                <XMarkIcon className="h-4 w-4 text-gray-400 hover:text-gray-600" />
              </PopoverPrimitive.Close>
            )}
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    );
  }
);

export { Popover };
