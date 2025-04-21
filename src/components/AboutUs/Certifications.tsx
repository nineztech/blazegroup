import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certifications = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Award className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Certifications & Credentials</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gray-800 p-8 rounded-lg max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="ISO Certification"
                className="w-24 h-24 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">ISO 9001:2015 Certified</h3>
            <p className="text-gray-300">
              Blaze Group maintains the highest standards of quality and service delivery through our 
              ISO 9001:2015 certification, ensuring adherence to international quality management standards.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;