'use client';

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  jobTitle: string;
  company: string;
  bio: string;
  linkedin: string;
  topic1: string;
  topic2: string;
  topic3: string;
}

const Speak: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    jobTitle: '',
    company: '',
    bio: '',
    linkedin: '',
    topic1: '',
    topic2: '',
    topic3: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to an API or backend
    console.log('Form submitted:', formData);
    alert('Your speaker proposal has been submitted for review!');
    // Reset form if needed
    setFormData({
      name: '',
      email: '',
      jobTitle: '',
      company: '',
      bio: '',
      linkedin: '',
      topic1: '',
      topic2: '',
      topic3: '',
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">
        Become a Speaker at The World HR Summit & Expo 2025
      </h1>
      <p className="mb-4">
        Contribute your insights and industry expertise as a speaker at The
        World HR Summit & Expo 2025. As a speaker, you will:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          Elevate your professional profile and establish yourself as a thought
          leader in the global HR community
        </li>
        <li>
          Connect directly with key industry figures, expand your network, and
          exchange knowledge with fellow professionals
        </li>
        <li>
          Showcase your ideas and achievements to attract new business and
          career opportunities
        </li>
      </ul>
      <p className="mb-6">
        This is your opportunity to register your interest as a speaker and
        propose up to three topics you’re passionate about. Please note that
        submitting a proposal does not guarantee a speaking slot at the event.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label
            htmlFor="jobTitle"
            className="block text-sm font-medium text-gray-700"
          >
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label
            htmlFor="bio"
            className="block text-sm font-medium text-gray-700"
          >
            Short Bio (200 words max)
          </label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            required
            maxLength={200}
            rows={4}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label
            htmlFor="linkedin"
            className="block text-sm font-medium text-gray-700"
          >
            LinkedIn Profile (optional)
          </label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label
            htmlFor="topic1"
            className="block text-sm font-medium text-gray-700"
          >
            Proposed Topic 1
          </label>
          <input
            type="text"
            id="topic1"
            name="topic1"
            value={formData.topic1}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label
            htmlFor="topic2"
            className="block text-sm font-medium text-gray-700"
          >
            Proposed Topic 2 (optional)
          </label>
          <input
            type="text"
            id="topic2"
            name="topic2"
            value={formData.topic2}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label
            htmlFor="topic3"
            className="block text-sm font-medium text-gray-700"
          >
            Proposed Topic 3 (optional)
          </label>
          <input
            type="text"
            id="topic3"
            name="topic3"
            value={formData.topic3}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <button
          type="submit"
          className="w-full cursor-pointer hover:bg-gray-800 bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Submit Proposal
        </button>
      </form>
    </div>
  );
};

export default Speak;
