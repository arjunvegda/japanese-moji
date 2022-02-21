import * as React from 'react';
import { useColorMode, useColorModeValue, IconButton, IconButtonProps } from '@chakra-ui/react';
import { FaMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import { analytics } from '../utils/analytics';
import { useEffect } from 'react';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>;

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FiSun);

  useEffect(() => {
    analytics.track('themeChange', {
      category: 'Header',
      label: colorMode,
    });
  }, [colorMode]);

  return (
    <IconButton
      size="sm"
      fontSize="lg"
      variant="ghost"
      marginLeft="2"
      p={0}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  );
};
