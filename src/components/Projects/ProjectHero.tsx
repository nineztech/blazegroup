import React from 'react';
import { motion } from 'framer-motion';
import { Sun } from 'lucide-react';

const ProjectHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-900 to-blue-800 flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center md:text-left"
          >
            <Sun className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Success Stories
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto md:mx-0">
              Explore our portfolio of successful solar installations across India
            </p>
          </motion.div>

          {/* Right Side - Lottie Animation (iframe) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center"
          >
            <iframe
              src="https://lottie.host/embed/4183f116-85cc-476f-909f-bbc706e6bc04/Ry3q7vOEks.lottie"
              frameBorder="0"
              width="80%"   // Adjusted width
              height="200"  // Adjusted height
              className="ml-8"  // Shift the iframe slightly to the right
              allow="autoplay; encrypted-media"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
