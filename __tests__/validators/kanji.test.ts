import {
  generateCharactersFromRange,
  generateCharactersFromRanges,
  getRandomString,
  toFixedNumber,
} from '../utils';
import { howMuchKanjiIsPresent, isKanjiPresent, isValidKanji } from '../../src';
import {
  MockCommonUncommonKanjiRange,
  MockKanjiCompatibilityIdeographsRange,
  MockRareKanjiRange,
} from '../constants';

describe('validator - Kanji', () => {
  const rareKanjiRange: string = generateCharactersFromRange(
    MockRareKanjiRange.start,
    MockRareKanjiRange.end,
  );

  const fullKanjiString = generateCharactersFromRanges([
    MockRareKanjiRange,
    MockCommonUncommonKanjiRange,
    MockKanjiCompatibilityIdeographsRange,
  ]);

  const invalidString = getRandomString(300);

  describe('isValidKanji', () => {
    test('should return true when only Kanji characters are supplied', () => {
      const result = isValidKanji(fullKanjiString);
      expect(result).toBe(true);
    });

    test('should return false when only Kanji and non Kanji characters are supplied', () => {
      const result = isValidKanji(fullKanjiString + invalidString);
      expect(result).toBe(false);
    });
  });

  describe('isValidKanjiPresent', () => {
    test('should return true when only Kanji characters are supplied', () => {
      const result = isKanjiPresent(fullKanjiString);
      expect(result).toBe(true);
    });

    test('should return true when string has valid characters above threshold', () => {
      const result = isKanjiPresent(fullKanjiString + invalidString, 85);
      expect(result).toBe(true);
    });

    test('should return false when string has valid characters below threshold', () => {
      const result = isKanjiPresent(invalidString, 85);
      expect(result).toBe(false);
    });
  });

  describe('howMuchKanjiPresent', () => {
    test('should return 100 when only Kanji characters are supplied', () => {
      const result = howMuchKanjiIsPresent(fullKanjiString);
      expect(result).toBe(100);
    });

    test('should return 96 when only Kanji characters are supplied', () => {
      const result = howMuchKanjiIsPresent(invalidString + rareKanjiRange);
      // Precision is important here due to the length of the string
      expect(toFixedNumber(result, 3)).toBe(95.647);
    });

    test('should return 0 when no Kanji characters are supplied', () => {
      const result = howMuchKanjiIsPresent(invalidString);
      expect(toFixedNumber(result)).toBe(0);
    });
  });
});
