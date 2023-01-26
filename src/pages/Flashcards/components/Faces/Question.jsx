import { useState } from "react";
import { Answers } from "./Answers";
import flip from "../../../../assets/images/flip.png";

export function Question({ cardIndex, question, answer }) {
  const [turnedAnswers, setTurnedAnswers] = useState(false);

  return (
    <>
      {turnedAnswers ? (
        <Answers answer={answer} cardIndex={cardIndex} />
      ) : (
        <li className="card">
          <div className="query">
            <h3>{question}</h3>
            <img
              className="flip"
              src={flip}
              alt="icon to flip the card"
              onClick={() => setTurnedAnswers(true)}
            />
          </div>
        </li>
      )}
    </>
  );
}
