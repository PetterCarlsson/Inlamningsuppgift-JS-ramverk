interface MovieListProps {
  name: string;
  grade: string;
  onClose: () => void;
}

export const MovieList = ({ name, grade, onClose }: MovieListProps) => {
  const stars = [...Array(parseInt(grade))].map(() => (
    <img src="src/assets/star.png" alt="Star" className="movie-star" />
  ));

  return (
    <li data-grade={grade} data-title={name}>
      {name}
      <img
        src="src/assets/delete.png"
        alt="Delete movie"
        className="delete-movie-icon"
        onClick={onClose}
      />
      {stars}
    </li>
  );
};

export default MovieList;
