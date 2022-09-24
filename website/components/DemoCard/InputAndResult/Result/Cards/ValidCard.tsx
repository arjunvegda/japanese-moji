import { BooleanColoredText } from './BooleanColoredText';
import { ResultStatCard } from './ResultStatCard';
import { FC, memo } from 'react';

interface ValidCardProps {
  isValid: boolean;
}
export const ValidCard: FC<ValidCardProps> = memo(({ isValid }) => {
  return (
    <ResultStatCard
      label="is Valid?"
      valueContent={<BooleanColoredText comparator={isValid} truthyValue="Yes" falsyValue="No" />}
    />
  );
});

ValidCard.displayName = 'ValidCard';
