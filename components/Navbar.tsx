'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useTransition } from 'react';
import { navbarLinks } from '@/constants';
import { Button } from './ui/button';
import { Menu, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

// These will be populated with translations inside the component
const getAttendeesItems = (t: any) => [
  {
    title: t('attendeesSpeakers'),
    href: '/speakers',
    description: t('attendeesDescription'),
  },
  {
    title: t('attendeesAgenda'),
    href: '/agenda',
    description: t('attendeesAgendaDescription'),
  },
  {
    title: t('attendeesVenue'),
    href: '/venue',
    description: t('attendeesVenueDescription'),
  },
  {
    title: t('attendeesSpeak'),
    href: '/speak',
    description: t('attendeesSpeakDescription'),
  },
];

const getSponsorItems = (t: any) => [
  {
    title: t('sponsorEnquiry'),
    href: '/sponsorship',
    description: t('sponsorEnquiryDescription'),
  },
  {
    title: t('exhibitionEnquiry'),
    href: '/exhibition',
    description: t('exhibitionEnquiryDescription'),
  },
  {
    title: t('sponsorExhibition'),
    href: '/sponsorship-exhibition',
    description: t('sponsorExhibitionDescription'),
  },
];

function ListItem({
  title,
  children,
  href,
  onClickItem,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & {
  title: string;
  children?: React.ReactNode;
  href: string;
  onClickItem?: () => void;
}) {
  return (
    <li {...props} className="py-2 border-b border-gray-100 last:border-b-0">
      <Link
        href={href}
        onClick={onClickItem}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      >
        <div className="text-sm leading-none font-medium text-gray-900">
          {title}
        </div>
        <p className="text-sm leading-snug text-muted-foreground">{children}</p>
      </Link>
    </li>
  );
}

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentLocale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const tNav = useTranslations('Navbar');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' },
  ];

  const handleLanguageChange = async (locale: string) => {
    if (currentLocale === locale) {
      setIsOpen(false);
      return;
    }

    setIsOpen(false);

    try {
      const response = await fetch('/api/set-locale', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ locale }),
      });

      if (!response.ok) {
        throw new Error('Failed to set locale');
      }

      startTransition(() => {
        router.refresh();
      });
    } catch (error) {
      console.error('Locale switch failed:', error);
      document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
      document.cookie = `locale=${locale}; path=/; max-age=31536000; SameSite=Lax`;
      window.location.reload();
    }
  };

  const currentLanguage = languages.find((lang) => lang.code === currentLocale);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Globe className="w-4 h-4 text-gray-600" />
        <span className="text-xs font-medium text-gray-700">
          {isPending ? tNav('switching') : currentLanguage?.name}
        </span>
        <svg
          className={`w-3 h-3 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 z-20 mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-lg">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                disabled={isPending}
                className={`w-full flex items-center justify-between px-3 py-2 text-left hover:bg-gray-50 transition-colors first:rounded-t-md last:rounded-b-md disabled:opacity-50 disabled:cursor-not-allowed ${
                  currentLocale === lang.code
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700'
                }`}
              >
                <span className="text-xs font-medium">{lang.name}</span>
                {currentLocale === lang.code && (
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [navigationValue, setNavigationValue] = useState('');
  const t = useTranslations('HomePage');
  const tNav = useTranslations('Navbar');

  const closeNavigationMenu = () => {
    setNavigationValue('');
  };

  return (
    <header className="w-full px-4 md:px-6 py-3 bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="/icons/hrlogo.png"
            alt="World HR Summit Logo"
            width={94}
            height={54}
            className="hover:opacity-80 transition-opacity"
            priority
            sizes="(max-width: 768px) 80px, 94px"
          />
          <span className="text-base lg:text-lg font-bold text-gray-900 hidden sm:block">
            {t('title')}
          </span>
        </Link>

        {/* Desktop Menu - Centered Links */}
        <div className="hidden lg:flex flex-1 items-center justify-center px-2 lg:px-4 min-w-0">
          <NavigationMenu orientation="horizontal" value={navigationValue} onValueChange={setNavigationValue}>
            <NavigationMenuList className="gap-1 lg:gap-2 xl:gap-3">
              {navbarLinks.map((item) => {
                const labelKey = item.label === 'Home' ? 'home' :
                  item.label === 'Attendees' ? 'attendees' :
                  item.label === 'Sponsor or Exhibit' ? 'sponsorOrExhibit' :
                  item.label === 'Awards' ? 'awards' :
                  item.label === 'Contact' ? 'contact' : item.label.toLowerCase();
                const translatedLabel = tNav(labelKey as any) || item.label;

                if (item.label === 'Attendees') {
                  const attendeesItems = getAttendeesItems(tNav);
                  return (
                    <NavigationMenuItem key={item.label} value="attendees">
                      <NavigationMenuTrigger
                        className={cn(
                          navigationMenuTriggerStyle(),
                          'text-gray-600 hover:text-gray-900 font-bold transition-colors px-2 py-2 text-sm lg:text-base lg:px-2 xl:px-3 rounded-md hover:bg-gray-200 data-[state=open]:bg-gray-100 whitespace-nowrap'
                        )}
                      >
                        {translatedLabel}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-2 w-[300px] md:w-[400px]">
                          {attendeesItems.map((subItem) => (
                            <ListItem
                              key={subItem.title}
                              title={subItem.title}
                              href={subItem.href}
                              onClickItem={closeNavigationMenu}
                            >
                              {subItem.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                }
                if (item.label === 'Sponsor or Exhibit') {
                  const sponsorItems = getSponsorItems(tNav);
                  return (
                    <NavigationMenuItem key={item.label} value="sponsor">
                      <NavigationMenuTrigger
                        className={cn(
                          navigationMenuTriggerStyle(),
                          'text-gray-600 hover:text-gray-900 font-bold transition-colors px-2 py-2 text-sm lg:text-base lg:px-2 xl:px-3 rounded-md hover:bg-gray-200 data-[state=open]:bg-gray-100 whitespace-nowrap'
                        )}
                      >
                        {translatedLabel}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-2 w-[300px] md:w-[400px]">
                          {sponsorItems.map((subItem) => (
                            <ListItem
                              key={subItem.title}
                              title={subItem.title}
                              href={subItem.href}
                              onClickItem={closeNavigationMenu}
                            >
                              {subItem.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                }
                return (
                  <NavigationMenuItem key={item.label}>
                    <Link
                      href={item.route}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'text-gray-600 hover:text-gray-900 transition-colors text-sm lg:text-base lg:px-2 xl:px-3 font-bold rounded-md hover:bg-gray-200 whitespace-nowrap'
                      )}
                    >
                      {translatedLabel}
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Buttons - Right Aligned */}
        <div className="hidden lg:flex items-center gap-1.5 lg:gap-2 flex-shrink-0">
          <LanguageSwitcher />
          <Button
            asChild
            className="bg-green-600 px-3 py-1.5 text-xs lg:text-sm lg:px-4 lg:py-2 xl:px-5 hover:bg-green-500 whitespace-nowrap"
          >
            <Link href="/get_tickets">{tNav('tickets')}</Link>
          </Button>
          <Button
            asChild
            className="bg-green-600 px-3 py-1.5 text-xs lg:text-sm lg:px-4 lg:py-2 xl:px-5 hover:bg-green-500 whitespace-nowrap"
          >
            <Link href="/nominate">{tNav('nominate')}</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
            <SheetHeader className="border-b border-gray-200 px-6 py-4">
              <SheetTitle className="flex items-center gap-2">
                <Image
                  src="/icons/hrlogo.png"
                  alt="World HR Summit Logo"
                  width={40}
                  height={24}
                  priority
                />
                <span className="text-lg font-bold">{tNav('menu')}</span>
              </SheetTitle>
            </SheetHeader>
            <div className="p-6">
              <ul className="space-y-4">
                {navbarLinks.map((item) => {
                  const labelKey = item.label === 'Home' ? 'home' :
                    item.label === 'Attendees' ? 'attendees' :
                    item.label === 'Sponsor or Exhibit' ? 'sponsorOrExhibit' :
                    item.label === 'Awards' ? 'awards' :
                    item.label === 'Contact' ? 'contact' : item.label.toLowerCase();
                  const translatedLabel = tNav(labelKey as any) || item.label;

                  if (item.label === 'Attendees') {
                    const attendeesItems = getAttendeesItems(tNav);
                    return (
                      <li key={item.label} className="space-y-2">
                        <details className="cursor-pointer">
                          <summary className="text-base font-bold text-gray-900 list-none flex items-center justify-between w-full py-2 hover:bg-gray-100 rounded-md px-2">
                            {translatedLabel}
                            <span className="transition-transform rotate-0 data-[state=open]:rotate-180">
                              <Menu className="h-4 w-4" />
                            </span>
                          </summary>
                          <ul className="mt-2 ml-4 space-y-1">
                            {attendeesItems.map((subItem) => (
                              <ListItem
                                key={subItem.title}
                                title={subItem.title}
                                href={subItem.href}
                                onClickItem={() => setIsMobileOpen(false)}
                              >
                                {subItem.description}
                              </ListItem>
                            ))}
                          </ul>
                        </details>
                      </li>
                    );
                  }
                  if (item.label === 'Sponsor or Exhibit') {
                    const sponsorItems = getSponsorItems(tNav);
                    return (
                      <li key={item.label} className="space-y-2">
                        <details className="cursor-pointer">
                          <summary className="text-base font-bold text-gray-900 list-none flex items-center justify-between w-full py-2 hover:bg-gray-100 rounded-md px-2">
                            {translatedLabel}
                            <span className="transition-transform rotate-0 data-[state=open]:rotate-180">
                              <Menu className="h-4 w-4" />
                            </span>
                          </summary>
                          <ul className="mt-2 ml-4 space-y-1">
                            {sponsorItems.map((subItem) => (
                              <ListItem
                                key={subItem.title}
                                title={subItem.title}
                                href={subItem.href}
                                onClickItem={() => setIsMobileOpen(false)}
                              >
                                {subItem.description}
                              </ListItem>
                            ))}
                          </ul>
                        </details>
                      </li>
                    );
                  }
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.route}
                        className="block text-base font-bold text-gray-900 hover:text-gray-600 py-2 hover:bg-gray-100 rounded-md px-2 transition-colors"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {translatedLabel}
                      </Link>
                    </li>
                  );
                })}
                <li className="pt-4 space-y-2">
                  <div className="pb-2">
                    <LanguageSwitcher />
                  </div>
                  <Button
                    asChild
                    className="w-full bg-green-600 px-5 cursor-pointer hover:bg-green-500"
                  >
                    <Link href="/get_tickets">{tNav('tickets')}</Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-green-600 px-5 cursor-pointer hover:bg-green-500"
                  >
                    <Link href="/nominate">{tNav('nominate')}</Link>
                  </Button>
                </li>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;