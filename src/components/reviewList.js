import React from 'react';
import Review from './review';
//to have a review list as to where the reviews go, renders/gets from reviews,
//to return in a map/list consisting of author, review, rating and content
const ReviewList = ({ reviews }) => {
  console.log('reviews:', reviews);
  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <Review
          key={index}
          author={review.author}
          text={review.text}
          rating={review.rating}
          content={review.content}
        />
      ))}
    </div>
  );
};

export default ReviewList;