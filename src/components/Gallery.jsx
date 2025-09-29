import React from "react";
import "./Gallery.css";

const images = [
  "/bake.png",
  "/birth.png",
  "/board.png",
  "/d1.png",
  "/dog2.jpg",
  "/groom.png"
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <h4 className="gallery-subtitle">OUR GALLERY</h4>
      <h2 className="gallery-title">Happy Moments</h2>

      <div className="gallery-slider">
        <div className="gallery-track">
          {images.concat(images).map((src, index) => (
            <div key={index} className="gallery-card">
              <img src={src} alt={`Gallery ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
