import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Building2, Home, Factory } from 'lucide-react';

const stats = [
  {
    icon: <Building2 className="w-8 h-8" />,
    value: '10+',
    label: 'Commercial Projects',
  },
  {
    icon: <Factory className="w-8 h-8" />,
    value: '2+',
    label: 'Ground Mounted',
  },
  {
    icon: <Home className="w-8 h-8" />,
    value: '6500+',
    label: 'Residential Projects',
  },
  {
    icon: <Sun className="w-8 h-8" />,
    value: '23MW+',
    label: 'Total Capacity',
  },
];

const ProjectStats = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-yellow-500 mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectStats;