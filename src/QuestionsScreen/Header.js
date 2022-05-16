import logo from "../assets/logo.png";

export default function Header() {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </div>
        </header>
    );
}