import { FC, memo } from 'react';
import { useResultStyles } from './styles';
import { Text } from '@chakra-ui/react';

interface BooleanColoredTextProps {
  comparator: boolean;
  truthyValue: string;
  falsyValue: string;
}

export const BooleanColoredText: FC<BooleanColoredTextProps> = ({
  comparator,
  truthyValue,
  falsyValue,
}) => {
  const { green, red } = useResultStyles();

  if (comparator) {
    return <Text color={green}>{truthyValue}</Text>;
  }

  return <Text color={red}>{falsyValue}</Text>;
};
