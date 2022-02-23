import { Box } from '@chakra-ui/react';
import { globalMaxWidthBox } from '../styles/common';
import Head from 'next/head';
import React from 'react';
import { MetaTags } from '../components/MetaTags';
import { DemosPageContent } from '../components/DemoPagesContent';

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
