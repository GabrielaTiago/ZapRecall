import { useFlashCardsContext } from "../../../../contexts";

export function Zap({ cardIndex, setAnswerType }) {
  const { showIcons } = useFlashCardsContext();

  return (
    <button
      className="b-green"
      onClick={() => {
        showIcons("checkmark-circle");
        setAnswerType(cardIndex, "zap");
      }}
    >
      Zap!
    </button>
  );
}
