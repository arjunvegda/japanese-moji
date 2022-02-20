import { generateCharactersFromRanges, getRandomString, toFixedNumber } from '../utils';
import { howMuchJapaneseIsPresent, isJapanesePresent, isValidJapanese } from '../../src';
import {
  MockCJKPunctuationsRange,
  MockCommonUncommonKanjiRange,
  MockHiraganaRange,
  MockKanjiCompatibilityIdeographsRange,
  MockKatakanaPhoneticExtensionRange,
  MockKatakanaRange,
  MockRareKanjiRange,
  MockHalfWidthKatakana,
  MockFullWidthUpperCaseRange,
  MockFullWidthLowerCaseRange,
  MockFullWidthNumbersRange,
  MockFullWidthPunctuationsRange,
} from '../constants';

describe('validator - Japanese', () => {
  const fullJapaneseString = generateCharactersFromRanges([
    MockRareKanjiRange,
    MockCommonUncommonKanjiRange,
    MockKanjiCompatibilityIdeographsRange,
    MockKatakanaRange,
    MockKatakanaPhoneticExtensionRange,
    MockHiraganaRange,
    MockCJKPunctuationsRange,
    MockHalfWidthKatakana,
    MockFullWidthUpperCaseRange,
    MockFullWidthLowerCaseRange,
    MockFullWidthNumbersRange,
    ...MockFullWidthPunctuationsRange,
  ]);

  const invalidString = getRandomString(500);

  describe('isValidJapanese', () => {
    test('should return true when only Japanese characters are supplied', () => {
      const result = isValidJapanese(fullJapaneseString);
      expect(result).toBe(true);
    });

    test('should return false when only Japanese and non Japanese characters are supplied', () => {
      const result = isValidJapanese(fullJapaneseString + invalidString);
      expect(result).toBe(false);
    });
  });

  describe('isValidJapanesePresent', () => {
    test('should return true when only Japanese characters are supplied', () => {
      const result = isJapanesePresent(fullJapaneseString);
      expect(result).toBe(true);
    });

    test('should return true when string has valid characters above threshold', () => {
      const result = isJapanesePresent(fullJapaneseString + invalidString, 85);
      expect(result).toBe(true);
    });

    test('should return false when string has valid characters below threshold', () => {
      const result = isJapanesePresent(invalidString, 85);
      expect(result).toBe(false);
    });
  });

  describe('howMuchJapanesePresent', () => {
    test('should return 100 when only Japanese characters are supplied', () => {
      const result = howMuchJapaneseIsPresent(fullJapaneseString);
      expect(result).toBe(100);
    });

    test('should return 98 when only Japanese characters are supplied', () => {
      const result = howMuchJapaneseIsPresent(invalidString + fullJapaneseString);
      // Precision is important here since the length of the string is huge
      expect(toFixedNumber(result, 3)).toBe(98.276);
    });

    test('should return 0 when no Japanese characters are supplied', () => {
      const result = howMuchJapaneseIsPresent(invalidString);
      expect(toFixedNumber(result)).toBe(0);
    });
  });
});
