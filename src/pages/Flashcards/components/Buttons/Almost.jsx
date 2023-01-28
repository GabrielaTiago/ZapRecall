import { useFlashCardsContext } from "../../../../contexts";

export function Almost({ cardIndex }) {
  const { showIcons, setAnswerType } = useFlashCardsContext();

  return (
    <button
      className="button b-orange"
      onClick={() => {
        showIcons("help-circle");
        setAnswerType(cardIndex, "almost");
      }}
    >
      Quase não lembrei
    </button>
  );
}
