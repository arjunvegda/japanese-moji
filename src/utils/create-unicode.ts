import { isValidUnicode } from './is-valid-unicode';
import { makeString } from './make-string';
import { invariant } from './invariant';

export const createUnicode = (str: string): string => {
  const isValidCode = isValidUnicode(str);

  invariant(isValidCode, `createUnicode: invalid unicode value supplied`);

  return makeString('[', str, ']');
};
