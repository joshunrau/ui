import * as React from 'react';

import { ChevronRightIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';

import { PaginationLink } from './PaginationLink';

export const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to next page" className={cn('gap-1 pr-2.5', className)} size="default" {...props}>
    <span>Next</span>
    <ChevronRightIcon className="h-4 w-4" />
  </PaginationLink>
);
