import * as React from 'react';

import { DotFilledIcon } from '@radix-ui/react-icons';
import * as MenuBarPrimitive from '@radix-ui/react-menubar';

import { cn } from '@/lib/utils';

export const MenuBarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenuBarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenuBarPrimitive.RadioItem>
>(function MenuBarRadioItem({ children, className, ...props }, ref) {
  return (
    <MenuBarPrimitive.RadioItem
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenuBarPrimitive.ItemIndicator>
          <DotFilledIcon className="h-4 w-4 fill-current" />
        </MenuBarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenuBarPrimitive.RadioItem>
  );
});
