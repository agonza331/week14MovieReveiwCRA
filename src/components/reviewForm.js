import React, { useState } from 'react';
import Stars from './stars';
import './reviewForm.css';

//using useState to have an array of items from the review, then after reveiw is submitted
//it will update the second part/state 
const ReviewForm = ({ onReviewSubmit }) => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(0);
//holding onto reviews by taking review as a parameter and once submit is hit,
//this will handle with clearing out the form 
  const handleSubmit = (e) => {
    e.preventDefault();
    onReviewSubmit({ author, content, rating });
    setAuthor('');
    setContent('');
    setRating(0);
  };
//to return in the form, users need to input their name, then dive for review w/
//row being only 3 
  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="author">Your Name:</label>
        <input
          type="text"
          id="author"
          className="form-control"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Your Review:</label>
        <textarea
          id="content"
          className="form-control"
          rows="3"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="rating">Your Rating:</label>
        <Stars
          initialRating={rating}
          onRatingChange={(newRating) => setRating(newRating)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit Review</button>
    </form>
  );
};

export default ReviewForm;