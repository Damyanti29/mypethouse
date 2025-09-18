import React from "react";
import "./Mph.css";
import { FaShieldAlt, FaTags, FaHeadset, FaCheckCircle } from "react-icons/fa";

export default function Mph() {
  return (
    <section className="hero">
      {/* decorative dots */}
      <span className="dot dot-1" />
      <span className="dot dot-2" />
      <span className="dot dot-3" />

      <div className="hero-inner">
        <div className="hero-left">
          <p className="eyebrow">WE CARE FOR YOUR PETS</p>
         

          <p className="hero-desc">
             We Help You Care for Animals with Nutrition. We are committed to providing the best nutrition and care for your beloved pets.
          </p>

          <div className="features">
            <div className="feature">
              <div className="icon-wrap"><FaShieldAlt /></div>
              <div>
                <h4>Trust &amp; Safety</h4>
                <p>Velit euismod pellentes</p>
              </div>
            </div>

            <div className="feature">
              <div className="icon-wrap"><FaTags /></div>
              <div>
                <h4>Discounts</h4>
                <p>Bibendum ut tristique</p>
              </div>
            </div>

            <div className="feature">
              <div className="icon-wrap"><FaHeadset /></div>
              <div>
                <h4>Support</h4>
                <p>Egestas quis ipsum velit</p>
              </div>
            </div>

            <div className="feature">
              <div className="icon-wrap"><FaCheckCircle /></div>
              <div>
                <h4>Guarantee</h4>
                <p>Velit euismod pellentes</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          {/* yellow wavy background */}
          <div className="shape" />
          {/* your dog image - put file as public/dogs.png */}
          <img src="/dog.png" alt="dogs" className="dogs-img" />
        </div>
      </div>
    </section>
  );
}
