import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Todo = ({ todo, toggleComplete, handleDelete, handleEdit }) => {
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };

  return (
    <div className="todo">
      <input
        type="text"
        className="list"
        onChange={handleChange}
        style={{ textDecoration: todo.completed && "line-through" }}
        value={todo.title === "" ? newTitle : todo.title}
      />
      <div>
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircleIcon id="i" />
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(todo, newTitle)}
        >
          <EditIcon id="i" />
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          <DeleteIcon id="i" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
