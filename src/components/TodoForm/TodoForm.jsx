import React, { useState } from 'react';


const TodoForm = ({ onSubmit }) => {
    const [text, setText] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (text) {
        onSubmit(text);
        setText('');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a new todo" />
        <button type="submit">Add</button>
      </form>
    );
  };
  
  export default TodoForm;
  