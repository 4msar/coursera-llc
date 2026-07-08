import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/logo.jpg';

function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="site-logo-link" aria-label="Little Lemon home">
          <img
            className="site-logo"
            src={logo}
            alt="Little Lemon - A place to eat and enjoy the food."
            width="200"
            height="50"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
