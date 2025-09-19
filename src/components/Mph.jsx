import React from 'react';
import './Mph.css';

const Mph = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">The World's Best Team <br /> for Pet Care Services</h1>
        <p className="hero-description">
          Consequat nisl vel pretium lectus quam id leo in. Quis viverra nibh cras pulvinar
          mattis. Quis hendrerit dolor magna eget est lorem ipsum dolor.
        </p>
        <button className="hero-button">
          <i className="fa fa-paw"></i> Our Service
        </button>
      </div>
      <div className="hero-images">
        <div className="pet-image dog">
          <img src="/dog1.jpg" alt="Dog" />
        </div>
        <div className="pet-image cat">
          <img src="/dog2.jpg" alt="Cat" />
        </div>
      </div>
    </div>
  );
};

export default Mph;