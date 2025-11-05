import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button'

interface FeatureCardProps {
  imageSrc: string
  alt: string
  title: string
  description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  alt,
  title,
  description,
}) => (
  <Card className="w-full h-auto">
    <CardContent className="px-3">
      <div className="relative aspect-[3/4] rounded-md bg-gray-100 mb-2 overflow-hidden">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
      <CardTitle className="text-lg mt-6 mb-1">{title}</CardTitle>
      <CardDescription className="text-sm mt-4 mb-2">
        {description}
      </CardDescription>
    </CardContent>
  </Card>
)

const Gathering = () => {
  const features = [
    {
      imageSrc: "/gathering/keynote.png",
      alt: "Insightful Keynotes and Panel Discussions illustration",
      title: "Insightful Keynotes and Panel Discussions",
      description:
        "Attendees gain direct access to top-tier speakers and thought leaders in the HR space. From future workplace trends to evolving talent strategies, the sessions are packed with real-world insights, case studies, and practical tools that help professionals stay ahead in a rapidly changing HR landscape.",
    },
    {
      imageSrc: "/gathering/network.png",
      alt: "Global Networking Opportunities illustration",
      title: "Global Networking Opportunities",
      description:
        "The HR Gathering offers an incredible platform to connect with HR leaders, innovators, and professionals from around the world. Whether you’re building partnerships, exploring collaborations, or simply sharing ideas, the event fosters meaningful connections that can shape your career and your organization’s future.",
    },
    {
      imageSrc: "/gathering/intaractive.png",
      alt: "Interactive Learning Experiences illustration",
      title: "Interactive Learning Experiences",
      description:
        "Workshops and breakout sessions at the HR Gathering are designed to be hands-on and highly engaging. Whether it’s mastering new HR technologies, enhancing employee well-being strategies, or developing inclusive leadership, these sessions provide tangible takeaways you can immediately apply in your role.",
    },
    {
      imageSrc: "/gathering/inspire.png",
      alt: "Inspiration to Drive Change illustration",
      title: "Inspiration to Drive Change",
      description:
        "More than just learning, the HR Gathering inspires action. The energy, stories, and shared passion among attendees leave you motivated to return to your workplace with fresh ideas, renewed purpose, and the confidence to lead impactful change within your organization.",
    },
    {
      imageSrc: "/gathering/awards.png",
      alt: "Celebrating Excellence illustration",
      title: "Celebrating Excellence",
      description:
        "One of the highlights of the event is the prestigious HR Awards ceremony, which honors outstanding achievements and innovations in the field of human resources. It’s a moment to recognize individuals and organizations that are redefining the future of work, making it a proud and inspiring celebration for all attendees.",
    },
  ]

  return (
    <section className="max-w-6xl mx-auto py-16"> {/* Added semantic section and padding */}
      <div className="mb-16"> {/* my-18 → mb-16 for standard Tailwind */}
        <h1 className="text-4xl font-bold text-left mb-4"> {/* Added font-bold here, removed from wrapper */}
          Experience the HR Gathering
        </h1>
        <p className="text-lg text-gray-600"> {/* Added color for better contrast */}
          Gain insights, explore innovations, and connect with global HR leaders shaping the future of work
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"> {/* Improved responsive grid: 1 mobile, 2 tablet, 3 desktop */}
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
      <div className="flex flex-wrap gap-4 justify-center md:justify-start"> {/* Added flex-wrap for mobile stacking */}
        <Link href="/tickets" rel="noopener noreferrer"> {/* Fixed empty href, added rel for security */}
          <Button className="bg-green-600 hover:bg-green-500 text-white hover:green-500 cursor-pointer">
            <span>Get Tickets</span>
          </Button>
        </Link>
        <Link href="/sponsor" rel="noopener noreferrer">
          <Button className="bg-green-600 hover:bg-green-500 cursor-pointer"> {/* Added variant for secondary style */}
            <span>Sponsor or Exhibit</span>
          </Button>
        </Link>
        <Link href="/nominate" rel="noopener noreferrer">
          <Button className="bg-green-600 hover:bg-green-500 cursor-pointer">
            <span>Nominate</span>
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default Gathering