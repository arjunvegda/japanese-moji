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

export const HalfWidthKatakanaRange: UnicodeRange = {
  start: '\\uff66',
  end: '\\uff9f',
};

// Roman full width forms
// Example - ＡＢＣＤ...Ｚ
export const FullWidthUpperCaseRange: UnicodeRange = {
  start: '\\uff21',
  end: '\\uff3a',
};

// Roman full width forms
// Example - ａｂｃｄ...ｚ
export const FullWidthLowerCaseRange: UnicodeRange = {
  start: '\\uff41',
  end: '\\uff5a',
};

// Roman half width forms
// Example - ０１２３...９
export const FullWidthNumbersRange: UnicodeRange = {
  start: '\\uff10',
  end: '\\uff19',
};

// Roman full width forms
// List - ！＂＃＄％＆＇（）＊＋，－．／
export const FullWidthPunctuations: UnicodeRange = {
  start: '\\uff00',
  end: '\\uff0f',
};

// Roman full width forms
// List - ：；＜＝＞？＠
const FullWidthPunctuationsExtensionA: UnicodeRange = {
  start: '\\uff1a',
  end: '\\uff20',
};

// Roman full width forms
// List -［＼］＾＿｀
const FullWidthPunctuationsExtensionB: UnicodeRange = {
  start: '\\uff3b',
  end: '\\uff40',
};

// Roman full width forms
// List -｛｜｝～｟｠｡｢｣､･
const FullWidthPunctuationsExtensionC: UnicodeRange = {
  start: '\\uff5b',
  end: '\\uff65',
};

export const FullWidthPunctuationsRange: UnicodeRange[] = [
  FullWidthPunctuations,
  FullWidthPunctuationsExtensionA,
  FullWidthPunctuationsExtensionB,
  FullWidthPunctuationsExtensionC,
];
