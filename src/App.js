import logo from './logo.svg';
import React from 'react';
import './App.css';

import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
const todos = [
  {text: 'Hacer la tarea', completed: false},
  {text: 'Estudiar para examen', completed: false},
  {text: 'Trabajar', completed: false},
];

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList></TodoList>
      {<TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
        </TodoList>}
      {/*<CreateTodoButton />*/}
      <button>+</button>
    </>
  );
}

export default App;
