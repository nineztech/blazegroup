import React from 'react';
import { motion } from 'framer-motion';
import { SunDim } from 'lucide-react';

const ProjectHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-900 to-blue-800 flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <SunDim className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Success Stories
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore our portfolio of successful solar installations across India
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectHero;