import React, {Component} from 'react';
import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';
import uuid from 'uuid';
class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take our trash',
        completed: true
      },
      {
        id: 2,
        title: 'Run a mile',
        completed: false
      },
      {
        id: 3,
        title: 'Cook dinner',
        completed: false
      }
    ]
  };
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) });
    console.log(id);
  }

  delTodo = (id) => {
    this.setState({ todos: this.state.todos.filter(todo => { return todo.id !== id; } 
      )})
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title, //title: title
      completed: false,
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }
  render() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    </div>
  );
  }
}

export default App;
