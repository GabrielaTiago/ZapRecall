import { Card, Question } from "./components/Faces";

export function FlashCard({ cardIndex, isTurned, question, answer, type }) {
  return (
    <>
      {isTurned ? (
        <Question cardIndex={cardIndex} question={question} answer={answer} />
      ) : (
        <Card cardIndex={cardIndex} type={type} />
      )}
    </>
  );
}
