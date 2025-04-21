import React from 'react';
import { motion } from 'framer-motion';

const AtmosphericEffect = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
    className="absolute inset-0 pointer-events-none scale-150"
    style={{
      background: `
        radial-gradient(
          circle at center,
          rgba(255, 248, 225, 0.15) 0%,
          rgba(255, 236, 179, 0.1) 30%,
          rgba(255, 236, 179, 0.05) 60%,
          transparent 100%
        )
      `,
      filter: 'blur(60px)',
    }}
  />
);

export default AtmosphericEffect;