import Answser from "./Answer"
import QuestionBack from "./QuestionBack";
import QuestionFront from "./QuestionFront";
import React from "react";

const cardsData = [
    {
        number: "1",
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript",
        turned: false,
        flipped: false
    },
    {
        number: "2",
        question: "O React é __ ",
        answer: "Uma biblioteca JavaScript para construção de interfaces",
        turned: false,
        flipped: false
    },
    {
        number: "3",
        question: "Componentes devem iniciar com __",
        answer: "Letra maiúscula",
        turned: false,
        flipped: false
    },
    {
        number: "4",
        question: "Podemos colocar __ dentro do JSX",
        answer: "Expressões",
        turned: false,
        flipped: false
    },
    {
        number: "5",
        question: "O ReactDOM nos ajuda __",
        answer: "Interagindo com a DOM para colocar componentes ",
        turned: false,
        flipped: false
    },
    {
        number: "6",
        question: "Usamos o npm para __",
        answer: "Gerenciar os pacotes necessários e suas dependências",
        turned: false,
        flipped: false
    },
    {
        number: "7",
        question: "Usamos props para __",
        answer: "Passar diferentes informações para componentes",
        turned: false,
        flipped: false
    },
    {
        number: "8",
        question: "Usamos estado (state) para __",
        answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
        turned: false,
        flipped: false
    },
];

cardsData.sort(comparator);

function comparator() { 
	return Math.random() - 0.5; 
}

export default function Main({showIcons}) {
    const [reference, setReference] = React.useState(cardsData);

    function changeTurned(index) {
        const newReference = [...reference];
        const question = newReference[index];
        question.turned = true;

        setReference(newReference);
    }

    function changeFlipped(index) {
        const newFlip = [...reference];
        const awnser = newFlip[index];
        awnser.flipped = true;

        setReference(newFlip);
    }

    return (
        <main>
            <ul className="questions">
                {reference.map((data, index) =>
                    !data.turned
                        ? <QuestionFront key={index} number={index} data={data} reference={reference} changeTurned={changeTurned} />
                        : data.flipped
                            ? <Answser key={index} number={index} answer={data.answer} showIcons={showIcons} />
                            : <QuestionBack key={index} number={index} question={data.question} changeFlipped={changeFlipped} />)
                }
            </ul>
        </main>
    );
}