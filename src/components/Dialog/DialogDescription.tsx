import * as React from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import { cn } from '@/lib/utils';

export const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(function DialogDescription({ className, ...props }, ref) {
  return (
    <DialogPrimitive.Description className={cn('text-sm text-muted-foreground', className)} ref={ref} {...props} />
  );
});
