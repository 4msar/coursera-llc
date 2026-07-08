import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/images/logo.jpg';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col">
          <img
            className="footer-logo"
            src={logo}
            alt="Little Lemon - A place to eat and enjoy the food."
            width="150"
            height="40"
          />
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Navigation</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><Link to="/order-online">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Contact</h3>
          <address className="footer-address">
            <p>60ft Street</p>
            <p>Dhaka, Bangladesh</p>
            <p><a href="tel:+8801712345678">+8801712345678</a></p>
            <p><a href="mailto:hello@littlelemon.com">hello@littlelemon.com</a></p>
          </address>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Hours</h3>
          <ul className="footer-hours">
            <li>Mon&ndash;Fri: 11:00 AM &ndash; 10:00 PM</li>
            <li>Sat: 10:00 AM &ndash; 11:00 PM</li>
            <li>Sun: 10:00 AM &ndash; 9:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
