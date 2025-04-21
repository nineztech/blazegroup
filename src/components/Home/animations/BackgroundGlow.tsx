const BackgroundGlow = () => (
  <div className="fixed inset-0 pointer-events-none">
    {/* Intense center glow */}
    <div
      className="absolute inset-0"
      style={{
        background: `radial-gradient(circle at center, 
          rgba(255, 220, 0, 0.15) 0%,
          rgba(255, 200, 0, 0.1) 20%,
          rgba(255, 180, 0, 0.05) 40%,
          rgba(255, 160, 0, 0.025) 60%,
          transparent 80%)`
      }}
    />
    
    {/* Subtle ambient light */}
    <div
      className="absolute inset-0"
      style={{
        background: `radial-gradient(circle at center,
          rgba(255, 236, 179, 0.1) 0%,
          rgba(255, 236, 179, 0.05) 30%,
          rgba(255, 236, 179, 0.025) 60%,
          transparent 80%)`
      }}
    />
  </div>
);

export default BackgroundGlow;