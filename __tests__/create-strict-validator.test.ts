import { CharacterSet, createStrictValidator, CreateValidatorOptions } from '../src';
import {
  escapeUnicode,
  escapeUnicodeRange,
  generateCharactersFromRange,
  getRandomString,
} from './utils';
import { MockHiraganaRange, MockKatakanaRange } from './constants';

describe('createStrictValidator', () => {
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
      expect(() => createStrictValidator()).toThrow(
        '[japanese-moji]: createStrictValidator: requires "options" to be supplied',
      );
    });
    test('should throw an error if options.characterSets is not provided', () => {
      // @ts-ignore
      expect(() => createStrictValidator({})).toThrow(
        '[japanese-moji]: createStrictValidator: requires "options.characterSets" to be supplied',
      );
    });
  });
  describe('characterSets', () => {
    test('should return a function', () => {
      const result = createStrictValidator(mockOptions);
      expect(typeof result).toBe('function');
    });

    test('should throw an error when invalid character sets are provided', () => {
      // Disabled ts intentionally to test the error message
      // @ts-ignore
      expect(() => createStrictValidator({ characterSets: ['invalid'] })).toThrow(
        '[japanese-moji]: createRegexGroups: key "invalid" not found in the "characterSetMap',
      );
    });

    test('should validate a string with the provided character sets', () => {
      const isValidKana = createStrictValidator(mockOptions);
      const result = isValidKana(fullKanaString);
      expect(result).toBe(true);
    });
  });
  describe('customRanges', () => {
    test('should add custom unicode range and return true for valid string', () => {
      const mergedOptions: CreateValidatorOptions = {
        ...mockOptions,
        customRanges: [escapeUnicodeRange(MockHiraganaRange)],
      };
      const isValidKanaWithHiragana = createStrictValidator(mergedOptions);
      const result = isValidKanaWithHiragana(fullKanaString + fullHiraganaString);
      expect(result).toBe(true);
    });

    test('should add custom unicode ranges and return false for invalid string', () => {
      const mergedOptions: CreateValidatorOptions = {
        ...mockOptions,
        customRanges: [escapeUnicodeRange(MockHiraganaRange)],
      };
      const isValidKanaWithHiragana = createStrictValidator(mergedOptions);
      const result = isValidKanaWithHiragana(invalidString);
      expect(result).toBe(false);
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
      expect(() => createStrictValidator(mergedOptions)).toThrow(
        '[japanese-moji]: createRange: invalid unicode value supplied for start of the range',
      );
    });
  });
  describe('customUnicodes', () => {
    test('should add custom unicode and return true for valid string', () => {
      const mergedOptions: CreateValidatorOptions = {
        ...mockOptions,
        customUnicodes: [escapeUnicode(MockHiraganaRange.start)],
      };
      const isValidKanaWithHiragana = createStrictValidator(mergedOptions);
      const result = isValidKanaWithHiragana(MockHiraganaRange.start);
      expect(result).toBe(true);
    });

    test('should add custom unicode and return false for invalid string', () => {
      const mergedOptions: CreateValidatorOptions = {
        ...mockOptions,
        customUnicodes: [escapeUnicode(MockHiraganaRange.start)],
      };
      const isValidKanaWithHiragana = createStrictValidator(mergedOptions);
      const result = isValidKanaWithHiragana(invalidString);
      expect(result).toBe(false);
    });

    test('should throw an error when invalid custom unicodes are provided', () => {
      const mergedOptions: CreateValidatorOptions = {
        ...mockOptions,
        customUnicodes: [''],
      };
      // Disabled ts intentionally to test the error message
      // @ts-ignore
      expect(() => createStrictValidator(mergedOptions)).toThrow(
        '[japanese-moji]: createUnicode: invalid unicode value supplied',
      );
    });
  });
});
