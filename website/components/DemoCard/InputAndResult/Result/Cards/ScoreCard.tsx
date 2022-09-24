import { BooleanColoredText } from './BooleanColoredText';
import { ResultStatCard } from './ResultStatCard';
import { FC, memo } from 'react';
import { formatNumber, percentPreset } from '../../../../../utils/format-number';

interface ScoreCardProps {
  score: number;
  normalizedThreshold: number;
}

export const ScoreCard: FC<ScoreCardProps> = memo(({ score, normalizedThreshold }) => {
  const formattedScore = formatNumber(score, percentPreset);

  return (
    <ResultStatCard
      label="Score"
      valueContent={
        <BooleanColoredText
          comparator={score >= normalizedThreshold}
          truthyValue={formattedScore}
          falsyValue={formattedScore}
        />
      }
    />
  );
});

ScoreCard.displayName = 'ScoreCard';
