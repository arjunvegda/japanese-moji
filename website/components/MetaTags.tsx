import React, { FC } from 'react';

interface MetaTagsProps {
  title: string;
}
export const MetaTags: FC<MetaTagsProps> = ({ title }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content="A toolkit to validate Japanese characters" />
      <link rel="icon" href="/favicon.ico" />
      <meta itemProp="name" content={title} />
      <meta
        name="keywords"
        content="japanese, characters, moji, kana, kanji, hiragana, cjk, validator, javascript, typescript, unified, ideographs, regex, utility, toolkit, fullwidth, halfwidth"
      />
      <meta itemProp="description" content="A toolkit to validate Japanese characters" />
      <meta itemProp="image" content="/share.jpg" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content="/share.jpg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content="A toolkit to validate Japanese characters" />
      <meta name="twitter:image" content="/share.jpg" />
    </>
  );
};
