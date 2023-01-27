import { AppTitle, AppLogo } from "../../components";
import { Form } from "./components";

export function Home() {
  return (
    <main className="home-screen">
      <AppLogo />
      <AppTitle />
      <Form />
    </main>
  );
}
