import type { UnicodeRange } from '../src';

export const MockKatakanaRange: UnicodeRange = {
  start: '\u30a0',
  end: '\u30ff',
};

export const MockKatakanaPhoneticExtensionRange: UnicodeRange = {
  start: '\u31f0',
  end: '\u31FF',
};

export const MockHiraganaRange: UnicodeRange = {
  start: '\u3040',
  end: '\u309f',
};

export const MockRareKanjiRange: UnicodeRange = {
  start: '\u3400',
  end: '\u4dbf',
};

export const MockCJKPunctuationsRange: UnicodeRange = {
  start: '\u3000',
  end: '\u303f',
};

export const MockKanjiCompatibilityIdeographsRange: UnicodeRange = {
  start: '\uf900',
  end: '\ufaff',
};

export const MockCommonUncommonKanjiRange: UnicodeRange = {
  start: '\u4e00',
  end: '\u9fdf',
};

export const MockHalfWidthKatakana: UnicodeRange = {
  start: '\uff66',
  end: '\uff9f',
};

export const MockFullWidthUpperCaseRange: UnicodeRange = {
  start: '\uff21',
  end: '\uff3a',
};

export const MockFullWidthLowerCaseRange: UnicodeRange = {
  start: '\uff41',
  end: '\uff5a',
};

export const MockFullWidthNumbersRange: UnicodeRange = {
  start: '\uff10',
  end: '\uff19',
};

export const MockFullWidthPunctuations: UnicodeRange = {
  start: '\uff00',
  end: '\uff0f',
};

const MockFullWidthPunctuationsExtensionA: UnicodeRange = {
  start: '\uff1a',
  end: '\uff20',
};

const MockFullWidthPunctuationsExtensionB: UnicodeRange = {
  start: '\uff3b',
  end: '\uff40',
};

const MockFullWidthPunctuationsExtensionC: UnicodeRange = {
  start: '\uff5b',
  end: '\uff65',
};

export const MockFullWidthPunctuationsRange: UnicodeRange[] = [
  MockFullWidthPunctuations,
  MockFullWidthPunctuationsExtensionA,
  MockFullWidthPunctuationsExtensionB,
  MockFullWidthPunctuationsExtensionC,
];
