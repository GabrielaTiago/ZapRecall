import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { FlashCardsContextProvider } from "./contexts";
import { AppRoutes } from "./routes";

import "./styles/reset.css";
import "./styles/styles.css";

function App() {
  return (
    <BrowserRouter>
      <FlashCardsContextProvider>
        <AppRoutes />
      </FlashCardsContextProvider>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
