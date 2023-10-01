import React from 'react';

import { cn } from '@/utils';

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
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'md' && 'text-md px-6 py-2',
        size === 'lg' && 'px-8 py-3 text-lg',
        variant === 'primary' && 'bg-slate-800 text-slate-100 hover:bg-slate-700 dark:bg-sky-700 dark:hover:bg-sky-600',
        variant === 'secondary' &&
          'border border-slate-300 bg-inherit hover:backdrop-brightness-95 dark:border-slate-600 dark:hover:backdrop-brightness-150',
        variant === 'danger' && 'bg-red-600 text-white hover:bg-opacity-90',
        className
      )}
      {...props}
    >
      {label}
    </button>
  );
};

