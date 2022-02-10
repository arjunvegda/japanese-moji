import type { CreateValidatorOptions, MatchScoreCalculator } from '../types';
import { makeString } from './make-string';
import { optionsToRegex } from './options-to-regex';
import { matchString } from './match-string';
import { invariant } from './invariant';

/**
 * Creates a function that calculates a match score for a given string.
 *
 * @param options - Check {@link CreateValidatorOptions} for all the available options
 * @returns {@Link MatchScoreCalculator} - A function that calculates the score for a match
 */
export const createMatchScoreCalculator = (
  options: CreateValidatorOptions,
): MatchScoreCalculator => {
  invariant(options, `createMatchScoreCalculator: requires "options" to be supplied`);
  invariant(
    options?.characterSets,
    `createMatchScoreCalculator: requires "options.characterSets" to be supplied`,
  );

  const regexGroup = optionsToRegex(options);

  const finalRegexPattern = makeString(regexGroup, '*');

  const customCalculator: MatchScoreCalculator = (str: string): number => {
    const matches = matchString(str, finalRegexPattern, 'gui');

    const score = (matches.length / str.length) * 100;

    return Number.isNaN(score) ? 0 : score;
  };

  return customCalculator;
};
