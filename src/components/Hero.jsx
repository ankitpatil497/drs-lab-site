import React from 'react';
import '../css/hero.css';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section text-white text-center position-relative">
      <picture>
        <source media="(max-width: 768px)" srcSet="/banner.png" />
        <img 
          src="/banner.png" 
          alt="Diagnostic Banner" 
          className="img-fluid w-100 hero-banner"
        />
      </picture>

      
    </section>

  );
};

export default HeroSection;
