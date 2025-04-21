import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Leaf, Zap, Cpu } from 'lucide-react';

const benefits = [
  {
    icon: <TrendingUp className="w-12 h-12" />,
    title: 'Economic Benefits',
    description: 'ROI in 3-3.5 years, with free energy for the next 25+ years.'
  },
  {
    icon: <Leaf className="w-12 h-12" />,
    title: 'Environmental Impact',
    description: 'Reduction in carbon emissions, contributing to a sustainable future.'
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: 'Energy Independence',
    description: 'Freedom from fluctuating electricity costs and energy crises.'
  },
  {
    icon: <Cpu className="w-12 h-12" />,
    title: 'Technological Edge',
    description: 'State-of-the-art systems designed for maximum efficiency and reliability.'
  }
];

const WhySolar = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Go Solar?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the numerous benefits of switching to solar energy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-yellow-500 mb-6 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySolar;