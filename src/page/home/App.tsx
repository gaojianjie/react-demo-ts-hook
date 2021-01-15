import logo from './logo.svg';
import './App.css';
import Root from '../../router/Root'

function App(props: any) {
    console.log(props)
    return (
        <div className="App">
            <Root route={props.children} />
            <header className="App-header">
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
