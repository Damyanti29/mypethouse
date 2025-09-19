import React from "react";
import "./Review.css";

const reviews = [
  {
    emoji: "🐱",
    title: "Home Visit",
    name: "Lara Madrigal",
    rating: 5,
    text: "Ut tortor pretium viverra suspendisse potenti nullam. Venentatis urna cursus eget nunc scelerisque viverra mauris in aliquam."
  },
  {
    emoji: "🐶",
    title: "Home Visits",
    name: "Lucas Simões",
    rating: 5,
    text: "Tristique nulla aliquet enim tortor at auctor urna nunc. Massa enim nec dui nunc mattis enim ut tellus."
  },
  {
    emoji: "🐰",
    title: "Dog Boarding",
    name: "Wilhelm Dovall",
    rating: 5,
    text: "Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Tellus in hac habitasse platea dictumst."
  },
  {
    emoji: "🐹",
    title: "Pet Sitting",
    name: "Amelia Johnson",
    rating: 5,
    text: "Velit laoreet id donec ultrices tincidunt arcu non sodales. Volutpat lacus laoreet non curabitur gravida arcu ac tortor."
  }
];

const Review = () => {
  return (
    <section className="reviews-section">
      <h4 className="reviews-subtitle">OUR REVIEWS</h4>
      <h2 className="reviews-title">What People Say</h2>

      <div className="reviews-slider">
        <div className="reviews-track">
          {reviews.concat(reviews).map((review, index) => ( // duplicate for seamless loop
            <div key={index} className="review-card">
              <div className="emoji-circle">{review.emoji}</div>
              <h3>{review.title}</h3>
              <p className="review-name">{review.name}</p>
              <div className="review-rating">
                {"⭐".repeat(review.rating)}
              </div>
              <p className="review-text">{review.text}</p>
              <span className="quote">❝❞</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
