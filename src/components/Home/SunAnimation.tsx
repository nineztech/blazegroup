import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InitialAnimation from './animations/InitialAnimation';
import SolarCore from './animations/SolarCore';
import NaturalGlow from './animations/NaturalGlow';
import SunRays from './animations/SunRays';
import AtmosphericEffect from './animations/AtmosphericEffect';

interface SunAnimationProps {
  onAnimationComplete: () => void;
}

const SunAnimation = ({ onAnimationComplete }: SunAnimationProps) => {
  const [animationFinished, setAnimationFinished] = useState(false);
  const [shrinking, setShrinking] = useState(false);

  const handleAnimationComplete = () => {
    setShrinking(true); // Start shrinking when main animation is done
  };

  const handleShrinkComplete = () => {
    setAnimationFinished(true); // Fully done -> Tell parent to show hero
    onAnimationComplete();
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <AnimatePresence>
        {!animationFinished && (
          <motion.div
            className="relative"
            initial={{ scale: 1, opacity: 1 }}
            animate={shrinking ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            onAnimationComplete={() => {
              if (shrinking) {
                handleShrinkComplete();
              }
            }}
          >
            <InitialAnimation onComplete={handleAnimationComplete}>
              <SolarCore />
              <NaturalGlow />
              <SunRays />
              <AtmosphericEffect />
            </InitialAnimation>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SunAnimation;
