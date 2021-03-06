//import required HOOKS from React library
import {useState, useEffect, useRef} from "react";

function useWordGame(startTime = 10) {

    //Setup STATE variables
    const [text, setText] = useState("");
    const [timeRemaining, setTimeRemaining] = useState(startTime);
    const [isTimeRunning, setIsTimeRunning] = useState(false);
    const [wordCount, setWordCount] = useState(0);
    
    const textAreaRef = useRef(null); 
    //Define Change handler function
    function handleChange(event) {
        //get Textarea value and update state
        const {value} = event.target;
        setText(value);
    }
    
    function calculateWordCount(txt) {
        //Split the text entered by user in words array and return its length
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
        setTimeRemaining(startTime);
        setIsTimeRunning(true);
        //put focus on text box 
        textAreaRef.current.disabled = false;
        textAreaRef.current.focus();
    }

    function endGame() {
        //show word count and set isTimeRunning flag to false
        setWordCount(calculateWordCount(text));
        setIsTimeRunning(false);
    }

    return {text, textAreaRef, handleChange, isTimeRunning, timeRemaining, startGame, wordCount};
}

export default useWordGame
