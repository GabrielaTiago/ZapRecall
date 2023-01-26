import { Almost, Wrong, Zap } from "../Buttons";

export function Answers({ answer, cardIndex,  }) {
  return (
    <li className="card">
      <div className="query">
        <h3>{answer}</h3>
        <div className="buttons">
          <Wrong cardIndex={cardIndex} />
          <Almost cardIndex={cardIndex} />
          <Zap cardIndex={cardIndex} />
        </div>
      </div>
    </li>
  );
}
