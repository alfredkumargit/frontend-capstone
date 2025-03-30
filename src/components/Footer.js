import React, { useState } from 'react';
import footerlogo from '../assets/images/footerlogo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage burger menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu open/closed
  };
  return (
    <footer>
  <div className="footer-container">
    <div>
      <img src={footerlogo} alt="little lemon logo" />
    </div>
    <div className="footer-wrapper">
      <div className="about">
        <h4>About us</h4>
      <ul>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/services" onClick={toggleMenu}>Order Online</Link></li>
        <li><Link to="/main" onClick={toggleMenu}>Book a Table</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
      </ul>
      </div>
      <div className="contact-info">
        <h4>Contacts</h4>
        <ul>
          <li><a href="tel:123-456-7890">+1(123)456-7890</a></li>
          <li><a href="mailto:info@littlelemon.com">info@littlelemon.com</a></li>
          <li><address>123 Chestnut St, Chicago, IL, 60611</address></li>
        </ul>
      </div>
      <div className="availibity">
        <h4>Availitbity</h4>
        <ul>
          <li>Tues-Thurs: 12pm-10pm</li>
          <li>Fri-Sun: 12pm-10pm</li>
          <li>Mon: Closed</li>
        </ul>
      </div>
      <div className="social-media">
        <h4>Socials</h4>
        <ul>
          <a href="https://www.instagram.com"><li>Instagram</li></a>
          <a href="https://www.facebook.com"><li>Facebook</li></a>
          <a href="https://www.pintrest.com"><li>Pintrest</li></a>
        </ul>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
