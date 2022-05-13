export default function Question (){
    const cardsData = [
        {
            number: "1",
            question: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScript"
        },
        {
            number: "2",
            question: "O React é __ ",
            answer: "Uma biblioteca JavaScript para construção de interfaces"
        },
        {
            number: "3",
            question: "Componentes devem iniciar com __",
            answer: "Letra maiúscula"
        },
        {
            number: "4",
            question: "Podemos colocar __ dentro do JSX",
            answer: "Expressões"
        },
        {
            number: "5",
            question: "O ReactDOM nos ajuda __",
            answer: "Interagindo com a DOM para colocar componentes "
        },
        {
            number: "6",
            question: "Usamos o npm para __",
            answer: "Gerenciar os pacotes necessários e suas dependências"
        },
        {
            number: "7",
            question: "Usamos props para __",
            answer: "Passar diferentes informações para componentes"
        },
        {
            number: "8",
            question: "Usamos estado (state) para __",
            answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        },
    ];

    return (
        <>
            <ul className="questions">
                {cardsData.map(data => <li className="question hidden">
                    <QuestionFront number={data.number} />
                </li>)}
            </ul>
        </>
    );
}
function QuestionFront(props) {
    return (
        <>
            <h3>Pergunta {props.number}</h3>
            <ion-icon name="play-outline"></ion-icon>
        </>
    );
}
