import { useState } from "react";
import Form from "./Form";
import MovieList from "./MovieList";
import FunctionButtons from "./FunctionButtons";

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
      <FunctionButtons
        onClickAlphabet={alphabetOrderMovies}
        onClickGrade={gradeOrderMovies}
      />
    </div>
  );
}

export default App;
