import { reactCards } from "../../mock";

export function sortDeckOfCards() {
  let comparator = () => {
    return Math.random() - 0.5;
  };

  reactCards.sort(comparator);
}
