import React, { useContext, useState } from "react";
import "../styles/TodoForm.css";
import { TodoContext } from "../TodoContext/Index";
const TodoForm = (props) =>{

    const [newTodoValue, setNewTodoValue] = useState("");
    const {
        addTodo
    } = useContext(TodoContext);

    const onCancel = () =>{
        props.setOpenModal(false);
    };
    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
        console.log(event.target.value);
    }
    const onSubmit =(event) =>{
        event.preventDefault();
        addTodo(newTodoValue);
        setNewTodoValue("");
        props.setOpenModal(false);
    }

    return(
        <form onSubmit={onSubmit}>
            <label></label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Ingrese el titulo de su Todo"
            />
            <div className="TodoForm-buttonContainer">
                <button type="button" onClick ={onCancel} className="TodoForm-button TodoForm-button-cancel" >
                    Cancelar
                </button>
                <button type="submit" className="TodoForm-button TodoForm-button-add">
                    Añadir
                </button>
            </div>
        </form>
    );
}

export default TodoForm;