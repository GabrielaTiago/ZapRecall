import React from "react";
import { useFlashCardsContext } from "../../contexts";
import { Restart } from "./components/Buttons";
import { Congrats, Wrong } from "./components/Messages";

export function Footer() {
  const { icons, goal } = useFlashCardsContext();
  const LENGTH_DECK = 8;
  const zaps = icons.filter((element) => element === "checkmark-circle");

  const allAnswerd = icons.length === LENGTH_DECK;
  const reachedTheGoal = zaps.length >= goal;
  const hasIcons = icons.length > 0;

  return (
    <footer>
      {allAnswerd && reachedTheGoal && <Congrats />}
      {!allAnswerd || (!reachedTheGoal && <Wrong />)}

      <p className="counting">
        {icons.length}/{LENGTH_DECK} CONCLUÍDOS
      </p>

      {hasIcons && (
        <div className="icons">
          {icons.map((icon, index) => (
            <ion-icon key={index} name={icon}></ion-icon>
          ))}
        </div>
      )}

      {allAnswerd && <Restart />}
    </footer>
  );
}
