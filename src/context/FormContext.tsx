import { createContext } from 'react';

export type FormState = {
  values: Record<string, unknown>;
}

export const FormContext = createContext<FormState>(null!);
