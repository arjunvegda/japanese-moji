import React from 'react';
import { chakra, Flex, useColorModeValue, HStack } from '@chakra-ui/react';
import Image from 'next/image';
import { ActiveLink } from './ActiveLink';
import { globalMaxWidthBox } from '../styles/common';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { analytics } from '../utils/analytics';

const trackOnLinkClick = (label: string) => {
  return () => {
    analytics.track('linkClick', {
      category: 'Header',
      label: label,
    });
  };
};

export const Header = () => {
  const logoSrc = useColorModeValue('/dark-logo.svg', '/light-logo.svg');

  return (
    <React.Fragment>
      <chakra.header w="full" py={4}>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          {...globalMaxWidthBox}
          direction={{ base: 'column', md: 'row' }}
        >
          <Flex>
            <ActiveLink href="/" onClick={trackOnLinkClick('logo')}>
              <Image src={logoSrc} alt="Japanese Moji Logo" width={170} height={50} />
            </ActiveLink>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1} mt={{ base: 2 }}>
            <HStack spacing={5} mr={1} display={{ md: 'inline-flex' }}>
              <ColorModeSwitcher />
              <ActiveLink href="/" onClick={trackOnLinkClick('home')}>
                Home
              </ActiveLink>
              <ActiveLink href="/demos" onClick={trackOnLinkClick('demos')}>
                Demos
              </ActiveLink>
            </HStack>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};
