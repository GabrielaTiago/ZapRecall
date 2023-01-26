import { Almost, Wrong, Zap } from "../Buttons";

export function Answers({ answer, cardIndex, setAnswerType }) {
  return (
    <li className="card">
      <div className="query">
        <h3>{answer}</h3>
        <div className="buttons">
          <Wrong cardIndex={cardIndex} setAnswerType={setAnswerType} />
          <Almost cardIndex={cardIndex} setAnswerType={setAnswerType} />
          <Zap cardIndex={cardIndex} setAnswerType={setAnswerType} />
        </div>
      </div>
    </li>
  );
}
