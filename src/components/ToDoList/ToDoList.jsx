import React, { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoItem from '../ToDoItem/ToDoItem';



const TodoList = () => {
    const [todos, setTodos] = useState([]);
  
    const addTodo = (text) => {
      setTodos([{ text, completed: false, id: Math.random() }, ...todos]);
    };
  
    const editTodo = (id, newText, isCompleted) => {
      // Update the todo with the given id
      setTodos(
        todos.map((todo) =>
          todo.id === id
            ? { ...todo, text: newText, completed: isCompleted }
            : todo
        )
      );
    };
  
    const deleteTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };
  
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm onSubmit={addTodo} />
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onEdit={editTodo}
              onDelete={deleteTodo}
            />
          ))}
        </ul>
      </div>
    );
  };
  
  export default TodoList;
  