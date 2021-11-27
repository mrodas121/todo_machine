import React, { useContext } from "react";
import { TodoContext } from "../TodoContext/Index";
import "../styles/TodoSearch.css";

const TodoSearch = () =>{
    const {searchValue, setSearchValue} = useContext(TodoContext);
    
    const onSearchValueChange=(event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }
    return (
        <>
            <input className="TodoSearch" placeholder="input para busquedas" onChange={onSearchValueChange}/>
        </>
    );
}

export default TodoSearch;