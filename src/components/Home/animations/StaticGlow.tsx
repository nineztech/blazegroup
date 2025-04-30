import React from 'react';

const StaticGlow = () => (
  <div className="absolute inset-0">
    {/* Primary intense glow */}
    <div
      className="absolute inset-0 rounded-full"
      style={{
        background: `radial-gradient(circle at center, 
          rgba(255,220,0,0.6) 0%, 
          rgba(255,180,0,0.4) 30%, 
          rgba(255,140,0,0.2) 60%, 
          transparent 80%)`,
        transform: "scale(3)"
      }}
    />
    
    {/* Secondary glow */}
    <div
      className="absolute inset-0 rounded-full"
      style={{
        background: `radial-gradient(circle at center, 
          rgba(255,220,0,0.3) 0%, 
          rgba(255,200,0,0.2) 30%, 
          rgba(255,180,0,0.1) 60%, 
          transparent 80%)`,
        transform: "scale(4)"
      }}
    />
    
    {/* Outer ambient glow */}
    <div
      className="absolute inset-0 rounded-full"
      style={{
        background: `radial-gradient(circle at center, 
          rgba(255,236,179,0.2) 0%, 
          rgba(255,236,179,0.1) 40%, 
          rgba(255,236,179,0.05) 70%, 
          transparent 90%)`,
        transform: "scale(5)"
      }}
    />
  </div>
);

export default StaticGlow;