import React from 'react';
import { MapPin, Users, Wifi, Calendar } from 'lucide-react';

const Venue: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Millennium Plaza Downtown Hotel
        </h1>
        <p className="text-xl text-amber-600 font-semibold">
          Iconic Five Star Hotel
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Left Side - Image */}
        <div className="relative h-96 md:h-full min-h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop"
            alt="Millennium Plaza Downtown Hotel"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-md flex items-center gap-2">
            <MapPin className="w-5 h-5 text-amber-600" />
            <span className="text-sm font-semibold">Dubai</span>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-6">
          {/* Location Description */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Location & Accessibility
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Millennium Plaza Downtown Hotel is an iconic landmark centrally
              located on Sheikh Zayed Road in Dubai, directly across from the
              Museum of the Future, the World Trade Centre, and the city&apos;s
              main business district. We are just minutes away from major
              attractions including Dubai Mall, Burj Khalifa, and The Dubai
              Frame. The hotel is also a 15-minute drive from the Gold Souk and
              Spice Market in Deira, and 20 minutes from Kite Beach, accessible
              via our daily shuttle service.
            </p>
          </div>

          {/* Meeting Space Highlights */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg">
              <Users className="w-8 h-8 text-amber-600 mb-2" />
              <p className="text-2xl font-bold text-gray-900">1,400</p>
              <p className="text-sm text-gray-600">Max Capacity</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <Calendar className="w-8 h-8 text-amber-600 mb-2" />
              <p className="text-2xl font-bold text-gray-900">11</p>
              <p className="text-sm text-gray-600">Event Spaces</p>
            </div>
          </div>
        </div>
      </div>

      {/* Meeting and Event Space Section */}
      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Calendar className="w-7 h-7 text-amber-600" />
          Meeting and Event Space
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          This hotel has an excellent reputation for hosting meetings and events
          for many years. With one of the largest, pillarless ballrooms in Dubai
          accommodating up to 1,000 guests as well as 10 meeting rooms, many of
          which have natural daylight. These function rooms can host from 24 to
          200 guests with your preferred layout to suit every type of event or
          conference.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Their experienced event planning team is here to ensure every meeting
          and function runs smoothly—whether in dynamic meeting rooms or the
          expansive ballroom, which accommodates up to 1,400 guests. Stay
          connected with complimentary Wi-Fi throughout the hotel, and make use
          of the fully equipped business center for professional needs. When
          it&apos;s time to unwind, enjoy a refreshing dip in the outdoor pool
          or catch up with colleagues over drinks or a casual meeting at one of
          the inviting restaurants and bars.
        </p>

        <div className="mt-6 flex items-center gap-2 text-amber-600">
          <Wifi className="w-5 h-5" />
          <span className="font-semibold">Complimentary Wi-Fi Throughout</span>
        </div>
      </div>

      {/* Location Map */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <MapPin className="w-7 h-7 text-amber-600" />
          Our Location
        </h2>
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.3206469863785!2d55.27684731501453!3d25.194611483893714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682c5ec1a30b%3A0x8f3e1e31c6f2f5e5!2sMillennium%20Plaza%20Hotel%20Dubai!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Millennium Plaza Hotel Dubai Location"
          />
        </div>
        <p className="text-gray-600 text-sm mt-3 flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          Sheikh Zayed Road, Trade Centre, Dubai, UAE
        </p>
      </div>
    </div>
  );
};

export default Venue;
