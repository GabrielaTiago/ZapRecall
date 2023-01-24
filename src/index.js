import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

import "./styles/reset.css";
import "./styles/styles.css";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
