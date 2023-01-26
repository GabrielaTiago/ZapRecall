import { Card, Question } from "./components/Faces";

export function FlashCard({
  playCard,
  cardIndex,
  isTurned,
  question,
  answer,
  type,
  setAnswerType,
}) {
  return (
    <>
      {isTurned ? (
        <Question
          cardIndex={cardIndex}
          question={question}
          answer={answer}
          setAnswerType={setAnswerType}
        />
      ) : (
        <Card playCard={playCard} cardIndex={cardIndex} type={type} />
      )}
    </>
  );
}
