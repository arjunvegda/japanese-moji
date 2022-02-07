import type { CreateValidatorOptions, StrictValidator } from '../types';
import { makeString } from './make-string';
import { optionsToRegex } from './options-to-regex';
import { invariant } from './invariant';

export const createStrictValidator = (options: CreateValidatorOptions): StrictValidator => {
  invariant(options, `createStrictValidator: requires "options" to be supplied`);
  invariant(
    options?.characterSets,
    `createStrictValidator: requires "options.characterSets" to be supplied`,
  );

  const regexGroup = optionsToRegex(options);

  const finalRegexPattern = makeString('^', regexGroup, '+$');

  const customValidator = (str: string): boolean => {
    const regexExp = new RegExp(finalRegexPattern, 'i');
    return regexExp.test(str);
  };

  return customValidator;
};
