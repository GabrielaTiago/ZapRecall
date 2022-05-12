export default function InitialScreen({setScreen}) {
    return (
        <>
            <main className="initial-screen">
                <img className="img-initial-screen" src="assets/image 1.png" alt="logo" />
                <h1>ZappRecall</h1>
                <button className="initial-button" onClick={() => setScreen('screen')}>Iniciar Recall!!</button>
            </main>
        </>
    );
}