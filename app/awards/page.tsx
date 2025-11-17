// app/awards/page.tsx
import React from 'react';
import Link from 'next/link';

const Awards: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            World HR Excellence Awards 2025 | Global
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            This is where the world’s top HR leaders gather to celebrate
            excellence
          </p>
          <p className="text-lg font-semibold mb-8">
            Showcase Excellence | Inspire the Future of Work | Lead the HR
            Evolution
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/tickets"
              className="bg-white text-blue-800 font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition duration-200 shadow-lg"
            >
              Get Tickets
            </Link>
            <Link
              href="/nominate"
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-md hover:bg-white hover:text-blue-800 transition duration-200"
            >
              Nominate
            </Link>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Inspire the Future of Work
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Empowering People. Elevating Business. Where HR Leadership Shines.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="my-12">
              <p className="text-gray-700 mb-4">
                This is a premier event celebrating excellence in the HR
                profession. Open to organizations and HR professionals globally,
                this prestigious event recognizes best practices, innovation,
                and outstanding contributions to human resource management.
              </p>
              <p className="text-gray-700 mb-4">
                This glamorous black-tie event will bring together over 500 of
                the world’s leading employers, including HR Heads/Directors,
                CEOs, and other business leaders. Guests will enjoy a night of
                gourmet dining, premium beverages, and stellar entertainment at
                one of Dubai’s most luxurious venues.
              </p>
              <p className="text-gray-700 font-semibold">
                <span className="font-bold">Date:</span> 5 December 2025 <br />
                <span className="font-bold">Venue:</span> Millennium Plaza
                Downtown Hotel, UAE
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/icons/awards.png" // Replace with actual image path
                alt="Millennium Plaza Downtown Hotel"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-2">
                500+ Global Leaders
              </h3>
              <p className="text-gray-600">
                Join top employers, CEOs, CHROs, and HR influencers from around
                the world.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-2">
                40+ Prestigious Awards
              </h3>
              <p className="text-gray-600">
                Celebrating individuals, teams, and organizations driving impact
                in HR.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-2">
                Black-Tie Gala Experience
              </h3>
              <p className="text-gray-600">
                An evening of fine dining and entertainment at the Grand Hyatt
                Dubai, United Arab Emirates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Be Part of HR History
          </h2>
          <p className="text-lg mb-8">
            Don’t miss your chance to celebrate excellence and connect with
            global HR leaders.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/tickets"
              className="bg-white text-blue-800 font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition duration-200 shadow-lg"
            >
              Get Tickets
            </Link>
            <Link
              href="/nominate"
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-md hover:bg-white hover:text-blue-800 transition duration-200"
            >
              Nominate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Awards;
