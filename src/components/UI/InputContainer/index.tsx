import { styled } from '@/lib/stitches.config';
import type { StrictPropsWithChildren } from '@/types';

export type Props = {
  label?: string;
  isError?: boolean;
  errorMessage?: string;
  onBlur?: () => void;
};

const InputContainer = ({
  onBlur,
  ...props
}: StrictPropsWithChildren<Props>) => {
  return (
    <Container onBlur={onBlur}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {props.label && <Label>{props.label}</Label>}
        <InputBox>{props.children}</InputBox>
      </div>
      <Line error={props.isError} />
      {props.isError && (
        <Message error={props.isError}>{props.errorMessage}</Message>
      )}
    </Container>
  );
};

export default InputContainer;

const Label = styled('label', {
  width: '100px',
  height: '20px',
  fontSize: '14px',
  fontWeight: '500',
  wordBreak: 'keep-all',
});

const InputBox = styled('div', {
  display: 'flex',
  padding: '0.5rem 0.5rem',
  alignItem: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  gap: '1rem',
  flexWrap: 'nowrap',
  width: '100%',
  [`${Label}`]: {
    width: '35px',
    height: '23px',
  },
  '& input': {
    border: 0,
    width: '100%',
    maxWidth: '100%',
    height: '30px',
    outline: 'none',
    '::placeholder': {
      border: 0,
      color: '$grey3',
    },
    '::focus': {
      outline: 0,
    },
  },
});

const Container = styled('div', {
  backgroundColor: '$white',
  position: 'relative',
  width: '312px',
  height: '76px',
  '> *': {
    margin: 0,
    padding: 0,
  },
});

const Line = styled('hr', {
  border: 0,
  height: '1px',
  display: 'block',
  backgroundColor: '$grey1',
  variants: {
    error: {
      true: {
        backgroundColor: 'red',
      },
    },
  },
});

const Message = styled('p', {
  position: 'absolute',
  bottom: 0,
  right: 0,
  padding: 0,
  margin: 0,
  color: '$grey2',
  fontSize: '12px',
  variants: {
    error: {
      true: {
        color: '$danger',
      },
    },
  },
});
