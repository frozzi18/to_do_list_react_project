import React from 'react';
import TodoInput from './components/Todoinput';
import TodoList from './components/TodoList';

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from 'uuid';
import { link } from 'fs';


function App() {
  state = {
    items:[],
    id:0,
    item:'',
    editItem:false
  }

  handleChange = (e) =>{
    
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">
            todo input 
          </h3>
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
