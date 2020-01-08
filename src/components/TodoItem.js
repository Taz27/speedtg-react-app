import React from 'react';

function TodoItem(props) {
    //console.log(props);
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    //className={props.item.completed ? "todo-done" : undefined}
    return (
        <div className="todo-item">
            <input type="checkbox" onChange={(event) => props.changefunc(props.item.id, event)} checked={props.item.completed} />
            <p style={props.item.completed ? completedStyle : undefined}>{props.item.text}</p>
        </div>
    );
}

export default TodoItem;