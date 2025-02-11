import React from 'react';
import Nav from './Nav';

const Header = () => {
  return (

    <header className="header">
    <a href="/"><img src="https://little-lemon-react-capstone.vercel.app/static/media/little-lemon.d4cae6fac8384c2dae04.png" width="200" height="55" alt="Logo"></img></a>
    <Nav />
  </header>

  );
}

export default Header;
