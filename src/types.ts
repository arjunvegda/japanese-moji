export enum CharacterSet {
  CJKPunctuations = 'CJKPunctuations',
  Hiragana = 'Hiragana',
  Katakana = 'Katakana',
  KatakanaPhoneticExtension = 'KatakanaPhoneticExtension',
  RareKanji = 'RareKanji',
  KanjiCompatibilityIdeographs = 'KanjiCompatibilityIdeographs',
  CommonUncommonKanji = 'CommonUncommonKanji',
  RomanHalfwidthKatakana = 'RomanHalfwidthKatakana',
}

export type CharacterDict = Record<CharacterSet, string>;

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
export type ThresholdCalculator = (arg: string) => number;
