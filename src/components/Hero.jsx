import React from 'react';
import '../css/hero.css';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section text-white text-center position-relative">
      <img
        src={`${process.env.PUBLIC_URL}/banner.png`}
        alt="Diagnostic Banner"
        className="img-fluid w-100 hero-banner"
      />
      <div className="hero-overlay d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-4 fw-bold animate-text">DR's Diagnostic Center</h1>
        <p className="lead">Accurate • Affordable • Trusted Pathology Services</p>
      </div>
    </section>
  );
};

export default HeroSection;
