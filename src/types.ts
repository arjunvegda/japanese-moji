export enum CharacterSet {
  CJKPunctuations = 'CJKPunctuations',
  Hiragana = 'Hiragana',
  Katakana = 'Katakana',
  KatakanaPhoneticExtension = 'KatakanaPhoneticExtension',
  RareKanji = 'RareKanji',
  KanjiCompatibilityIdeographs = 'KanjiCompatibilityIdeographs',
  CommonUncommonKanji = 'CommonUncommonKanji',
  HalfWidthKatakana = 'HalfWidthKatakana',
  FullWidthUpperCase = 'FullWidthUpperCase',
  FullWidthLowerCase = 'FullWidthLowerCase',
  FullWidthNumbers = 'FullWidthNumbers',
  FullWidthPunctuations = 'FullWidthPunctuations',
}

export type CharacterDict = Record<CharacterSet, string | string[]>;

/**
 * All the values must be escaped to be used in a regex
 *
 * Example of a valid value - `\\u3042`
 */
export interface UnicodeRange {
  start: string;
  end: string;
}

export interface CreateValidatorOptions {
  characterSets: CharacterSet[];
  customRanges?: UnicodeRange[];
  customUnicodes?: string[];
}

export type StrictValidator = (arg: string) => boolean;
export type ThresholdBasedValidator = (
  arg: string,
  // between 0 and 100
  threshold?: number,
) => boolean;
export type MatchScoreCalculator = (arg: string) => number;
