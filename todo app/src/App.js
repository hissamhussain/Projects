import React,{Component} from 'react';
import Todo from './Todo.js';
import AddTodo from './AddTodo.js'

import './App.css';

class App extends Component {

  state = {
    todos: [
      {id:1,content:'first todo'},
      {id:2,content:'Second todo'}
    ]
  }

  delTodo(id)
  {
    
    const todos = this.state.todos.filter((todo) => {
      console.log(id)
      return todo.id !== id;
    });
    
    this.setState({
      todos
    }) ; 
    

  }

  addTodo = (todo) =>
   {
    todo.id = Math.random();

    let todos = [...this.state.todos,todo];
    this.setState({
      todos
    })
  }

  handleCopy = (e) => 
  {
    console.log("try being original")
  }
  render()
  {
    return(
      <div className="todoapp container"> 
        <h1 className="center blue-text">Todo's</h1>
        <Todo todos={this.state.todos} deleteTodo = {this.delTodo.bind(this)}/>
        <AddTodo addtodo = {this.addTodo} />
        <p onCopy = {this.handleCopy}>Hello</p>
        </div>
    );
  }
  
}

export default App;
