import { isValidUnicode } from './is-valid-unicode';
import { makeString } from './make-string';
import { invariant } from './invariant';

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

  invariant(isStartValid, `createRange: invalid unicode value supplied for start of the range`);

  invariant(isEndValid, `createRange: invalid unicode value supplied for end of the range`);

  return makeString('[', start, '-', end, ']');
};
