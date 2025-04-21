import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineAnimationProps {
  onLoad: () => void;
}

const SplineAnimation = ({ onLoad }: SplineAnimationProps) => {
  return (
    <Suspense fallback={<div className="w-full h-full bg-black" />}>
      <div className="w-full h-full">
        <Spline 
          scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
          onLoad={onLoad}
          onError={(error) => console.error('Spline loading error:', error)}
        />
      </div>
    </Suspense>
  );
};

export default SplineAnimation;