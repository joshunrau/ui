import * as React from 'react';

import { useCarousel } from '@/hooks/useCarousel';
import { cn } from '@/lib/utils';

export const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function CarouselItem({ className, ...props }, ref) {
    const { orientation } = useCarousel();
    return (
      <div
        aria-roledescription="slide"
        className={cn('min-w-0 shrink-0 grow-0 basis-full', orientation === 'horizontal' ? 'pl-4' : 'pt-4', className)}
        ref={ref}
        role="group"
        {...props}
      />
    );
  }
);
