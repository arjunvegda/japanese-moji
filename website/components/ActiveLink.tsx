import Link, { LinkProps } from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { FC, useEffect } from 'react';
import { useBoolean } from '@chakra-ui/react';
import { analytics } from '../utils/analytics';
interface ActiveLinkProps extends LinkProps {
  onClick?: React.MouseEventHandler;
}
export const ActiveLink: FC<ActiveLinkProps> = ({ onClick, ...props }) => {
  const { asPath, isReady } = useRouter();
  const [isActive, setIsActive] = useBoolean(false);

  useEffect(() => {
    // Check if the router fields are updated client-side
    if (isReady) {
      // Dynamic route will be matched via props.as
      // Static route will be matched via props.href
      const linkPathname = new URL(props.as?.toString() || props.href.toString(), location.href)
        .pathname;

      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(asPath, location.href).pathname;
      if (linkPathname === activePathname) {
        setIsActive.on();
      } else {
        setIsActive.off();
      }
    }
  }, [asPath, isReady, props.as, props.href, setIsActive]);
  return (
    <Link {...props} passHref>
      <ChakraLink
        fontWeight="600"
        textDecoration={isActive ? 'underline' : 'none'}
        onClick={onClick}
      >
        {props.children}
      </ChakraLink>
    </Link>
  );
};
