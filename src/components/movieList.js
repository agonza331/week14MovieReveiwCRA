import React from 'react';
import Movie from './movie';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <Movie
          key={index}
          movie={movie.movie}
          imageUrl={movie.imageUrl}
          synopsis={movie.synopsis}
          rating={movie.rating}
        />
      ))}
    </div>
  );
};

export default MovieList;