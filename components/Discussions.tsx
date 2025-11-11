'use client';

import React from 'react';
import { CircleArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const Discussions = () => {
  const t = useTranslations('Discussions');

  const firstTopics = [
    t('topic1'),
    t('topic2'),
    t('topic3'),
    t('topic4'),
    t('topic5'),
    t('topic6'),
    t('topic7'),
    t('topic8'),
    t('topic9'),
    t('topic10'),
  ];

  const secondTopics = [
    t('topic11'),
    t('topic12'),
    t('topic13'),
    t('topic14'),
    t('topic15'),
    t('topic16'),
    t('topic17'),
    t('topic18'),
  ];

  const thirdTopics = [
    t('topic19'),
    t('topic20'),
    t('topic21'),
    t('topic22'),
    t('topic23'),
    t('topic24'),
    t('topic25'),
    t('topic26'),
  ];

  return (
    <div className="w-full px-4 md:px-6 py-8">
      <div className="max-w-7xl mx-auto text-left">
        <div className="grid lg:grid-cols-3 gap-6">
        {/* First Column - Gray Theme with Floating Circles */}
        <div className="relative p-6 bg-gradient-to-br from-violet-200 to-gray-100 rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="absolute inset-0 opacity-20 animate-pulse">
            <div className="absolute top-20 left-16 w-32 h-32 bg-gray-300 rounded-full blur-2xl animate-bounce"></div>
            <div className="absolute top-60 right-16 w-40 h-40 bg-gray-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-32 left-1/2 w-28 h-28 bg-gray-300 rounded-full blur-2xl"></div>
          </div>

          <h1 className="w-full text-xl font-bold relative z-10">
            {t('themeTitle')}
          </h1>
          <br />
          {firstTopics.map((topic, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 relative z-10 mb-2"
            >
              <CircleArrowRight className="inline-block h-5 w-5 flex-shrink-0 text-gray-600 mt-0.5" />
              <span className="leading-relaxed">{topic}</span>
            </div>
          ))}
        </div>

        {/* Second Column - Blue Theme with Rotating Rings */}
        <div className="relative p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-sm border border-blue-100 overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-32 left-1/2 -translate-x-1/2 w-64 h-64 border-4 border-blue-400 rounded-full animate-spin"></div>
            <div className="absolute top-40 left-1/2 -translate-x-1/2 w-48 h-48 border-2 border-indigo-400 rounded-full animate-spin"></div>
            <div className="absolute bottom-24 left-20 w-36 h-36 bg-blue-300 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-32 right-20 w-28 h-28 bg-indigo-300 rounded-full blur-2xl animate-bounce"></div>
          </div>

          <h1 className="w-full text-xl font-bold relative z-10">
            {t('dec4Title')}
          </h1>
          <br />
          <br />
          {secondTopics.map((topic, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 relative z-10 mb-2"
            >
              <CircleArrowRight className="inline-block h-5 w-5 flex-shrink-0 text-blue-600 mt-0.5" />
              <span className="leading-relaxed">{topic}</span>
            </div>
          ))}
          <br />
          <Link href="/agenda">
          <Button className="relative bg-[#002366] cursor-pointer z-10">{t('readAgenda')}</Button>
          </Link>
        </div>

        {/* Third Column - Green Theme with Grid Pattern */}
        <div className="relative p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-sm border border-green-100 overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-24 right-16 w-44 h-44 bg-green-300 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-72 left-16 w-36 h-36 bg-emerald-300 rounded-full blur-2xl animate-bounce"></div>
            <div className="absolute bottom-24 right-24 w-32 h-32 border-4 border-green-400 rounded-2xl animate-spin"></div>
          </div>

          <h1 className="w-full text-lg font-bold relative z-10">
            {t('dec5Title')}
          </h1>
          <br />
          <br />
          {thirdTopics.map((topic, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 relative z-10 mb-2"
            >
              <CircleArrowRight className="inline-block h-5 w-5 flex-shrink-0 text-green-600 mt-0.5" />
              <span className="leading-relaxed">{topic}</span>
            </div>
          ))}
          <br />
          <br />
          <Link href="/agenda">
          <Button className="relative cursor-pointer bg-[#002366] z-10">{t('readAgenda')}</Button>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Discussions;
