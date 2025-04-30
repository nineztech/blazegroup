import React from 'react';
import { motion } from 'framer-motion';
import { Sun } from 'lucide-react';

const CompanyIntro = () => {
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
                About Blaze Group
              </h1>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="prose prose-lg max-w-4xl mx-auto text-center lg:text-left"
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
          </div>

          {/* Right side iframe container */}
          <div className="flex-shrink-0 w-full lg:w-1/3">
            <iframe
              className="w-full h-full border-none"
              src="https://lottie.host/embed/e7edba2c-8537-42ad-b1b3-8b0dc8eb4ef8/bjCrWn5UdM.lottie"
              title="Lottie Animation"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};



export default CompanyIntro;
