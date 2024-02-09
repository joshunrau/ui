import { cn } from '@/lib/utils';

export type HeadingProps = {
  children: React.ReactNode;
  className?: string;
  variant: 'h1' | 'h2' | 'h3' | 'h4';
};

export const Heading = ({ children, className, variant }: HeadingProps) => {
  switch (variant) {
    case 'h1':
      return <h1 className={cn('text-3xl font-bold tracking-tight', className)}>{children}</h1>;
    case 'h2':
      return <h2 className={cn('text-2xl font-semibold tracking-tight', className)}>{children}</h2>;
    case 'h3':
      return <h3 className={cn('text-xl font-semibold tracking-tight', className)}>{children}</h3>;
    case 'h4':
      return <h4 className={cn('text-lg font-semibold tracking-tight', className)}>{children}</h4>;
    default:
      throw new Error(`Unhandled heading variant: ${variant satisfies never}`);
  }
};
