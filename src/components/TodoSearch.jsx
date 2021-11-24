import React from "react";
import "../styles/TodoSearch.css";

const TodoSearch = ({searchValue, setSearchValue}) =>{
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