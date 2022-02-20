# 📚 Recipes

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

```ts
const options: CreateValidatorOptions = {
  characterSets: [CharacterSet.Hiragana],
};
```

## Hiragana + CJK Symbols & Punctuations

```ts
const options: CreateValidatorOptions = {
  characterSets: [CharacterSet.Hiragana, CharacterSet.CJKPunctuations],
};
```

## Hiragana + All Katakana

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
