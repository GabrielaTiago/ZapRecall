export default function QuestionFront ({number, changeTurned}){
    return (
        <li className="question"> 
            <h3>Pergunta {number+1}</h3>
            <ion-icon name="play-outline" onClick={() => changeTurned(number)}></ion-icon>
        </li>
    );
}