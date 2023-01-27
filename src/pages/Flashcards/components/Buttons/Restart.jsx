import { useFlashCardsContext } from "../../../../contexts";
import { mountFlashcardObj } from "../../mountFlashcardsObj";

export function Restart() {
  const { setIcons, setFlashcards, deckOfCards } = useFlashCardsContext();

  const restartFlashcards = () => {
    setIcons([]);
    setFlashcards(mountFlashcardObj(deckOfCards));
  };

  return (
    <button className="restart" onClick={restartFlashcards}>
      REINICIAR RECALL
    </button>
  );
}
