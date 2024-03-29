import { extendTheme } from '@chakra-ui/react';

const focusColorFieldOverride = () => ({
  field: {
    _focus: {
      outline: 'none',
      borderColor: 'var(--chakra-ui-focus-ring-color)',
      boxShadow: '0 0 0 1px var(--chakra-ui-focus-ring-color)',
    },
  },
});
export const theme = extendTheme({
  shadows: {
    outline: '0 0 0 3px var(--chakra-colors-yellow-400)',
  },
  defaultProps: {
    focusBorderColor: 'yellow.400',
    outline: '0 0 0 3px var(--chakra-colors-yellow-400)',
  },
  styles: {
    global: (props: any) => ({
      'html, body': {
        height: '100%',
        background: props.colorMode === 'dark' ? 'var(--chakra-colors-gray-900)' : '#ffffff',
        color: props.colorMode === 'dark' ? 'gray.200' : 'gray.800',
        scrollBehavior: 'smooth',
      },
      ':host,:root': {
        '--chakra-ui-focus-ring-color': 'var(--chakra-colors-yellow-400)',
      },
      '::selection': {
        color: 'gray.800',
        background: props.colorMode === 'dark' ? 'yellow.400' : 'yellow.400',
      },
    }),
  },
  components: {
    Input: {
      variants: {
        outline: focusColorFieldOverride,
        filled: focusColorFieldOverride,
        flushed: focusColorFieldOverride,
      },
    },
    NumberInput: {
      variants: {
        outline: focusColorFieldOverride,
        filled: focusColorFieldOverride,
        flushed: focusColorFieldOverride,
      },
    },
    LinkOverlay: {
      variants: {
        outline: focusColorFieldOverride,
        filled: focusColorFieldOverride,
        flushed: focusColorFieldOverride,
      },
    },
  },
  fonts: {
    heading: 'JetBrains Mono, monospace',
    body: 'JetBrains Mono, monospace',
  },
  colors: {
    gray: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
    },
  },
});
