import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Battery, LineChart, Wrench } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: <Battery className="w-12 h-12" />,
    title: 'Solar EPC Services',
    description: 'End-to-end Engineering, Procurement, and Construction for solar projects.',
    details: `We provide turnkey Solar EPC services covering the full lifecycle of your project.
Our team handles everything from system design to final commissioning with precision and care.

• Engineering and system design tailored to your site
• Procurement of top-tier components (panels, inverters, structures)
• Professional installation and quality control
• Grid synchronization and testing
• Compliance with government norms and subsidy documentation

Let us manage your project while you enjoy hassle-free solar adoption.`,
  },
  {
    icon: <Sun className="w-12 h-12" />,
    title: 'Solar Installation',
    description: 'Expert solar panel installation for residential, commercial, and industrial clients.',
    details: `We offer professional installation services for a wide range of solar projects.
Our trained team ensures safe, efficient, and aesthetically pleasing installations.

• Site inspection and feasibility analysis
• System layout and electrical integration
• Rooftop or ground-mount installations
• Structural safety and performance testing
• Government liaison for net metering and approvals

Whether it’s your home or business, we make going solar smooth and effective.`,
  },
  {
    icon: <LineChart className="w-12 h-12" />,
    title: 'Solar Project Consultancy',
    description: 'Professional guidance to plan, develop, and optimize your solar project.',
    details: `Our consultancy services help you navigate every stage of your solar journey, from planning to execution.

• Site assessment and technical feasibility studies
• ROI analysis and financial modeling
• Government policy advisory and subsidy consultation
• Vendor and technology selection
• Project supervision and audit services

Make informed decisions and reduce risk with our expert consulting team by your side.`,
  },
  {
    icon: <Wrench className="w-12 h-12" />,
    title: 'AMC (Maintenance)',
    description: 'Annual maintenance contracts to ensure long-term system performance.',
    details: `Our AMC packages keep your solar system operating at its best throughout its lifespan.
We ensure reliability, safety, and optimal energy yield with routine checks and responsive support.

• Regular inspection and cleaning of solar panels
• Electrical system diagnostics and repair
• Remote monitoring and performance analysis
• Preventive maintenance and component upgrades
• Emergency support and replacement services

Enjoy peace of mind with a system that runs efficiently year-round.`,
  },
  
];


const Services = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setOpenIndex(index);
  };

  const handleClose = () => {
    setOpenIndex(null);
  };

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
              onOpen={() => handleOpen(index)}
              isOpen={openIndex === index}
              onClose={handleClose}
            />
            
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Services;
