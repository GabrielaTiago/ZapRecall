import { useFlashCardsContext } from "../../../../contexts";

export function Play({ cardIndex }) {
  const { playCard } = useFlashCardsContext();
  return (
    <ion-icon
      className="play"
      name="play-outline"
      onClick={() => playCard(cardIndex)}
    ></ion-icon>
  );
}
