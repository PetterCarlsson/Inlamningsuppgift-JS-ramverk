import { useState } from "react";
import Form from "./componennts/MovieForm/MovieForm";
import MovieList from "./componennts/MovieList/MovieList";
import FunctionButtons from "./componennts/FunctionButtons/FunctionButtons";

interface Movie {
  name: string;
  grade: string;
}

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const addMovie = (name: string, grade: string) => {
    setMovies((movie) => [...movie, { name, grade }]);
  };

  const removeMovie = (index: number) => {
    setMovies((movie) => movie.filter((movie, i) => i !== index));
  };

  const alphabetOrderMovies = () => {
    setMovies((movies) =>
      [...movies].sort((a, b) => a.name.localeCompare(b.name))
    );
  };

  const gradeOrderMovies = () => {
    setMovies((movies) =>
      [...movies].sort((a, b) => parseInt(b.grade) - parseInt(a.grade))
    );
  };

  const buttons = [
    { label: "Alfabetisk ordning", onClick: alphabetOrderMovies },
    { label: "Betygsordning", onClick: gradeOrderMovies },
  ];

  return (
    <div className="container">
      <h1>Min filmlista</h1>

      <Form onAddMovie={addMovie} />

      <hr />
      <h2>Filmer</h2>

      <ul id="movies">
        {movies.map((movie, i) => (
          <MovieList
            name={movie.name}
            grade={movie.grade}
            onClose={() => removeMovie(i)}
          />
        ))}
      </ul>
      <FunctionButtons buttons={buttons} />
    </div>
  );
}

export default App;
