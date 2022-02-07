import type { UnicodeRange } from '../types';

export const CJKPunctuationsRange: UnicodeRange = {
  start: '\\u3000',
  end: '\\u303f',
};

export const HiraganaRange: UnicodeRange = {
  start: '\\u3040',
  end: '\\u309f',
};

export const KatakanaRange: UnicodeRange = {
  start: '\\u30a0',
  end: '\\u30ff',
};

export const KatakanaPhoneticExtensionRange: UnicodeRange = {
  start: '\\u31f0',
  end: '\\u31FF',
};

// CJK Unified Ideographs Extension A
export const RareKanjiRange: UnicodeRange = {
  start: '\\u3400',
  end: '\\u4dbf',
};

// 	CJK Compatibility Ideographs
export const KanjiCompatibilityIdeographsRange: UnicodeRange = {
  start: '\\uf900',
  end: '\\ufaff',
};

// CJK Unified Ideographs
export const CommonUncommonKanjiRange: UnicodeRange = {
  start: '\\u4e00',
  end: '\\u9fdf',
};

// Half width and Fullwidth Forms
export const RomanHalfwidthKatakanaRange: UnicodeRange = {
  start: '\\uff00',
  end: '\\uffef',
};
