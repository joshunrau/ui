import { cn } from '@/utils';

export type FormProps = {
  children: React.ReactNode;
  className?: string;
};

export const Form = ({ children, className }: FormProps) => {
  return <form className={cn('space-y-6', className)}>{children}</form>;
};
