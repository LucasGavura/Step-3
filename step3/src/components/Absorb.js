import React from 'react';
import './Absorb.css';
import absorbImage from '../images/Absorb.png';

const Absorb = () => {
  return (
    <section id="absorb" className="howtolift">
      <h2>How to Lift</h2>
      <p>Getting started on your lifting journey...</p>
      <div className="howtolift-content">
        <div className="text-content">
          <p>Filler text here about the importance of lifting and other things including tips for absorbing information.
            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisl intricate Content.
            Qui international first-class nulla ut. Punctual adipiscing, essential lovely queen tempor eiusmod irure.
            Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning.
            Qui wardrobe aliqua, et Porter destination Toto remarkable officia Helsinki exceptuer Basset hound. Zürich sleepy perfect consectetur.
          </p>
        </div>
        <div className="image-content">
          <img src={absorbImage} alt="Lifting" />
        </div>
      </div>
    </section>
  );
};

export default Absorb;
