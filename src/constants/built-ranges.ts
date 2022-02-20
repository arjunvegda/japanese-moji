import {
  CJKPunctuationsRange,
  CommonUncommonKanjiRange,
  HalfWidthKatakanaRange,
  HiraganaRange,
  KatakanaPhoneticExtensionRange,
  KatakanaRange,
  RareKanjiRange,
  KanjiCompatibilityIdeographsRange,
  FullWidthPunctuationsRange,
  FullWidthUpperCaseRange,
  FullWidthNumbersRange,
  FullWidthLowerCaseRange,
} from './raw-ranges';
import { createRange } from '../utils/create-range';
import { createRanges } from '../utils/create-ranges';

export const CJKPunctuations = createRange(CJKPunctuationsRange.start, CJKPunctuationsRange.end);
export const Hiragana = createRange(HiraganaRange.start, HiraganaRange.end);
export const Katakana = createRange(KatakanaRange.start, KatakanaRange.end);
export const KatakanaPhoneticExtension = createRange(
  KatakanaPhoneticExtensionRange.start,
  KatakanaPhoneticExtensionRange.end,
);
export const RareKanji = createRange(RareKanjiRange.start, RareKanjiRange.end);
export const CommonUncommonKanji = createRange(
  CommonUncommonKanjiRange.start,
  CommonUncommonKanjiRange.end,
);

export const KanjiCompatibilityIdeographs = createRange(
  KanjiCompatibilityIdeographsRange.start,
  KanjiCompatibilityIdeographsRange.end,
);

export const HalfWidthKatakana = createRange(
  HalfWidthKatakanaRange.start,
  HalfWidthKatakanaRange.end,
);

export const FullWidthUpperCase = createRange(
  FullWidthUpperCaseRange.start,
  FullWidthUpperCaseRange.end,
);

export const FullWidthLowerCase = createRange(
  FullWidthLowerCaseRange.start,
  FullWidthLowerCaseRange.end,
);

export const FullWidthNumbers = createRange(FullWidthNumbersRange.start, FullWidthNumbersRange.end);
export const FullWidthPunctuations = createRanges(FullWidthPunctuationsRange);
