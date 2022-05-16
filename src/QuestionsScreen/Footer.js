export default function Footer ({icons}){

    return(
        <footer>
            <p>{}/8 Concluídos</p>
            <div className="icons">{icons.map(data => <ion-icon name={data}></ion-icon>)}</div>
        </footer>
    );
}