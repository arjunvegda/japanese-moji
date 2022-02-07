import type { UnicodeRange } from '../types';
import { createRange } from './create-range';

export const createRanges = (unicodeRanges: UnicodeRange[]): string[] => {
  const regexRanges = unicodeRanges.map((currentRange: UnicodeRange) => {
    const builtRange = createRange(currentRange.start, currentRange.end);
    return builtRange;
  });

  const filteredRanges = regexRanges.filter(Boolean);

  return filteredRanges;
};
