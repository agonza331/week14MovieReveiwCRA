import React from 'react';
import Stars from './stars';
import './review.css'; 

//review consist of author, content, & rating from the form 
const Review = ({ author, content, rating }) => {
  return (
    <div className="review">
      <h5>{author}</h5>
      <p>{content}</p>
      <Stars initialRating={rating} />
    </div>
  );
};

export default Review;