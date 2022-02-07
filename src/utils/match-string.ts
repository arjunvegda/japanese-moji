export const matchString = (str: string, regexPattern: string, flags?: string): string => {
  const regExp = new RegExp(regexPattern, flags);
  const result = String(str).match(regExp);

  return result?.join('') || '';
};
