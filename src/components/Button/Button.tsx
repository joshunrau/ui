import React from 'react';
import { twMerge } from 'tailwind-merge';

export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  size?: 'lg' | 'md' | 'sm' | 'xl' | 'xs';
  variant?: 'primary' | 'secondary';
};

export const Button = ({ children, size = 'md', type = 'button', variant = 'primary', ...props }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'inline-flex items-center border border-transparent font-medium rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
        size === 'xs' && 'px-2.5 py-1.5 text-xs',
        size === 'sm' && 'px-3 py-2 text-sm rounded-md',
        size === 'md' && 'px-4 py-2 text-sm rounded-md',
        size === 'lg' && 'px-4 py-2 text-base rounded-md',
        size === 'xl' && 'px-6 py-3 text-base rounded-md',
        variant === 'primary' && 'text-white bg-indigo-600 hover:bg-indigo-700',
        variant === 'secondary' && 'text-indigo-700 bg-indigo-100 hover:bg-indigo-200'
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
