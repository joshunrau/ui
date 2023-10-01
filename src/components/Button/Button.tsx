import React from 'react';

import { match } from 'ts-pattern';

import { cn } from '../..';

export type ButtonProps = {
  label: string;
  size?: 'lg' | 'md' | 'sm';
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  variant?: 'danger' | 'primary' | 'secondary';
} & Omit<React.ComponentPropsWithoutRef<'button'>, 'children'>;

export const Button = ({ className, label, size = 'md', variant = 'primary', ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'flex items-center justify-center rounded-md font-medium shadow focus:outline-none disabled:cursor-not-allowed disabled:opacity-70',
        match({ size })
          .with({ size: 'sm' }, () => 'px-4 py-2 text-sm')
          .with({ size: 'md' }, () => 'text-md px-6 py-2')
          .with({ size: 'lg' }, () => 'px-8 py-3 text-lg')
          .exhaustive(),
        match({ variant })
          .with({ variant: 'primary' }, () => 'bg-slate-800 text-slate-100 hover:bg-slate-700 dark:bg-sky-700 dark:hover:bg-sky-600')
          .with({ variant: 'secondary' }, () => 'border border-slate-300 bg-inherit hover:backdrop-emphasize dark:border-slate-600')
          .with({ variant: 'danger' }, () => 'bg-red-600 text-white hover:bg-opacity-90')
          .exhaustive(),
        className
      )}
      {...props}
    >
      {label}
    </button>
  );
};
