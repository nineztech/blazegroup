import React from 'react';
import { motion } from 'framer-motion';
import { Target, Sun } from 'lucide-react';

const VisionMission = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-lg shadow-xl"
          >
            <div className="text-yellow-500 mb-6">
              <Target className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              Blaze Group envisions a future where every individual and business benefits from clean, 
              renewable energy. We strive to be at the forefront of solar innovation, making sustainable 
              energy accessible to all.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-lg shadow-xl"
          >
            <div className="text-yellow-500 mb-6">
              <Sun className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To transform the energy landscape by providing sustainable and cost-effective solar energy solutions. 
              We are dedicated to delivering the highest ROI while contributing to a greener planet through 
              innovative solar technologies.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;