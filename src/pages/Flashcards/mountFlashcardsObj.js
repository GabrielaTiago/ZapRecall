import { reactCards } from "../../mock";

export function mountFlashcardObj() {
  let flashcardsDeck = reactCards.map((data) => {
    return {
      ...data,
      isTurned: false,
      type: "not_answered",
    };
  });

  return flashcardsDeck;
}
