import type { CharacterDict, CharacterSet } from '../types';
import { makeString } from './make-string';

export const createRegexGroups = (
  characterSetMap: CharacterDict,
  characterSets: CharacterSet[],
  customRanges: string[],
) => {
  const mappedStrings: string[] = [];
  for (let i = 0; i < characterSets.length; i++) {
    const key = characterSets[i];
    const foundSet = characterSetMap[key];

    if (foundSet) {
      if (Array.isArray(foundSet)) {
        mappedStrings.push(...foundSet);
      } else {
        mappedStrings.push(foundSet);
      }
    }
  }

  mappedStrings.push(...customRanges);
  const joinStr = mappedStrings.join('');
  return makeString('[', joinStr, ']');
};
