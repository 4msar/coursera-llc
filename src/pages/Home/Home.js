import React from 'react';
import Hero from '../../components/Hero/Hero';
import Specials from '../../components/Specials/Specials';
import Testimonials from '../../components/Testimonials/Testimonials';
import './Home.css';
import restaurantImg from '../../assets/images/restaurant.jpg';
import chefImg from '../../assets/images/chef.jpg';

function Home() {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <section className="home-about">
        <div className="home-about-inner">
          <div className="home-about-content">
            <h2 className="home-about-title">Little Lemon</h2>
            <h3 className="home-about-subtitle">Dhaka</h3>
            <p className="home-about-text">
              Nestled in the heart of Dhaka, Little Lemon brings the vibrant
              flavors of the Mediterranean to your table. Our family recipes have
              been passed down through generations, blending tradition with a
              modern twist. Every dish is crafted with locally sourced
              ingredients and a passion for authentic taste.
            </p>
            <p className="home-about-text">
              Whether you are joining us for a casual lunch, a romantic dinner,
              or a celebration with loved ones, our warm atmosphere and
              attentive service make every visit memorable.
            </p>
          </div>
          <div className="home-about-images">
            <img
              className="home-about-img home-about-img--a"
              src={restaurantImg}
              alt="Little Lemon dining area with warm lighting and rustic decor"
              width="300"
              height="380"
              loading="lazy"
            />
            <img
              className="home-about-img home-about-img--b"
              src={chefImg}
              alt="Chef preparing fresh Mediterranean dishes in the open kitchen"
              width="260"
              height="320"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
