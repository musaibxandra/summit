'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { Button } from './ui/button';
import { useTranslations } from 'next-intl';

interface FeatureCardProps {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  alt,
  title,
  description,
}) => (
  <Card className="group w-full h-auto border border-gray-200/50 shadow-sm hover:shadow-xl hover:border-green-300/50 transition-all duration-300 overflow-hidden bg-white hover:-translate-y-1">
    <CardContent className="p-0">
      {/* Image Container with Overlay Effect */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-black/0 group-hover:from-black/0 group-hover:via-black/10 group-hover:to-black/20 transition-all duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5">
        <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3">
          {description}
        </CardDescription>
      </div>
    </CardContent>
  </Card>
);

const Gathering = () => {
  const t = useTranslations('Gathering');

  const features = [
    {
      imageSrc: '/gathering/keynote.png',
      alt: 'Insightful Keynotes and Panel Discussions illustration',
      title: t('keynoteTitle'),
      description: t('keynoteDescription'),
    },
    {
      imageSrc: '/gathering/network.png',
      alt: 'Global Networking Opportunities illustration',
      title: t('networkTitle'),
      description: t('networkDescription'),
    },
    {
      imageSrc: '/gathering/intaractive.png',
      alt: 'Interactive Learning Experiences illustration',
      title: t('interactiveTitle'),
      description: t('interactiveDescription'),
    },
    {
      imageSrc: '/gathering/inspire.png',
      alt: 'Inspiration to Drive Change illustration',
      title: t('inspireTitle'),
      description: t('inspireDescription'),
    },
    {
      imageSrc: '/gathering/awards.png',
      alt: 'Celebrating Excellence illustration',
      title: t('excellenceTitle'),
      description: t('excellenceDescription'),
    },
  ];

  return (
    <section className="w-full px-4 md:px-6 py-12 md:py-16 bg-gradient-to-b from-white to-gray-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl">
            {t('description')}
          </p>
        </div>

        {/* Enhanced grid with better spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <Link href="/get_tickets" rel="noopener noreferrer">
            <Button className="bg-[#002366] cursor-pointer hover:bg-[#001a4d] text-white text-sm px-5 py-2 h-9">
              {t('getTickets')}
            </Button>
          </Link>
          <Link href="/sponsorship" rel="noopener noreferrer">
            <Button className="bg-[#002366] cursor-pointer hover:bg-[#001a4d] text-white text-sm px-5 py-2 h-9">
              {t('sponsorOrExhibit')}
            </Button>
          </Link>
          <Link href="/nominate" rel="noopener noreferrer">
            <Button className="bg-[#002366] cursor-pointer hover:bg-[#001a4d] text-white text-sm px-5 py-2 h-9">
              {t('nominate')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gathering;
