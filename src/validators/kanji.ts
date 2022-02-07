import { CharacterSet, CreateValidatorOptions } from '../types';
import {
  createMatchScoreCalculator,
  createStrictValidator,
  createThresholdBasedValidator,
} from '../utils';

const options: CreateValidatorOptions = {
  characterSets: [
    CharacterSet.RareKanji,
    CharacterSet.CommonUncommonKanji,
    CharacterSet.KanjiCompatibilityIdeographs,
  ],
};

/**
 * Validates Kanji characters in a string
 */
export const isValidKanji = createStrictValidator(options);
export const isKanjiPresent = createThresholdBasedValidator(options);
export const howMuchKanjiIsPresent = createMatchScoreCalculator(options);
