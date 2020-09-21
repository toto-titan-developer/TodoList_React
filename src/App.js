import React, { useState, useRef , useEffect} from 'react';
import Todolist from './Todolist';
import {v4 as uuidv4} from 'uuid';
import './App.css';


const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    console.log("Bottom  :  Photo by Umberto on Unsplash");
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos)
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    });
    todoNameRef.current.value = null;
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todos => !todos.complete);
    setTodos(newTodos);
  }

  return (
    <>
      <nav className="header"></nav>
      <div className="bkg"></div>
      <Todolist todos={todos} toggleTodo={toggleTodo}/>
      <div className="gridBox">
        <div></div>
        <input className="inputBox" ref={todoNameRef} type="text" />
        <button className="button1" onClick={handleAddTodo}>Add Todo</button>
        <button className="button2" onClick={handleClearTodos}>Clear Completed</button>
        <div></div>
      </div>
      <div className="leftTodo"><p className="leftNum">{todos.filter(todo => !todo.complete).length}</p> Left To do</div>
      <div className="bkg"></div>
      <footer className="footer"></footer>
    </>   
  )
}

export default App;
