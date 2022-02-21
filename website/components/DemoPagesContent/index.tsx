import { DemoCard } from '../DemoCard';
import { Link, SimpleGrid, Text, VStack } from '@chakra-ui/react';

import {
  howMuchJapaneseIsPresent,
  howMuchKanaIsPresent,
  howMuchKanjiIsPresent,
  isJapanesePresent,
  isKanaPresent,
  isKanjiPresent,
  isValidJapanese,
  isValidKana,
  isValidKanji,
} from 'japanese-moji';
import packageJson from 'japanese-moji/package.json';

import { HeadingLink } from '../HeadingLink';
import { CustomRecipes } from './CustomRecipes';

export const DemosPageContent = () => {
  return (
    <>
      <VStack mb={5} alignItems="start">
        <HeadingLink as="h1" fontSize="3xl">
          Demos
        </HeadingLink>
        <Text fontSize="sm">
          Uses{' '}
          <Link
            href={`https://www.npmjs.com/package/japanese-moji/v/${packageJson.version}`}
            isExternal
          >
            v{packageJson.version}
          </Link>
        </Text>
      </VStack>
      <SimpleGrid columns={[1, null, null, 2]} spacing={6} mb={16}>
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
          footerText="Validates using Katakana, half-width Katakana and Kana phonetic extensions"
          githubUrl="https://github.com/arjunvegda/japanese-moji#kana"
        />
        <DemoCard
          isValid={isValidJapanese}
          isPresent={isJapanesePresent}
          howMuchIsPresent={howMuchJapaneseIsPresent}
          initialValue="私はラーメンが好きです"
          headingValue="Japanese"
          footerText="Validates using all Kana, Hiragana, all Kanji, CJK punctuations and all the Fullwidth letters"
          githubUrl="https://github.com/arjunvegda/japanese-moji#japanese"
        />
      </SimpleGrid>
      <CustomRecipes />
    </>
  );
};
