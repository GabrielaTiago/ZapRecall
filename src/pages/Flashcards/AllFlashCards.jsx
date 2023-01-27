import { useFlashCardsContext } from "../../contexts";
import { FlashCard } from "./FlashCard";

export function AllFlashCards() {
  const { flashcards } = useFlashCardsContext();

  return (
    <main>
      <ul className="questions">
        {flashcards.map((data, index) => {
          const { question, answer, isTurned, type } = data;
          return (
            <FlashCard
              key={question}
              cardIndex={index}
              isTurned={isTurned}
              question={question}
              answer={answer}
              type={type}
            />
          );
        })}
      </ul>
    </main>
  );
}
