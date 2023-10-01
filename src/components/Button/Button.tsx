import React from 'react';

import { cn } from '@/utils';
import { match } from 'ts-pattern';

export interface ButtonProps extends Omit<React.ComponentPropsWithoutRef<'button'>, 'children'> {
  label: string;
  size?: 'sm' | 'md' | 'lg';
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  variant?: 'primary' | 'secondary' | 'danger';
}

export const Button = ({ className, label, size = 'md', variant = 'primary', ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'flex items-center justify-center rounded-md font-medium shadow-md focus:outline-none disabled:cursor-not-allowed disabled:opacity-70',
        match({ size })
          .with({ size: 'sm' }, () => 'px-4 py-2 text-sm')
          .with({ size: 'md' }, () => 'text-md px-6 py-2')
          .with({ size: 'lg' }, () => 'px-8 py-3 text-lg')
          .exhaustive(),
        match({ variant })
          .with({ variant: 'primary' }, () => 'bg-slate-800 text-slate-100 hover:bg-slate-700 dark:bg-sky-700 dark:hover:bg-sky-600')
          .with({ variant: 'secondary' }, () => 'border border-slate-300 bg-inherit hover:backdrop-emphasize dark:border-slate-600')
          .with({ variant: 'danger' }, () => 'bg-red-600 text-white hover:bg-opacity-90')
          .exhaustive()
      )}
      {...props}
    >
      {label}
    </button>
  );
};
