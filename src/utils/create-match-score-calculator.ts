import type { CreateValidatorOptions, ThresholdCalculator } from '../types';
import { makeString } from './make-string';
import { optionsToRegex } from './options-to-regex';
import { matchString } from './match-string';
import { invariant } from './invariant';

/**
 * Creates a function that calculates the score for a match with `pattern`
 *
 * @param options - Check {@link CreateValidatorOptions} for all the available options
 */
export const createMatchScoreCalculator = (
  options: CreateValidatorOptions,
): ThresholdCalculator => {
  invariant(options, `createMatchScoreCalculator: requires "options" to be supplied`);
  invariant(
    options?.characterSets,
    `createMatchScoreCalculator: requires "options.characterSets" to be supplied`,
  );

  const regexGroup = optionsToRegex(options);

  const finalRegexPattern = makeString(regexGroup, '*');

  const customCalculator: ThresholdCalculator = (str: string): number => {
    const matches = matchString(str, finalRegexPattern, 'gui');

    const score = (matches.length / str.length) * 100;
    return score;
  };

  return customCalculator;
};
