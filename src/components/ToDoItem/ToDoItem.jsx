import React,{ useState } from 'react';


const TodoItem = ({ todo, onEdit, onDelete }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [editText, setEditText] = useState(todo.text);
  
    const handleEdit = () => {
      setIsEdit(true);
      setEditText(todo.text);
    };
  
    const handleSave = () => {
      onEdit(todo.id, editText);
      setIsEdit(false);
    };
  
    const handleDelete = () => {
      onDelete(todo.id);
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
              onChange={() => onEdit(todo.id, !todo.completed)}
            />
            <span>{todo.text}</span>
          </div>
        )}
        {isEdit ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <>
            <button onClick={handleEdit}>Edit</button>
            <button disabled={!todo.completed} onClick={handleDelete}>
              Delete
            </button>
          </>
        )}
      </li>
    );
  };
  
  export default TodoItem;
  