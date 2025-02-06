"use client";
import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  // Handle form input changes
  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form fields
    if (!formData.name || !formData.email || !formData.message) {
      setIsError(true);
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate a form submission (replace with your API call here)
      // You can use fetch, axios, etc., to submit data to your backend or API.
      // const response = await fetch('/api/submit', {
      //   method: 'POST',
      //   body: JSON.stringify(formData),
      //   headers: { 'Content-Type': 'application/json' },
      // });
      // const result = await response.json();

      // Simulate success
      setIsSuccess(true);
      setIsError(false);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setIsError(true);
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <img src="/images/images (16).jpeg" alt="girl" className="w-50 h-100 ml-60" />
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-10 mt-10">Contact Us</h1>

        {isSuccess && (
          <p className="text-green-500 text-center mb-4">Message sent successfully!</p>
        )}
        {isError && (
          <p className="text-red-500 text-center mb-4">Failed to send message. Please try again.</p>
        )}

        <div className="flex justify-center">
          <form className="w-full max-w-md space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Your message"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {isError && (
              <p className="text-red-500 text-sm">Please fill in all fields.</p>
            )}
            {isSuccess && (
              <p className="text-green-500 text-sm">Message sent successfully!</p>
            )}

            <div className="flex justify-between items-center mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
