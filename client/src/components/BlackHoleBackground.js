import React from 'react';
import './BlackHoleBackground.css';

const BlackHoleBackground = () => {
  const videoUrl = `/videos/blackhole.mp4?v=${Date.now()}`;
  
  return (
    <div className="video-background-wrapper">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
        key={videoUrl}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay" />
    </div>
  );
};

export default BlackHoleBackground;
