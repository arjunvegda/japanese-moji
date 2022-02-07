import { CharacterSet, CreateValidatorOptions } from '../types';
import {
  createMatchScoreCalculator,
  createStrictValidator,
  createThresholdBasedValidator,
} from '../utils';

const options: CreateValidatorOptions = {
  characterSets: [
    CharacterSet.KatakanaPhoneticExtension,
    CharacterSet.Katakana,
    CharacterSet.Hiragana,
  ],
};

/**
 * Validates Kana characters in a string
 * Only includes regular characters without punctuations
 */
export const isValidKana = createStrictValidator(options);
export const isKanaPresent = createThresholdBasedValidator(options);
export const howMuchKanaIsPresent = createMatchScoreCalculator(options);
