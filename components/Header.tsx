import React from 'react';
import { Feature1 } from './ui/feature-1';

const Header = () => {
  return (
    <div>
      <Feature1
        title="Empower Leadership"
        image="/icons/hrlogo.png"
        description="4-5 December 2025 | Millennium Plaza Hotel Dubai, UAE."
        description2="CONNECTING MINDS. TRANSFORMING WORKPLACES. LEADING THE FUTURE."
        firstButton={{
          label: 'Get Tickets',
          href: 'https://shadcnblocks.com',
        }}
        secondButton={{
          label: 'Sponsor or Exhibit',
          href: 'https://shadcnblocks.com',
        }}
        thirdButton={{
          label: 'Nominate',
          href: 'https://shadcnblocks.com',
        }}
      />
    </div>
  );
};

export default Header;
