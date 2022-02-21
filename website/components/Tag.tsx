import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
  Flex,
  LinkBox,
  LinkOverlay,
  Link,
} from '@chakra-ui/react';
import { FC } from 'react';
import { analytics } from '../utils/analytics';
import { slugify } from '../utils/slugify';

interface TagProps {
  label: string;
  value: string;
  href?: string;
}

export const Tag: FC<TagProps> = ({ label, value, href }) => {
  const green = useColorModeValue('green.600', 'green.400');
  const handleOnClick = () => {
    analytics.track('tagClick', {
      category: 'Home',
      label: slugify(label),
    });
  };

  return (
    <LinkBox
      border="1px"
      borderColor="yellow.400"
      rounded="md"
      minWidth="210px"
      onClick={handleOnClick}
    >
      <StatGroup>
        <Stat p={5}>
          <Flex alignItems="center" justifyContent="space-between">
            <StatLabel textTransform="uppercase" fontWeight="bold" fontSize="sm">
              {label}
            </StatLabel>
            <LinkOverlay href={href} target="_blank" rel="noreferrer" isExternal as={Link}>
              <ExternalLinkIcon />
            </LinkOverlay>
          </Flex>
          <StatNumber>
            <Text color={green}>{value}</Text>
          </StatNumber>
        </Stat>
      </StatGroup>
    </LinkBox>
  );
};
