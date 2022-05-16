export default function QuestionBack({question}) {
    return (
            <li className="query">{question}
                <img className="flip" src="../assets/flip.png" alt="icon to flip the card"/>
            </li>
    );
}