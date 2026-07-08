import React, { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape' && isOpen) {
      closeMenu();
      toggleRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const nav = navRef.current;
    if (nav) {
      nav.addEventListener('keydown', handleKeyDown);
      return () => nav.removeEventListener('keydown', handleKeyDown);
    }
  }, [handleKeyDown]);

  return (
    <nav className="navbar" ref={navRef} role="navigation" aria-label="Main navigation">
      <div className="navbar-inner">
        <button
          ref={toggleRef}
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="navbar-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          type="button"
        >
          <span className={`navbar-toggle-bar${isOpen ? ' open' : ''}`} />
          <span className={`navbar-toggle-bar${isOpen ? ' open' : ''}`} />
          <span className={`navbar-toggle-bar${isOpen ? ' open' : ''}`} />
        </button>

        <ul id="navbar-menu" className={`navbar-menu${isOpen ? ' navbar-menu--open' : ''}`}>
          <li><NavLink to="/" end onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}>About</NavLink></li>
          <li><NavLink to="/menu" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}>Menu</NavLink></li>
          <li><NavLink to="/booking" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}>Reservations</NavLink></li>
          <li><NavLink to="/order-online" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}>Order Online</NavLink></li>
          <li><NavLink to="/login" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}>Login</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
