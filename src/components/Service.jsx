import React from "react";
import "./Service.css";

export default function Service() {
  return (
    <section className="services">
      <p className="services-subtitle">OUR SERVICES</p>
      <h2 className="services-title">All Pet Care Services</h2>

      <div className="services-grid">
        {/* Card 1 */}
        <div className="service-card">
          <img src="/board.png" alt="Boarding" className="service-icon" />
          <h3>Pet Boarding</h3>
          <p>
            Safe overnight care for pets when owners are away.
          </p>
          <p className="price">From Rs.250 / hour</p>
          <a href="//api.whatsapp.com/send?phone=919969208849&text=Hii damayanti here ,Want to explore pet grooming prices and package" className="service-link">
            Get Service →
          </a>
        </div>

        {/* Card 2 */}
        <div className="service-card">
          <img src="/groom.png" alt="Grooming" className="service-icon" />
          <h3>Pet Grooming</h3>
          <p>
            Professional care to keep pets clean, styled, and healthy.
          </p>
          <p className="price">From Rs.500 / complex</p>
          <a href="//api.whatsapp.com/send?phone=919969208849&text=Hii damayanti here,want to board my pet" className="service-link">
            Get Service →
          </a>
        </div>

        {/* Card 3 */}
<div className="service-card">
  <img src="/club.png" alt="Cuddle Club" className="service-icon" />
  <h3>Cuddle Club</h3>
  <p>
    A cozy space where pets enjoy playtime, affection, and companionship.
  </p>
  <p className="price">From Rs.300 / session</p>
  <a href="//api.whatsapp.com/send?phone=919969208849&text=Hii damayanti here,want to book cuddle club for my pet" className="service-link">
    Get Service →
  </a>
</div>

{/* Card 4 */}
<div className="service-card">
  <img src="/birth.png" alt="Birthday Parties" className="service-icon" />
  <h3>Birthday Parties</h3>
  <p>
    Fun celebrations with other pets and up to 10 guests for your pet’s special day.
  </p>
  <p className="price">From Rs.2000 / party</p>
  <a href="//api.whatsapp.com/send?phone=919969208849&text=Hii damayanti here,want to book a birthday party for my pet" className="service-link">
    Get Service →
  </a>
</div>

{/* Card 5 */}
<div className="service-card">
  <img src="/train.png" alt="Training" className="service-icon" />
  <h3>Training</h3>
  <p>
    Behavioral and skill lessons to make pets obedient and well-mannered.
  </p>
  <p className="price">From Rs.1000 / course</p>
  <a href="//api.whatsapp.com/send?phone=919969208849&text=Hii damayanti here,want to enroll my pet in training" className="service-link">
    Get Service →
  </a>
</div>

{/* Card 6 */}
<div className="service-card">
  <img src="/bake.png" alt="Bakery" className="service-icon" />
  <h3>Bakery</h3>
  <p>
    Freshly baked, pet-friendly treats made with healthy ingredients.
  </p>
  <p className="price">From Rs.250 / pack</p>
  <a href="//api.whatsapp.com/send?phone=919969208849&text=Hii damayanti here,want to order from pet bakery" className="service-link">
    Get Service →
  </a>
</div>

      </div>
    </section>
  );
}
