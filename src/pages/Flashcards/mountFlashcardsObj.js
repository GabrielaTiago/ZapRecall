import { reactCards, narutoCards, harryPotterCards } from "../../mock";
import { sortDeckOfCards } from "./sortDeckOfCards";

export function mountFlashcardObj(deckOfCards) {
  const cards = {
    reactCards,
    narutoCards,
    harryPotterCards,
  };

  const flashcardsDeck = cards[deckOfCards].map((data) => {
    return {
      ...data,
      isTurned: false,
      type: "not_answered",
    };
  });

  const sortedFlashCards = sortDeckOfCards(flashcardsDeck);

  return sortedFlashCards;
}