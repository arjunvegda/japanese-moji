import { generateCharactersFromRanges, getRandomString, toFixedNumber } from '../utils';
import { howMuchKanaIsPresent, isKanaPresent, isValidKana } from '../../src';
import {
  MockHalfWidthKatakana,
  MockKatakanaPhoneticExtensionRange,
  MockKatakanaRange,
} from '../constants';

describe('validator - kana', () => {
  const fullKanaString = generateCharactersFromRanges([
    MockKatakanaRange,
    MockKatakanaPhoneticExtensionRange,
    MockHalfWidthKatakana,
  ]);

  const invalidString = getRandomString(27);

  describe('isValidKana', () => {
    test('should return true when only kana characters are supplied', () => {
      const result = isValidKana(fullKanaString);
      expect(result).toBe(true);
    });

    test('should return false when only kana and non kana characters are supplied', () => {
      const result = isValidKana(fullKanaString + invalidString);
      expect(result).toBe(false);
    });
  });

  describe('isValidKanaPresent', () => {
    test('should return true when only kana characters are supplied', () => {
      const result = isKanaPresent(fullKanaString);
      expect(result).toBe(true);
    });

    test('should return true when string has valid characters above threshold', () => {
      const result = isKanaPresent(fullKanaString + invalidString, 85);
      expect(result).toBe(true);
    });

    test('should return false when string has valid characters below threshold', () => {
      const result = isKanaPresent(invalidString, 85);
      expect(result).toBe(false);
    });
  });

  describe('howMuchKanaPresent', () => {
    test('should return 100 when only kana characters are supplied', () => {
      const result = howMuchKanaIsPresent(fullKanaString);
      expect(result).toBe(100);
    });

    test('should return 89 when only kana characters are supplied', () => {
      const result = howMuchKanaIsPresent(fullKanaString + invalidString);
      // Precision is important here due to the length of the string
      expect(toFixedNumber(result, 3)).toBe(86.294);
    });

    test('should return 0 when no kana characters are supplied', () => {
      const result = howMuchKanaIsPresent(invalidString);
      expect(toFixedNumber(result)).toBe(0);
    });
  });
});
