import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import heroImg from '../../assets/images/hero.jpg';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">Little Lemon</h1>
          <h2 className="hero-subtitle">Dhaka</h2>
          <p className="hero-description">
            We are a family-owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
          <Link to="/booking" className="hero-cta">
            Reserve a Table
          </Link>
        </div>
        <div className="hero-image-wrapper">
          <img
            className="hero-image"
            src={heroImg}
            alt="Little Lemon restaurant interior with warm Mediterranean ambiance"
            width="400"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
