import { useRef } from 'react';

const handleInputChange = <T extends object>(
  formData: React.MutableRefObject<T>,
  key: string
) => {
  return (value: string) => {
    formData.current = {
      ...formData.current,
      [key]: value,
    };
    console.log(formData);
  };
};

export default function useFormData(initialData = {}) {
  const formData = useRef(initialData);
  const getFormData = () => formData;

  return {
    getFormData,
    handleInputChange,
  };
}
