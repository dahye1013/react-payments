import { memo, useEffect } from 'react';

import { Avatar, Box, Flex, Modal, Text } from '@/components/UI';
import { CardCompanyValues } from '@/types';
import { text } from '@/utils';

type Props = {
  onClose: () => void;
  onChange: <T>(value: T) => void;
};

const CardCompanyModal = ({ onClose, onChange }: Props) => {
  const handleSelect = (company: string) => {
    onChange({ val: company, isValid: true });
    onClose();
  };

  useEffect(() => {
    onChange({ isValid: false });
  }, []);

  return (
    <Modal onClose={onClose}>
      <Box>
        <Flex justify="center">
          {cardFirstRow.map((company) => (
            <Flex
              key={company}
              onClick={() => handleSelect(company)}
              direction="column"
              justify="center"
              align="center"
            >
              <Avatar variant={company} />
              <Text css={{ fontSize: '$3' }}>{text.upperCase(company)}</Text>
            </Flex>
          ))}
        </Flex>
        <Flex justify={'center'}>
          {cardSecondRow.map((company) => (
            <Flex
              key={company}
              onClick={() => handleSelect(company)}
              direction="column"
              justify="center"
              align="center"
            >
              <Avatar variant={company} />
              <Text css={{ fontSize: '$3' }}>{text.upperCase(company)}</Text>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Modal>
  );
};

export default memo(CardCompanyModal);

const cardCompanies = Object.values(CardCompanyValues);
const [cardFirstRow, cardSecondRow] = [
  [...Array.from({ length: 4 }, (_, i) => cardCompanies[i])],
  [...Array.from({ length: 4 }, (_, i) => cardCompanies[4 + i])],
];
