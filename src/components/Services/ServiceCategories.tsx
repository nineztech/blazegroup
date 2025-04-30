import React from 'react';
import { motion } from 'framer-motion';
import { Home, Factory, Droplet, Lightbulb, Droplets, Wrench, BookOpen, Settings } from 'lucide-react';

const services = [
  {
    icon: <Home className="w-8 h-8" />,
    title: 'Solar Rooftop Systems',
    description: 'Ideal for homes, offices, schools, and industries, offering significant savings on electricity bills.',
    details: 'Our rooftop solar systems are designed for maximum efficiency and seamless integration with existing infrastructure.'
  },
  {
    icon: <Factory className="w-8 h-8" />,
    title: 'Ground-Mounted Solar Systems',
    description: 'Large-scale installations tailored for agricultural and industrial use.',
    details: 'Custom-designed systems that optimize land usage and energy generation for large-scale applications.'
  },
  {
    icon: <Droplet className="w-8 h-8" />,
    title: 'Solar Water Heaters',
    description: 'Reliable systems using flat-plate or evacuated tube collectors.',
    details: '24/7 hot water availability with minimal maintenance requirements.'
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Solar Street Lighting',
    description: 'Durable and eco-friendly lighting systems with long-life DC LED lights.',
    details: 'Smart lighting solutions for commercial and residential areas with automated controls.'
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: 'Solar Water Pumps',
    description: 'Energy-efficient water pumping systems for modern agriculture.',
    details: 'Eliminate dependence on grid electricity with reliable solar-powered pumping solutions.'
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: 'Solar EPC (Turnkey Solutions)',
    description: 'End-to-end services from design to commissioning.',
    details: 'Comprehensive project management and execution for hassle-free solar adoption.'
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Project Consultancy',
    description: 'Expert advisory services for optimal system implementation.',
    details: 'Professional guidance throughout your solar journey, ensuring the best returns on investment.'
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: 'Operations & Maintenance',
    description: 'Comprehensive post-installation support.',
    details: 'Regular maintenance and monitoring to ensure peak system performance.'
  }
];

const ServiceCategories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of solar energy solutions designed to meet your specific needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="text-yellow-500 mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                <p className="text-gray-700 pt-4 border-t">{service.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;