import { Box, Heading } from '@chakra-ui/react';
import { globalMaxWidthBox } from '../styles/common';
import { DemosPageContent } from '../components/DemosPageContent';
import Head from 'next/head';
import React from 'react';
import { MetaTags } from '../components/MetaTags';

const Demos = () => {
  return (
    <Box {...globalMaxWidthBox} p={5}>
      <Head>
        <title>Demo | Japanese Moji</title>
        <MetaTags title="Demo | Japanese Moji" />
      </Head>
      <DemosPageContent />
    </Box>
  );
};

export default Demos;
