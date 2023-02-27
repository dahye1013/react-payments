import { memo, useEffect, useState } from 'react';

import { InputContainer } from '@/components/UI';
import { useBlur } from '@/hooks/useBlur';
import { useNumberKeyInterceptor } from '@/hooks/useNumberKeyInterceptor';

function handleInputChange(
  setValue: React.Dispatch<React.SetStateAction<string>>
) {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValue(event.target.value);
  };
}

type Props = {
  onChange: (formData: string, key?: string) => (value: string) => void;
  value: string;
};

const CardCVCInput = ({ value: propsValue = '', onChange }: Props) => {
  const [cvc, setCVC] = useState(propsValue);
  const { dirtyState, makeDirty } = useBlur();
  const keyPressInterceptor = useNumberKeyInterceptor();

  useEffect(() => {
    onChange(cvc);
  }, [cvc, onChange]);

  return (
    <InputContainer label="보안코드(CVC/CVV)" isError={dirtyState}>
      <input
        type="password"
        onChange={handleInputChange(setCVC)}
        onKeyPress={keyPressInterceptor}
        onBlur={makeDirty}
        maxLength={3}
      />
    </InputContainer>
  );
};

export default memo(CardCVCInput);
