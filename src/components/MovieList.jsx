import React from "react";

const MovieList = ({ movies }) => {
  return (
    <div>
      <h2>Lista dei Film</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            {movie.title} - {movie.genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
