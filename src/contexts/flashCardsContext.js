import { createContext, useContext, useState } from "react";
import { mountFlashcardObj } from "../pages/Flashcards/mountFlashcardsObj";

const FlashCardsContext = createContext();

export const useFlashCardsContext = () => {
  return useContext(FlashCardsContext);
};

export function FlashCardsContextProvider({ children }) {
  const flashcardsDeck = mountFlashcardObj();
  const [flashcards, setFlashcards] = useState(flashcardsDeck);
  const [icons, setIcons] = useState([]);

  function playCard(cardIndex) {
    const cards = [...flashcards];
    const question = cards[cardIndex];
    question.isTurned = true;

    setFlashcards(cards);
  }

  function setAnswerType(cardIndex, type) {
    const cards = [...flashcards];
    const answer = cards[cardIndex];
    answer.type = type;
    answer.isTurned = false;

    setFlashcards(cards);
  }

  function showIcons(icon) {
    setIcons([...icons, icon]);
  }

  return (
    <FlashCardsContext.Provider
      value={{
        icons,
        setIcons,
        showIcons,
        flashcards,
        setFlashcards,
        playCard,
        setAnswerType
      }}
    >
      {children}
    </FlashCardsContext.Provider>
  );
}
