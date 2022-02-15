import { DemoCard } from './DemoCard';

import { Heading, SimpleGrid } from '@chakra-ui/react';
import {
  CharacterSet,
  createMatchScoreCalculator,
  createStrictValidator,
  createThresholdBasedValidator,
  CreateValidatorOptions,
  howMuchJapaneseIsPresent,
  howMuchKanaIsPresent,
  howMuchKanjiIsPresent,
  isJapanesePresent,
  isKanaPresent,
  isKanjiPresent,
  isValidJapanese,
  isValidKana,
  isValidKanji,
  UnicodeRange,
} from 'japanese-moji';

const customRanges: UnicodeRange[] = [
  {
    start: '\\u0020',
    end: '\\u007F',
  },
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
  ],
  customRanges,
};

const isValidCustom = createStrictValidator(options);
const isCustomPresent = createThresholdBasedValidator(options);
const howMuchIsCustomPresent = createMatchScoreCalculator(options);

export const DemosPageContent = () => {
  return (
    <>
      <Heading as="h1" mb={5}>
        Demos
      </Heading>
      <SimpleGrid columns={[1, null, null, 2]} spacing={6}>
        <DemoCard
          isValid={isValidKanji}
          isPresent={isKanjiPresent}
          howMuchIsPresent={howMuchKanjiIsPresent}
          initialValue="我喜欢拉面"
          headingValue="Kanji"
          footerText="Validates using CJK Compatibility Ideographs (Kanji), CJK Unified Ideographs and CJK Unified Ideographs Extension A"
          githubUrl="https://github.com/arjunvegda/japanese-moji#kanji"
        />
        <DemoCard
          isValid={isValidKana}
          isPresent={isKanaPresent}
          howMuchIsPresent={howMuchKanaIsPresent}
          initialValue="アイ・ライク・ラーメン"
          headingValue="Kana"
          footerText="Validates using Kana, half-width Katakana and Kana phonetic extensions"
          githubUrl="https://github.com/arjunvegda/japanese-moji#kana"
        />
        <DemoCard
          isValid={isValidJapanese}
          isPresent={isJapanesePresent}
          howMuchIsPresent={howMuchJapaneseIsPresent}
          initialValue="私はラーメンが好きです"
          headingValue="Japanese"
          footerText="Validates using all Kana, Hiragana, all Kanji and CJK punctuation"
          githubUrl="https://github.com/arjunvegda/japanese-moji#japanese"
        />
        <DemoCard
          isValid={isValidCustom}
          isPresent={isCustomPresent}
          howMuchIsPresent={howMuchIsCustomPresent}
          initialValue="寿司と刺身 | sushi and sashimi"
          headingValue="Custom"
          footerText="Validates using Latin and all the Japanese characters"
          githubUrl="https://github.com/arjunvegda/japanese-moji#-build-your-own-validators"
        />
      </SimpleGrid>
    </>
  );
};
