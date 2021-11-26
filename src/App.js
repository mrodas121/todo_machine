import React, { useEffect, useState } from 'react';
import './styles/App.css';
import AppUI from './AppUI';

function useLocalStorage(itemName, initialValue){
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(
    ()=>{
      setTimeout(() => {
        try{
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          if(!localStorageItem){
            localStorage.setItem(itemName,JSON.stringify(initialValue));
            parsedItem = initialValue;
          }else{
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false);
        }catch{
          setLoading(false);
          setError(true);
        }
      }, 10000);
    });

  const saveItem = (newItem) =>{
    try{
      const stringFiledItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringFiledItem);
      setItem(newItem);
    }catch{
      setError(true);
    }
  };

  return{
    item,
    saveItem,
    loading,
    error
  };
}

function App() {

  const {item:todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1',[]);
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
        loading = {loading}
        completedTodos = {completedTodos}
        totalTodos = {totalTodos}
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
        searchedTodos = {searchedTodos}
        completeTodo = {completeTodo}
        deleteTodo = {deleteTodo}
        error = {error}
    />
  );
}

export default App;
