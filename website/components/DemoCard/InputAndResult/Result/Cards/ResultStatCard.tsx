import { FC, memo, ReactNode } from 'react';
import { Stat, StatGroup, StatLabel, StatNumber, Text } from '@chakra-ui/react';
import { useResultStyles } from './styles';

interface ResultStatCardProps {
  label: string;
  valueContent: ReactNode;
  helpTextContent?: ReactNode;
}
export const ResultStatCard: FC<ResultStatCardProps> = ({
  label,
  valueContent,
  helpTextContent,
}) => {
  const { borderStyles } = useResultStyles();
  return (
    <StatGroup {...borderStyles}>
      <Stat>
        <StatLabel textTransform="uppercase" fontWeight="bold" fontSize="sm">
          {label}
        </StatLabel>
        <StatNumber>{valueContent}</StatNumber>
        {helpTextContent}
      </Stat>
    </StatGroup>
  );
};
