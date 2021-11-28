import React, { useContext } from "react";

import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import CreateTodoButton from './components/CreateTodoButton';
import { TodoContext } from "./TodoContext/Index";
import Modal from "./Modal";
import TodoForm from "./components/TodoForm";

const AppUI =()=>{
    const {error,loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal} = useContext(TodoContext);
    return(
        <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>
        <TodoList >
            {error && <p>Desespérate, hubo un error...</p>}
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}          
              {searchedTodos.map(todo => (
                <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete ={()=>completeTodo(todo.text)} onDelete = {() => deleteTodo(todo.text)}/>
              ))}
        </TodoList>
          {openModal && (
            <Modal>
              <TodoForm setOpenModal = {setOpenModal}/>
            </Modal>
          )}
        <CreateTodoButton setOpenModal = {setOpenModal} openModal = {openModal}/>
      </React.Fragment >
    );
}

export default AppUI;