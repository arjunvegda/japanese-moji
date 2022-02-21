import {
  createMatchScoreCalculator,
  createStrictValidator,
  createThresholdBasedValidator,
  CreateValidatorOptions,
  MatchScoreCalculator,
  StrictValidator,
  ThresholdBasedValidator,
} from 'japanese-moji';
import { FC } from 'react';
import { DemoCard, DemoCardProps } from '../DemoCard';

export interface RecipeCardProps
  extends Omit<DemoCardProps, 'isValid' | 'isPresent' | 'howMuchIsPresent'> {
  options: CreateValidatorOptions;
}

export const RecipeCard: FC<RecipeCardProps> = ({ options, ...rest }) => {
  const isValidCustom: StrictValidator = createStrictValidator(options);
  const isCustomPresent: ThresholdBasedValidator = createThresholdBasedValidator(options);
  const howMuchIsCustomPresent: MatchScoreCalculator = createMatchScoreCalculator(options);

  return (
    <DemoCard
      {...rest}
      isValid={isValidCustom}
      isPresent={isCustomPresent}
      howMuchIsPresent={howMuchIsCustomPresent}
    />
  );
};
