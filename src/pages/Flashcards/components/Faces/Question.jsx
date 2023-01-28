import flip from "../../../../assets/images/flip.png";

export function Question({ question, setFlipped }) {
  return (
    <li className="card spin">
      <div className="query">
        <h3>{question}</h3>
        <img
          className="flip"
          src={flip}
          alt="icon to flip the card"
          onClick={() => setFlipped(true)}
        />
      </div>
    </li>
  );
}
