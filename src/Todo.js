import React from 'react';
import './Todos.css';

function Todo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
    return (
        <div>           
            <label className="gridbox">
                <div></div>
                <input className="check" type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
                <p>{todo.name}</p>
                <div></div>
            </label>
        </div>
    )
}

export default Todo;