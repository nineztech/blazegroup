import React, { useRef } from 'react'; // Import useRef
import ContactHero from './contactHero';
import emailjs from '@emailjs/browser'; // Import emailjs

const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null); // Initialize useRef

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        'service_5gs4gjk', // replace with your service ID
        'template_0s7f4wh', // replace with your template ID
        form.current,
        'gyJsoEhhNqPGDXulg' // replace with your public key
      )
      .then((result) => {
          console.log('Email sent successfully:', result.text);
          alert('Message sent successfully!');
          if (form.current) {
            form.current.reset(); // Optional: Reset the form after successful submission
          }
      }, (error) => {
          console.error('Email send error:', error.text);
          alert('Failed to send message. Please try again.');
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
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
            <p className="mt-2">Address: 407, Elite Business Hub, Opp. Kargil Petrol Pump, SG Highway, Ahmedabad - 380060, Gujarat</p>
            <p className="mt-2">Phone: (+91) 9824999898</p>
          </div>
        </div>

        {/* Division Line */}
        <div className="border-l border-gray-300 mx-4"></div>

        {/* Right Side: Contact Form */}
        <div className="w-1/2 pl-4">
          {/* Added ref and onSubmit to the existing form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
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
                name="name" // Added name attribute
                placeholder="Enter your name"
                required
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
                name="email" // Added name attribute
                placeholder="Enter your email"
                required
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
                name="message" // Added name attribute
                placeholder="Enter your message"
                rows={5}
                required
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