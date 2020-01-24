import React from 'react';
import useWordGame from './HOOKS/useWordGame';
import CodedBy from './CodedBy';

function App() {

    const {text, textAreaRef, handleChange, isTimeRunning, timeRemaining, startGame, wordCount} = useWordGame(15);

    return (
        <div>
            <h1>SPEED TYPING GAME</h1>
            <h3>How fast do you type?</h3>
            <textarea 
                ref={textAreaRef}
                value={text} 
                onChange={handleChange}
                disabled={!isTimeRunning}
            />
            <h4>Time Remaining: {timeRemaining}</h4>
            <button onClick={startGame} disabled={isTimeRunning}>{timeRemaining === 0 ? "Play Again" : "Start"}</button>
            <h1>Word Count: {wordCount}</h1>
            <CodedBy />
        </div>
    );


}

export default App;

