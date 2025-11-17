'use client';

// components/Agenda.tsx (or wherever you place it)
import React from 'react';
import { useTranslations } from 'next-intl';

const Agenda: React.FC = () => {
  const keyTopics = [
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

  const scheduleItems = [
    {
      time: '8:00 – 8:30',
      duration: '30 mins',
      location: 'Millennium Plaza Downtown Hotel',
      title: 'Registration/Arrival & Exhibition Viewing',
      speaker: null,
    },
    {
      time: '8:30 – 8:40',
      duration: '10 mins',
      location: 'Millennium Plaza Downtown Hotel',
      title: 'Conference Opening & Welcome',
      speaker: null,
    },
    {
      time: '8:40 – 9:25',
      duration: '45 mins',
      location: 'Millennium Plaza Downtown Hotel',
      title: 'Agile Leadership: The Role of HR in Organizational Resilience',
      speaker:
        'Dr. Charles Cotter – Independent Global Blended Learning Practitioner and HRM/Learning & Development Strategist',
    },
    {
      time: '9:30 – 10:30',
      duration: '60 mins',
      location: 'Millennium Plaza Downtown Hotel',
      title: 'Challenges of Hybrid Work and Remote Team Management',
      speaker:
        'Deon Binneman – Reputation Management Adviser, Keynote Speaker, and Management Consultant, I empower Boards and Leadership Teams to build, protect, and elevate organizational and individual reputations',
    },
    {
      time: '10:30 – 11:00',
      duration: '30 mins',
      location: 'Millennium Plaza Downtown Hotel',
      title: 'Morning Tea & Coffee/Exhibition Viewing',
      speaker: null,
    },
    {
      time: '11:00 – 12:00',
      duration: '60 mins',
      location: 'Millennium Plaza Downtown Hotel',
      title: 'Masterclass: Agile HR Operations',
      speaker:
        'Rabison Shumba – Professional Speaker, Global Trainer, Change Management and Leadership Expert',
    },
    {
      time: '12:30 – 1:10',
      duration: '40 mins',
      location: 'Millennium Plaza Downtown Hotel',
      title: 'Diversity, Equity & Inclusion Reimagined',
      speaker:
        'Darryn Van Den Berg – Applied Skills Architect (Award-winning, tech visionary, TedTalker)',
    },
    {
      time: '1:10 – 2:10',
      duration: '60 mins',
      location: 'Millennium Plaza Downtown Hotel',
      title: 'Lunch & Exhibition Viewing',
      speaker: null,
    },
    {
      time: '2:10 – 2:50',
      duration: '40 mins',
      location: 'Millennium Plaza Downtown Hotel',
      title: 'Keynote: HR as a Catalyzer for Organizational Evolution',
      speaker: 'Graeme Lategan – Operations Manager',
    },
    {
      time: '3:25 – 4:05',
      duration: '40 mins',
      location: 'Millennium Plaza Downtown Hotel',
      title:
        'Case Study: Building a New Type of Organization for the Future of Work',
      speaker: null, // Marked as '–'
    },
    {
      time: '4:30 – 5:15',
      duration: '40 mins',
      location: 'Millennium Plaza Downtown Hotel',
      title: 'Future of Work Technology: The Next Chapter',
      speaker: null, // Marked as '–'
    },
    {
      time: '5:15 – 8:00',
      duration: '40 mins', // Note: This seems off (2h45m?), but as per input
      location: 'Millennium Plaza Downtown Hotel',
      title: 'Networking Drinks',
      speaker: null,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="w-full px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
            Shaping Tomorrow&apos;s HR
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-8">
            Join the World HR Summit & Expo – Global 2025
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p>
              Get ready for an unforgettable journey through the future of Human
              Resources at the World HR Summit & Expo – Global (2025). Our
              thoughtfully curated agenda is designed to inspire, educate, and
              empower HR leaders and professionals from around the globe.
            </p>
            <p>
              From exploring the latest trends in AI and workforce strategies to
              redefining leadership and inclusivity, this agenda is your guide
              to navigating the ever-evolving HR landscape. Discover, connect,
              and grow as we reimagine the future of work together!
            </p>
          </div>
        </div>
      </section>

      {/* Agenda Content */}
      <div className="w-full px-4 md:px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row h-auto lg:h-[80vh] gap-6 bg-white shadow-lg rounded-lg overflow-hidden">
            {/* First Column: Fixed Topics List */}
            <div className="w-full lg:w-1/2 bg-gray-50 p-6 lg:p-8 flex flex-col">
              <h2 className="text-xl font-bold mb-4 text-primary">
                Key Topics to be Discussed
              </h2>
              <p className="text-gray-600 mb-6">
                The summit will delve into the most pressing and transformative
                issues in HR, including:
              </p>
              <ul className="space-y-2 text-sm text-gray-700 flex-1">
                {keyTopics.map((topic, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
            {/* Second Column: Scrollable Schedule */}
            <div className="w-full lg:w-1/2 py-6 lg:py-12 p-6 lg:p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              <h2 className="text-xl font-bold mb-4 text-primary">
                Conference Schedule
              </h2>
              <div className="space-y-6">
                {scheduleItems.map((item, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-blue-500 pl-4 pb-4"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-gray-800">
                        {item.time}
                      </span>
                      <span className="text-sm text-gray-500">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">
                      {item.location}
                    </p>
                    <h3 className="font-medium text-primary mb-1">
                      {item.title}
                    </h3>
                    {item.speaker && (
                      <p className="text-sm text-gray-600 italic">
                        {item.speaker}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
