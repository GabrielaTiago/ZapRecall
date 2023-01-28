import { useFlashCardsContext } from "../../../../contexts";

export function Wrong({ cardIndex }) {
  const { showIcons, setAnswerType } = useFlashCardsContext();

  return (
    <button
      className="button b-red"
      onClick={() => {
        showIcons("close-circle");
        setAnswerType(cardIndex, "wrong");
      }}
    >
      Não lembrei
    </button>
  );
}
