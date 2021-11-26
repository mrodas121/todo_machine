import React from "react";

import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import CreateTodoButton from './components/CreateTodoButton';

const AppUI =(props)=>{
  const {error, loading, searchedTodos} = props;
    return(
        <React.Fragment>
        <TodoCounter completed = {props.completedTodos} total= {props.totalTodos}/>
        <TodoSearch searchValue={props.searchValue} setSearchValue={props.setSearchValue}/>
        <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}          
          {props.searchedTodos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete ={()=>props.completeTodo(todo.text)} onDelete = {() => props.deleteTodo(todo.text)}/>
          ))}
        </TodoList>
        <CreateTodoButton />
      </React.Fragment >
    );
}

export default AppUI;