import { Flex, IconButton, Link, useColorModeValue } from '@chakra-ui/react';
import { AiOutlineGithub } from 'react-icons/ai';
import { FC } from 'react';
import { HeadingLink } from '../HeadingLink';

export interface HeadingProps {
  headingValue: string;
  githubUrl: string;
}

export const Heading: FC<HeadingProps> = ({ headingValue, githubUrl }) => {
  const githubIconColor = useColorModeValue('gray.800', 'gray.300');

  return (
    <Flex justifyContent="space-between">
      <HeadingLink as="h2" fontSize="2xl">
        {headingValue}
      </HeadingLink>
      <IconButton
        aria-label="Github URL"
        fontSize="xl"
        variant="link"
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
