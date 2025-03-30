import React from 'react';
import heroImage from '../assets/images/hero-image.jpg';
import Specials1 from './Specials1'; // Import the Specials1 component
import Specials2 from './Specials2';
import Specials3 from './Specials3';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-detail">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family-owned Mediterranean restaurant, focused on traditional recipes
              served with a modern twist.
            </p>
            
            <Link to="/main">
                Book a table
            </Link>
            
          </div>
          <div className="hero-img">
            <img src={heroImage} alt="Little Lemon Restaurant" />

          </div>
        </div>
      </section>

	  

      {/* Responsive columns for Specials1 */}
      <section className="specials-section">
	  <section class="specials-heading"><h3>This weeks specals!</h3></section>
	  
	  
        <div className="specials-container">

          <div className="specials-column">
            <Specials1 />
          </div>
          <div className="specials-column">
            <Specials2 />
          </div>
          <div className="specials-column">
            <Specials3 />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
