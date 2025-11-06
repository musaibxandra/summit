'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Facebook, Instagram, Mail } from 'lucide-react'; // Assuming lucide-react for icons (install if needed: npm i lucide-react)

import { Button } from '@/components/ui/button';

const Footer = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const socialLinks = [
    {
      href: 'https://twitter.com/hrgathering',
      icon: Twitter,
      label: 'Twitter',
    },
    {
      href: 'https://linkedin.com/company/hrgathering',
      icon: Linkedin,
      label: 'LinkedIn',
    },
    {
      href: 'https://facebook.com/hrgathering',
      icon: Facebook,
      label: 'Facebook',
    },
    {
      href: 'https://instagram.com/hrgathering',
      icon: Instagram,
      label: 'Instagram',
    },
    {
      href: 'mailto:info@hrgathering.com',
      icon: Mail,
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-blue-950 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8"
        >
          {/* Column 1: Logo & Socials */}
          <motion.div variants={fadeInUp} className="text-left">
            <Link href="/" className="inline-block">
              <Image
                src="/icons/hrlogo.png" // Update to your actual logo path (e.g., in public/) - make it a high-res PNG/SVG for big size
                alt="HR Gathering Logo"
                width={200} // Adjust for "big" size; e.g., 200-300px wide
                height={120} // Proportional height; tweak as needed
                className="hover:opacity-80 transition-opacity" // Removed mx-auto for left alignment
                priority // For above-the-fold optimization
              />
            </Link>
            <div className="flex justify-start gap-2 mt-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-gray-300 hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Get Involved */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold mb-4 text-white">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tickets"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Get Tickets
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsorship"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sponsorship Enquiry
                </Link>
              </li>
              <li>
                <Link
                  href="/exhibition"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Exhibition Enquiry
                </Link>
              </li>
              <li>
                <Link
                  href="/nominate"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Nominate
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Explore More */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold mb-4 text-white">Explore More</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/agenda"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Agenda
                </Link>
              </li>
              <li>
                <Link
                  href="/speakers"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Meet Our Speakers
                </Link>
              </li>
              <li>
                <Link
                  href="/awards"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Awards
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsor-exhibit"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sponsor or Exhibit
                </Link>
              </li>
              <li>
                <Link
                  href="/plan-trip"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Plan Your Trip
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Stay Updated */}
          <motion.div variants={fadeInUp} className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-white">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Sign up for the latest news on the HR Gathering.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <Button
                variant="default"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; 2025 HR Gathering. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div>
          <p className="text-gray-400 mt-6">
            Mikono Expo Group is Africa’s leading event organizer, renowned for
            delivering world-class conferences and exhibitions. With over 75
            trade and consumer events annually, Mikono Expo Group has a proven
            track record of connecting industry leaders, fostering innovation,
            and creating impactful experiences.
          </p>
          <p className="text-gray-400 mt-2">
            © 2025 The World HR Summit & Expo 2025 | Global . All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
