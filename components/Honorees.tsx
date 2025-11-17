'use client';

import React from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { Linkedin } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface Speaker {
  title: string;
  description: string;
  imageUrl: string;
  linkedinUrl: string;
}

const speakers: Speaker[] = [
  {
    title: 'Dr. Charles Cotter',
    description:
      'Independent Global Blended Learning Practitioner | HRM & Development Strategist',
    imageUrl: '/honorees/roy.png',
    linkedinUrl:
      'https://www.linkedin.com/in/charlescotter/?profileId=ACoAAAfa6ZkBLwSEuNzckVcPxDIQAXbPhT0nD0w',
  },
  {
    title: 'Rabison Shumba',
    description:
      'Professional Speaker, Global Trainer, Change Management and Leadership Expert',
    imageUrl: '/honorees/rabinson.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/rabisonshumba/overlay/photo/',
  },
  {
    title: 'Darryn Van Den Berg',
    description:
      'Applied Skills Architect (Award-winning, tech visionary, TedTalker)',
    imageUrl: '/honorees/daryn.jpeg',
    linkedinUrl:
      'https://www.linkedin.com/in/darrynvandenberg/?originalSubdomain=za',
  },
  {
    title: 'Deon Binneman',
    description:
      'Reputation Management Adviser, Keynote Speaker, and Management Consultant',
    linkedinUrl:
      'https://www.linkedin.com/in/deonbinneman/?originalSubdomain=za',
    imageUrl: '/honorees/deon.jpeg',
  },
  {
    title: 'Graeme Lategan',
    description: 'Operations Manager',
    imageUrl: '/honorees/graeme.jpg',
    linkedinUrl:
      'https://www.linkedin.com/in/graeme-lategan-34902151/?originalSubdomain=hr',
  },
  {
    title: 'Pramil Verma',
    description: 'Chief Operating Officer',
    imageUrl: '/honorees/pramil.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/pramilverma/',
  },
  {
    title: 'Rudolf Goosen',
    description: 'TRIMAD Group of Companies',
    imageUrl: '/honorees/rudolf.jpeg',
    linkedinUrl:
      'https://www.linkedin.com/in/rudolf-goosen-589635a1/?originalSubdomain=za',
  },
  {
    title: 'Dr. Bill Prince',
    description: 'Counselling Psychologist',
    imageUrl: '/honorees/bill.jpg',
    linkedinUrl:
      'https://www.linkedin.com/in/bill-prince-055032309/?originalSubdomain=ca',
  },
];

const SpeakerCard: React.FC<Speaker & { t: any }> = ({
  title,
  description,
  imageUrl,
  linkedinUrl,
  t,
}) => (
  <CardContainer className="inter-var">
    <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-primary/20 w-full h-auto rounded-xl p-6 border transition-all duration-300 hover:-translate-y-1">
      <CardItem
        translateZ="50"
        className="text-xl font-bold text-primary dark:text-white"
      >
        {title}
      </CardItem>
      <CardItem
        as="p"
        translateZ="60"
        className="text-sm max-w-sm mt-2 text-primary/80 dark:text-neutral-300"
      >
        {description}
      </CardItem>
      <CardItem translateZ="100" className="w-full mt-4">
        <img
          src={imageUrl}
          height="1000"
          width="1000"
          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </CardItem>
      <div className="flex justify-between items-center mt-12">
        <CardItem
          translateZ={20}
          as="a"
          href={linkedinUrl}
          target="_blank"
          className="px-4 py-2 rounded-xl text-xs font-semibold text-primary dark:text-white"
        >
          {t('checkOut')}
        </CardItem>
        <CardItem
          translateZ={20}
          as="a"
          href={linkedinUrl}
          target="_blank"
          className="px-4 py-2 rounded-xl cursor-pointer bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 transition-colors dark:bg-white dark:text-black"
        >
          <div className="flex gap-2">
            <Linkedin size={16} /> LinkedIn
          </div>
        </CardItem>
      </div>
    </CardBody>
  </CardContainer>
);

const Honorees: React.FC = () => {
  const t = useTranslations('Honorees');

  return (
    <div className="w-full px-4 md:px-6 my-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold">{t('title')}</h1>
        <div className="grid lg:grid-cols-4 mt-6 gap-6">
          {speakers.map((speaker, index) => (
            <div key={index}>
              <SpeakerCard {...speaker} t={t} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Honorees;
