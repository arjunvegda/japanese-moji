import { SimpleGrid } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { ValidCard } from './Cards/ValidCard';
import { PresentCard } from './Cards/PresentCard';
import { ScoreCard } from './Cards/ScoreCard';

export interface ResultProps {
  isValid: boolean;
  isPresent: boolean;
  score: number;
  normalizedThreshold: number;
}

export const Result: FC<ResultProps> = memo(
  ({ isValid, isPresent, score, normalizedThreshold }) => {
    return (
      <SimpleGrid columns={[1, null, 3]} spacing={6}>
        <ValidCard isValid={isValid} />
        <PresentCard isPresent={isPresent} normalizedThreshold={normalizedThreshold} />
        <ScoreCard score={score} normalizedThreshold={normalizedThreshold} />
      </SimpleGrid>
    );
  },
);

Result.displayName = 'Result';
