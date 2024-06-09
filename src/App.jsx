import { useState } from 'react'
import './App.css'
import TodoList from './components/ToDoList/ToDoList';

const App = () => {
  return (
    <div className="App">
      <TodoList/>
    </div>
  );
};

export default App;

