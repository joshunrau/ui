import { Root, Trigger } from '@radix-ui/react-dialog';

import { DialogContent } from './DialogContent';
import { DialogDescription } from './DialogDescription';
import { DialogFooter } from './DialogFooter';
import { DialogHeader } from './DialogHeader';
import { DialogTitle } from './DialogTitle';

export const Dialog = Object.assign(Root, {
  Content: DialogContent,
  Description: DialogDescription,
  Footer: DialogFooter,
  Header: DialogHeader,
  Title: DialogTitle,
  Trigger
});
