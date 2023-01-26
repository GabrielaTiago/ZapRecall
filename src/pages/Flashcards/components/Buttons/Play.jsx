export function Play({ playCard, cardIndex }) {
  return (
    <ion-icon
      className="play"
      name="play-outline"
      onClick={() => playCard(cardIndex)}
    ></ion-icon>
  );
}
