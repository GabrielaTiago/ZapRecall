import flip from "../assets/flip.png";

export default function QuestionBack({ question, number, changeFlipped }) {
    return (
        <li className="query">{question}
            <img className="flip" src={flip} alt="icon to flip the card" onClick={() => changeFlipped(number)} />
        </li>
    );
}