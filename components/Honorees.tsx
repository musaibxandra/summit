import React from 'react'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Linkedin } from 'lucide-react';
import { Button } from './ui/button';

interface Speaker {
  title: string;
  description: string;
  imageUrl: string;
  linkedinUrl: string;
}

const speakers: Speaker[] = [
  {
    title: "Dr. Charles Cotter",
    description: "Independent Global Blended Learning Practitioner | HRM & Development Strategist",
    imageUrl: "/honorees/roy.png",
    linkedinUrl: "https://www.linkedin.com/in/charlescotter/?profileId=ACoAAAfa6ZkBLwSEuNzckVcPxDIQAXbPhT0nD0w",
  },
  {
    title: "Rabison Shumba",
    description: "Professional Speaker, Global Trainer, Change Management and Leadership Expert",
    imageUrl: "/honorees/rabinson.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/rabisonshumba/overlay/photo/",
  },
  {
    title: "Darryn Van Den Berg",
    description: "Applied Skills Architect (Award-winning, tech visionary, TedTalker)",
    imageUrl: "/honorees/daryn.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/darrynvandenberg/?originalSubdomain=za",
  },
  {
    title: "Deon Binneman",
    description: "Reputation Management Adviser, Keynote Speaker, and Management Consultant",
    linkedinUrl: "https://www.linkedin.com/in/deonbinneman/?originalSubdomain=za",
    imageUrl: "/honorees/deon.jpeg",
  },
  {
    title: "Graeme Lategan",
    description: "Operations Manager",
    imageUrl: "/honorees/graeme.jpg",
    linkedinUrl: "https://www.linkedin.com/in/graeme-lategan-34902151/?originalSubdomain=hr",
  },
  {
    title: "Pramil Verma",
    description: "Chief Operating Officer",
    imageUrl: "/honorees/pramil.jpg",
    linkedinUrl: "https://www.linkedin.com/in/pramilverma/",
  },
  {
    title: "Rudolf Goosen",
    description: "TRIMAD Group of Companies",
    imageUrl: "/honorees/rudolf.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/rudolf-goosen-589635a1/?originalSubdomain=za",
  },
  {
    title: "Dr. Bill Prince",
    description: "Counselling Psychologist",
    imageUrl: "/honorees/bill.jpg",
    linkedinUrl: "https://www.linkedin.com/in/bill-prince-055032309/?originalSubdomain=ca",
  },
];

const SpeakerCard: React.FC<Speaker> = ({ title, description, imageUrl, linkedinUrl }) => (
  <CardContainer className="inter-var">
    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
      <CardItem
        translateZ="50"
        className="text-xl font-bold text-neutral-600 dark:text-white"
      >
        {title}
      </CardItem>
      <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
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
          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
        >
          Try now →
        </CardItem>
        <CardItem
          translateZ={20}
          as="a"
          href={linkedinUrl}
          target="_blank"
          className="px-4 py-2 rounded-xl cursor-pointer bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
        >
          <div className='flex gap-2'><Linkedin size={16}/> LinkedIn</div>
        </CardItem>
      </div>
    </CardBody>
  </CardContainer>
);

const Honorees: React.FC = () => {
  return (
    <div className='max-w-6xl mx-auto mt-24'>
      <h1 className='text-3xl font-bold'>
        2025 Honored Speakers
      </h1>
      <div className="grid lg:grid-cols-4 mt-6 gap-6">
        {speakers.map((speaker, index) => (
          <div key={index}>
            <SpeakerCard {...speaker} />
          </div>
        ))}
      </div>
      <div className='flex gap-4 mt-6'>
        <Button variant="outline" className='border-green-500 cursor-pointer border-1'>
          EXPLORE ALL SPEAKERS
        </Button>
        <Button variant="outline" className='border-green-500 cursor-pointer border-1'>
          PROPOSE TO SPEAK
        </Button>
      </div>
    </div>
  )
}

export default Honorees