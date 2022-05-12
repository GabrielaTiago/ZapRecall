import ReactDOM from 'react-dom';
import InitialScreen from './initialScreen/InitialScreen'

function App(){
    return(
        <>
            <InitialScreen />
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));