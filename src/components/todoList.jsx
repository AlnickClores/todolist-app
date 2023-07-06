import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoListItems from "./todoListItems";
import "./todoList.css";

const TodoListComponent = () => {
  const [todo, setTodo] = useState("");
  const [todoLists, setTodoList] = useState([]);
  const [error, setError] = useState("");

  const handleAddTodo = () => {
    if (todo) {
      setTodoList([...todoLists, { id: uuid(), name: todo }]);
      setTodo("");
      setError("");
    } else {
      setError("List Cannot be Empty.");
    }
  };

  const handleEditTodo = (id, newTodo) => {
    const newTodoList = todoLists.map((item) => {
      if (item.id === id) {
        return { ...item, name: newTodo };
      }
      return item;
    });
    setTodoList(newTodoList);
  };

  const handleDeleteTodo = (deleteId) => {
    const filteredTodo = todoLists.filter((item) => item.id !== deleteId);
    setTodoList(filteredTodo);
  };

  const handleClearTodo = () => {
    setTodoList([]);
  };
  return (
    <div className="main">
      <div className="outer-container">
        <h1 className="name">To-Do List</h1>
        <div className="inner-container">
          <input
            className="input"
            type="text"
            placeholder="I want to..."
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <button className="submit-btn" onClick={handleAddTodo}>
            Add
          </button>
          {error ? <p className="error-message">{error}</p> : null}
          <div className="lists">
            <ul className="list-container">
              {todoLists.map((item) => (
                <TodoListItems
                  key={item.id}
                  item={item}
                  handleEditTodo={handleEditTodo}
                  handleDelete={handleDeleteTodo}
                />
              ))}
            </ul>
          </div>
          {todoLists.length > 0 ? (
            <button className="btn-clear" onClick={handleClearTodo}>
              Clear the List
            </button>
          ) : null}
        </div>
      </div>
      <p className="credit">
        Made by:{" "}
        <a
          className="profile-link"
          href="https://alnickclores.github.io/Portfolio-Website/"
          target="_blank"
        >
          Alnick Clores
        </a>
      </p>
    </div>
  );
};

export default TodoListComponent;
