import React, { useState } from "react";
import MovieList from "./components/MovieList";

const initialMovies = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);

  return (
    <div className="App">
      <h1>Filtraggio Film</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
