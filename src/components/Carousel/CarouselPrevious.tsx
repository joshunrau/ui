import * as React from 'react';

import { ArrowLeftIcon } from '@radix-ui/react-icons';

import { useCarousel } from '@/hooks/useCarousel';
import { cn } from '@/lib/utils';

import { Button } from '../Button';

export const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  function CarouselPrevious({ className, size = 'icon', variant = 'outline', ...props }, ref) {
    const { canScrollPrev, orientation, scrollPrev } = useCarousel();

    return (
      <Button
        className={cn(
          'absolute  h-8 w-8 rounded-full',
          orientation === 'horizontal'
            ? '-left-12 top-1/2 -translate-y-1/2'
            : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
          className
        )}
        disabled={!canScrollPrev}
        ref={ref}
        size={size}
        variant={variant}
        onClick={scrollPrev}
        {...props}
      >
        <ArrowLeftIcon className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  }
);
