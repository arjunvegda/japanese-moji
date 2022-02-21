import { Icon } from '@chakra-ui/react';
import { FC } from 'react';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { BiLink } from 'react-icons/bi';

interface HeadingIconProps {
  shouldShowIcon: boolean;
  showCopyIcon: boolean;
}

export const HeadingIcon: FC<HeadingIconProps> = ({ shouldShowIcon, showCopyIcon }) => {
  if (shouldShowIcon || showCopyIcon) {
    if (showCopyIcon) {
      return <Icon as={IoCheckmarkCircleOutline} fontSize="lg" ml={1} />;
    }
    return <Icon as={BiLink} fontSize="lg" ml={1} />;
  }

  return <></>;
};
