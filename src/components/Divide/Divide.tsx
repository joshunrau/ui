import React from 'react';

import { cn } from '@/index';

export const Divide = ({ className, ...props }: React.ComponentPropsWithoutRef<'hr'>) => (
  <hr className={cn('mt-auto h-[1px] border-none bg-slate-300 dark:bg-slate-700', className)} {...props} />
);
