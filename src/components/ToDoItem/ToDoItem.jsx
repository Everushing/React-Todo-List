import React,{ useState } from 'react';


const TodoItem = ({ todo, onEdit, onDelete, onToggleCompleted }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEdit(true);
    setEditText(todo.text);
  };

  const handleSave = () => {
    onEdit(todo.id, editText, todo.completed); // Pass completed state as well
    setIsEdit(false);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleToggleCompleted = () => {
    onToggleCompleted(todo.id);
  };

  return (
    <li>
      {isEdit ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <div>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggleCompleted}
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
        </div>
      )}
      {isEdit ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <>
          <button onClick={handleEdit}>Edit</button>
          <button disabled={todo.completed} onClick={handleDelete}>
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
