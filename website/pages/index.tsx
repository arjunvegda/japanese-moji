import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Box } from '@chakra-ui/react';
import { globalMaxWidthBox } from '../styles/common';
import { LandingPageContent } from '../components/LandingPageContent';
import { fetchPackageInfo } from '../apis';

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res } = context;
  res.setHeader(
    'Cache-Control',
    `public, Cache-Control: max-age=432000, stale-while-revalidate=18000, stale-if-error=36000`,
  );

  const response = await fetchPackageInfo();

  return {
    props: {
      ...response,
    },
  };
};

export default Home;
