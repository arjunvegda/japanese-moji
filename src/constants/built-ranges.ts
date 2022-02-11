import {
  CJKPunctuationsRange,
  CommonUncommonKanjiRange,
  HalfWidthKatakanaRange,
  HiraganaRange,
  KatakanaPhoneticExtensionRange,
  KatakanaRange,
  RareKanjiRange,
  KanjiCompatibilityIdeographsRange,
} from './raw-ranges';
import { createRange } from '../utils/create-range';

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
