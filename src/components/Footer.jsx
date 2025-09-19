import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: Logo & Contact */}
        <div className="footer-section">
          <div className="footer-logo">
            <span className="logo-icon">🌙</span>
            <h2 className="logo-text">MyPetHouse</h2>
          </div>
          <p className="footer-desc">
            PetCare - Grooming - Boarding
          </p>
          <div className="footer-contact">
            <span className="phone-icon">📞</span>
            <div>
              <p className="phone-number">+91 7738991954</p>
              <p className="phone-subtext">Got Questions? Call us 24/7</p>
            </div>
          </div>
        </div>

        {/* Working Hours */}
        <div className="footer-section">
          <h3 className="footer-title">Working Hours</h3>
          <div className="working-box">
            <div className="working-row">
              <span>Mon - Fri:</span>
              <span className="bold">7am - 6pm</span>
            </div>
            <div className="working-row">
              <span>Saturday:</span>
              <span className="bold">9am - 4pm</span>
            </div>
            <div className="working-row">
              <span>Sunday:</span>
              <span className="closed">Closed</span>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div className="footer-section">
          <h3 className="footer-title">Useful Links</h3>
          <div className="links-grid">
            <a href="#">Home</a>
            <a href="#">FAQ</a>
            <a href="#">About</a>
            <a href="#">Gallery</a>
            <a href="#">Services</a>
            <a href="#">Delivery</a>
            <a href="#">Shop</a>
            <a href="#">Sales</a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3 className="footer-title">Newsletter</h3>
          <p className="newsletter-text">
            Be first in the queue! Get our latest news straight to your inbox.
          </p>
          <div className="newsletter-box">
            <input type="email" placeholder="Email" />
            <button>→</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
       mypethouse © Copyrights | All rights reserved by p&<i class="fa fa-window-maximize" aria-hidden="true"></i>
      </div>
    </footer>
  );
}
