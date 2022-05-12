import ReactDOM from 'react-dom';
import React from 'react';
import InitialScreen from './InitialScreen/InitialScreen';
import QuestionsScreen from './QuestionsScreen/QuestionsScreen';

function App(){
    const [screen, setScreen] = React.useState('init');
    
    return(
        <>
            {screen === 'init' ? <InitialScreen setScreen={setScreen}/> : <QuestionsScreen />}
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));