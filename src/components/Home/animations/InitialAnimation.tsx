import React from 'react';
import { motion } from 'framer-motion';

interface InitialAnimationProps {
  children: React.ReactNode;
  onComplete: () => void;
}

const InitialAnimation = ({ children, onComplete }: InitialAnimationProps) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ 
      duration: 2,
      ease: [0.34, 1.56, 0.64, 1], // Custom easing for smooth appearance
      onComplete
    }}
  >
    {children}
  </motion.div>
);

export default InitialAnimation;