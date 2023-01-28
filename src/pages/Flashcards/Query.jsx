import { useState } from "react";
import { Answers, Question } from "./components/Faces";

export function Query({ cardIndex, question, answer }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      {flipped ? (
        <Answers answer={answer} cardIndex={cardIndex} />
      ) : (
        <Question question={question} setFlipped={setFlipped}/>
      )}
    </>
  );
}
