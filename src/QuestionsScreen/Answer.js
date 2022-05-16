import React from "react";

export default function Answer({ answer, number, showIcons}) {
    const [color, setColor] = React.useState("none");

    if (color === "none") {
        return (
            <li className="query">
                <h3>{answer}</h3>
                <div className="buttons">
                    <button className="b-red" onClick={() => {showIcons("close-circle");  setColor("red") }}>Não lembrei</button>
                    <button className="b-orange" onClick={() => {showIcons("help-circle"); setColor("orange") }}>Quase não lembrei</button>
                    <button className="b-green" onClick={() => {showIcons("checkmark-circle"); setColor("green"); }}>Zap!</button>
                </div>
            </li>
        );
    }
    else if (color === "red") {
        return (
            <li className="question red">
                <h3 className="risk">Pergunta {number + 1}</h3>
                <ion-icon name="close-circle"></ion-icon>
            </li>
        );
    }
    else if (color === "orange") {
        return (
            <li className="question orange">
                <h3 className="risk">Pergunta {number + 1}</h3>
                <ion-icon name="help-circle"></ion-icon>
            </li>
        );
    }
    else if (color === "green") {
        return (
            <li className="question green">
                <h3 className="risk">Pergunta {number + 1}</h3>
                <ion-icon name="checkmark-circle"></ion-icon>
            </li>
        );
    }
}