# 📚 Recipes

<a href="https://japanese-moji.vercel.app/demos#custom-recipes">
    <img src="https://img.shields.io/badge/demos-%F0%9F%9A%80-green" alt="Demo" />
</a>
<br/>

A collection of code snippets to make creating
[custom validators](../README.md#-build-your-own-validators) easy. These recipes could be supplied
to create custom validators. [Kana](../README.md#kana), [Kanji](../README.md#kanji) and
[Japanese](../README.md#japanese) character validators are available out-of-the-box. Check out
[README.md](../README.md) for more details.

## Template

Copy/paste this template and replace "options" with your choice of set from below

```ts
import {
  // Types
  UnicodeRange,
  CreateValidatorOptions,
  StrictValidator,
  ThresholdBasedValidator,
  MatchScoreCalculator,
  CharacterSet,

  // Functions
  createStrictValidator,
  createThresholdBasedValidator,
  createMatchScoreCalculator,
} from 'japanese-moji';

const options: CreateValidatorOptions = {
  // Required property
  characterSets: [
    // Mix/Match character sets here
  ],
  // Optional properties
  // customRanges?: UnicodeRange[];
  // customUnicodes?: string[];
};

const isValidCustom: StrictValidator = createStrictValidator(options);
const isCustomPresent: ThresholdBasedValidator = createThresholdBasedValidator(options);
const howMuchIsCustomPresent: MatchScoreCalculator = createMatchScoreCalculator(options);
```

## Hiragana

<a href="https://japanese-moji.vercel.app/demos#hiragana">
    <img src="https://img.shields.io/badge/demo-%F0%9F%9A%80-green" alt="Demo" />
</a>

```ts
const options: CreateValidatorOptions = {
  characterSets: [CharacterSet.Hiragana],
};
```

## Hiragana + CJK Symbols & Punctuations

<a href="https://japanese-moji.vercel.app/demos#hiragana-cjk-punctuations">
    <img src="https://img.shields.io/badge/demo-%F0%9F%9A%80-green" alt="Demo" />
</a>

```ts
const options: CreateValidatorOptions = {
  characterSets: [CharacterSet.Hiragana, CharacterSet.CJKPunctuations],
};
```

## Hiragana + All Katakana

<a href="https://japanese-moji.vercel.app/demos#hiragana-katakana">
    <img src="https://img.shields.io/badge/demo-%F0%9F%9A%80-green" alt="Demo" />
</a>

```ts
const options: CreateValidatorOptions = {
  characterSets: [
    CharacterSet.Hiragana,
    CharacterSet.Katakana,
    CharacterSet.KatakanaPhoneticExtension,
    CharacterSet.HalfWidthKatakana,
  ],
};
```

## Hiragana + All Kanji

<a href="https://japanese-moji.vercel.app/demos#hiragana-kanji">
    <img src="https://img.shields.io/badge/demo-%F0%9F%9A%80-green" alt="Demo" />
</a>

```ts
const options: CreateValidatorOptions = {
  characterSets: [
    CharacterSet.Hiragana,
    CharacterSet.RareKanji,
    CharacterSet.CommonUncommonKanji,
    CharacterSet.KanjiCompatibilityIdeographs,
  ],
};
```

## All fullwidth letters

<a href="https://japanese-moji.vercel.app/demos#fullwidth-letters">
    <img src="https://img.shields.io/badge/demo-%F0%9F%9A%80-green" alt="Demo" />
</a>

```ts
const options: CreateValidatorOptions = {
  characterSets: [
    CharacterSet.FullWidthUpperCase,
    CharacterSet.FullWidthLowerCase,
    CharacterSet.FullWidthNumbers,
    CharacterSet.FullWidthPunctuations,
  ],
};
```

## Latin punctuations + All Japanese

<a href="https://japanese-moji.vercel.app/demos#latin-punctuations-japanese">
    <img src="https://img.shields.io/badge/demo-%F0%9F%9A%80-green" alt="Demo" />
</a>

```ts
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

const options: CreateValidatorOptions = {
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
};
```
