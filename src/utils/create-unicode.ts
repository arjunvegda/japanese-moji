import { isValidUnicode } from './is-valid-unicode';

export const createUnicode = (str: string): string => {
  const isValidCode = isValidUnicode(str);

  if (!isValidCode) {
    return '';
  }

  return str;
};
