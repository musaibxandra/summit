import { Button } from './button';
import { CardFlipHover } from './card-flip-hover';
import Link from 'next/link';

interface Feature1Props {
  title: string;
  description?: string;
  description2?: string;
  videoSrc?: string;
  image?: string;

  firstButton: {
    label: string;
    href: string;
  };
  secondButton: {
    label: string;
    href: string;
  };
  thirdButton: {
    label: string;
    href: string;
  };
}

// components/Feature1.tsx
// components/Feature1.tsx
export const Feature1 = ({
  title = 'Blocks built with Shadcn & Tailwind',
  image = '/icons/logo.svg',
  description = 'Hundreds of finely crafted components...',
  description2 = '',
  videoSrc = '/vid/hrtech.mp4',
  firstButton = { label: 'Get Tickets', href: '/get_tickets' },
  secondButton = { label: 'Sponsor or Exhibit', href: '#' },
  thirdButton = { label: 'Nominate', href: '/nominate' },
}: Feature1Props) => {
  return (
    <section className="relative overflow-hidden min-h-screen w-full flex items-center">
      {/* Full-screen video background */}
      {videoSrc && (
        <video
          className="absolute inset-0 w-full h-full object-cover brightness-35 -z-10"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Full-width content with responsive padding */}
      <div className="w-full px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-start text-left space-y-4 md:space-y-6">
          {/* Logo */}
          {image && (
            <div className="w-full flex justify-center md:justify-start">
              <CardFlipHover imageUrl={image} />
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-full md:max-w-2xl">
            {description}
            {description2 && (
              <>
                <br />
                {description2}
              </>
            )}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3 lg:gap-4 w-full sm:w-auto">
            <Button
              asChild
              className="px-4 py-2 text-sm md:px-5 md:py-2.5 whitespace-nowrap shadow-lg hover:shadow-xl transition-all"
            >
              <Link href={firstButton.href}>{firstButton.label}</Link>
            </Button>
            <Button
              asChild
              className="px-4 py-2 text-sm md:px-5 md:py-2.5 whitespace-nowrap shadow-lg hover:shadow-xl transition-all"
            >
              <Link href={secondButton.href}>{secondButton.label}</Link>
            </Button>
            <Button
              asChild
              className="px-4 py-2 text-sm md:px-5 md:py-2.5 whitespace-nowrap shadow-lg hover:shadow-xl transition-all"
            >
              <Link href={thirdButton.href}>{thirdButton.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
