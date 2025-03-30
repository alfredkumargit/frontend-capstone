import React from 'react';
import toplittlelemonlogo from "../assets/images/top-little-lemon-logo.png";
import Nav from './Nav';

const Header = () => {
  return (
    <header className="navigation">
      <a href="/"><img src={toplittlelemonlogo} width="200" height="55" alt="Logo" /></a>
      <Nav />
    </header>
  );
}

export default Header;
