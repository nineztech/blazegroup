import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Battery, LineChart, Wrench } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: <Sun className="w-12 h-12" />,
    title: 'Solar Installation',
    description: 'Professional installation of high-efficiency solar panels for homes and businesses.',
    details: `Our expert team provides end-to-end solar installation services, from initial assessment to final setup. 
    We use the latest technology and highest quality panels to ensure maximum efficiency and longevity. 
    Our process includes:
    
    • Comprehensive site assessment and custom system design
    • Professional installation by certified technicians
    • Integration with existing electrical systems
    • Full testing and commissioning
    • Detailed system documentation and training
    
    We handle all permits and paperwork, making your transition to solar power seamless and hassle-free.`,
  },
  {
    icon: <Battery className="w-12 h-12" />,
    title: 'Energy Storage',
    description: 'Advanced battery solutions to store and manage your solar energy efficiently.',
    details: `Our energy storage solutions help you maximize your solar investment by storing excess energy for use when you need it most. 
    We offer:
    
    • Latest battery technology with smart management systems
    • Customized storage capacity based on your usage patterns
    • Backup power during grid outages
    • Smart energy management integration
    • Remote monitoring and control
    
    Our storage solutions ensure you have power when you need it, reducing your reliance on the grid and maximizing your energy independence.`,
  },
  {
    icon: <LineChart className="w-12 h-12" />,
    title: 'Energy Monitoring',
    description: 'Real-time monitoring systems to track and optimize your energy consumption.',
    details: `Keep track of your energy production and consumption with our advanced monitoring systems. 
    Our solutions provide:
    
    • Real-time energy production and consumption data
    • Detailed performance analytics and reporting
    • Mobile app for remote monitoring
    • Predictive maintenance alerts
    • Energy optimization recommendations
    
    Make informed decisions about your energy usage with comprehensive data at your fingertips.`,
  },
  {
    icon: <Wrench className="w-12 h-12" />,
    title: 'Maintenance',
    description: 'Regular maintenance and support to ensure optimal system performance.',
    details: `Keep your solar system running at peak efficiency with our comprehensive maintenance services. 
    We provide:
    
    • Regular system inspections and cleaning
    • Performance optimization
    • Rapid response to any issues
    • Preventive maintenance
    • System upgrades and modifications
    
    Our maintenance plans ensure your system continues to deliver maximum returns on your investment year after year.`,
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solar solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              isAnyHovered={hoveredIndex !== null}
              isHovered={hoveredIndex === index}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;