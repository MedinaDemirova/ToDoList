import React from 'react';

function Form({ setInputText, setTodos, todos, inputText, setStatus, filteredTodos }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTotoHandler = (e) => {
    e.preventDefault();
    if (inputText !== '') {
      setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 100 }])
      setInputText("");
    }
  };

  const statusHandler = (e) => {
    e.preventDefault();
    setStatus(e.target.value);
  };

  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTotoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form;