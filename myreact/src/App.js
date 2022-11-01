import React from 'react';
import './App.css';
import TodoItem from './TodoItem';
import todosData from './todosDate';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos:todosData
    }
    this.hendleChange = this.hendleChange.bind(this)

  }
  hendleChange(id){
    this.setState(prevState =>{
      const updatedtodos =prevState.todos.map(todo => {
        if (todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedtodos
      }
    })

  }

  
  render(){
    const todoItem = this.state.todos.map(item => <TodoItem key={item.id} item = {item}
    hendleChange= {this.hendleChange}/>)
      
    return(
      <div className="todo-item" >
        {todoItem}
      
      </div>
    )
    
  }
}

export default App;
   



