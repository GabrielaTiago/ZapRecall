import { useFlashCardsContext } from "../../../../contexts";
import { CardType } from "../../CardType";

export function Card({ cardIndex, type }) {
  const { playCard } = useFlashCardsContext();
  return (
    <li className={`card ${type}`}>
      <div className="question">
        <h3>Pergunta {cardIndex + 1}</h3>
        <CardType type={type} playCard={playCard} cardIndex={cardIndex} />
      </div>
    </li>
  );
}
