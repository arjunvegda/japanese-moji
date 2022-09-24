import { useColorModeValue } from '@chakra-ui/react';
import { useMemo } from 'react';

export const useResultStyles = () => {
  const borderColor = useColorModeValue('gray.300', 'gray.700');
  const green = useColorModeValue('green.600', 'green.400');
  const red = useColorModeValue('red.600', 'red.400');
  const helpTextColor = useColorModeValue('gray.500', 'gray.400');

  const borderStyles = {
    borderBottom: { base: '1px', md: '0px' },
    borderRight: { base: '0px', md: '1px' },
    borderColor: { base: borderColor, md: borderColor },
    pb: { base: 4, md: '0' },
    sx: {
      '&:last-child': {
        borderRight: 'none',
        borderBottom: 'none',
      },
    },
  };

  const memoizedStyles = useMemo(
    () => ({
      green,
      red,
      helpTextColor,
      borderStyles,
    }),
    [borderStyles, green, red, helpTextColor],
  );

  return memoizedStyles;
};
