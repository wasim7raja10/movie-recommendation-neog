import { useState } from "react";
import "./App.css";
import { genres, movies } from "./data/movies";

function App() {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("Genre")
  const filterMovies = (genre) => {
    setSelectedGenre(genre)
    const filtered = movies.filter((movie) => movie.genre.includes(genre));
    setFilteredMovies(filtered);
  };
  return (
    <div className="App">
      <main>
        <h1>Good Movies</h1>
        <p>
          Checkout my favorite movies. Select a genre to see my recommendations.
        </p>
        <div className="genres">
          {genres.map((genre, index) => (
            <span key={index} onClick={() => filterMovies(genre)}>
              {genre}
            </span>
          ))}
        </div>
        <h3>{selectedGenre}</h3>
        <ol>
          {filteredMovies.map((movie, index) => (
            <li key={index}>
              {movie.name} ({movie.year}) - {movie.rating}/10
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}

export default App;
