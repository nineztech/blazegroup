import React from 'react';
import { motion } from 'framer-motion';
import { Sun } from 'lucide-react';

const ServiceHero = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side content */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center lg:text-left mb-12"
            >
              <Sun className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
                Comprehensive Solar Solutions
              </h1>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="prose prose-lg max-w-4xl mx-auto text-center lg:text-left"
            >
              <p className="text-xl text-gray-600 mb-6">
                From residential rooftops to large-scale industrial installations, we specialize in delivering comprehensive, end-to-end solar energy solutions designed to meet the unique needs of every client. Whether you're a homeowner looking to reduce energy bills with solar panels, a business aiming to lower your carbon footprint, or an industrial facility seeking a sustainable power source, we offer tailored solutions that maximize efficiency, performance, and long-term cost savings.
              </p>
            </motion.div>
          </div>

          {/* Right side iframe container */}
          <div className="flex-shrink-0 w-full lg:w-1/3">
            <iframe
              className="w-full h-[300px] lg:h-[350px] border-none"
              src="https://lottie.host/embed/dc51a1a5-d2fe-4748-9d00-d293cf402e51/euB0vM3p2N.lottie"
              title="Lottie Animation"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
