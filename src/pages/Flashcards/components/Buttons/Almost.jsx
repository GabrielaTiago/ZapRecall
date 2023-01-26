import { useFlashCardsContext } from "../../../../contexts";

export function Almost({ cardIndex, setAnswerType }) {
  const { showIcons } = useFlashCardsContext();

  return (
    <button
      className="nutton b-orange"
      onClick={() => {
        showIcons("help-circle");
        setAnswerType(cardIndex, "almost");
      }}
    >
      Quase não lembrei
    </button>
  );
}
