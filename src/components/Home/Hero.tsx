import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SunAnimation from './SunAnimation';
import HeroContent from './HeroContent';

const Hero = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    // Show content after animation completes
    setTimeout(() => setIsAnimationComplete(true), 2000);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-white">
      {/* Animation Container */}
      <div className="absolute inset-0">
        <SunAnimation onAnimationComplete={handleAnimationComplete} />
      </div>

      {/* Content Container */}
      <AnimatePresence>
        {isAnimationComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16"
          >
            <HeroContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;