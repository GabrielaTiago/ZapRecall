export default function QuestionBack({ question, number, changeFlipped }) {
    return (
        <li className="query">{question}
            <img className="flip" src="../assets/flip.png" alt="icon to flip the card" onClick={() => changeFlipped(number)} />
        </li>
    );
}