import React, { useState, useEffect } from 'react';
import './App.css';

//Importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Use effect
  useEffect(() => {
    getLocalStorageTodos()
  }, []);

  useEffect(() => {
    filterTodosHandler();
    saveLocalTodos()
  }, [todos, status]);


  //Functions
  const filterTodosHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const getLocalStorageTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem('todos', JSON.stringify(todos))
    } else {
      let currentTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(currentTodos);
    }
  }

  return (
    <div className='App'>
      <header> Medina's To Do List </header>

      <Form
        setInputText={setInputText}
        inputText={inputText}
        setTodos={setTodos}
        todos={todos}
        setStatus={setStatus} />


      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos} />

    </div>
  );
}

export default App;
