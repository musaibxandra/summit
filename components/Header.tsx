'use client';

import React from 'react';
import { Feature1 } from './ui/feature-1';
import { useTranslations } from 'next-intl';

const Header = () => {
  const t = useTranslations('Header');

  return (
    <div>
      <Feature1
        title={t('title')}
        image="/icons/hrlogo.png"
        description={t('description')}
        description2={t('description2')}
        firstButton={{
          label: t('getTickets'),
          href: '/get_tickets',
        }}
        secondButton={{
          label: t('sponsorOrExhibit'),
          href: '/contact',
        }}
        thirdButton={{
          label: t('nominate'),
          href: '/nominate',
        }}
      />
    </div>
  );
};

export default Header;
