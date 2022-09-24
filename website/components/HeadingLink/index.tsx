import NextLink from 'next/link';
import { Link, Heading, LinkProps, useBoolean, HeadingProps } from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import { slugify } from '../../utils/slugify';
import { useHeadingLinkClipboard } from './useHeadingLinkClipboard';
import { HeadingIcon } from './HeadingIcon';
import { useRouter } from 'next/router';

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
  const { asPath, pathname, isReady } = useRouter();
  const [isActive, setIsActive] = useBoolean(false);

  useEffect(() => {
    // Highlight heading link when user arrives on page with anchor id
    if (isReady) {
      if (asPath === `${pathname}#${slugifiedId}`) {
        setIsActive.on();
        setTimeout(() => {
          setIsActive.off();
        }, 1350);
      }
    }
  }, []);

  const borderStyles = {
    borderColor: isActive ? 'yellow.400' : 'transparent',
    borderWidth: '2px',
    borderStyle: 'solid',
  };

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
        {...borderStyles}
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
