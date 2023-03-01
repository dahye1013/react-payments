import { CardForm, CreditCard } from '@/components';
import { useFormContext } from '@/components/common/Form/FormContext';
import { Button } from '@/components/UI';
import { useRouter } from '@/hooks/useRouter';
import { getItem, setItem } from '@/storage/storage';
import { type CardFormType, CardKey } from '@/types';

export const initialCardState: CardFormType = {
    [CardKey.CARD_NUMBERS]: {
        val: {
            1: '',
            2: '',
            3: '',
            4: '',
        },
        isValid: false,
    },
    [CardKey.EXPIRE_DATE]: {
        val: {
            month: '',
            year: '',
        },
        isValid: false,
    },
    [CardKey.CVC]: {
        val: '',
        isValid: false,
    },
    [CardKey.PASSWORD]: {
        val: {
            1: '',
            2: '',
            3: '',
            4: '',
        },
        isValid: false,
    },
    [CardKey.OWNER_NAME]: {
        val: '',
        isValid: false,
    },
};

export const CardRegister = () => {
    const { getFormData } = useFormContext();
    const form = getFormData().current as CardFormType;

    const { go } = useRouter();

    const cardDisplayInfo = {
        [CardKey.CARD_NUMBERS]: form[CardKey.CARD_NUMBERS]?.val,
        [CardKey.OWNER_NAME]: form[CardKey.OWNER_NAME]?.val,
        [CardKey.EXPIRE_DATE]: form[CardKey.EXPIRE_DATE]?.val,
    };

    const isAllValid = Object.values(form).every((input) => input.isValid);

    const handleSubmit = () => {
        const newCard = Object.entries(form).reduce(
            (cardState, [cardKey, form]) => {
                return { ...cardState, [cardKey]: form.val };
            },
            {}
        );

        setItem('cardList', [...(getItem('cardList') ?? []), newCard]);
        go('/register-confirm');
    };

    return (
        <>
            <CreditCard cardInfo={cardDisplayInfo} />
            <CardForm />
            <Button disabled={!isAllValid} onClick={handleSubmit}>
                추가하기
            </Button>
        </>
    );
};
