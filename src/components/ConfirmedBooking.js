import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ConfirmedBooking = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage burger menu
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen); // Toggle the menu open/closed
    };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center' }}>
      <h1>Booking Confirmed!</h1>
      <p>Your booking has been successfully confirmed. We look forward to serving you!</p>
      <Link to="/main" onClick={toggleMenu}>Back to form</Link>
    </div>
  );
};

export default ConfirmedBooking;
