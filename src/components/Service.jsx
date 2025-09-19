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
          <img src="/walk.png" alt="Walking" className="service-icon" />
          <h3>Walking & Sitting</h3>
          <p>
            Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae
            eget dolor morbi
          </p>
          <p className="price">From Rs.250 / hour</p>
          <a href="//api.whatsapp.com/send?phone=919969208849&text=Hii damayanti here  today" className="service-link">
            Get Service →
          </a>
        </div>

        {/* Card 2 */}
        <div className="service-card">
          <img src="/groom.png" alt="Grooming" className="service-icon" />
          <h3>Pet Grooming</h3>
          <p>
            Et odio pellentesque diam volutpat commodo sed egestas egestas
            pellentesque nec nam
          </p>
          <p className="price">From Rs.500 / complex</p>
          <a href="//api.whatsapp.com/send?phone=919969208849&text=Hii damayanti here  today" className="service-link">
            Get Service →
          </a>
        </div>
      </div>
    </section>
  );
}
