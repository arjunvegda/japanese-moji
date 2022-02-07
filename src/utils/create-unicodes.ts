import { createUnicode } from './create-unicode';

export const createUnicodes = (unicodes: string[] = []): string[] => {
  const regexRanges = unicodes.map(createUnicode);
  const filteredUnicodes = regexRanges.filter(Boolean);

  return filteredUnicodes;
};
