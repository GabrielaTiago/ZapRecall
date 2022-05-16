export default function Answer({answer}) {
    return (
        <li className="query">
            <h3>{answer}</h3>
            <div className="buttons">
                <button className="b-red">Não lembrei</button>
                <button className="b-yellow">Quase não lembrei</button>
                <button className="b-green">Zap!</button>
            </div>
        </li>
    );
}