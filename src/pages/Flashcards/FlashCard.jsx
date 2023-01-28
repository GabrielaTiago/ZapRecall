import { Card } from "./components/Faces";
import { Query } from "./Query";

export function FlashCard({ cardIndex, isTurned, question, answer, type }) {
  return (
    <>
      {isTurned ? (
        <Query cardIndex={cardIndex} question={question} answer={answer} />
      ) : (
        <Card cardIndex={cardIndex} type={type} />
      )}
    </>
  );
}
