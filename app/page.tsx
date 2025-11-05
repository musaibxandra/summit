import Discussions from '@/components/Discussions';
import Footer from '@/components/Footer';
import Gathering from '@/components/Gathering';
import Header from '@/components/Header';
import Honorees from '@/components/Honorees';
import Navbar from '@/components/Navbar';
import HowItWorks from '@/components/Steps';
import Sponsors from '@/components/Sponsors';
import React from 'react';
import CallToAction from '@/components/CallToAction';

const pageLayout = () => {
  return (
    <main className="">
      <Header />
      <HowItWorks />
      <Discussions />
      <Honorees />
      <Gathering />
      <Sponsors />
      <CallToAction />
    </main>
  );
};

export default pageLayout;
