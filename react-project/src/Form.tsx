import { useState } from "react";

interface FormProps {
  onAddMovie: (name: string, grade: string) => void;
}

export const Form = ({ onAddMovie }: FormProps) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("0");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title !== "" && rating !== "0") {
      onAddMovie(title, rating);
      setTitle("");
      setRating("0");
    } else {
      alert("Formuläret är felaktigt ifyllt");
    }
  };

  return (
    <form id="add-movie-form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Lägg till en film</legend>
        <label htmlFor="title-field">Titel:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          type="text"
          className="form-control"
          id="title-field"
        />

        <label htmlFor="rating-field">Betyg:</label>
        <select
          value={rating}
          onChange={(e) => setRating(e.currentTarget.value)}
          className="form-control"
          id="rating-field"
        >
          <option value="0">Välj betyg här...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <input
          type="submit"
          className="btn btn-success mt-3"
          value="Spara film"
        />
      </fieldset>
    </form>
  );
};

export default Form;
