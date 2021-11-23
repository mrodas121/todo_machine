import React from "react";
import "../styles/TodoItem.css"

const TodoItem = (props) =>{
    const onComplete = () =>{
        alert("se completa la tarea "+props.text);
    }
    const onDelete = () =>{
        alert("se eliminó la tarea "+props.text);
    } 
    return(
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={onComplete}>        
                √
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span className="Icon Icon-delete" onClick={onDelete}>
                X
            </span>
        </li>
    );    
}

 export default TodoItem;