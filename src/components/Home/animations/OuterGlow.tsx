import React from 'react';
import { motion } from 'framer-motion';

const OuterGlow = () => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.4, 0.2] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute inset-0 rounded-full"
    style={{
      background: `radial-gradient(circle at center, rgba(234,179,8,0.3) 0%, transparent 70%)`,
      transform: "scale(2)"
    }}
  />
);

export default OuterGlow;