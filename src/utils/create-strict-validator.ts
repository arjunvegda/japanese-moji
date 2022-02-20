import type { CreateValidatorOptions, StrictValidator } from '../types';
import { makeString } from './make-string';
import { optionsToRegex } from './options-to-regex';

/**
 * Creates a strict validator function.
 * A strict validator function will always return a boolean value for a given input.
 *
 * @param options - {@link CreateValidatorOptions} object
 * @returns {@link StrictValidator} A validator function that returns a boolean
 */
export const createStrictValidator = (options: CreateValidatorOptions): StrictValidator => {
  const regexGroup = optionsToRegex(options);

  const finalRegexPattern = makeString('^', regexGroup, '+$');

  const customValidator = (str: string): boolean => {
    const regexExp = new RegExp(finalRegexPattern, 'ui');
    return regexExp.test(str);
  };

  return customValidator;
};
