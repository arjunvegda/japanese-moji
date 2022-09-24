import {
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  Text,
  SimpleGrid,
  useColorModeValue,
  FormControl,
  InputGroup,
  FormLabel,
  Input,
  NumberInputField,
  NumberInput,
  HStack,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { MatchScoreCalculator, StrictValidator, ThresholdBasedValidator } from 'japanese-moji';
import { FC, useState } from 'react';
import { useIsomorphicLayoutEffect } from 'react-use';
import { IoMdRefresh } from 'react-icons/io';

export interface InputAndResultProps {
  initialValue?: string;
  initialThreshold?: number;
  isValid: StrictValidator;
  isPresent: ThresholdBasedValidator;
  howMuchIsPresent: MatchScoreCalculator;
  onUserInput?: () => void;
  onUserThresholdInput?: () => void;
}

export const InputAndResult: FC<InputAndResultProps> = ({
  initialValue = '',
  initialThreshold = 85,
  isValid,
  isPresent,
  howMuchIsPresent,
  onUserInput = () => {},
  onUserThresholdInput = () => {},
}) => {
  const borderColor = useColorModeValue('gray.300', 'gray.700');
  const green = useColorModeValue('green.600', 'green.400');
  const red = useColorModeValue('red.600', 'red.400');
  const helpTextColor = useColorModeValue('gray.500', 'gray.400');

  const borderStyles = {
    borderBottom: { base: '1px', md: '0px' },
    borderRight: { base: '0px', md: '1px' },
    borderColor: { base: borderColor, md: borderColor },
    pb: { base: 4, md: '0' },
  };

  const [input, setInput] = useState(initialValue);
  const [userInputThreshold, setUserInputThreshold] = useState<string>(initialThreshold.toString());
  const [validationState, setValidationState] = useState({
    isValidStrict: false,
    isPresent: false,
    score: 0,
  });

  useIsomorphicLayoutEffect(() => {
    setValidationState(() => ({
      isValidStrict: isValid(input),
      isPresent: isPresent(input, +userInputThreshold),
      score: howMuchIsPresent(input),
    }));
  }, [input, isValid, isPresent, howMuchIsPresent, setValidationState, userInputThreshold]);

  const computedThreshold = Math.max(0, Math.min(100, +userInputThreshold || 0));
  return (
    <>
      <HStack spacing={5}>
        <FormControl my={5} flex="95">
          <FormLabel htmlFor="input">Your input</FormLabel>
          <InputGroup size="sm">
            <Input
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                onUserInput();
              }}
              placeholder="Type something here..."
              rounded="sm"
            />
            <InputRightElement>
              <IconButton
                variant="ghost"
                aria-label="Reset input to initial value"
                title="Reset input to initial value"
                size="xs"
                p={0}
                fontSize="md"
                onClick={() => {
                  setInput(initialValue);
                }}
                icon={<IoMdRefresh />}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl flex="5">
          <FormLabel htmlFor="input">Threshold</FormLabel>
          <InputGroup size="sm">
            <NumberInput
              value={userInputThreshold}
              onChange={(str) => {
                setUserInputThreshold(str);
                onUserThresholdInput();
              }}
              clampValueOnBlur={false}
            >
              <NumberInputField rounded="sm" />
            </NumberInput>
            <InputRightElement>
              <IconButton
                variant="ghost"
                aria-label="Reset input to initial value"
                title="Reset input to initial value"
                size="xs"
                p={0}
                fontSize="md"
                onClick={() => {
                  setUserInputThreshold(initialThreshold.toString());
                }}
                icon={<IoMdRefresh />}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </HStack>

      <SimpleGrid columns={[1, null, 3]} spacing={6}>
        <StatGroup {...borderStyles}>
          <Stat>
            <StatLabel textTransform="uppercase" fontWeight="bold" fontSize="sm">
              is Valid?
            </StatLabel>
            <StatNumber>
              {validationState.isValidStrict ? (
                <Text color={green}>Yes</Text>
              ) : (
                <Text color={red}>No</Text>
              )}
            </StatNumber>
          </Stat>
        </StatGroup>
        <StatGroup {...borderStyles}>
          <Stat>
            <StatLabel textTransform="uppercase" fontWeight="bold" fontSize="sm">
              is present?
            </StatLabel>
            <StatNumber>
              {validationState.isPresent ? (
                <Text color={green}>Yes</Text>
              ) : (
                <Text color={red}>No</Text>
              )}
            </StatNumber>
            <Text fontSize="sm" color={helpTextColor}>
              {Math.round(computedThreshold * 100) / 100}% threshold
            </Text>
          </Stat>
        </StatGroup>
        <StatGroup>
          <Stat>
            <StatLabel textTransform="uppercase" fontWeight="bold" fontSize="sm">
              Score
            </StatLabel>
            <StatNumber>
              {validationState.score >= computedThreshold ? (
                <Text color={green}>{validationState.score.toFixed(2)}%</Text>
              ) : (
                <Text color={red}>{validationState.score.toFixed(2)}%</Text>
              )}
            </StatNumber>
          </Stat>
        </StatGroup>
      </SimpleGrid>
    </>
  );
};
