import type { CreateValidatorOptions, ThresholdBasedValidator } from '../types';
import { defaultValidationThreshold } from '../constants';
import { createMatchScoreCalculator } from './create-match-score-calculator';
import { invariant } from './invariant';

/**
 * Creates a threshold based validator function.
 * A threshold based validator function will always return a
 * boolean value for a given input based on the threshold supplied.
 *
 * Default threshold is set to 85
 *
 * @param options - {@link CreateValidatorOptions} object
 * @returns {@link ThresholdBasedValidator} A validator function that returns a boolean
 */
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
