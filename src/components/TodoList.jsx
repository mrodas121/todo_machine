import React from "react";
import TodoItem from "./TodoItem";
import "../styles/TodoList.css"

const TodoList = (props) => {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export default TodoList;