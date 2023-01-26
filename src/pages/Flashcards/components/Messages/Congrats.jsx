import { useFlashCardsContext } from "../../../../contexts";

export function Congrats() {
  const { goal } = useFlashCardsContext();
  let numeralBending = "flashcards acertados";

  if (goal === 1) numeralBending = "flashcard acertado";

  return (
    <div className="message">
      <h3> 🥳 Parabéns</h3>
      <h5>
        Você atingiu sua meta de {goal} {numeralBending}!
      </h5>
    </div>
  );
}
