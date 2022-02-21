import NextLink from 'next/link';
import { Link, Heading, LinkProps } from '@chakra-ui/react';
import { HeadingProps } from '@chakra-ui/layout/src/heading';
import { FC } from 'react';
import { slugify } from '../../utils/slugify';
import { useHeadingLinkClipboard } from './useHeadingLinkClipboard';
import { HeadingIcon } from './HeadingIcon';

export interface HeadingLinkProps extends HeadingProps {
  linkProps?: LinkProps;
}

export const HeadingLink: FC<HeadingLinkProps> = ({
  children = '',
  linkProps,
  ...headingProps
}) => {
  const slugifiedId = slugify(children as string);
  const { shouldShowIcon, showIcon, hideIcon, onCopy, hasCopied } =
    useHeadingLinkClipboard(slugifiedId);

  return (
    <NextLink href={`#${slugifiedId}`} passHref>
      <Link
        display="inline-block"
        {...linkProps}
        onMouseEnter={showIcon}
        onMouseLeave={hideIcon}
        onFocus={showIcon}
        onBlur={hideIcon}
        onClick={onCopy}
      >
        <Heading
          display="inline-flex"
          alignItems="center"
          id={slugifiedId}
          {...headingProps}
          style={{ position: 'relative' }}
        >
          {children}
          <HeadingIcon shouldShowIcon={shouldShowIcon} showCopyIcon={hasCopied} />
        </Heading>
      </Link>
    </NextLink>
  );
};
