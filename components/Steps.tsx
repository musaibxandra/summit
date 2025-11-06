'use client';

// components/HowItWorks.tsx

import {
  LinkedinIcon,
  TwitterIcon,
  Calendar,
  MapPin,
  Mail,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import { useTranslations } from 'next-intl';

export default function HowItWorks() {
  const t = useTranslations('Steps');

  return (
    <section className="w-full mt-22 px-4 md:px-6 pb-18">
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid gap-28 lg:grid-cols-2">
          <div className="">
            <h2 className="flex text-left text-3xl font-bold">
              {t('title')}
            </h2>
            <br />
            <h3 className="flex text-left text-2xl font-bold">
              {t('subtitle')}
            </h3>
            <p className="flex text-left">
              {t('description')}
            </p>
            <br />
            <h4 className="font-bold text-left">
              {t('stats')}
            </h4>
            <br />
            <div className="flex gap-4">
              <Link href="/get_tickets">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-black text-left border-green-200 border-1 bg-gray-100 cursor-pointer text-black dark:text-white flex items-center space-x-2"
                >
                  <span>{t('getTickets')}</span>
                </HoverBorderGradient>
              </Link>
              <Link href="/sponsorship">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-black text-left border-green-200 border-1 bg-gray-100 cursor-pointer text-black dark:text-white flex items-center space-x-2"
                >
                  <span>{t('sponsorOrExhibit')}</span>
                </HoverBorderGradient>
              </Link>
            </div>
          </div>
          <div className="">
            <Image
              src="/icons/hrse.avif"
              width={1286}
              height={1081}
              alt="conference"
            ></Image>
            <br />
            <h3 className="text-left font-bold flex item-center gap-2">
              <Calendar />
              {t('date')}
            </h3>
            <br />
            <h3 className="text-left font-bold flex item-center gap-2">
              <MapPin />
              {t('venue')}
            </h3>
            <br />
            <div className="flex gap-3">
              <Link
                href="https://login.xing.com/?locale=en&dest_url=https%3A%2F%2Fwww.xing.com%2Fsocial%2Fshare%2Fspi%3Furl%3Dhttps%253A%252F%252Fworldhr-summit.com%252F"
                target="_blank"
              >
                <Button className="cursor-pointer">
                  <span>Xing</span>
                </Button>
              </Link>
              <Link
                href="https://x.com/intent/tweet?text=%20https://worldhr-summit.com/"
                target="_blank"
              >
                <Button className="cursor-pointer">
                  <TwitterIcon />
                  <span>X</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/shareArticle?mini=true&url=https://worldhr-summit.com/&title=World%20HR%20Summit%20%26%20Expo%202025&summary=&source=https://worldhr-summit.com/"
                target="_blank"
              >
                <Button className="cursor-pointer">
                  <LinkedinIcon />
                  <span>LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:maqdoom114@gmail.com" target="_blank">
                <Button className="cursor-pointer">
                  <Mail />
                  <span>Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
