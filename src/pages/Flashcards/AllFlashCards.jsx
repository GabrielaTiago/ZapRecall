import { useState } from "react";
import { FlashCard } from "./FlashCard";
import { mountFlashcardObj } from "./mountFlashcardsObj";
import { sortDeckOfCards } from "./sortDeckOfCards";

export function AllFlashCards() {
  sortDeckOfCards();
  const flashcardsDeck = mountFlashcardObj();
  const [flashcards, setFlashcards] = useState(flashcardsDeck);

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

  return (
    <main>
      <ul className="questions">
        {flashcards.map((data, index) => {
          const { question, answer, isTurned, type } = data;
          return (
            <FlashCard
              key={question}
              playCard={playCard}
              cardIndex={index}
              isTurned={isTurned}
              question={question}
              answer={answer}
              type={type}
              setAnswerType={setAnswerType}
            />
          );
        })}
      </ul>
    </main>
  );
}
