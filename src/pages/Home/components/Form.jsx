import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFlashCardsContext } from "../../../contexts";
import { Error } from "./Error";

export function Form() {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(false);
  const { goal, setGoal } = useFlashCardsContext();

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (goal > 0 && goal <= 8) {
      navigate("/questions");
    } else {
      setError(!error);
      setDisabled(!disabled);
      setGoal("");
    }
  };

  const handleOnChange = (e) => {
    setGoal(Number(e.target.value));
    setDisabled(false);
    setError(false);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type="number"
        placeholder="Digite sua meta de zaps..."
        value={goal}
        onChange={handleOnChange}
        required
      />
      {error && <Error />}
      <button type="submit" disabled={disabled} className="home-screen-button">
        Iniciar Recall!!
      </button>
    </form>
  );
}
