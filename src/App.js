import React, {useState, useEffect} from 'react';

function App() {
    const START_TIME = 5;
    
    const [text, setText] = useState("");
    const [timeRemaining, setTimeRemaining] = useState(START_TIME);
    const [isTimeRunning, setIsTimeRunning] = useState(false);
    const [wordCount, setWordCount] = useState(0);

    function handleChange(event) {
        const {value} = event.target;
        setText(value);
    }

    function calculateWordCount(txt) {
        const wordsArray = txt.trim().split(/\s+/);
        const wordCount = wordsArray[0] === "" ? 0 : wordsArray.length;
        return wordCount;
    }

    useEffect(() => {
        //decrement time remaining every second
        if (isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(prevTR => prevTR - 1);
            }, 1000);
        } else if (timeRemaining === 0) {
            endGame();
        }
        
    }, [timeRemaining, isTimeRunning]);

    function startGame() {
        //reset game state
        setText("");
        setWordCount(0);
        setTimeRemaining(START_TIME);
        setIsTimeRunning(true);
    }

    function endGame() {
        //show word count and set isTimeRunning flag to false
        setWordCount(calculateWordCount(text));
        setIsTimeRunning(false);
    }


    return (
        <div>
            <h1>SPEED TYPING GAME</h1>
            <h3>How fast do you type?</h3>
            <textarea 
                value={text} 
                onChange={handleChange}
                disabled={!isTimeRunning}
            />
            <h4>Time Remaining: {timeRemaining}</h4>
            <button onClick={startGame} disabled={isTimeRunning}>{timeRemaining === 0 ? "Play Again" : "Start"}</button>
            <h1>Word Count: {wordCount}</h1>
        </div>
    );


}

export default App;

