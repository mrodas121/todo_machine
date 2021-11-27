import React, { useContext } from "react";
import { TodoContext } from "../TodoContext/Index";

import "../styles/TodoCounter.css"

const TodoCounter = ()=>{
    const {totalTodos, completedTodos} = useContext(TodoContext);
    return(
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
}

export default TodoCounter;