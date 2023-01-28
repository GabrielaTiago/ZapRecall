import { useFlashCardsContext } from "../../../../contexts";

export function Zap({ cardIndex }) {
  const { showIcons, setAnswerType } = useFlashCardsContext();

  return (
    <button
      className="button b-green"
      onClick={() => {
        showIcons("checkmark-circle");
        setAnswerType(cardIndex, "zap");
      }}
    >
      Zap!
    </button>
  );
}
