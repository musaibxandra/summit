'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function NominateComponent() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedAward, setSelectedAward] = useState('');
  const [reason, setReason] = useState('');

  const categories = [
    'Corporate Awards',
    'Talent Categories',
    'Specialized Awards',
  ];

  const corporateAwards = [
    'Excellence in Talent Acquisition',
    'Excellence in Employee Engagement',
    'Excellence in Diversity, Equity, and Inclusion',
    'Employer of the Year',
    'Excellence in Digital Transformation',
    'Excellence in Leadership Development',
    'Excellence in Workforce Mobility',
    'Best Workplace Culture',
    'Innovative HR Tech Implementation',
    'Excellence in Learning & Development',
    'Best Employee Engagement Strategy',
    'Excellence in Diversity & Inclusion Initiatives',
    'Best Talent Management Strategy',
    'Leading HR Transformation Award',
    'Best Health & Wellbeing Program',
    'Employee Retention Strategy Award',
    'Best Use of AI in HR',
    'Workplace Mental Health Initiative',
    'Employee Benefits Program of the Year',
    'HR Innovation of the Year',
    'Best Employer Branding',
    'Best CSR Strategy of the Year',
    'Excellence in Crisis Management Planning',
    'Excellence in Hybrid and Remote Working',
    'Most Sustainable Workforce Strategy',
    'Excellence in HR Analytics and Insights',
    'Outstanding Workforce Planning Strategy',
    'Excellence in Organizational Design',
    'Excellence in Workforce Diversity',
    'Excellence in Employee Volunteerism',
    'Excellence in Total Rewards Strategy',
    'Excellence in Leadership Pipeline Development',
    'Best Corporate Training Provider',
    'Outstanding Corporate Social Responsibility (CSR) Program',
    'Excellence in Employer-Employee Relations',
  ];

  const handleSubmit = () => {
    console.log({
      category: selectedCategory,
      award: selectedAward,
      reason: reason,
    });
    // Handle form submission
  };

  const isFormValid =
    selectedCategory &&
    (selectedCategory !== 'Corporate Awards' || selectedAward) &&
    reason.trim() !== '';

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Submit Your Nomination
          </h1>
          <p className="text-gray-600">
            Recognize excellence in HR by nominating deserving organizations and
            individuals
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Awards Category Selection */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Choose an awards category *
            </label>
            <div className="space-y-3">
              {categories.map((category) => (
                <label
                  key={category}
                  className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all hover:border-blue-200"
                  style={{
                    borderColor:
                      selectedCategory === category ? '#2563eb' : '#e5e7eb',
                    backgroundColor:
                      selectedCategory === category ? '#eff6ff' : 'white',
                  }}
                >
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={selectedCategory === category}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                      setSelectedAward('');
                    }}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="ml-3 text-gray-900 font-medium">
                    {category}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Corporate Award Selection */}
          {selectedCategory === 'Corporate Awards' && (
            <div className="mb-8">
              <label
                htmlFor="award"
                className="block text-sm font-semibold text-gray-900 mb-3"
              >
                Select a Corporate Award category *
              </label>
              <div className="relative">
                <select
                  id="award"
                  value={selectedAward}
                  onChange={(e) => setSelectedAward(e.target.value)}
                  className="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-blue-600 bg-white text-gray-900"
                >
                  <option value="">Select an award...</option>
                  {corporateAwards.map((award) => (
                    <option key={award} value={award}>
                      {award}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          )}

          {/* Talent Categories placeholder */}
          {selectedCategory === 'Talent Categories' && (
            <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-gray-700">
                Talent Categories selection will be available here
              </p>
            </div>
          )}

          {/* Specialized Awards placeholder */}
          {selectedCategory === 'Specialized Awards' && (
            <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-gray-700">
                Specialized Awards selection will be available here
              </p>
            </div>
          )}

          {/* Reason for Nomination */}
          <div className="mb-8">
            <label
              htmlFor="reason"
              className="block text-sm font-semibold text-gray-900 mb-3"
            >
              Reason for Nomination and Key Achievements *
            </label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={6}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 resize-none"
              placeholder="Please describe the reason for this nomination and highlight key achievements..."
            />
            <p className="mt-2 text-sm text-gray-500">
              Provide specific examples and measurable results that demonstrate
              excellence
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              disabled={!isFormValid}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
