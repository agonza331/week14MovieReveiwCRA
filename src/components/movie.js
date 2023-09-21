import React, { useState } from 'react';
import './movie.css';
import ReviewForm from './reviewForm';
import ReviewList from './reviewList';

const Movie = ({ movie, imageUrl, synopsis }) => {
  const [reviews, setReviews] = useState([]);
  //moive will take in the movie name, image, & sypnosis
  //using the useState to grab the reviews

  const handleReviewSubmit = (review) => {
    setReviews((prevReviews) => [...prevReviews, review]);
  };

  return (
    //using divs and cards to place them neatly into sections/cards
    //first dive is to put everything in the movie card
    //image first top of card, middle/body is the movie name & synopsis
    <div className="card movie-card">
      <img src={imageUrl} className="card-img-top" alt={movie} />
      <div className="card-body">
        <h5 className="card-title">{movie}</h5>
        <p className="card-text">{synopsis}</p>
      </div>
      {/* the bottom of body under first body div is the reviews of people and then form to fill */}
      <div className="card-body">
        <h5>Reviews</h5>
        <ReviewList reviews={reviews} />
        <ReviewForm onReviewSubmit={handleReviewSubmit} />
      </div>
    </div>
  );
};

export default Movie;