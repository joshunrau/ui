import * as React from 'react';

import * as MenuBarPrimitive from '@radix-ui/react-menubar';

import { cn } from '@/lib/utils';

import { MenuBarCheckboxItem } from './MenuBarCheckboxItem';
import { MenuBarContent } from './MenuBarContent';
import { MenuBarItem } from './MenuBarItem';
import { MenuBarLabel } from './MenuBarLabel';
import { MenuBarRadioItem } from './MenuBarRadioItem';
import { MenuBarSeparator } from './MenuBarSeparator';
import { MenuBarShortcut } from './MenuBarShortcut';
import { MenuBarSubContent } from './MenuBarSubContent';
import { MenuBarSubTrigger } from './MenuBarSubTrigger';
import { MenuBarTrigger } from './MenuBarTrigger';

const MenuBarRoot = React.forwardRef<
  React.ElementRef<typeof MenuBarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenuBarPrimitive.Root>
>(function MenuBarRoot({ className, ...props }, ref) {
  return (
    <MenuBarPrimitive.Root
      className={cn('flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm', className)}
      ref={ref}
      {...props}
    />
  );
});

export const MenuBar = Object.assign(MenuBarRoot, {
  CheckboxItem: MenuBarCheckboxItem,
  Content: MenuBarContent,
  Group: MenuBarPrimitive.Group,
  Item: MenuBarItem,
  Label: MenuBarLabel,
  Menu: MenuBarPrimitive.Menu,
  Portal: MenuBarPrimitive.Portal,
  RadioGroup: MenuBarPrimitive.RadioGroup,
  RadioItem: MenuBarRadioItem,
  Separator: MenuBarSeparator,
  Shortcut: MenuBarShortcut,
  Sub: MenuBarPrimitive.Sub,
  SubContent: MenuBarSubContent,
  SubTrigger: MenuBarSubTrigger,
  Trigger: MenuBarTrigger
});
