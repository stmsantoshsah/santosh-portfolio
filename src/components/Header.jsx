"use client";
import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = (section) => {
    setMenuOpen(false);

    // Google Analytics event tracking
    if (window.gtag) {
      window.gtag('event', 'menu_click', {
        event_category: 'Navigation',
        event_label: section, 
      });
    }
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a href="/" className="logo">Santosh.dev</a>
          <div className="mobile_hamburg_icon">
            <input type="checkbox" id="checkbox" onChange={toggleMenu} checked={menuOpen} />
            <label htmlFor="checkbox" className="toggle">
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>
          </div>
          <ul className={`menu ${menuOpen ? 'open' : ''}`}>
            <li><a href="#home" onClick={() => closeMenu('Home')}>Home</a></li>
            <li><a href="#about" onClick={() => closeMenu('About')}>About</a></li>
            <li><a href="#projects" onClick={() => closeMenu('Projects')}>Projects</a></li>
            <li><a href="#testimonials" onClick={() => closeMenu('Testimonials')}>Testimonials</a></li>
            <li><a href="#contact" onClick={() => closeMenu('Contact')}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
