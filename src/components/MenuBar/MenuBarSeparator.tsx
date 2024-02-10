import * as React from 'react';

import * as MenuBarPrimitive from '@radix-ui/react-menubar';

import { cn } from '@/lib/utils';

export const MenuBarSeparator = React.forwardRef<
  React.ElementRef<typeof MenuBarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenuBarPrimitive.Separator>
>(function MenuBarSeparator({ className, ...props }, ref) {
  return <MenuBarPrimitive.Separator className={cn('-mx-1 my-1 h-px bg-muted', className)} ref={ref} {...props} />;
});
