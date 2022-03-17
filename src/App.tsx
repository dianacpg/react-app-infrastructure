import React, { useState } from "react";
import { hot } from "react-hot-loader";
import './app.scss';
import PizzaSVG from "./pizza.svg"

const App = () => {

    const [counter, setCounter] = useState<number>(0)

    const handleClick = () => {
        setCounter(counter + 1)
    };

    return (
        <div className="App">
            <PizzaSVG width={120} height={120} />
            <h1>I'm configuring setting up Webpack!</h1>
            <p>{`The count now is: ${counter}`}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
export default hot(module)(App);