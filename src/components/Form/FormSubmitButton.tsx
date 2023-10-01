import { cn } from '@/utils';

import { Button, type ButtonProps } from '..';

export const FormSubmitButton = ({ className, ...props }: Omit<ButtonProps, 'type'>) => (
  <Button className={cn('w-full', className)} type="submit" {...props} />
);
