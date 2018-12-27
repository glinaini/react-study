import React, { Component } from 'react';
// import './App.css';
// import { Router, Route } from 'react-router'
import TodoList from './views/todoList'

class App extends Component {
  render() {
    return (
      <div>
        hello world
        <TodoList/>
      </div>
    );
  }
}

export default App;
