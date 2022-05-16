import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import React from "react";

export default function QuestionsScreen(){
    const [icons, setIcons] = React.useState([]);

    function showIcons(teste){
        setIcons([...icons, teste])
        console.log(icons);
    }
    return(
        <>
            <Header />
            <Main showIcons={showIcons}/>
            <Footer icons={icons}/>
        </>
    );
}