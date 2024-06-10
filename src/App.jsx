import React from 'react';
import './App.css'
import TodoList from './components/ToDoList/ToDoList';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <TodoList />
      
      <b>
      <Footer />
      </b>
     
      
    </div>
  );
};

export default App;

