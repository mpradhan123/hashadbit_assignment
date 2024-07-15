// src/components/MovieDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import image1 from './images/kalki.jpg';  // Importing images
import image2 from './images/munjya-trailer-is-now-out-245738778-16x9_0.jpg';
// Import more images as needed

const movies = [
  { id: 1, title: 'Movie 1', imgSrc: image1, description: 'Description of Movie 1' },
  { id: 2, title: 'Movie 2', imgSrc: image2, description: 'Description of Movie 2' },
  // Add more movie objects with corresponding image imports
];

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div className="movie-details">
      <img src={movie.imgSrc} alt={movie.title} />
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <Link to={`/book/${movie.id}`}>Book Seat</Link>
    </div>
  );
};

export default MovieDetails;
