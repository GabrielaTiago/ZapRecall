import { createContext, useContext, useEffect, useState } from "react";
import { mountFlashcardObj } from "../pages/Flashcards/mountFlashcardsObj";

const FlashCardsContext = createContext();

export const useFlashCardsContext = () => {
  return useContext(FlashCardsContext);
};

export function FlashCardsContextProvider({ children }) {
  const [icons, setIcons] = useState([]);
  const [goal, setGoal] = useState("");
  const [deckOfCards, setDeckOfCards] = useState("reactCards");
  const [flashcards, setFlashcards] = useState(mountFlashcardObj(deckOfCards));

  useEffect(() => {
    setFlashcards(mountFlashcardObj(deckOfCards));
  }, [deckOfCards]);

  function playCard(cardIndex) {
    const cards = [...flashcards];
    const question = cards[cardIndex];

    if(question.isTurned) return;
    
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
        setAnswerType,
        goal,
        setGoal,
        deckOfCards,
        setDeckOfCards,
      }}
    >
      {children}
    </FlashCardsContext.Provider>
  );
}
