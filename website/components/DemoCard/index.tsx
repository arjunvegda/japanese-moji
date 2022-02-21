import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { Heading, HeadingProps } from './Heading';
import { InputAndResult, InputAndResultProps } from './InputAndResult';
import { FC } from 'react';

export interface DemoCardProps extends HeadingProps, InputAndResultProps {
  footerText?: string;
}

export const DemoCard: FC<DemoCardProps> = ({
  initialValue = '',
  threshold = 85,
  isValid,
  isPresent,
  howMuchIsPresent,
  headingValue,
  githubUrl,
  footerText,
}: DemoCardProps) => {
  const bgColor = useColorModeValue('white', '#1f1f22');
  const borderColor = useColorModeValue('gray.300', 'gray.700');
  const helpTextColor = useColorModeValue('gray.500', 'gray.400');

  return (
    <Box border="1px" borderColor={borderColor} p={5} rounded="md" backgroundColor={bgColor}>
      <Heading headingValue={headingValue} githubUrl={githubUrl} />
      <InputAndResult
        isValid={isValid}
        isPresent={isPresent}
        howMuchIsPresent={howMuchIsPresent}
        threshold={threshold}
        initialValue={initialValue}
      />
      <Text fontSize="sm" color={helpTextColor} mt={7}>
        {footerText}
      </Text>
    </Box>
  );
};
