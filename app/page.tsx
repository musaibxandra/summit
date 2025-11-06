import Discussions from '@/components/Discussions';
import Gathering from '@/components/Gathering';
import Header from '@/components/Header';
import Honorees from '@/components/Honorees';
import HowItWorks from '@/components/Steps';
import Sponsors from '@/components/Sponsors';
import React from 'react';
import CallToAction from '@/components/CallToAction';

const pageLayout = () => {
  return (
    <>
      <Header />
      <HowItWorks />
      <Discussions />
      <Honorees />
      <Gathering />
      <Sponsors />
      <CallToAction />
    </>
  );
};

export default pageLayout;
