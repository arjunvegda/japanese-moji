import { CharacterSet, createThresholdBasedValidator, CreateValidatorOptions } from '../src';
import {
  escapeUnicode,
  escapeUnicodeRange,
  generateCharactersFromRange,
  getRandomString,
} from './utils';
import { MockHiraganaRange, MockKatakanaRange } from './constants';

describe('createThresholdBasedValidator', () => {
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

  const invalidString = getRandomString(50);

  describe('normalize threshold', () => {
    test('should normalize threshold to maximum 100 if threshold is greater than 100', () => {
      const threshold = 150;
      const validator = createThresholdBasedValidator(mockOptions);
      const result = validator(fullKanaString, threshold);
      expect(result).toBe(true);
    });
    test('should normalize threshold to minimum 0 if threshold is less than 0', () => {
      const threshold = -150;
      const validator = createThresholdBasedValidator(mockOptions);
      const result = validator(invalidString, threshold);
      // This will pass because the score is 0 and threshold is 0
      // It compares it with ">=" to operator
      expect(result).toBe(true);
    });
  });
  describe('errors', () => {
    test('should throw an error if options is not provided', () => {
      // @ts-ignore
      expect(() => createThresholdBasedValidator()).toThrow(
        '[japanese-moji]: createThresholdBasedValidator: requires "options" to be supplied',
      );
    });
    test('should throw an error if options.characterSets is not provided', () => {
      // @ts-ignore
      expect(() => createThresholdBasedValidator({})).toThrow(
        '[japanese-moji]: createThresholdBasedValidator: requires "options.characterSets" to be supplied',
      );
    });
  });
  describe('characterSets', () => {
    test('should return a function', () => {
      const result = createThresholdBasedValidator(mockOptions);
      expect(typeof result).toBe('function');
    });

    test('should throw an error when invalid character sets are provided', () => {
      // Disabled ts intentionally to test the error message
      // @ts-ignore
      expect(() => createThresholdBasedValidator({ characterSets: ['invalid'] })).toThrow(
        '[japanese-moji]: createRegexGroups: key "invalid" not found in the "characterSetMap',
      );
    });

    test('should validate a string with the provided character sets with default threshold', () => {
      const isKanaPresent = createThresholdBasedValidator(mockOptions);
      const result = isKanaPresent(fullKanaString);
      expect(result).toBe(true);
    });

    test('validator should return false for the provided character sets when its below threshold', () => {
      const isKanaPresent = createThresholdBasedValidator(mockOptions);
      const result = isKanaPresent(fullKanaString + invalidString, 70);
      expect(result).toBe(false);
    });
  });
  describe('customRanges', () => {
    test('should add custom unicode range and return true for valid string', () => {
      const mergedOptions: CreateValidatorOptions = {
        ...mockOptions,
        customRanges: [escapeUnicodeRange(MockHiraganaRange)],
      };
      const isValidKanaWithHiragana = createThresholdBasedValidator(mergedOptions);
      const result = isValidKanaWithHiragana(fullKanaString + fullHiraganaString);
      expect(result).toBe(true);
    });

    test('should add custom unicode ranges and return false for invalid string when its below threshold', () => {
      const mergedOptions: CreateValidatorOptions = {
        ...mockOptions,
        customRanges: [escapeUnicodeRange(MockHiraganaRange)],
      };
      const isValidKanaWithHiragana = createThresholdBasedValidator(mergedOptions);
      const result = isValidKanaWithHiragana(invalidString, 85);
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
      expect(() => createThresholdBasedValidator(mergedOptions)).toThrow(
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
      const isValidKanaWithHiragana = createThresholdBasedValidator(mergedOptions);
      const result = isValidKanaWithHiragana(MockHiraganaRange.start);
      expect(result).toBe(true);
    });

    test('should add custom unicode and return false for invalid string when its below threshold', () => {
      const mergedOptions: CreateValidatorOptions = {
        ...mockOptions,
        customUnicodes: [escapeUnicode(MockHiraganaRange.start)],
      };
      const isValidKanaWithHiragana = createThresholdBasedValidator(mergedOptions);
      const result = isValidKanaWithHiragana(invalidString, 85);
      expect(result).toBe(false);
    });

    test('should throw an error when invalid custom unicodes are provided', () => {
      const mergedOptions: CreateValidatorOptions = {
        ...mockOptions,
        customUnicodes: [''],
      };
      // Disabled ts intentionally to test the error message
      // @ts-ignore
      expect(() => createThresholdBasedValidator(mergedOptions)).toThrow(
        '[japanese-moji]: createUnicode: invalid unicode value supplied',
      );
    });
  });
});
