import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Box } from 'lucide-react';

const products = [
  {
    category: 'Solar Equipment',
    items: [
      'Solar PV Modules',
      'Mounting Structures',
      'Energy Management Systems',
      'AC Distribution Boxes',
      'DC Distribution Boxes'
    ]
  },
  {
    category: 'Protection Systems',
    items: [
      'Advanced Earthing Kits',
      'Lightning Protection Systems',
      'Surge Protection Devices',
      'Circuit Breakers',
      'Safety Equipment'
    ]
  }
];

const ProductShowcase = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Box className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Product Portfolio</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            High-quality components and equipment for reliable solar installations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gray-800 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-semibold text-yellow-500 mb-6">{category.category}</h3>
              <ul className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: itemIndex * 0.1 }}
                    className="flex items-center space-x-3 text-gray-300"
                  >
                    <Shield className="w-5 h-5 text-yellow-500" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;