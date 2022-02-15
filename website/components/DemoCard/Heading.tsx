import {
  Flex,
  IconButton,
  Link,
  useColorModeValue,
  Heading as ChakraHeading,
} from '@chakra-ui/react';
import { AiOutlineGithub } from 'react-icons/ai';
import { FC } from 'react';

export interface HeadingProps {
  headingValue?: 'Kana' | 'Kanji' | 'Japanese' | 'Custom';
  githubUrl: string;
}

export const Heading: FC<HeadingProps> = ({ headingValue, githubUrl }) => {
  const githubIconColor = useColorModeValue('gray.800', 'gray.300');

  return (
    <Flex justifyContent="space-between">
      <ChakraHeading as="h2" size="lg">
        {headingValue}
      </ChakraHeading>
      <IconButton
        aria-label="Github URL"
        fontSize="xl"
        variant="link"
        p={-1}
        icon={<AiOutlineGithub />}
        colorScheme="gray"
        as={Link}
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        color={githubIconColor}
      />
    </Flex>
  );
};
