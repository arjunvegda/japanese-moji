const VALID_UNICODE_PATTERN = /^[\\][u][0-9A-F]{4,6}$/;

export const isValidUnicode = (str: string): boolean => {
  if (str) {
    // recreate new regex everytime to avoid index caching issues
    // const unicodeRegex = new RegExp(VALID_UNICODE_PATTERN, 'i');
    return new RegExp(VALID_UNICODE_PATTERN, 'ui').test(str);
  }

  return false;
};
