import NextLink from 'next/link';
import { Link, Heading, LinkProps } from '@chakra-ui/react';
import { HeadingProps } from '@chakra-ui/layout/src/heading';
import { createRef, FC, useEffect, useRef } from 'react';
import { slugify } from '../../utils/slugify';
import { useHeadingLinkClipboard } from './useHeadingLinkClipboard';
import { HeadingIcon } from './HeadingIcon';
import { useRouter } from 'next/router';
import { router } from 'next/client';

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
  const headingLinkRef = createRef<HTMLAnchorElement>();
  const { asPath, pathname, isReady, ...res } = useRouter();

  useEffect(() => {
    // Highlight heading link when user arrives on page with anchor id
    if (isReady) {
      if (asPath === `${pathname}#${slugifiedId}`) {
        headingLinkRef.current?.focus();
      }
    }
  }, []);

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
        ref={headingLinkRef}
      >
        <Heading
          display="inline-flex"
          alignItems="center"
          id={slugifiedId}
          {...headingProps}
          style={{ position: 'relative' }}
          scrollMarginTop={40}
        >
          {children}
          <HeadingIcon shouldShowIcon={shouldShowIcon} showCopyIcon={hasCopied} />
        </Heading>
      </Link>
    </NextLink>
  );
};
