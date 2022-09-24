import { BooleanColoredText } from './BooleanColoredText';
import { ResultStatCard } from './ResultStatCard';
import { FC, memo } from 'react';
import { Text } from '@chakra-ui/react';
import { useResultStyles } from './styles';
import { formatNumber, percentPreset } from '../../../../../utils/format-number';

interface PresentCardProps {
  isPresent: boolean;
  normalizedThreshold: number;
}
export const PresentCard: FC<PresentCardProps> = memo(({ isPresent, normalizedThreshold }) => {
  const { helpTextColor } = useResultStyles();
  const formattedThreshold = formatNumber(normalizedThreshold, percentPreset);

  return (
    <ResultStatCard
      label="is present?"
      valueContent={<BooleanColoredText comparator={isPresent} truthyValue="Yes" falsyValue="No" />}
      helpTextContent={
        <Text fontSize="sm" color={helpTextColor}>
          {formattedThreshold} threshold
        </Text>
      }
    />
  );
});

PresentCard.displayName = 'PresentCard';
