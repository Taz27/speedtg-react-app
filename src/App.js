import React from 'react';
import TodoItem from './components/TodoItem';

function App() {
    return (
        <div className="todo-list">
            <h2>Todo List</h2>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    );
}

export default App;