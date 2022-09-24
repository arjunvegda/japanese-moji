import {
  FormControl,
  FormLabel,
  IconButton,
  InputGroup,
  InputRightElement,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import { IoMdRefresh } from 'react-icons/io';
import { FC, MouseEvent } from 'react';
import { NumberInputProps } from '@chakra-ui/number-input';

interface ThresholdInputProps extends NumberInputProps {
  onInputResetButtonClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const ThresholdInput: FC<ThresholdInputProps> = ({ onInputResetButtonClick, ...rest }) => {
  return (
    <FormControl flex="5">
      <FormLabel htmlFor="input">Threshold</FormLabel>
      <InputGroup size="sm">
        <NumberInput clampValueOnBlur={false} {...rest}>
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
            onClick={onInputResetButtonClick}
            icon={<IoMdRefresh />}
          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};
