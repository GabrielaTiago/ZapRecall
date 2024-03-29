import { CardType } from "../../CardType";

export function Card({ cardIndex, type }) {
  let spin = "spin";
  if (type === "not_answered") spin = "";

  return (
    <li className={`card ${type} ${spin}`}>
      <div className="question">
        <h3>Pergunta {cardIndex + 1}</h3>
        <CardType type={type} cardIndex={cardIndex} />
      </div>
    </li>
  );
}
