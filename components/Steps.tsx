// components/HowItWorks.tsx

import { LinkedinIcon, TwitterIcon, Calendar, MapPin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export default function HowItWorks() {
 
  return (
    <section className="w-full pb-18">
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid gap-28 lg:grid-cols-2">
          <div className="">
            <h2 className="flex text-left text-3xl font-bold">
              SHAPING THE FUTURE OF HR ON A GLOBAL STAGE
            </h2>
            <br />
            <h3 className="flex text-left text-2xl font-bold">
              Meet. Inspire. Transform.
            </h3>
            <p className="flex text-left">
              The World HR Summit & Expo 2025 | Global is your gateway to the future of human resources. Set against the stunning backdrop of Dubai at the iconic World Trade Center, this global event will bring together the brightest minds in HR to explore groundbreaking ideas, share actionable insights, and forge powerful connections. Across two days of keynote speeches, panel discussions, and interactive sessions, attendees will experience a transformative journey through the evolving landscape of HR. 
              This glamorous black-tie event will bring together over 500 of the world’s leading employers, including HR Heads/Directors, CEOs, and other business leaders. 
            </p>
            <br />
            <h4 className="font-bold text-left">50M Impressions | 1000+ Decision Makers |  90+ World Class Speakers</h4>
            <br />
            <div className="flex gap-4">
              <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black text-left border-green-200 border-1 bg-gray-100 cursor-pointer text-black dark:text-white flex items-center space-x-2">
                <span>Get Tickets</span>
            </HoverBorderGradient>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black text-left border-green-200 border-1 bg-gray-100 cursor-pointer text-black dark:text-white flex items-center space-x-2">
                <span>Sponser or Exhibit</span>
            </HoverBorderGradient>
            </div>
          </div>
          <div className="">
            <Image
              src="/icons/hrse.avif"
              width={1286}
              height={1081}
              alt="conference"
              >
            </Image>
            <br/>
            <h3 className="text-left font-bold flex item-center gap-2"><Calendar/>4-5 December 2025</h3>
            <br/>
            <h3 className="text-left font-bold flex item-center gap-2"><MapPin/>Millennium Plaza Downtown Hotel</h3>
            <br />
            <div className="flex gap-3">
              <Link href="https://login.xing.com/?locale=en&dest_url=https%3A%2F%2Fwww.xing.com%2Fsocial%2Fshare%2Fspi%3Furl%3Dhttps%253A%252F%252Fworldhr-summit.com%252F" target="_blank">
                <Button className="cursor-pointer">
                  <span>Xing</span>
                </Button>
              </Link>
              <Link href="https://x.com/intent/tweet?text=%20https://worldhr-summit.com/" target="_blank">
                <Button className="cursor-pointer">
                  <TwitterIcon/>
                  <span>X</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/shareArticle?mini=true&url=https://worldhr-summit.com/&title=World%20HR%20Summit%20%26%20Expo%202025&summary=&source=https://worldhr-summit.com/" target="_blank">
                <Button className="cursor-pointer">
                  <LinkedinIcon/>
                  <span>LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:maqdoom114@gmail.com" target="_blank">
                <Button className="cursor-pointer">
                  <Mail/>
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
