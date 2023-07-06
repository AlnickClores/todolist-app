import { useState } from "react";
import "./todoList.css";

const TodoListItems = ({ item, handleEditTodo, handleDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTodo, setNewTodo] = useState(item.name);
  const [error, setError] = useState("");

  const handleEdit = () => {
    if (newTodo) {
      handleEditTodo(item.id, newTodo);
      setIsEditing(false);
      setError("");
    } else {
      setError("List Cannot be Empty.");
    }
  };

  return (
    <>
      <li className="todo">
        {isEditing ? (
          <input
            className="input-edit"
            type="text"
            value={newTodo}
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
          />
        ) : (
          item.name
        )}
        {error ? <p className="error-message">{error}</p> : null}
      </li>
      <div className="modify-btns">
        <button
          onClick={() => {
            isEditing ? handleEdit() : setIsEditing(true);
          }}
          className="edit-btn"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={() => handleDelete(item.id)} className="remove-btn">
          Remove
        </button>
      </div>
    </>
  );
};

export default TodoListItems;
