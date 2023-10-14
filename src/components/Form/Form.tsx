import React, { type ReactNode } from 'react';

import { FormContext } from '@/context/FormContext';
import { cn } from '@/utils/cn';

import { FormSubmitButton } from './FormSubmitButton';
import { FormText } from './FormText';

type FormProps = {
  children: ReactNode;
  className?: string;
  onSubmit: () => void;
};

const FormComponent = ({ children, className, onSubmit }: FormProps) => {
  // const [values, setValues] = useState([]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <FormContext.Provider value={{ values: {} }}>
      <form className={cn('space-y-6', className)} onSubmit={handleSubmit}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

const Form = Object.assign(FormComponent, {
  SubmitButton: FormSubmitButton,
  Text: FormText
});

export { Form, type FormProps };
