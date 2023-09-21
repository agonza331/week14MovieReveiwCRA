import React, { useState } from 'react';
import './stars.css';
//for stars, when select, onClick is a prop that gets called when a star is selected &
//in span, a boolan is used if a star is selected when true (pop up starts in review), then to clear
const Star = ({ selected, onClick }) => (
  <span className={`star${selected ? ' selected' : ''}`} onClick={onClick}>
    ★
  </span>
);
// this component uses two props to reder from const star
const Stars = ({ initialRating = 0, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);
//using useState to hook the rating state and setRating once a star is clicked,
//handleStarClick updates the rating 
  const handleStarClick = (starIndex) => {
    const newRating = starIndex + 1;
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };
//function uses for an array of 5 stars for a review, 
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          selected={i < rating}
          onClick={() => handleStarClick(i)}
        />
      );
    }
    return stars;
  };

  return <div className="stars-container">{renderStars()}</div>;
};

export default Stars;

