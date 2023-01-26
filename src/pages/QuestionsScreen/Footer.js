import React from "react";
import party from "../assets/party.png";
import sad from "../assets/sad.png";

export default function Footer({ icons }) {
    const LENGTH_ARRAY = 8;
    const RED_LENGTH = 0;
    const red = icons.filter(elemnet => elemnet === "close-circle");
    let i = 0;

    return (
        <footer>
            {icons.length !== LENGTH_ARRAY ? null
                : (icons.length === LENGTH_ARRAY && red.length === RED_LENGTH)
                    ?
                    <>
                        <div className="message">
                            <img src={party} alt="emoji de festa" />
                            <h3>Parabéns</h3>
                        </div>
                        <h5>Você não esqueceu de nenhum flashcard!</h5>
                    </>
                    :
                    <>
                        <div className="message">
                            <img src={sad} alt="emoji tristinho" />
                            <h3>Puts...</h3>
                        </div>
                        <h5>Ainda faltam alguns... Mas não desanime!</h5>
                    </>}

            <p>{icons.length}/8 Concluídos</p>
            <div className="icons">{icons.map(data => <ion-icon name={data}></ion-icon>)}</div>
        </footer>
    );
}