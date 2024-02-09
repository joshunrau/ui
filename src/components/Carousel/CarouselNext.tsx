import * as React from 'react';

import { ArrowRightIcon } from '@radix-ui/react-icons';

import { useCarousel } from '@/hooks/useCarousel';
import { cn } from '@/lib/utils';

import { Button } from '../Button';

export const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(function CarouselNext(
  { className, size = 'icon', variant = 'outline', ...props },
  ref
) {
  const { canScrollNext, orientation, scrollNext } = useCarousel();

  return (
    <Button
      className={cn(
        'absolute h-8 w-8 rounded-full',
        orientation === 'horizontal'
          ? '-right-12 top-1/2 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        className
      )}
      disabled={!canScrollNext}
      ref={ref}
      size={size}
      variant={variant}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRightIcon className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
});
