<h1 align="center">
    <img alt="Japanese Moji Logo" src="./docs/logo-light.svg">
</h1>

The word "_Moji_" translates to "Character" in English

### 🚀 Features

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
const isValidKanjiResult = isValidKanji('我喜欢拉面'); // true

// Default threshold is 85 (2nd argument)
const isKanjiPresentResult = isKanjiPresent('我喜欢拉面', 90); // true

// Returns % of Kanji present in a string
const howMuchKanjiIsPresentResult = howMuchKanjiIsPresent('我喜欢拉面'); // 100
```

### Kana

Validates Katakana, Half-width Katakana, and Katakana phonetic extensions

```ts
import { isValidKana, isKanaPresent, howMuchKanaIsPresent } from 'japanese-moji';

// Strict validation
const isValidKanaResult = isValidKana('アイ・ライク・ラーメン'); // true

// Default threshold is 85 (2nd argument)
const isKanaPresentResult = isKanaPresent('アイ・ライク・ラーメン', 90); // true

// Returns % of Kana present in a string
const howMuchKanaIsPresentResult = howMuchKanaIsPresent('アイ・ライク・ラーメン'); // 100
```

### Japanese

Validates CJK punctuations, Hiragana, Katakana, Katakana phonetic extensions, Rare Kanji, Common and
Uncommon Kanji, Kanji compatibility ideographs, and Half-width Katakana forms

```ts
import { isValidJapanese, isJapanesePresent, howMuchJapaneseIsPresent } from 'japanese-moji';

// Strict validation
const isValidJapaneseResult = isValidJapanese('私はラーメンが好きです'); // true

// Default threshold is 85 (2nd argument)
const isJapanesePresentResult = isJapanesePresent('私はラーメンが好きです', 90); // true

// Returns % of Japanese present in a string
const howMuchJapaneseIsPresentResult = howMuchJapaneseIsPresent('私はラーメンが好きです'); // 100
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
```

### 📄 Changelog

Full change log available in the [docs/CHANGELOG.md](./docs/CHANGELOG.md)
