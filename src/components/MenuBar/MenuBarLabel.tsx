import * as React from 'react';

import * as MenuBarPrimitive from '@radix-ui/react-menubar';

import { cn } from '@/lib/utils';

export const MenuBarLabel = React.forwardRef<
  React.ElementRef<typeof MenuBarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenuBarPrimitive.Label> & {
    inset?: boolean;
  }
>(function MenuBarLabel({ className, inset, ...props }, ref) {
  return (
    <MenuBarPrimitive.Label
      className={cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
      ref={ref}
      {...props}
    />
  );
});
