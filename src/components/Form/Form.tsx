import { cn } from '@/utils';

import { FormText } from './FormText';

type FormProps = {
  children: React.ReactNode;
  className?: string;
};

const FormComponent = ({ children, className }: FormProps) => {
  return <form className={cn('space-y-6', className)}>{children}</form>;
};

const Form = Object.assign(FormComponent, {
  Text: FormText
});

export { Form, type FormProps };
