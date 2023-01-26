import { useFlashCardsContext } from "../../../../contexts";

export function Wrong({ cardIndex, setAnswerType }) {
  const { showIcons } = useFlashCardsContext();

  return (
    <button
      className="b-red"
      onClick={() => {
        showIcons("close-circle");
        setAnswerType(cardIndex, "wrong");
      }}
    >
      Não lembrei
    </button>
  );
}
