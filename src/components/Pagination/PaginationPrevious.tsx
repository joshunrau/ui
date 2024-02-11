import { ChevronLeftIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';

import { PaginationLink, type PaginationLinkProps } from './PaginationLink';

export const PaginationPrevious = ({ className, ...props }: PaginationLinkProps) => (
  <PaginationLink aria-label="Go to previous page" className={cn('gap-1 pl-2.5', className)} size="default" {...props}>
    <ChevronLeftIcon className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);
