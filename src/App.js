import React from 'react';
import './App.css';
import TodoInput from './components/Todoinput';
import TodoList from './components/TodoList';




function App() {
  return (
    <div >
      hello from app component
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
