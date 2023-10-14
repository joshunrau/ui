import { cn } from '@/utils/cn';

import { Button, type ButtonProps } from '../Button';

export const FormSubmitButton = ({ className, ...props }: Omit<ButtonProps, 'type'>) => (
  <Button className={cn('w-full', className)} type="submit" {...props} />
);
