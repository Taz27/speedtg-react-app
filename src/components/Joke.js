import React from 'react';

function Joke(props) {

    return (
        <div className="joke">
            <p style={{display: props.q ? "block" : "none"}}><span className="qandp">Question:</span> {props.q}</p>
            <p style={{color: !props.q && "red"}}><span className="qandp">Answer:</span> {props.p}</p>
            <hr />
        </div>    
    );
    
}

export default Joke;