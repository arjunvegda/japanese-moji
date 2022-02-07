import type { UnicodeRange } from '../src';
import { makeString } from '../src/utils';

export const generateCharactersFromRange = (start: string, end: string): string => {
  const startCode = start.charCodeAt(0);
  const endCode = end.charCodeAt(0);
  const length = endCode - startCode + 1;
  return Array.from({ length }, (_, i) => String.fromCharCode(startCode + i)).join('');
};

export const generateCharactersFromRanges = (ranges: UnicodeRange[]): string => {
  return ranges.reduce((acc, range) => {
    return acc + generateCharactersFromRange(range.start, range.end);
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
