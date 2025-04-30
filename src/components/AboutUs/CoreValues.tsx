import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Lightbulb, Leaf } from 'lucide-react';

const CoreValues = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all group"
            >
              <div className="text-yellow-500 mb-4 group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const values = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Ethical Practices",
    description: "Committed to transparency and integrity in every project."
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Customer-Centric Approach",
    description: "Focused on long-term relationships, not just sales."
  },
  {
    icon: <Lightbulb className="w-12 h-12" />,
    title: "Innovation",
    description: "Continuous improvement to deliver cutting-edge solutions."
  },
  {
    icon: <Leaf className="w-12 h-12" />,
    title: "Sustainability",
    description: "Helping clients adopt green energy for a cleaner planet."
  }
];

export default CoreValues;