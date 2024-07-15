// src/components/MovieList.js
import React from 'react';
import { Link } from 'react-router-dom';
import image1 from './images/kalki.jpg';  // Importing images
import image2 from './images/munjya-trailer-is-now-out-245738778-16x9_0.jpg';
// Import more images as needed

const movies = [
  { id: 1, title: 'Movie 1', imgSrc: image1 },
  { id: 2, title: 'Movie 2', imgSrc: image2 },
  // Add more movie objects with corresponding image imports
];

const MovieList = () => (
  <div className="movie-list">
    {movies.map((movie) => (
      <div key={movie.id} className="movie-item">
        <Link to={`/movie/${movie.id}`}>
          <img src={movie.imgSrc} alt={movie.title} />
          <h3>{movie.title}</h3>
        </Link>
      </div>
    ))}
  </div>
);

export default MovieList;
