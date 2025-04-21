import React from 'react';
import { motion } from 'framer-motion';
import { Sun } from 'lucide-react';

const CompanyIntro = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Sun className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Blaze Group
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="prose prose-lg max-w-4xl mx-auto text-center"
        >
          <p className="text-xl text-gray-600 mb-6">
            Blaze Group is a pioneering leader in the solar energy industry, headquartered in Gujarat, India. 
            With over 8 years of expertise, we deliver innovative solar energy solutions designed to meet the 
            diverse needs of residential, commercial, and industrial clients.
          </p>
          <p className="text-xl text-gray-600">
            Our commitment to excellence is reflected in our highly skilled team of engineers, project managers, 
            and technicians who work relentlessly to ensure high-quality, reliable, and cost-effective solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service}</h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const services = [
  "Solar Power Plant Consultancy",
  "EPC (Engineering, Procurement, and Construction)",
  "Installation and Commissioning",
  "Solar Water Heaters",
  "Solar Street Lights",
  "AMC Services"
];

export default CompanyIntro;