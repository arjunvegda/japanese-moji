import { CharacterSet, createMatchScoreCalculator, CreateValidatorOptions } from '../src';
import {
  escapeUnicode,
  escapeUnicodeRange,
  generateCharactersFromRange,
  getRandomString,
  toFixedNumber,
} from './utils';
import { MockHiraganaRange, MockKatakanaRange } from './constants';

describe('createMatchScoreCalculator', () => {
  const mockOptions: CreateValidatorOptions = {
    characterSets: [CharacterSet.Katakana],
  };

  const fullKanaString = generateCharactersFromRange(
    MockKatakanaRange.start,
    MockKatakanaRange.end,
  );

  const fullHiraganaString = generateCharactersFromRange(
    MockHiraganaRange.start,
    MockHiraganaRange.end,
  );

  const invalidString = getRandomString(100);

  describe('errors', () => {
    test('should throw an error if options is not provided', () => {
      // @ts-ignore
      expect(() => createMatchScoreCalculator()).toThrow(
        '[japanese-moji]: createMatchScoreCalculator: requires "options" to be supplied',
      );
    });
    test('should throw an error if options.characterSets is not provided', () => {
      // @ts-ignore
      expect(() => createMatchScoreCalculator({})).toThrow(
        '[japanese-moji]: createMatchScoreCalculator: requires "options.characterSets" to be supplied',
      );
    });
  });
  describe('characterSets', () => {
    test('should return a function', () => {
      const result = createMatchScoreCalculator(mockOptions);
      expect(typeof result).toBe('function');
    });

    test('should throw an error when invalid character sets are provided', () => {
      // Disabled ts intentionally to test the error message
      // @ts-ignore
      expect(() => createMatchScoreCalculator({ characterSets: ['invalid'] })).toThrow(
        '[japanese-moji]: createRegexGroups: key "invalid" not found in the "characterSetMap',
      );
    });

    test('should validate a string with 100% for the provided character sets', () => {
      const isValidKana = createMatchScoreCalculator(mockOptions);
      const result = isValidKana(fullKanaString);
      expect(toFixedNumber(result)).toBe(100);
    });
  });
  describe('customRanges', () => {
    test('should add custom unicode range and return 100% for fully valid string', () => {
      const mergedOptions: CreateValidatorOptions = {
        ...mockOptions,
        customRanges: [escapeUnicodeRange(MockHiraganaRange)],
      };
      const isValidKanaWithHiragana = createMatchScoreCalculator(mergedOptions);
      const result = isValidKanaWithHiragana(fullKanaString + fullHiraganaString);
      expect(toFixedNumber(result)).toBe(100);
    });

    test('should add custom unicode ranges and return 49% for invalid string', () => {
      const mergedOptions: CreateValidatorOptions = {
        ...mockOptions,
        customRanges: [escapeUnicodeRange(MockHiraganaRange)],
      };
      const isValidKanaWithHiragana = createMatchScoreCalculator(mergedOptions);
      const result = isValidKanaWithHiragana(fullHiraganaString + invalidString);
      expect(toFixedNumber(result)).toBe(49);
    });

    test('should throw an error when invalid custom unicode ranges are provided', () => {
      const mergedOptions: CreateValidatorOptions = {
        ...mockOptions,
        customRanges: [
          {
            start: 'invalid stuff',
            // This will not get printed since "start" throws
            end: 'invalid stuff',
          },
        ],
      };
      // Disabled ts intentionally to test the error message
      // @ts-ignore
      expect(() => createMatchScoreCalculator(mergedOptions)).toThrow(
        '[japanese-moji]: createRange: invalid unicode value supplied for start of the range',
      );
    });
  });
  describe('customUnicodes', () => {
    test('should add custom unicode and return 100% for fully valid string', () => {
      const mergedOptions: CreateValidatorOptions = {
        ...mockOptions,
        customUnicodes: [escapeUnicode(MockHiraganaRange.start)],
      };
      const isValidKanaWithHiragana = createMatchScoreCalculator(mergedOptions);
      const result = isValidKanaWithHiragana(MockHiraganaRange.start);
      expect(toFixedNumber(result)).toBe(100);
    });

    test('should add custom unicode and return 33% for invalid string', () => {
      const mergedOptions: CreateValidatorOptions = {
        ...mockOptions,
        customUnicodes: [escapeUnicode(MockHiraganaRange.start)],
      };
      const calculateScore = createMatchScoreCalculator(mergedOptions);
      const result = calculateScore(fullKanaString + fullHiraganaString + invalidString);
      expect(toFixedNumber(result)).toBe(33);
    });

    test('should throw an error when invalid custom unicodes are provided', () => {
      const mergedOptions: CreateValidatorOptions = {
        ...mockOptions,
        customUnicodes: [''],
      };
      // Disabled ts intentionally to test the error message
      // @ts-ignore
      expect(() => createMatchScoreCalculator(mergedOptions)).toThrow(
        '[japanese-moji]: createUnicode: invalid unicode value supplied',
      );
    });
  });
});
