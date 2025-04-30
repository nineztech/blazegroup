import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="backdrop-blur-sm bg-black/30 p-8 rounded-lg max-w-2xl"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold text-white"
      >
        Powering the Future with{' '}
        <span className="text-yellow-500">Clean Energy</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-xl text-gray-200"
      >
        Transform your energy consumption with our innovative solar solutions.
        Join the renewable energy revolution today.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex flex-col sm:flex-row gap-4"
      >
        <Link
          to="/services"
          className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-md hover:bg-yellow-600 transition-colors text-center"
        >
          Our Services
        </Link>
        <Link
          to="/contactUs"
          className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-md border-2 border-yellow-500 hover:bg-yellow-500/10 transition-colors text-center"
        >
          Get a Quote
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
