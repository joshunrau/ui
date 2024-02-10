import * as React from 'react';

import { CheckIcon } from '@radix-ui/react-icons';
import * as MenuBarPrimitive from '@radix-ui/react-menubar';

import { cn } from '@/lib/utils';

export const MenuBarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenuBarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenuBarPrimitive.CheckboxItem>
>(function MenuBarCheckboxItem({ checked, children, className, ...props }, ref) {
  return (
    <MenuBarPrimitive.CheckboxItem
      checked={checked}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenuBarPrimitive.ItemIndicator>
          <CheckIcon className="h-4 w-4" />
        </MenuBarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenuBarPrimitive.CheckboxItem>
  );
});
