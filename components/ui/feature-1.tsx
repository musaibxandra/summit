import { HoverBorderGradient } from './hover-border-gradient';
import Image from 'next/image';
import { Button } from './button';
import { CardFlipHover } from './card-flip-hover';

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

export const Feature1 = ({
  title = 'Blocks built with Shadcn & Tailwind',
  image = '/icons/hrlogo.png',
  description = 'Hundreds of finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.',
  description2 = '',
  videoSrc = '/vid/hrtech.mp4',
  firstButton = {
    label: 'Get Tickets',
    href: 'https://shadcnblocks.com',
  },
  secondButton = {
    label: 'Sponsor or Exhibit',
    href: 'https://shadcnblocks.com',
  },
  thirdButton = {
    label: 'Nominate',
    href: 'https://shadcnblocks.com',
  },
}: Feature1Props) => {
  return (
    <section className="pb-4 flex items-center justify-center relative overflow-hidden min-h-screen">
      {' '}
      {/* pt-0 for higher centering; justify-center for not fully left-aligned */}
      {videoSrc && (
        <video
          className="absolute top-0 left-0 w-full h-[85%] object-cover z-0 brightness-35"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="container px-12 relative z-10">
        {' '}
        {/* Increased px-8 to px-16 for more left distance */}
        <div className="flex items-center">
          {' '}
          {/* Changed back to items-center for vertical alignment */}
          <div className="flex flex-col items-start text-left">
            {' '}
            {/* Removed justify-center; items-start for left content; vertical centering handled by parent flex */}
            {image && (
              <div className="flex items-center justify-center">
                <CardFlipHover imageUrl={image} />
              </div>
            )}
            <h1 className="my-6 mt-6 text-4xl text-white font-semibold text-balance lg:text-5xl">
              {title}
            </h1>
            <p className="mb-8 max-w-xl text-white lg:text-lg">
              {description}
              <br />
              {description2}
            </p>
            <div className="flex w-full flex-col items-start justify-start gap-6 sm:flex-row">
              {' '}
              {/* items-start for left-aligned buttons */}
              <Button className="cursor-pointer bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-[length:200%_200%] animate-gradient text-white shadow-lg hover:from-purple-600 hover:via-pink-500 hover:to-blue-500 transition-all duration-300">
                <span>{firstButton.label}</span>
              </Button>
              <Button className="cursor-pointer bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-[length:200%_200%] animate-gradient text-white shadow-lg hover:from-purple-600 hover:via-pink-500 hover:to-blue-500 transition-all duration-300">
                <span>{secondButton.label}</span>
              </Button>
              <Button className="cursor-pointer bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-[length:200%_200%] animate-gradient text-white shadow-lg hover:from-purple-600 hover:via-pink-500 hover:to-blue-500 transition-all duration-300">
                <span>{thirdButton.label}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
