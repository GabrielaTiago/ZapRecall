import logo from "../assets/logo.png"

export default function InitialScreen({ setScreen }) {
    return (
        <>
            <main className="initial-screen">
                <img className="img-initial-screen" src={logo} alt="logo" />
                <h1>ZapRecall</h1>
                <button className="initial-button" onClick={() => setScreen('screen')}>Iniciar Recall!!</button>
            </main>
        </>
    );
}