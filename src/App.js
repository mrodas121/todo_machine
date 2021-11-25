import React, { useState } from 'react';
import './styles/App.css';
import AppUI from './AppUI';

function App() {

  const localStorageTodos = localStorage.getItem("TODOS_V1");
  let parsedTodos;

  if(!localStorageTodos){
    localStorage.setItem("TODO_V1",JSON.stringify("[]"));
    parsedTodos = [];
  }else{
    parsedTodos = JSON.parse(localStorageTodos);
  }
  const [todos, setTodos] = useState(parsedTodos);
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

  const saveTodos = (newTodos) =>{
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem("TODO_V1", stringifiedTodos);
    setTodos(newTodos);
  }

  const completeTodo = (text)=>{
    const textLower = text.toLocaleLowerCase();
    const todoIndex = todos.findIndex(todo => todo.text.toLocaleLowerCase() === textLower);
    const newTodos =[...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text)=>{
    const textLower = text.toLocaleLowerCase();
    const todoIndex = todos.findIndex(todo => todo.text.toLocaleLowerCase() === textLower);
    const newTodos =[...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }
  return (
    <AppUI 
        completedTodos = {completedTodos}
        totalTodos = {totalTodos}
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
        searchedTodos = {searchedTodos}
        completeTodo = {completeTodo}
        deleteTodo = {deleteTodo}
    />
  );
}

export default App;
