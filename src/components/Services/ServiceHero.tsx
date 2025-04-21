import React from 'react';
import { motion } from 'framer-motion';
import { Sun } from 'lucide-react';

const ServiceHero = () => {
  return (
    <section className="relative min-h-[60vh] bg-gradient-to-b from-yellow-50 to-white flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Sun className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Comprehensive Solar Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential rooftops to industrial installations, we provide end-to-end solar energy solutions tailored to your specific needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceHero;