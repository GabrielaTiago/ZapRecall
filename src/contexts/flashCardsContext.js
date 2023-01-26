import { createContext, useContext, useState } from "react";

const FlashCardsContext = createContext();

export const useFlashCardsContext = () => {
  return useContext(FlashCardsContext);
};

export function FlashCardsContextProvider({ children }) {
  const [icons, setIcons] = useState([]);

  function showIcons(icon) {
    setIcons([...icons, icon]);
  }

  return (
    <FlashCardsContext.Provider
      value={{
        icons,
        setIcons,
        showIcons,
      }}
    >
      {children}
    </FlashCardsContext.Provider>
  );
}
