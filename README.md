<p align="center">
    <img alt="Japanese Moji Logo" src="./docs/logo-light.svg">
</p>
<p align="center">
    <a href="https://www.npmjs.com/package/japanese-moji">
      <img src="https://badgen.net/github/release/arjunvegda/japanese-moji"/>
    </a>
    <a href="https://bundlephobia.com/package/japanese-moji">
      <img src="https://badgen.net/bundlephobia/minzip/japanese-moji?color=green"/>
    </a>
    <a href="https://bundlephobia.com/package/japanese-moji">
      <img src="https://badgen.net/bundlephobia/dependency-count/japanese-moji?color=green"/>
    </a>
    <a href="https://codecov.io/gh/arjunvegda/japanese-moji">
      <img src="https://codecov.io/gh/arjunvegda/japanese-moji/branch/main/graph/badge.svg?token=GZ8GBUVYD8"/>
    </a>
    <a href="./LICENSE">
      <img src="https://badgen.net/npm/license/japanese-moji?color=blue"/>
    </a>
<hr/>

The word "Moji" translates to "Character" in English

## 🚀 Features

- Very small footprint with zero dependencies
- Supports strict and threshold-based validation for Kanji, Kana, and all the Japanese characters
  including punctuations
- Exports easy to use score calculator for Kanji, Kana, and the rest of the Japanese characters
- Easy to extend with customizable options and build-your-own validators
- Supports custom single Unicode and Unicode ranges out-of-the-box
- 100% TypeScript friendly
- ESM, CJS, and UMD builds

## 📦 Install

### Yarn

```
yarn add japanese-moji
```

### NPM

```
npm install --save japanese-moji
```

## 👨‍💻 Quick start

### Kanji

Validates Rare Kanji, Common and Uncommon Kanji, and Kanji compatibility ideographs

```ts
import { isValidKanji, isKanjiPresent, howMuchKanjiIsPresent } from 'japanese-moji';

// Strict validation
const isValidKanjiResult = isValidKanji('some string here');

// Default threshold is 85 (2nd argument)
const isKanjiPresentResult = isKanjiPresent('some string here', 90);

// Returns % of Kanji present in a string
const howMuchKanjiIsPresentResult = howMuchKanjiIsPresent('some string here');
```

### Kana

Validates Katakana, Half-width Katakana, and Katakana phonetic extensions

```ts
import { isValidKana, isKanaPresent, howMuchKanaIsPresent } from 'japanese-moji';

// Strict validation
const isValidKanaResult = isValidKana('some string here');

// Default threshold is 85 (2nd argument)
const isKanaPresentResult = isKanaPresent('some string here', 90);

// Returns % of Kana present in a string
const howMuchKanaIsPresentResult = howMuchKanaIsPresent('some string here');
```

### Japanese

Validates CJK punctuations, Hiragana, Katakana, Katakana phonetic extensions, Rare Kanji, Common and
Uncommon Kanji, Kanji compatibility ideographs, and Half-width Katakana forms

```ts
import { isValidJapanese, isJapanesePresent, howMuchJapaneseIsPresent } from 'japanese-moji';

// Strict validation
const isValidJapaneseResult = isValidJapanese('some string here');

// Default threshold is 85 (2nd argument)
const isJapanesePresentResult = isJapanesePresent('some string here', 90);

// Returns % of Japanese present in a string
const howMuchJapaneseIsPresentResult = howMuchJapaneseIsPresent('some string here');
```

### 📝 Types summary

```ts
enum CharacterSet {
  CJKPunctuations = 'CJKPunctuations',
  Hiragana = 'Hiragana',
  Katakana = 'Katakana',
  KatakanaPhoneticExtension = 'KatakanaPhoneticExtension',
  RareKanji = 'RareKanji',
  KanjiCompatibilityIdeographs = 'KanjiCompatibilityIdeographs',
  CommonUncommonKanji = 'CommonUncommonKanji',
  HalfWidthKatakana = 'HalfWidthKatakana',
}

interface UnicodeRange {
  start: string;
  end: string;
}

interface CreateValidatorOptions {
  characterSets: CharacterSet[];
  customRanges?: UnicodeRange[];
  customUnicodes?: string[];
}

type StrictValidator = (arg: string) => boolean;
type ThresholdBasedValidator = (arg: string, threshold?: number) => boolean;
type MatchScoreCalculator = (arg: string) => number;
```

## 🛠 Build Your Own Validators

You could create your own validators too, should the existing validators not suffice your case.

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

// Requires escaped unicode characters
const LatinUnicodeRange: UnicodeRange = {
  start: '\\u0020',
  end: '\\u007F',
};

const customRanges: UnicodeRange[] = [LatinUnicodeRange];

// Provide escaped unicode characters
const customUnicodes = ['\\u00A0'];

const options: CreateValidatorOptions = {
  // Required
  characterSets: [
    CharacterSet.CJKPunctuations,
    CharacterSet.Hiragana,
    CharacterSet.Katakana,
    CharacterSet.KatakanaPhoneticExtension,
    CharacterSet.RareKanji,
    CharacterSet.CommonUncommonKanji,
    CharacterSet.KanjiCompatibilityIdeographs,
    CharacterSet.HalfWidthKatakana,
  ],
  customRanges, // Optional
  customUnicodes, // Optional
};

const isValidCustom: StrictValidator = createStrictValidator(options);
const isCustomPresent: ThresholdBasedValidator = createThresholdBasedValidator(options);
const howMuchIsCustomPresent: MatchScoreCalculator = createMatchScoreCalculator(options);

// Strict validation
const isValidCustomResult = isValidCustom('some string here');

// Default threshold is 85 (2nd argument)
const isCustomPresentResult = isCustomPresent('some string here', 90);

// Returns % of Japanese present in a string
const howMuchIsCustomPresentResult = howMuchIsCustomPresent('some string here');
```

### 📄 Changelog

Full change log available in the [docs/CHANGELOG.md](./docs/CHANGELOG.md)
