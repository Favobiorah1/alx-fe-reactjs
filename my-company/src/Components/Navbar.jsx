import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <h2>MyApp</h2>
        </Link>

        {/* Mobile menu button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation links */}
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="navbar-nav">
            <Link 
              to="/" 
              className={`nav-link ${isActiveLink('/') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className={`nav-link ${isActiveLink('/about') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              About
            </Link>
            
            <Link 
              to="/services" 
              className={`nav-link ${isActiveLink('/services') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Services
            </Link>
            
            <Link 
              to="/contact" 
              className={`nav-link ${isActiveLink('/contact') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            
            <Link 
              to="/profile" 
              className={`nav-link ${isActiveLink('/profile') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Profile
            </Link>
          </div>

          {/* Auth buttons */}
          <div className="navbar-auth">
            <Link 
              to="/login" 
              className="btn btn-outline"
              onClick={closeMenu}
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="btn btn-primary"
              onClick={closeMenu}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;