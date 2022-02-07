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

export const MockRomanHalfwidthKatakanaRange: UnicodeRange = {
  start: '\uff00',
  end: '\uffef',
};
