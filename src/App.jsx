import React, { useState, useEffect } from "react";
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
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);

  useEffect(() => {
    let filtered = movies;
    if (selectedGenre !== "") {
      filtered = filtered.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredMovies(filtered);
  }, [selectedGenre, searchTerm, movies]);

  return (
    <div className="App">
      <h1>Filtraggio Film</h1>
      <div>
        <label>Filtra per genere: </label>
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="">Tutti</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>
      </div>
      <div>
        <label>Cerca per titolo: </label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Inserisci il titolo..."
        />
      </div>
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
