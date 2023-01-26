import React from "react";
import { useFlashCardsContext } from "../../contexts";
import { Congrats, Wrong } from "./components/Messages";

export function Footer() {
  const { icons } = useFlashCardsContext();
  const LENGTH_DECK = 8;
  const WRONG_ALLOWED = 0;
  const wrongs = icons.filter((element) => element === "close-circle");

  const allAnswerd = icons.length === LENGTH_DECK;
  const noErros = wrongs.length === WRONG_ALLOWED;
  const hasIcons = icons.length > 0;

  return (
    <footer>
      {allAnswerd && noErros && <Congrats />}
      {!allAnswerd || (!noErros && <Wrong />)}

      <p className="counting">
        {icons.length}/{LENGTH_DECK} Concluídos
      </p>

      {hasIcons && (
        <div className="icons">
          {icons.map((icon) => (
            <ion-icon key={icon} name={icon}></ion-icon>
          ))}
        </div>
      )}
    </footer>
  );
}
