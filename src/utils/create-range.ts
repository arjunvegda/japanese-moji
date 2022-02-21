import { isValidUnicode } from './is-valid-unicode';
import { makeString } from './make-string';

/**
 * Builds a regex character unicode range
 *
 * For example - [\\u1234-\\uFAFF]
 *
 * @param start - Valid unicode with escaped "\\u" unicode
 * @param end - Valid unicode value with escaped "\\u" unicode
 */
export const createRange = (start: string, end: string): string => {
  const isStartValid = isValidUnicode(start);
  const isEndValid = isValidUnicode(end);

  if (!isStartValid || !isEndValid) {
    return '';
  }

  return makeString(start, '-', end);
};
