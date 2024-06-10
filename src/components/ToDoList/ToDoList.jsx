import React, { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoItem from '../ToDoItem/ToDoItem';
//import Calendar from 'react-calendar';





const TodoList = () => {
  const [todos, setTodos] = useState([]); 

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false, id: Math.random() }]); 
  };

  const editTodo = (id, newText, isCompleted) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, text: newText, completed: isCompleted }
          : todo
      )
    ); 
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // Filter out deleted todo
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    ); // Toggle completed status of a todo
  };
 //const handleDateChange=(date) => setSelectedDate(date);
  
 
 return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <TodoForm onSubmit={addTodo} />
     <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={editTodo}
            onDelete={deleteTodo}
            onToggleCompleted={toggleCompleted}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
