export function sortDeckOfCards(deckOfCards) {
  let comparator = () => {
    return Math.random() - 0.5;
  };

  return deckOfCards.sort(comparator);
}
