import React from 'react';
import { motion } from 'framer-motion';

const NaturalGlow = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden scale-150">
    {/* Primary irregular glow */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.4, 0.6, 0.4] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute inset-0"
      style={{
        background: `
          radial-gradient(
            ellipse 120% 100% at 50% 50%,
            rgba(255, 220, 0, 0.2) 0%,
            rgba(255, 200, 0, 0.15) 20%,
            rgba(255, 180, 0, 0.1) 40%,
            rgba(255, 160, 0, 0.05) 60%,
            transparent 100%
          )
        `
      }}
    />

    {/* Secondary asymmetric glow */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.3, 0.5, 0.3] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute inset-0"
      style={{
        background: `
          radial-gradient(
            ellipse 150% 120% at 45% 55%,
            rgba(255, 236, 179, 0.15) 0%,
            rgba(255, 236, 179, 0.1) 30%,
            rgba(255, 236, 179, 0.05) 60%,
            transparent 100%
          )
        `
      }}
    />

    {/* Atmospheric haze */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.2, 0.4, 0.2] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute inset-0"
      style={{
        background: `
          radial-gradient(
            circle at 55% 45%,
            rgba(255, 248, 225, 0.12) 0%,
            rgba(255, 248, 225, 0.08) 30%,
            rgba(255, 248, 225, 0.04) 60%,
            transparent 100%
          )
        `
      }}
    />
  </div>
);

export default NaturalGlow;