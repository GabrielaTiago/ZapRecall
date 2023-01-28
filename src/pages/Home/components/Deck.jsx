import Select from "react-select";
import { useFlashCardsContext } from "../../../contexts";
import { options } from "../../../mock";

export function Deck() {
  const { setDeckOfCards } = useFlashCardsContext();

  const handleSelection = ({ value }) => {
    setDeckOfCards(value);
  };

  const customTheme = (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary: "#d70900",
        primary25: "#cdcdcdbc",
      },
    };
  };

  const customStyles = {
    control: (styles) => ({
      ...styles,
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "16px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      backgroundColor: "#ffffff",
    }),
    input: (styles) => ({ ...styles, height: "43px", padding: 0, margin: 0 }),
    placeholder: (styles) => ({ ...styles, color: "#adadad" }),
    singleValue: (styles) => ({ ...styles, color: "#d70900" }),
  };

  return (
    <Select
      className="select"
      options={options}
      isClearable={true}
      theme={customTheme}
      styles={customStyles}
      placeholder={"Escolha seu deck"}
      onChange={handleSelection}
    />
  );
}
