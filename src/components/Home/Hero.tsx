import React from 'react';
import { motion } from 'framer-motion';
import HeroContent from './HeroContent';

const HeroSection = () => {
  return (
    <div className="w-full h-screen relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-70" // Reduced opacity for the video
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-1"></div> {/* Black overlay with reduced opacity */}

      {/* Overlay Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-center gap-10 p-8 w-full max-w-7xl z-10"
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <HeroContent />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
