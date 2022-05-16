import React from "react";

export default function Footer({ icons }) {
    const LENGTH_ARRAY = 8;
    let i = 0;

    console.log(i);
    return (
        <footer>
            {icons.length !== LENGTH_ARRAY ? null
                : (icons.length === LENGTH_ARRAY && icons[i] !== "close-circle")
                    ?
                    <>
                        <img src="" alt="emoji de festa" />
                        <h3>Parabéns</h3>
                        <h5>Você não esqueceu de nenhum flashcard!</h5>
                    </>
                    :
                    <>
                        <img src="" alt="emoji de festa" />
                        <h3>Puts...</h3>
                        <h5>Ainda faltam alguns... Mas não desanime!</h5>
                    </>}

            <p>{icons.length}/8 Concluídos</p>
            <div className="icons">{icons.map(data => <ion-icon name={data}></ion-icon>)}</div>
        </footer>
    );
}