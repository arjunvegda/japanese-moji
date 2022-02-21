import { CharacterSet, UnicodeRange } from 'japanese-moji';
import { RecipeCardProps } from './RecipeCard';

const Hiragana: RecipeCardProps = {
  options: {
    characterSets: [CharacterSet.Hiragana],
  },
  githubUrl: 'https://github.com/arjunvegda/japanese-moji/blob/main/docs/RECIPES.md#hiragana',
  headingValue: 'Hiragana',
  footerText: 'Validates using only Hiragana character set',
  initialValue: 'おげんきですか',
};

const HiraganaCJKPunctuations: RecipeCardProps = {
  options: {
    characterSets: [CharacterSet.Hiragana, CharacterSet.CJKPunctuations],
  },
  githubUrl:
    'https://github.com/arjunvegda/japanese-moji/blob/main/docs/RECIPES.md#hiragana--cjk-symbols--punctuations',
  headingValue: 'Hiragana + CJK Punctuations',
  footerText: 'Validates using Hiragana and CJK Symbols & Punctuations character set',
  initialValue: 'おげんきですか。。。〔げんきです。〕',
};

const HiraganaKatakana: RecipeCardProps = {
  options: {
    characterSets: [
      CharacterSet.Hiragana,
      CharacterSet.Katakana,
      CharacterSet.KatakanaPhoneticExtension,
      CharacterSet.HalfWidthKatakana,
    ],
  },
  githubUrl:
    'https://github.com/arjunvegda/japanese-moji/blob/main/docs/RECIPES.md#hiragana--all-katakana',
  headingValue: 'Hiragana + Katakana',
  footerText:
    'Validates using Hiragana, Katakana, half-width Katakana and Kana phonetic extensions',
  initialValue: 'こんにちはアイ・ライク・ラーメン',
};

const HiraganaKanji: RecipeCardProps = {
  options: {
    characterSets: [
      CharacterSet.Hiragana,
      CharacterSet.RareKanji,
      CharacterSet.CommonUncommonKanji,
      CharacterSet.KanjiCompatibilityIdeographs,
    ],
  },
  githubUrl:
    'https://github.com/arjunvegda/japanese-moji/blob/main/docs/RECIPES.md#hiragana--all-kanji',
  headingValue: 'Hiragana + Kanji',
  footerText:
    'Validates using Hiragana, CJK Compatibility Ideographs (Kanji), CJK Unified Ideographs and CJK Unified Ideographs Extension A',
  initialValue: 'お気に入り辛い寿司',
};

const FullWidthLetters: RecipeCardProps = {
  options: {
    characterSets: [
      CharacterSet.FullWidthUpperCase,
      CharacterSet.FullWidthLowerCase,
      CharacterSet.FullWidthNumbers,
      CharacterSet.FullWidthPunctuations,
    ],
  },
  githubUrl:
    'https://github.com/arjunvegda/japanese-moji/blob/main/docs/RECIPES.md#all-fullwidth-letters',
  headingValue: 'Fullwidth Letters',
  footerText: 'Validates using fullwidth upper case, lower case, numbers and punctuations',
  initialValue: 'Ｉ＇ｄ＀ｌｉｋｅ＀２＀ｂｏｗｌｓ＀ｏｆ＀ｒａｍｅｎ，＀ｐｌｅａｓｅ．',
};

// includes: " " (space), !"#$%&'()*+,-./
const LatinPunctuations: UnicodeRange = {
  start: '\\u0020',
  end: '\\u002f',
};

// includes: :;<=>?@
const LatinPunctuationsExtensionA: UnicodeRange = {
  start: '\\u003a',
  end: '\\u0040',
};

// includes: [\]^_`
const LatinPunctuationsExtensionB: UnicodeRange = {
  start: '\\u005b',
  end: '\\u0060',
};

// includes: {|}~
const LatinPunctuationsExtensionC: UnicodeRange = {
  start: '\\u007b',
  end: '\\u007e',
};

const LatinPunctuationsRanges: UnicodeRange[] = [
  LatinPunctuations,
  LatinPunctuationsExtensionA,
  LatinPunctuationsExtensionB,
  LatinPunctuationsExtensionC,
];

const LatinJapanese: RecipeCardProps = {
  options: {
    characterSets: [
      CharacterSet.CJKPunctuations,
      CharacterSet.Hiragana,
      CharacterSet.Katakana,
      CharacterSet.KatakanaPhoneticExtension,
      CharacterSet.RareKanji,
      CharacterSet.CommonUncommonKanji,
      CharacterSet.KanjiCompatibilityIdeographs,
      CharacterSet.HalfWidthKatakana,
      CharacterSet.FullWidthUpperCase,
      CharacterSet.FullWidthLowerCase,
      CharacterSet.FullWidthNumbers,
      CharacterSet.FullWidthPunctuations,
    ],
    customRanges: [...LatinPunctuationsRanges],
  },
  githubUrl:
    'https://github.com/arjunvegda/japanese-moji/blob/main/docs/RECIPES.md#latin-punctuations--all-japanese',
  headingValue: 'Latin Punctuations + Japanese',
  footerText:
    'Validates using all Latin punctuations, and all Japanese systems (Kana, Hiragana, all Kanji, CJK punctuations and all the Fullwidth letters)',
  initialValue: '〒１０５-００１１ 東京都港区芝公園４丁目２-８',
};

export const customRecipesData: RecipeCardProps[] = [
  Hiragana,
  HiraganaCJKPunctuations,
  HiraganaKatakana,
  HiraganaKanji,
  FullWidthLetters,
  LatinJapanese,
];
