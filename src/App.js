import React, { useState } from 'react';
import './styles/App.css';

import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import CreateTodoButton from './components/CreateTodoButton';

const defaultTodos = [
  {text: 'Hacer la tarea', completed: true},
  {text: 'Estudiar para examen', completed: false},
  {text: 'Trabajar', completed: false},
];

function App() {

  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  let searchedTodos = [];

  if(!searchValue.length >= 1){
    searchedTodos = todos;
  }else{

    const searchText = searchValue.toLocaleLowerCase();
    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLocaleLowerCase();
      return todoText.includes(searchText);
    })
  }

  const completeTodo = (text)=>{
    const textLower = text.toLocaleLowerCase();
    const todoIndex = todos.findIndex(todo => todo.text.toLocaleLowerCase() === textLower);
    const newTodos =[...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text)=>{
    const textLower = text.toLocaleLowerCase();
    const todoIndex = todos.findIndex(todo => todo.text.toLocaleLowerCase() === textLower);
    const newTodos =[...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }
  return (
    <React.Fragment>
      <TodoCounter completed = {completedTodos} total= {totalTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      {<TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete ={()=>completeTodo(todo.text)} onDelete = {() => deleteTodo(todo.text)}/>
        ))}
        </TodoList>}
      <CreateTodoButton />
    </React.Fragment >
  );
}

export default App;
