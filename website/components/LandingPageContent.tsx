import { ArrowForwardIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Button, Text, Heading, Center, SimpleGrid } from '@chakra-ui/react';
import { AiOutlineGithub } from 'react-icons/ai';
import NextLink from 'next/link';
import { Tag } from './Tag';
import { FC } from 'react';
import prettyBytes from 'pretty-bytes';

interface LandingPageContentProps {
  releaseVersion: string;
  gzipBundleSize: number;
  codeCoverage: string;
}
export const LandingPageContent: FC<LandingPageContentProps> = ({
  releaseVersion,
  gzipBundleSize,
  codeCoverage,
}) => {
  return (
    <Box>
      <Center height="250px" mx="auto">
        <Heading maxWidth="20ch" fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}>
          Validate Japanese characters{' '}
          <Text fontWeight="bold" display="inline" color="yellow.400">
            with ease
          </Text>
        </Heading>
      </Center>
      <Center>
        <SimpleGrid columns={[1, 2, 2]} spacing={6}>
          <Button
            colorScheme="yellow"
            backgroundColor="yellow.400"
            size="lg"
            p={9}
            rightIcon={<ExternalLinkIcon />}
            leftIcon={<AiOutlineGithub />}
            iconSpacing={2}
            as="a"
            href="https://github.com/arjunvegda/japanese-moji#readme"
            target="_blank"
            rel="noreferrer"
          >
            Documentation
          </Button>

          <NextLink href="/demos">
            <Button
              colorScheme="yellow"
              variant="outline"
              borderColor="yellow.400"
              size="lg"
              p={9}
              rightIcon={<ArrowForwardIcon />}
            >
              Demos
            </Button>
          </NextLink>
        </SimpleGrid>
      </Center>

      <Center mt={6}>
        <SimpleGrid columns={[1, 2, 3, 3]} spacing={6}>
          {releaseVersion && (
            <Tag
              label="Stable release"
              value={`v${releaseVersion}`}
              href="https://www.npmjs.com/package/japanese-moji"
            />
          )}
          {gzipBundleSize && (
            <Tag
              label="MinZipped size"
              value={prettyBytes(gzipBundleSize)}
              href="https://bundlephobia.com/package/japanese-moji"
            />
          )}
          {codeCoverage && (
            <Tag
              label="Code Coverage"
              value={`${codeCoverage}%`}
              href="https://app.codecov.io/gh/arjunvegda/japanese-moji/branch/main"
            />
          )}
        </SimpleGrid>
      </Center>
    </Box>
  );
};
