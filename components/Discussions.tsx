'use client';

import React from 'react';
import { CircleArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Discussions = () => {
  const firstTopics = [
    'Managing Through Emergencies and Disasters',
    'Talent Acquisition and Retention in the Digital Age',
    'Diversity, Equity, and Inclusion: Beyond Buzzwords',
    'The Future of Work: Trends and Predictions',
    'AI and Automation: Revolutionizing HR Processes',
    'Leadership Development for a Changing World',
    'Digital Privacy and Ethical Talent Analytics',
    'Building Resilient and Inclusive Organizational Cultures',
    'Performance Management: Strategies for the Modern Workplace',
    'Employee Experience: Enhancing Engagement and Well-being',
  ];

  const secondTopics = [
    'HR as a Catalyst for Resilience & Growth',
    'Unlocking Organizational Agility and Evolution',
    'Mastering Hybrid Teams & Agile HR',
    'Strategies for Leading Distributed Workforces in Organizations',
    'Reimagining Inclusion & Shaping the Future of Work',
    'Designing Inclusive Workplaces and Tomorrow Organizations',
    'Tech, Transformation & Networking',
    'Exploring the Future of Work and Building Connections Over Cocktails',
  ];

  const thirdTopics = [
    'Shaping the HR Agenda',
    'Leaders Respond to Emerging Conditions',
    'Imagining the Future of Remote Work',
    'Managing Multicultural & Multigenerational Workforces',
    'Healing at Work: Focus on Mental Fitness & Talent Management',
    'Managing Talent and Mental Fitness in Global & Digital Workplaces',
    'Celebrating Excellence in HR',
    'World HR Excellence Awards 2025 | Africa Gala Dinner',
  ];

  return (
    <div className="w-full px-4 md:px-6 py-8">
      <div className="max-w-7xl mx-auto text-left">
        <div className="grid lg:grid-cols-3 gap-6">
        {/* First Column - Gray Theme with Floating Circles */}
        <div className="relative p-6 bg-gradient-to-br from-violet-200 to-gray-100 rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="absolute inset-0 opacity-20 animate-pulse">
            <div className="absolute top-20 left-16 w-32 h-32 bg-gray-300 rounded-full blur-2xl animate-bounce"></div>
            <div className="absolute top-60 right-16 w-40 h-40 bg-gray-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-32 left-1/2 w-28 h-28 bg-gray-300 rounded-full blur-2xl"></div>
          </div>

          <h1 className="w-full text-xl font-bold relative z-10">
            Theme: Agile Leadership & <br />
            Workforce Evolution
          </h1>
          <br />
          {firstTopics.map((topic, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 relative z-10 mb-2"
            >
              <CircleArrowRight className="inline-block h-5 w-5 flex-shrink-0 text-gray-600 mt-0.5" />
              <span className="leading-relaxed">{topic}</span>
            </div>
          ))}
        </div>

        {/* Second Column - Blue Theme with Rotating Rings */}
        <div className="relative p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-sm border border-blue-100 overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-32 left-1/2 -translate-x-1/2 w-64 h-64 border-4 border-blue-400 rounded-full animate-spin"></div>
            <div className="absolute top-40 left-1/2 -translate-x-1/2 w-48 h-48 border-2 border-indigo-400 rounded-full animate-spin"></div>
            <div className="absolute bottom-24 left-20 w-36 h-36 bg-blue-300 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-32 right-20 w-28 h-28 bg-indigo-300 rounded-full blur-2xl animate-bounce"></div>
          </div>

          <h1 className="w-full text-xl font-bold relative z-10">
            4 December 2025
          </h1>
          <br />
          <br />
          {secondTopics.map((topic, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 relative z-10 mb-2"
            >
              <CircleArrowRight className="inline-block h-5 w-5 flex-shrink-0 text-blue-600 mt-0.5" />
              <span className="leading-relaxed">{topic}</span>
            </div>
          ))}
          <br />
          <Button className="relative z-10">READ AGENDA</Button>
        </div>

        {/* Third Column - Green Theme with Grid Pattern */}
        <div className="relative p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-sm border border-green-100 overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-24 right-16 w-44 h-44 bg-green-300 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-72 left-16 w-36 h-36 bg-emerald-300 rounded-full blur-2xl animate-bounce"></div>
            <div className="absolute bottom-24 right-24 w-32 h-32 border-4 border-green-400 rounded-2xl animate-spin"></div>
          </div>

          <h1 className="w-full text-lg font-bold relative z-10">
            5 December 2025
          </h1>
          <br />
          <br />
          {thirdTopics.map((topic, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 relative z-10 mb-2"
            >
              <CircleArrowRight className="inline-block h-5 w-5 flex-shrink-0 text-green-600 mt-0.5" />
              <span className="leading-relaxed">{topic}</span>
            </div>
          ))}
          <br />
          <br />
          <Button className="relative z-10">READ AGENDA</Button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Discussions;
