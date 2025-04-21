import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Leading the way in solar innovation and sustainable energy solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80"
              alt="Solar Installation"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6 my-auto"
          >
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="text-xl font-semibold mb-2">Expert Installation Team</h3>
              <p className="text-gray-400">Certified professionals with years of experience</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="text-xl font-semibold mb-2">Quality Equipment</h3>
              <p className="text-gray-400">Top-tier solar panels and components</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-400">Round-the-clock customer service</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="text-xl font-semibold mb-2">Warranty Coverage</h3>
              <p className="text-gray-400">Comprehensive warranty on all installations</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;