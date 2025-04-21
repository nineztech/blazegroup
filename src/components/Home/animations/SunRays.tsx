import React from 'react';
import { motion } from 'framer-motion';

const SunRays = () => (
  <div className="absolute inset-0 pointer-events-none scale-150">
    {/* Dynamic rays */}
    {[...Array(16)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute inset-0"
        style={{
          transform: `rotate(${i * 22.5}deg)`,
          transformOrigin: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2
          }}
          className="h-full w-2 mx-auto"
          style={{
            background: `linear-gradient(
              180deg,
              rgba(255, 220, 0, ${0.2 - (i % 3) * 0.04}) 0%,
              rgba(255, 200, 0, ${0.15 - (i % 3) * 0.03}) 40%,
              transparent 100%
            )`
          }}
        />
      </motion.div>
    ))}
  </div>
);

export default SunRays;