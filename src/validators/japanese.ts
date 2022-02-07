import { CharacterSet, CreateValidatorOptions } from '../types';
import {
  createMatchScoreCalculator,
  createStrictValidator,
  createThresholdBasedValidator,
} from '../utils';

const options: CreateValidatorOptions = {
  characterSets: [
    CharacterSet.CJKPunctuations,
    CharacterSet.Hiragana,
    CharacterSet.Katakana,
    CharacterSet.KatakanaPhoneticExtension,
    CharacterSet.RareKanji,
    CharacterSet.CommonUncommonKanji,
    CharacterSet.KanjiCompatibilityIdeographs,
    CharacterSet.RomanHalfwidthKatakana,
  ],
};

/**
 * Validates Japanese characters in a string
 * Includes Kanji, Kana, Hiragana, Half width kana and CJK punctuations
 */
export const isValidJapanese = createStrictValidator(options);
export const isJapanesePresent = createThresholdBasedValidator(options);
export const howMuchJapaneseIsPresent = createMatchScoreCalculator(options);
