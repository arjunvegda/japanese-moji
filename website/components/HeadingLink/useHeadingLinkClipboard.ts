import { useBoolean, useClipboard } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useHeadingLinkClipboard = (id: string) => {
  const [shouldShowIcon, setShouldShowIcon] = useBoolean(false);
  const { pathname, isReady } = useRouter();
  const [url, setUrl] = useState('');
  const { onCopy, hasCopied } = useClipboard(url);

  useEffect(() => {
    setUrl(() => {
      if (isReady) {
        const url = new URL(`${pathname}#${id}`, location.href);
        return url.href;
      }
      return '';
    });
  }, [pathname, id, isReady]);

  const showIcon = () => {
    if (isReady) {
      setShouldShowIcon.on();
    }
  };

  const hideIcon = () => {
    if (isReady) {
      setShouldShowIcon.off();
    }
  };

  return {
    shouldShowIcon,
    showIcon,
    hideIcon,
    onCopy,
    hasCopied,
  };
};
