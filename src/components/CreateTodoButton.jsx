import React from "react";
import "../styles/CreateTodoButton.css"

function CreateTodoButton (props){
    const onClickButton = ()=>{
        props.setOpenModal(!props.openModal);
    }
    return (

        <button className="CreateTodoButton" onClick = {()=>onClickButton()}>
            +
        </button>
    );
}

export default CreateTodoButton;