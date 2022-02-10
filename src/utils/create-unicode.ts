import { isValidUnicode } from './is-valid-unicode';
import { makeString } from './make-string';

export const createUnicode = (str: string): string => {
  const isValidCode = isValidUnicode(str);

  if (!isValidCode) {
    return '';
  }

  return makeString('[', str, ']');
};
