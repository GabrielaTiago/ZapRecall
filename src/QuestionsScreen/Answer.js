import React from "react";

export default function Answer({ answer, number, icons, setIcons}) {
    const [color, setColor] = React.useState("none");

    if (color === "none") {
        return (
            <li className="query">
                <h3>{answer}</h3>
                <div className="buttons">
                    <button className="b-red" onClick={() => setColor("red")}>Não lembrei</button>
                    <button className="b-yellow" onClick={() => setColor("yellow")}>Quase não lembrei</button>
                    <button className="b-green" onClick={() => setColor("green")}>Zap!</button>
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
    else if (color === "yellow") {
        return (
            <li className="question yellow">
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