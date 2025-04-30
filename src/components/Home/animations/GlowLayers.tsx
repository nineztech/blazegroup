import React from 'react';
import { motion } from 'framer-motion';

// Primary intense glow layer
const PrimaryGlow = () => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ 
      scale: [0.8, 1.2, 0.8], 
      opacity: [0.4, 0.6, 0.4] 
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute inset-0 rounded-full"
    style={{
      background: `radial-gradient(circle at center, rgba(255,200,0,0.5) 0%, rgba(255,140,0,0.2) 40%, transparent 70%)`,
      transform: "scale(2.5)"
    }}
  />
);

// Secondary diffused glow
const SecondaryGlow = () => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ 
      scale: [1, 1.5, 1], 
      opacity: [0.3, 0.5, 0.3] 
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute inset-0 rounded-full"
    style={{
      background: `radial-gradient(circle at center, rgba(255,180,0,0.4) 0%, rgba(255,69,0,0.2) 50%, transparent 80%)`,
      transform: "scale(3)"
    }}
  />
);

// Outer ambient glow
const AmbientGlow = () => (
  <motion.div
    initial={{ scale: 1, opacity: 0 }}
    animate={{ 
      scale: [1.2, 1.8, 1.2], 
      opacity: [0.2, 0.3, 0.2] 
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute inset-0 rounded-full"
    style={{
      background: `radial-gradient(circle at center, rgba(255,220,0,0.2) 0%, rgba(255,200,0,0.1) 60%, transparent 90%)`,
      transform: "scale(3.5)"
    }}
  />
);

const GlowLayers = () => (
  <>
    <PrimaryGlow />
    <SecondaryGlow />
    <AmbientGlow />
  </>
);

export default GlowLayers;