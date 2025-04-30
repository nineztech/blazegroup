import React from 'react';

const SolarCore = () => (
  <div
    className="w-40 h-40 rounded-full relative overflow-hidden"
    style={{
      background: `radial-gradient(circle at center, 
        rgb(255, 220, 0) 0%, 
        rgb(255, 180, 0) 40%, 
        rgb(255, 140, 0) 70%, 
        rgb(255, 100, 0) 100%)`,
      boxShadow: `
        0 0 60px 20px rgba(255,220,0,0.4),
        0 0 100px 40px rgba(255,180,0,0.3),
        0 0 140px 60px rgba(255,140,0,0.2)
      `
    }}
  >
    <div
      className="absolute inset-0 opacity-40"
      style={{
        background: `
          radial-gradient(circle at center, transparent 0%, rgba(255,69,0,0.3) 100%),
          repeating-linear-gradient(45deg, rgba(255,180,0,0.2) 0px, rgba(255,69,0,0.3) 10px)
        `
      }}
    />
  </div>
);

export default SolarCore;