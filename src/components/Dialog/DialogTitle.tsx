import * as React from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import { cn } from '@/lib/utils';

export const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(function DialogTitle({ className, ...props }, ref) {
  return (
    <DialogPrimitive.Title
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      ref={ref}
      {...props}
    />
  );
});
