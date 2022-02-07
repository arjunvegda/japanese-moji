import type { CreateValidatorOptions, ThresholdBasedValidator } from '../types';
import { defaultValidationThreshold } from '../constants';
import { createMatchScoreCalculator } from './create-match-score-calculator';
import { invariant } from './invariant';

export const createThresholdBasedValidator = (
  options: CreateValidatorOptions,
): ThresholdBasedValidator => {
  invariant(options, `createThresholdBasedValidator: requires "options" to be supplied`);
  invariant(
    options?.characterSets,
    `createThresholdBasedValidator: requires "options.characterSets" to be supplied`,
  );

  const calculateScore = createMatchScoreCalculator(options);

  const customValidator: ThresholdBasedValidator = (
    str: string,
    threshold: number = defaultValidationThreshold,
  ): boolean => {
    const normalizedThreshold = Math.max(0, Math.min(100, threshold));
    const score = calculateScore(str);
    return score >= normalizedThreshold;
  };

  return customValidator;
};
