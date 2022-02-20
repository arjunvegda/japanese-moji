import type { UnicodeRange } from '../src';
import { makeString } from '../src/utils';

// Useful when string is huge and we want to test both ends of the string
// For example, test abc...xyz instead of the full abcdef... string, Since we only care about the start/end
const truncateMiddle = (str: string, width: number) => {
  if (str.length <= width) {
    return str;
  }

  const start = Math.ceil(width / 2);
  const end = Math.floor(width / 2);

  return str.substring(0, start) + str.substring(str.length - end);
};

export const generateCharactersFromRange = (start: string, end: string, width?: number): string => {
  const startCode = start.charCodeAt(0);
  const endCode = end.charCodeAt(0);
  const length = endCode - startCode + 1;
  const fullStr = Array.from({ length }, (_, i) => String.fromCharCode(startCode + i)).join('');

  if (typeof width === 'number') {
    return truncateMiddle(fullStr, width);
  }

  return fullStr;
};

export const generateCharactersFromRanges = (ranges: UnicodeRange[], width?: number): string => {
  return ranges.reduce((acc, range) => {
    return acc + generateCharactersFromRange(range.start, range.end, width);
  }, '');
};

export const getRandomString = (length = 0): string => {
  return Array.from(Array(length), () => Math.floor(Math.random() * 36).toString(36)).join('');
};

export const escapeUnicode = (str: string): string => {
  return str.replace(/[^\\0-~]/g, (ch) => {
    return makeString('\\u', `000${ch.charCodeAt(0).toString(16)}`.slice(-4));
  });
};

export const escapeUnicodeRange = (range: UnicodeRange): UnicodeRange => {
  return {
    start: escapeUnicode(range.start),
    end: escapeUnicode(range.end),
  };
};

export const toFixedNumber = (num: number, precision = 0): number => {
  const fixed = num.toFixed(precision);
  return +fixed;
};
