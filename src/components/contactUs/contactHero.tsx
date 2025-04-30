import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="py-18 relative bg-gradient-to-b from-blue-50 to-white flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Mail className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get in Touch with Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or need a custom solution? Our team is here to help — let's start the conversation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
