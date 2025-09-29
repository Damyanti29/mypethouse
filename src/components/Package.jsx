import React from "react";
import "./Package.css";

export default function Package() {
  return (
    <section className="pricing">
      <h3 className="pricing-subtitle">OUR PRICES</h3>
      <h2 className="pricing-title">Dog Grooming Services & Pricing</h2>
      <p className="pricing-desc">
        We can fully customize your pet sitting schedule to fit your pet’s needs. 
        Pick and choose what visits work best for you and your family.
      </p>

      {/* Tabs
      <div className="pricing-tabs">
        <button className="tab active">Small Dog</button>
        <button className="tab">Medium Dog</button>
        <button className="tab">Large Dog</button>
      </div> */}

      {/* Pricing Cards */}
      <div className="pricing-grid">
        {/* Card 1 */}
        <div className="pricing-card">
          <h3>Basic</h3>
          <div className="price-tag">Rs1300 – 1800</div>
          <ul className="features">
            <li>✔ Bath (Hypo-Allergenic)</li>
            <li>✔ Conditioning Treatment</li>
            <li>✔ Ears Flushed & Cleaned</li>
            <li>✔ Watering Plants</li>
            <li>✔ Handscissor Finish</li>
            <li>✔ Setting Length of Coat</li>
          </ul>
          <button className="purchase-btn">Book Now</button>
        </div>

        {/* Card 2 */}
        <div className="pricing-card">
          <h3>Advanced</h3>
          <div className="price-tag">Rs2000 – 2500</div>
          <ul className="features">
            <li>✔ Bath (Hypo-Allergenic)</li>
            <li>✔ Conditioning Treatment</li>
            <li>✔ Ears Flushed & Cleaned</li>
            <li>✔ Watering Plants</li>
            <li>✔ Handscissor Finish</li>
            <li>✔ Setting Length of Coat</li>
          </ul>
          <button className="purchase-btn">Book Now</button>
        </div>
         <div className="pricing-card">
          <h3>Basic+Advanced</h3>
          <div className="price-tag">Rs2500 – 3000</div>
          <ul className="features">
            <li>✔ Bath (Hypo-Allergenic)</li>
            <li>✔ Conditioning Treatment</li>
            <li>✔ Ears Flushed & Cleaned</li>
            <li>✔ Watering Plants</li>
            <li>✔ Handscissor Finish</li>
            <li>✔ Setting Length of Coat</li>
          </ul>
          <button className="purchase-btn">Book Now</button>
        </div>
      </div>
    </section>
  );
}
