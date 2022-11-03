import React from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: todosData,
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (id) => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        const completed = todo.id === id ? !todo.completed : todo.completed;

        return {
          ...todo,
          completed,
        };
      });

      return {
        todos: updatedTodos,
      };
    });
  }

  render() {
    const { todos } = this.state;

    return (
      <div className="todo-item">
        {todos.map(item => (
          <TodoItem
            item={item}
            key={item.id}
            handleChange={this.handleChange}
          />
        ))}
      </div>
    );
  }
}

export default App;

// const person = {
//   age: 13,
// };

// person.age = 45; ** Mutable
// const imPerson = {...person, age: 45}; ** Immutable