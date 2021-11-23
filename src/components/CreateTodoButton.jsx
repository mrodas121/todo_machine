import React from "react";
import "../styles/CreateTodoButton.css"

function CreateTodoButton (props){
    const onClickButton = (message)=>{
        alert(message);
    }
    return (

        <button className="CreateTodoButton" onClick = {()=>onClickButton("click")}>
            +
        </button>
    );
}

export default CreateTodoButton;