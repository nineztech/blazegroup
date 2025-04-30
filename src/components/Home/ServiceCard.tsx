import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
  onOpen: () => void;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  details,
  onOpen,
  isOpen,
  onClose,
}) => {
  return (
    <>
      {/* Card */}
      <motion.div
        className="relative h-full"
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="h-full p-6 bg-white border border-gray-200 shadow-md transition-shadow hover:shadow-xl flex flex-col justify-between">
          <div>
            <div className="text-yellow-500 mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>

          <div className="mt-4">
            <p
              onClick={onOpen}
              className="text-sm text-yellow-500 cursor-pointer flex items-center gap-1 hover:underline"
            >
              See More <span>↓</span>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Popup Modal */}
      <AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-3xl bg-white rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button inside the popup */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
          aria-label="Close"
        >
          ×
        </button>

        <div className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-yellow-500">{icon}</div>
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

    </>
  );
};

export default ServiceCard;
