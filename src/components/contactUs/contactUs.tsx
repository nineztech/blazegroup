import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 flex">
        {/* Left Side: Contact Information */}
        <div className="w-1/2 pr-4">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-4 text-gray-600">
            We're here to help! Reach out to us through any of these channels.
          </p>
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            <p className="mt-2">Email: example@example.com</p>
            <p className="mt-2">Address: 123 Main St, City, Country</p>
            <p className="mt-2">Phone: (123) 456-7890</p>
          </div>
        </div>

        {/* Division Line */}
        <div className="border-l border-gray-300 mx-4"></div>

        {/* Right Side: Contact Form */}
        <div className="w-1/2 pl-4">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message:
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;