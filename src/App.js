import logo from './logo.svg';
import React from 'react';
import './styles/App.css';

import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import CreateTodoButton from './components/CreateTodoButton';

const todos = [
  {text: 'Hacer la tarea', completed: true},
  {text: 'Estudiar para examen', completed: false},
  {text: 'Trabajar', completed: false},
];

function App() {
  return (
    <React.Fragment className="App">
      <TodoCounter />
      <TodoSearch />
      {<TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
        </TodoList>}
      <CreateTodoButton />
    </React.Fragment >
  );
}

export default App;
