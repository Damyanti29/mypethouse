import React from "react";
import "./Stats.css";
import { FaDog, FaMedal, FaShoppingBag } from "react-icons/fa";
import { GiDogBowl } from "react-icons/gi";

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {/* Item 1 */}
        <div className="stat-item">
          <FaDog className="stat-icon" />
          <h2>120+</h2>
          <p>Satisfied Clients</p>
        </div>

        {/* Item 2 */}
        <div className="stat-item">
          <FaMedal className="stat-icon" />
          <h2>20+</h2>
          <p>Years Experience</p>
        </div>

        {/* Item 3 */}
        <div className="stat-item">
          <GiDogBowl className="stat-icon" />
          <h2>70+</h2>
          <p>Brands Available</p>
        </div>

        {/* Item 4 */}
        <div className="stat-item">
          <FaShoppingBag className="stat-icon" />
          <h2>200+</h2>
          <p>Products for Pets</p>
        </div>
      </div>
    </section>
  );
}
