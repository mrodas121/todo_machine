import React from "react";

const TodoItem = (props) =>{
    return(
        <li>
            <span>C</span>
            <p>{props.text}</p>
            <span>x</span>
        </li>
    );    
}

 export default TodoItem;