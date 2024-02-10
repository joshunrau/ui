import * as React from 'react';

import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '@/lib/utils';

import { AvatarFallback } from './AvatarFallback';
import { AvatarImage } from './AvatarImage';

const AvatarRoot = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(function AvatarRoot({ className, ...props }, ref) {
  return (
    <AvatarPrimitive.Root
      className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
      ref={ref}
      {...props}
    />
  );
});

export const Avatar = Object.assign(AvatarRoot, {
  Fallback: AvatarFallback,
  Image: AvatarImage
});
