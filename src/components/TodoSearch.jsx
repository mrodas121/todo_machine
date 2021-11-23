import React from "react";
import "../styles/TodoSearch.css";

const TodoSearch = () =>{
    const [searchValue, setSearchValue] = React.useState("-");

    const onSearchValueChange=(event)=>{
        setSearchValue(event.target.value);
    }
    return (
        <>
            <input className="TodoSearch" placeholder="input para busquedas" onChange={onSearchValueChange}/>
            <p>{searchValue}</p>
        </>
    );
}

export default TodoSearch;