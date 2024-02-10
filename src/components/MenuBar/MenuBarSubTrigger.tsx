import * as React from 'react';

import { ChevronRightIcon } from '@radix-ui/react-icons';
import * as MenuBarPrimitive from '@radix-ui/react-menubar';

import { cn } from '@/lib/utils';

export const MenuBarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenuBarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenuBarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(function MenuBarSubTrigger({ children, className, inset, ...props }, ref) {
  return (
    <MenuBarPrimitive.SubTrigger
      className={cn(
        'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
        inset && 'pl-8',
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto h-4 w-4" />
    </MenuBarPrimitive.SubTrigger>
  );
});
