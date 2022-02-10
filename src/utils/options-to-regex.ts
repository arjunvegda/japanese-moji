import type { CreateValidatorOptions } from '../types';
import { createRanges } from './create-ranges';
import { createRegexGroups } from './create-regex-groups';
import { createUnicodes } from './create-unicodes';
import { characterSetMap } from '../constants';
import { invariant } from './invariant';

export const optionsToRegex = (options: CreateValidatorOptions): string => {
  invariant(options, `"options" arg is required`);
  invariant(options?.characterSets, `"options.characterSets" is required`);

  const customRangesRegex = createRanges(options?.customRanges || []);
  const customUnicodeRegex = createUnicodes(options?.customUnicodes);
  const mergedCustomRanges = [...customRangesRegex, ...customUnicodeRegex];
  const regexGroup = createRegexGroups(characterSetMap, options.characterSets, mergedCustomRanges);

  return regexGroup;
};
