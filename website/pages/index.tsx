import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Box } from '@chakra-ui/react';
import { globalMaxWidthBox } from '../styles/common';
import { LandingPageContent } from '../components/LandingPageContent';
import { fetchPackageInfo } from '../apis';
import { MetaTags } from '../components/MetaTags';

interface HomeProps {
  releaseVersion: string;
  gzipBundleSize: number;
  codeCoverage: string;
}
const Home: NextPage<HomeProps> = ({ releaseVersion, gzipBundleSize, codeCoverage }) => {
  return (
    <Box {...globalMaxWidthBox} p={5} height="100%">
      <Head>
        <title>Japanese Moji</title>
        <MetaTags title="Japanese Moji" />
      </Head>
      <LandingPageContent
        codeCoverage={codeCoverage}
        gzipBundleSize={gzipBundleSize}
        releaseVersion={releaseVersion}
      />
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res } = context;
  res.setHeader(
    'Cache-Control',
    `public, Cache-Control: max-age=3600, stale-while-revalidate=18000, stale-if-error=86400`,
  );

  const response = await fetchPackageInfo();

  return {
    props: {
      ...response,
    },
  };
};

export default Home;
