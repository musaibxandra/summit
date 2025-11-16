import React from 'react';
import {
  TrendingUp,
  MessageSquare,
  Users,
  Lightbulb,
  Award,
} from 'lucide-react';
import Sponsors from '@/components/Sponsors';

export default function HRSummitPage() {
  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Maximize Brand Visibility',
      description:
        "Showcase your organization's brand to a global audience of HR professionals and decision-makers.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Lead Industry Conversations',
      description: 'Be part of the discussions shaping the future of HR.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Network with Leaders',
      description:
        'Connect directly with 2,000+ HR leaders, talent managers, and C-suite executives.',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Showcase Innovation',
      description:
        'Present your cutting-edge HR tools, technologies, and services to key stakeholders.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Exclusive Recognition',
      description:
        'Stand out with unique branding opportunities in a premium event environment.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#002366] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Brand Engagement Opportunities
          </h1>
          <p className="text-xl md:text-2xl font-light text-blue-100">
            Strategic Alliances for a Future-Ready HR
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <section className="mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Join the prestigious{' '}
            <strong>World HR Summit & Expo – Global 2025</strong>, an
            unparalleled platform bringing together HR professionals, thought
            leaders, and industry innovators from around the world. This event
            is designed to explore groundbreaking ideas, recognize excellence in
            HR practices, and foster global networking opportunities.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Boost your brand visibility and position your company as a leader in
            the HR ecosystem by becoming a sponsor.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-[#002366] text-white font-semibold rounded hover:bg-[#001f4d] transition-colors">
              Become a Sponsor
            </button>
            <button className="px-8 py-3 bg-white text-[#002366] font-semibold rounded border-2 border-[#002366] hover:bg-blue-50 transition-colors">
              Request to Exhibit
            </button>
          </div>
        </section>

        {/* Why Participate Section */}
        <section>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why participate World HR Summit & Expo – Global 2025
            </h2>
            <p className="text-lg text-gray-600">
              Join us as a sponsor or exhibit and make your mark at the HR
              Summit.
            </p>
          </div>

          {/* Benefits List */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#002366] text-white rounded flex items-center justify-center">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Sponsors />
        </section>

        {/* Bottom CTA */}
        <section className="mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Partner With Us?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Position your brand at the forefront of HR innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-[#002366] text-white font-semibold rounded hover:bg-[#001f4d] transition-colors">
                Become a Sponsor
              </button>
              <button className="px-8 py-3 bg-white text-[#002366] font-semibold rounded border-2 border-[#002366] hover:bg-blue-50 transition-colors">
                Request to Exhibit
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>World HR Summit & Expo – Global 2025</p>
        </div>
      </footer>
    </div>
  );
}
