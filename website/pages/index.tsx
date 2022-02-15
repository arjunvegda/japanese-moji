import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Box } from '@chakra-ui/react';
import { globalMaxWidthBox } from '../styles/common';
import { LandingPageContent } from '../components/LandingPageContent';

interface HomeProps {
  releaseVersion: string;
  gzipBundleSize: number;
  codeCoverage: string;
}
const Home: NextPage<HomeProps> = ({ releaseVersion, gzipBundleSize, codeCoverage }) => {
  return (
    <Box {...globalMaxWidthBox} p={5} height="100%">
      <Head>
        <title>Home | Japanese Moji</title>
        <meta name="description" content="A toolkit to validate Japanese characters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPageContent
        codeCoverage={codeCoverage}
        gzipBundleSize={gzipBundleSize}
        releaseVersion={releaseVersion}
      />
    </Box>
  );
};

export const getServerSideProps = async () => {
  const result = await fetch('https://cdn.jsdelivr.net/npm/japanese-moji/package.json')
    .then((res) => res.json())
    .catch(() => {
      return { version: null };
    });

  const endpoint = `https://bundlephobia.com/api/size?package=japanese-moji`;
  const bundlePhobiaRes = await fetch(endpoint)
    .then((res) => res.json())
    .catch(() => {
      return { gzip: null };
    });

  const codeCovResp = await fetch('https://codecov.io/api/gh/arjunvegda/japanese-moji/branch/main/')
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      return {};
    });

  const cov = codeCovResp?.commit?.totals ? codeCovResp.commit.totals?.c : 0;
  return {
    props: {
      releaseVersion: result.version,
      gzipBundleSize: bundlePhobiaRes.gzip,
      codeCoverage: cov,
    },
  };
};

export default Home;
