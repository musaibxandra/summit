'use client';

import { useState } from 'react';

export default function Enquiry() {
  const [selectedEvent, setSelectedEvent] = useState<string>('');
  const [packageCost] = useState('USD 0.00');

  return (
    <section className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md my-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        Sponsorship Packages
      </h2>

      <p className="text-gray-700 mb-6 leading-relaxed">
        Our exclusive packages offer premium visibility, high-impact networking, and
        opportunities to position your company at the forefront of HR innovation.
        Elevate your brand and shape the future of work—explore our partnership
        opportunities today! Foster global networking opportunities. Boost your brand
        visibility and position your company as a leader in the HR ecosystem by
        becoming a sponsor.
      </p>

      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-800 mb-3">
          Which event would you like to sponsor?
        </label>

        <div className="space-y-3">
          {[
            'The World HR Summit & Expo 2025 | Global',
            'The World HR Excellence Awards 2025 | Global',
          ].map((event) => (
            <label
              key={event}
              className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition"
            >
              <input
                type="radio"
                name="event"
                value={event}
                checked={selectedEvent === event}
                onChange={(e) => setSelectedEvent(e.target.value)}
                className="w-5 h-5 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-3 text-gray-800">{event}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-lg font-semibold text-gray-900">
          Sponsorship Package Cost: <span className="text-blue-600">{packageCost}</span>
        </p>
        {selectedEvent && (
          <p className="text-sm text-gray-600 mt-1">
            Selected: <strong>{selectedEvent}</strong>
          </p>
        )}
      </div>

      <button
        disabled={!selectedEvent}
        className={`mt-6 w-full py-3 px-6 text-white font-medium rounded-lg transition ${
          selectedEvent
            ? 'bg-blue-600 hover:bg-blue-700'
            : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        Proceed to Enquiry
      </button>
    </section>
  );
}