import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <h4 className="contact-subtitle">OUR CONTACTS</h4>
      <h2 className="contact-title"></h2>
      <p className="contact-text">
        Contact us for queries and Collaboration. We are here to help you and
        your pets!
      </p>

      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-icon">📞</div>
          <h3>Phone</h3>
          <p>7789654123</p>
          <p>7789654123</p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">📧</div>
          <h3>Email</h3>
          <p>damayanti@example.com</p>
          <p>maya@email.com</p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">📍</div>
          <h3>Address</h3>
          <p>Sec 4 ,Near BR Road</p>
          <p>Vashi ,Navi Mumbai</p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">⏰</div>
          <h3>Open Hours</h3>
          <p>Mon - Fri: 7am - 6pm</p>
          <p>Saturday: 9am - 4pm</p>
        </div>
      </div>

      {/* Founder Section */}
      <section className="founder-section">
        <div className="founder-container">
          <div className="founder-photo">
            <img src="dog.png" alt="Founder Namita" />
          </div>
          <div className="founder-info">
            <h2>Meet Our Founder</h2>
            <h3>Mrs. Namita</h3>
            <p>
              With over <b>12+ years of experience</b> in professional pet
              grooming, Namita has dedicated her life to making pets feel loved,
              cared for, and pampered. Her expertise and compassion have shaped
              MyPetHouse into a trusted home for every pet parent.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
