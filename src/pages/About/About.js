import React from 'react';
import './About.css';
import restaurantImg from '../../assets/images/restaurant.jpg';
import chefImg from '../../assets/images/chef.jpg';

function About() {
  return (
    <section className="about-page">
      <div className="about-inner">
        <h1 className="about-title">About Little Lemon</h1>
        <div className="about-grid">
          <div className="about-content">
            <h2 className="about-heading">Our Story</h2>
            <p className="about-text">
              Founded in 2015, Little Lemon started as a small family kitchen
              with a big dream — to share the authentic flavors of the
              Mediterranean with Dhaka. Our founders, Mario and Adrian,
              grew up cooking alongside their grandmother, learning the
              traditional recipes that have been passed down for generations.
            </p>
            <p className="about-text">
              Today, Little Lemon has grown into a beloved neighborhood
              destination. We remain committed to sourcing the freshest local
              ingredients and preparing each dish with the same care and
              love that defined those early days.
            </p>
            <h2 className="about-heading">Our Values</h2>
            <ul className="about-values">
              <li>Fresh, locally sourced ingredients</li>
              <li>Traditional recipes with a modern twist</li>
              <li>Warm, welcoming hospitality</li>
              <li>Sustainable and responsible practices</li>
            </ul>
          </div>
          <div className="about-images">
            <img
              className="about-img about-img--a"
              src={restaurantImg}
              alt="Little Lemon dining area with warm lighting and rustic decor"
              width="300"
              height="380"
              loading="lazy"
            />
            <img
              className="about-img about-img--b"
              src={chefImg}
              alt="Chef preparing fresh Mediterranean dishes in the open kitchen"
              width="260"
              height="320"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
