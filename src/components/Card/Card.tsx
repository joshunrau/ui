import React from 'react';

import { cn } from '@/utils/cn';

export const Card = ({ children, className, ...props }: React.HTMLProps<HTMLDivElement>) => (
  <div className={cn('rounded-md bg-slate-50 p-4 shadow ring-1 ring-slate-900/5 dark:bg-slate-800', className)} {...props}>
    {children}
  </div>
);
