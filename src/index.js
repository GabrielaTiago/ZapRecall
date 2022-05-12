import ReactDOM from 'react-dom';
import InitialScreen from './InitialScreen/InitialScreen'
import QuestionsScreen from './QuestionsScreen/QuestionsScreen';

function App(){
    return(
        <>
            <InitialScreen />
            <QuestionsScreen />
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));