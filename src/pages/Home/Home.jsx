import { useNavigate } from "react-router-dom";
import { AppTitle, AppLogo } from "../../components";

export function Home() {
  const navigate = useNavigate();

  return (
    <main className="home-screen">
      <AppLogo />
      <AppTitle />
      <button
        className="home-screen-button"
        onClick={() => navigate("/questions")}
      >
        Iniciar Recall!!
      </button>
    </main>
  );
}
