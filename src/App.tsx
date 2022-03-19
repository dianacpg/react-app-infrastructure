import React, { useState } from "react";
import { hot } from "react-hot-loader";
import './app.scss';
import Alert from './alert.svg'

const App = () => {

    const [counter, setCounter] = useState<number>(0)

    const handleClick = () => {
        setCounter(counter + 1)
    };

    return (
        <div className="App">
            <Alert width={120} height={120} />
            <h1>I'm configuring setting up Webpack!</h1>
            <p>{`The count now is: ${counter}`}</p>
            <button onClick={handleClick}>Click me</button>
            <Alert width={120} height={120} />
            <Alert width={120} height={120} />
        </div>
    );
}
export default hot(module)(App);