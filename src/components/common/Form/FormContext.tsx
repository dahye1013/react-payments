import { createContext, useContext } from 'react';

interface FormHandler {
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  handleReset: (e?: React.SyntheticEvent<any>) => void;
}
interface FormikSharedConfig<Props> {
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
}

export type FormMikProps<Values> = FormikSharedConfig<Values> & FormHandler;
const FormContext = createContext<FormMikProps<any> | null>(null);

export const FormProvider = FormContext.Provider;
export const FormConsumer = FormContext.Consumer;

export const useFormContext = <Value></Value>() => {
  const context = useContext(formContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
