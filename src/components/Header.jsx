import { AppLogo, AppTitle } from ".";

export function Header() {
  return (
    <header>
      <div className="logo-container">
        <AppLogo />
        <AppTitle />
      </div>
    </header>
  );
}
