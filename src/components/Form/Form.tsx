import { type ReactNode } from 'react';

import { FormContext } from '@/context/FormContext';
import { cn } from '@/utils';

import { FormText } from './FormText';

type FormProps = {
  children: ReactNode;
  className?: string;
};

const FormComponent = ({ children, className }: FormProps) => {
  // const [values, setValues] = useState([]);
  return (
    <FormContext.Provider value={{ values: [] }}>
      <form className={cn('space-y-6', className)}>{children}</form>
    </FormContext.Provider>
  );
};

const Form = Object.assign(FormComponent, {
  Text: FormText
});

export { Form, type FormProps };
