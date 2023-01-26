import { useFlashCardsContext } from "../../../../contexts";
import { mountFlashcardObj } from "../../mountFlashcardsObj";

export function Restart() {
  const flashcardsDeck = mountFlashcardObj();
  const { setIcons, setFlashcards } = useFlashCardsContext();

  const restartFlashcards = () => {
    setIcons([]);
    setFlashcards(flashcardsDeck);
  };

  return (
    <button className="restart" onClick={restartFlashcards}>
      REINICIAR RECALL
    </button>
  );
}
