import React, {useState, useEffect} from 'react';
import randomcolor from "randomcolor";

function HooksApp() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("");

    function increment() {
        setCount(prevCount => prevCount + 1);
    }

    function decrement() {
        setCount(prevCount => prevCount - 1);
    }

    function half() {
        setCount(prevCount => Math.round(prevCount / 2));
    }

    function double() {
        setCount(prevCount => Math.round(prevCount * 2));
    }
    //This behaves like componentDidMount (will run only once)
    //the function RETURNED will be stored by React as function to run as componentWillUnmount
    useEffect(() => {
        const timerId = setInterval(() => setCount(prevCount => prevCount + 1), 1000);
        //console.log("1st useEffect");
        return () => clearInterval(timerId);
    }, []);

    //this behaves like componentDidUpdate (will watch the variables in the array passed as 2nd argument for changes)
    useEffect(() => {
        //console.log("2st useEffect");
        setColor(randomcolor());
    }, [count]);

    return (
        <div>
            <h1 style={{color: color}}>Count is {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={half}>Half</button>
            <button onClick={double}>Double</button>
            
        </div>
    );

}

export default HooksApp;
