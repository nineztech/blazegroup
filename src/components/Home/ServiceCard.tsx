import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
  isAnyHovered: boolean;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  details,
  isAnyHovered,
  isHovered,
  onHoverStart,
  onHoverEnd,
}) => {
  return (
    <motion.div
      className="relative h-full"
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      initial={false}
      animate={{
        opacity: isAnyHovered ? (isHovered ? 1 : 0.3) : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="h-full p-6 bg-white border border-gray-200 shadow-md transition-shadow hover:shadow-xl">
        <div className="text-yellow-500 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      <AnimatePresence mode="wait">
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={onHoverEnd}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-3xl bg-white rounded-lg shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-yellow-500">
                    {icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 text-lg mb-6">{description}</p>
                  <div className="text-gray-700 whitespace-pre-line">{details}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ServiceCard;