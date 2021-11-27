import React, { createContext, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider(props) {

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
    return(
        <TodoContext.Provider value={{
            loading,
            completedTodos,
            totalTodos,
            searchValue ,
            setSearchValue ,
            searchedTodos ,
            completeTodo,
            deleteTodo,
            error,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};