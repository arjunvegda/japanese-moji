import { useColorModeValue, HStack } from '@chakra-ui/react';
import { MatchScoreCalculator, StrictValidator, ThresholdBasedValidator } from 'japanese-moji';
import { ChangeEvent, FC, useCallback, useMemo, useState } from 'react';
import { useIsomorphicLayoutEffect, useMethods } from 'react-use';
import { Input } from './Input';
import { ThresholdInput } from './ThresholdInput';
import { Result } from './Result';

interface Validators {
  isValid: StrictValidator;
  isPresent: ThresholdBasedValidator;
  howMuchIsPresent: MatchScoreCalculator;
}

export interface InputAndResultProps extends Validators {
  initialValue?: string;
  initialThreshold?: number;
  onUserInput?: () => void;
  onUserThresholdInput?: () => void;
}

interface InputAndResultState {
  values: {
    userInput: string;
    userInputThreshold: string;
  };
  validation: {
    isValid: boolean;
    isPresent: boolean;
    score: number;
  };
}

interface CreateInitialStateOptions extends Validators {
  initialUserInput: string;
  initialUserInputThreshold: string;
}

const createInitialState = (opts: CreateInitialStateOptions): InputAndResultState => ({
  values: {
    userInput: opts.initialUserInput,
    userInputThreshold: opts.initialUserInputThreshold,
  },
  validation: {
    isValid: opts.isValid(opts.initialUserInput),
    isPresent: opts.isPresent(opts.initialUserInput, +opts.initialUserInputThreshold),
    score: opts.howMuchIsPresent(opts.initialUserInput),
  },
});

const createInputResultMethods = (state: InputAndResultState) => {
  return {
    setUserInput: (userInput: string): InputAndResultState => {
      return {
        ...state,
        values: {
          ...state.values,
          userInput,
        },
      };
    },
    setUserInputThreshold: (userInputThreshold: string): InputAndResultState => {
      return {
        ...state,
        values: {
          ...state.values,
          userInputThreshold,
        },
      };
    },
    validate: (payload: Validators): InputAndResultState => {
      return {
        ...state,
        validation: {
          isValid: payload.isValid(state.values.userInput),
          isPresent: payload.isPresent(state.values.userInput, +state.values.userInputThreshold),
          score: payload.howMuchIsPresent(state.values.userInput),
        },
      };
    },
  };
};

export const InputAndResult: FC<InputAndResultProps> = ({
  initialValue = '',
  initialThreshold = 85,
  isValid,
  isPresent,
  howMuchIsPresent,
  onUserInput = () => {},
  onUserThresholdInput = () => {},
}) => {
  const [state, methods] = useMethods(
    createInputResultMethods,
    createInitialState({
      initialUserInput: initialValue,
      initialUserInputThreshold: initialThreshold.toString(),
      isValid,
      isPresent,
      howMuchIsPresent,
    }),
  );

  const triggerValidation = useCallback(() => {
    methods.validate({
      isValid,
      isPresent,
      howMuchIsPresent,
    });
  }, [isValid, isPresent, howMuchIsPresent, methods]);

  const normalizedThreshold = useMemo(
    () => Math.max(0, Math.min(100, +state.values.userInputThreshold || 0)),
    [state.values.userInputThreshold],
  );

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      methods.setUserInput(e.target.value);
      triggerValidation();
      onUserInput();
    },
    [methods, onUserInput, triggerValidation],
  );

  const handleThresholdChange = useCallback(
    (str: string) => {
      methods.setUserInputThreshold(str);
      triggerValidation();
      onUserThresholdInput();
    },
    [methods, triggerValidation, onUserThresholdInput],
  );

  const handleInputResetButtonClick = useCallback(() => {
    methods.setUserInput(initialValue);
    triggerValidation();
  }, [initialValue, methods, triggerValidation]);

  const handleThresholdInputResetButtonClick = useCallback(() => {
    methods.setUserInputThreshold(initialThreshold.toString());
    triggerValidation();
  }, [methods, initialThreshold, triggerValidation]);

  return (
    <form>
      <HStack spacing={5}>
        <Input
          value={state.values.userInput}
          onUserInput={handleInputChange}
          onInputResetButtonClick={handleInputResetButtonClick}
        />
        <ThresholdInput
          value={state.values.userInputThreshold}
          onChange={handleThresholdChange}
          onInputResetButtonClick={handleThresholdInputResetButtonClick}
        />
      </HStack>
      <Result
        isValid={state.validation.isValid}
        isPresent={state.validation.isPresent}
        score={state.validation.score}
        normalizedThreshold={normalizedThreshold}
      />
    </form>
  );
};
