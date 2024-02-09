import * as React from 'react';

import { useCarousel } from '@/hooks/useCarousel';
import { cn } from '@/lib/utils';

export const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(function CarouselContent(
  { className, ...props },
  ref
) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div className="overflow-hidden" ref={carouselRef}>
      <div
        className={cn('flex', orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', className)}
        ref={ref}
        {...props}
      />
    </div>
  );
});
