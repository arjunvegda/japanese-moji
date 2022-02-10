import type { CharacterDict, CharacterSet } from '../types';
import { makeString } from './make-string';

export const createRegexGroups = (
  characterSetMap: CharacterDict,
  characterSets: CharacterSet[],
  customRanges: string[],
) => {
  const mappedStrings = characterSets.map((key: CharacterSet) => {
    const foundSet = characterSetMap[key];

    if (!foundSet) {
      return '';
    }

    return makeString(foundSet);
  });

  const finalCharacterRanges = mappedStrings.filter(Boolean);
  finalCharacterRanges.push(...customRanges);
  const joinByOr = finalCharacterRanges.join('|');

  return makeString('(', joinByOr, ')');
};
