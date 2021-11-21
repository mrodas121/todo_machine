import React from "react";
import TodoItem from "./TodoItem";
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