import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage burger menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu open/closed
  };

  return (
    <nav className="nav-container">
      {/* Burger menu for mobile screens */}
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Navigation links */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/services" onClick={toggleMenu}>Order Online</Link></li>
        <li><Link to="/main" onClick={toggleMenu}>Book a Table</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;

