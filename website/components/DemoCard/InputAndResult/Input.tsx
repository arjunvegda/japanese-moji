import {
  FormControl,
  FormLabel,
  IconButton,
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { IoMdRefresh } from 'react-icons/io';
import { ChangeEvent, FC, MouseEvent } from 'react';

interface InputProps extends ChakraInputProps {
  onUserInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onInputResetButtonClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Input: FC<InputProps> = ({ onUserInput, onInputResetButtonClick, value, ...rest }) => {
  return (
    <FormControl my={5} flex="95">
      <FormLabel htmlFor="input">Your input</FormLabel>
      <InputGroup size="sm">
        <ChakraInput
          value={value}
          onChange={onUserInput}
          placeholder="Type something here..."
          rounded="sm"
          {...rest}
        />
        <InputRightElement>
          <IconButton
            variant="ghost"
            aria-label="Reset input to initial value"
            title="Reset input to initial value"
            size="xs"
            p={0}
            fontSize="md"
            onClick={onInputResetButtonClick}
            icon={<IoMdRefresh />}
          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};
