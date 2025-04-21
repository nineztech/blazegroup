import React, { useState } from 'react';
import InitialAnimation from './animations/InitialAnimation';
import SolarCore from './animations/SolarCore';
import NaturalGlow from './animations/NaturalGlow';
import SunRays from './animations/SunRays';
import AtmosphericEffect from './animations/AtmosphericEffect';

interface SunAnimationProps {
  onAnimationComplete: () => void;
}

const SunAnimation = ({ onAnimationComplete }: SunAnimationProps) => {
  const [isAnimating, setIsAnimating] = useState(true);

  const handleAnimationComplete = () => {
    setIsAnimating(false);
    onAnimationComplete();
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        <InitialAnimation onComplete={handleAnimationComplete}>
          <SolarCore />
          <NaturalGlow />
          <SunRays />
          <AtmosphericEffect />
        </InitialAnimation>
      </div>
    </div>
  );
};

export default SunAnimation;