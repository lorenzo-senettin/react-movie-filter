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
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newMovieGenre, setNewMovieGenre] = useState("");

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

  const handleAddMovie = (e) => {
    e.preventDefault();
    if (newMovieTitle.trim() === "" || newMovieGenre.trim() === "") return;
    setMovies([...movies, { title: newMovieTitle, genre: newMovieGenre }]);
    setNewMovieTitle("");
    setNewMovieGenre("");
  };

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

      <hr />

      <h2>Aggiungi Nuovo Film</h2>
      <form onSubmit={handleAddMovie}>
        <input
          type="text"
          value={newMovieTitle}
          onChange={(e) => setNewMovieTitle(e.target.value)}
          placeholder="Titolo del film"
        />
        <input
          type="text"
          value={newMovieGenre}
          onChange={(e) => setNewMovieGenre(e.target.value)}
          placeholder="Genere del film"
        />
        <button type="submit">Aggiungi Film</button>
      </form>
    </div>
  );
}

export default App;
