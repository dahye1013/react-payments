import { ChangeEvent, Dispatch, SetStateAction, useRef } from 'react';

function handleInputChange<T>(setValue: Dispatch<SetStateAction<T>>) {
  return (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    const { value, name } = event.target;
    setValue((prev: T) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
}

export const handleFormInput = <T,>(
  formData: React.MutableRefObject<T>,
  key: string
) => {
  return (value: unknown) => {
    formData.current = {
      ...formData.current,
      [key]: value,
    };
  };
};

export default function useFormData(initialData = {}) {
  const formData = useRef(initialData);

  const getFormData = () => formData;

  return {
    getFormData,
    handleFormInput,
    handleInputChange,
  };
}

const isObjectState = (v: any): v is object => typeof v == 'object';
const isStringState = (v: any): v is string => typeof v == 'string';
