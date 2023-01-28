import { CardType } from "../../CardType";

export function Card({ cardIndex, type }) {
  return (
    <li className={`card ${type}`}>
      <div className="question">
        <h3>Pergunta {cardIndex + 1}</h3>
        <CardType type={type} cardIndex={cardIndex} />
      </div>
    </li>
  );
}
