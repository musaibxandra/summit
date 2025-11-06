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
  <Card className="w-full h-auto border-0 shadow-sm hover:shadow-md transition-shadow">
    <CardContent className="p-3"> {/* Reduced from px-3 + default padding */}
      <div className="relative aspect-[4/3] rounded-md bg-gray-100 mb-3 overflow-hidden">
        {/* Smaller image: 4:3 aspect ratio, less height */}
        <Image src={imageSrc} alt={alt} fill className="object-cover" />
      </div>
      <CardTitle className="text-base font-semibold line-clamp-2 mb-1">
        {title}
      </CardTitle>
      <CardDescription className="text-xs text-gray-600 line-clamp-3">
        {description}
      </CardDescription>
    </CardContent>
  </Card>
);

const Gathering = () => {
  const features = [
    {
      imageSrc: '/gathering/keynote.png',
      alt: 'Insightful Keynotes and Panel Discussions illustration',
      title: 'Insightful Keynotes and Panel Discussions',
      description:
        'Attendees gain direct access to top-tier speakers and thought leaders in the HR space. From future workplace trends to evolving talent strategies, the sessions are packed with real-world insights, case studies, and practical tools that help professionals stay ahead in a rapidly changing HR landscape.',
    },
    {
      imageSrc: '/gathering/network.png',
      alt: 'Global Networking Opportunities illustration',
      title: 'Global Networking Opportunities',
      description:
        'The HR Gathering offers an incredible platform to connect with HR leaders, innovators, and professionals from around the world. Whether you’re building partnerships, exploring collaborations, or simply sharing ideas, the event fosters meaningful connections that can shape your career and your organization’s future.',
    },
    {
      imageSrc: '/gathering/intaractive.png',
      alt: 'Interactive Learning Experiences illustration',
      title: 'Interactive Learning Experiences',
      description:
        'Workshops and breakout sessions at the HR Gathering are designed to be hands-on and highly engaging. Whether it’s mastering new HR technologies, enhancing employee well-being strategies, or developing inclusive leadership, these sessions provide tangible takeaways you can immediately apply in your role.',
    },
    {
      imageSrc: '/gathering/inspire.png',
      alt: 'Inspiration to Drive Change illustration',
      title: 'Inspiration to Drive Change',
      description:
        'More than just learning, the HR Gathering inspires action. The energy, stories, and shared passion among attendees leave you motivated to return to your workplace with fresh ideas, renewed purpose, and the confidence to lead impactful change within your organization.',
    },
    {
      imageSrc: '/gathering/awards.png',
      alt: 'Celebrating Excellence illustration',
      title: 'Celebrating Excellence',
      description:
        'One of the highlights of the event is the prestigious HR Awards ceremony, which honors outstanding achievements and innovations in the field of human resources. It’s a moment to recognize individuals and organizations that are redefining the future of work, making it a proud and inspiring celebration for all attendees.',
    },
  ];

  return (
    <section className="w-full px-4 md:px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-left mb-3">
            Experience the HR Gathering
          </h1>
          <p className="text-base text-gray-600 max-w-3xl">
            Gain insights, explore innovations, and connect with global HR leaders
            shaping the future of work
          </p>
        </div>

        {/* Smaller, tighter grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <Link href="/tickets" rel="noopener noreferrer">
            <Button className="bg-green-600 hover:bg-green-500 text-white text-sm px-5 py-2 h-9">
              Get Tickets
            </Button>
          </Link>
          <Link href="/sponsor" rel="noopener noreferrer">
            <Button className="bg-green-600 hover:bg-green-500 text-white text-sm px-5 py-2 h-9">
              Sponsor or Exhibit
            </Button>
          </Link>
          <Link href="/nominate" rel="noopener noreferrer">
            <Button className="bg-green-600 hover:bg-green-500 text-white text-sm px-5 py-2 h-9">
              Nominate
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gathering;