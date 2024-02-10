import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';

import { ContextMenuCheckboxItem } from './ContextMenuCheckboxItem';
import { ContextMenuContent } from './ContextMenuContent';
import { ContextMenuItem } from './ContextMenuItem';
import { ContextMenuLabel } from './ContextMenuLabel';
import { ContextMenuRadioItem } from './ContextMenuRadioItem';
import { ContextMenuSeparator } from './ContextMenuSeparator';
import { ContextMenuShortcut } from './ContextMenuShortcut';
import { ContextMenuSubContent } from './ContextMenuSubContent';
import { ContextMenuSubTrigger } from './ContextMenuSubTrigger';

export const ContextMenu = Object.assign(ContextMenuPrimitive.Root, {
  CheckboxItem: ContextMenuCheckboxItem,
  Content: ContextMenuContent,
  Group: ContextMenuPrimitive.Group,
  Item: ContextMenuItem,
  Label: ContextMenuLabel,
  Portal: ContextMenuPrimitive.Portal,
  RadioGroup: ContextMenuPrimitive.RadioGroup,
  RadioItem: ContextMenuRadioItem,
  Separator: ContextMenuSeparator,
  Shortcut: ContextMenuShortcut,
  Sub: ContextMenuPrimitive.Sub,
  SubContent: ContextMenuSubContent,
  SubTrigger: ContextMenuSubTrigger,
  Trigger: ContextMenuPrimitive.Trigger
});
