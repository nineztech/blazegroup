import React from 'react';
import { Users, Sun, Award, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    value: '7000+',
    label: 'Happy Clients',
  },
  {
    icon: <Sun className="w-8 h-8" />,
    value: '25MW+',
    label: 'Solar Power Installed',
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: '8+',
    label: 'Years Of Experience',
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    value: '6657+',
    label: 'Projects Completed',
  },
];

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
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
              className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50"
            >
              <div className="text-yellow-500 mb-4 group-hover:text-emerald-500 transition-colors">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">{stat.value}</div>
              <div className="text-gray-600 group-hover:text-emerald-600 transition-colors">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;