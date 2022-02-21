import { CharacterDict, CharacterSet } from '../types';
import {
  CJKPunctuations,
  CommonUncommonKanji,
  HalfWidthKatakana,
  Hiragana,
  Katakana,
  KatakanaPhoneticExtension,
  RareKanji,
  KanjiCompatibilityIdeographs,
  FullWidthPunctuations,
  FullWidthLowerCase,
  FullWidthUpperCase,
  FullWidthNumbers,
} from './built-ranges';

export const characterSetMap: Readonly<CharacterDict> = Object.freeze({
  [CharacterSet.CJKPunctuations]: CJKPunctuations,
  [CharacterSet.Hiragana]: Hiragana,
  [CharacterSet.Katakana]: Katakana,
  [CharacterSet.KatakanaPhoneticExtension]: KatakanaPhoneticExtension,
  [CharacterSet.RareKanji]: RareKanji,
  [CharacterSet.KanjiCompatibilityIdeographs]: KanjiCompatibilityIdeographs,
  [CharacterSet.CommonUncommonKanji]: CommonUncommonKanji,
  [CharacterSet.HalfWidthKatakana]: HalfWidthKatakana,
  [CharacterSet.FullWidthUpperCase]: FullWidthUpperCase,
  [CharacterSet.FullWidthLowerCase]: FullWidthLowerCase,
  [CharacterSet.FullWidthNumbers]: FullWidthNumbers,
  [CharacterSet.FullWidthPunctuations]: FullWidthPunctuations,
});

export const defaultValidationThreshold = 85;
export const isProduction: boolean = process.env.NODE_ENV === 'production';
