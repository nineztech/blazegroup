import React from 'react';
import ContactHero from '../components/contactUs/contactHero'; // Import ContactHero
import ContactForm from '../components/contactUs/contactUs'; // Import the form component

const ContactUsPage: React.FC = () => { // Renamed to ContactUsPage
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Render the ContactHero component */}
      <ContactHero />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 flex">

        {/* Left Side: Contact Information */}
        <div className="w-1/2 pr-4">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-4 text-gray-600">
            We're here to help! Reach out to us through any of these channels.
          </p>
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            <p className="mt-2">Email: blazegroup.lights@gmail.com</p>
            <p className="mt-2">Address: 407, Elite Business Hub, Opp. Kargil Patrol Punp, SG Highway, Ahemdabad - 380060, Gujarat</p>
            <p className="mt-2">Phone: (+91) 9824999898</p>
          </div>
        </div>

        {/* Division Line */}
        <div className="border-l border-gray-300 mx-4"></div>

        {/* Right Side: Contact Form */}
        <div className="w-1/2 pl-4">
          {/* Render the ContactForm component here */}
          <ContactForm />
        </div>

      </div>
    </div>
  );
};

export default ContactUsPage; // Exporting the page component