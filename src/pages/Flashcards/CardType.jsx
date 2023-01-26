import { Play } from "./components/Buttons";

export function CardType({ type, playCard, cardIndex }) {
  const icons = {
    not_answered: <Play playCard={playCard} cardIndex={cardIndex} />,
    wrong: <ion-icon name="close-circle"></ion-icon>,
    almost: <ion-icon name="help-circle"></ion-icon>,
    zap: <ion-icon name="checkmark-circle"></ion-icon>,
  };

  return icons[type];
}
