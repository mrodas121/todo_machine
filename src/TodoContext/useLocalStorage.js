import react from "react";
import {useState, useEffect} from "react";

function useLocalStorage(itemName, initialValue){
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(
      ()=>{
        setTimeout(() => {
          try{
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;
            if(!localStorageItem){
              localStorage.setItem(itemName,JSON.stringify(initialValue));
              parsedItem = initialValue;
            }else{
              parsedItem = JSON.parse(localStorageItem);
            }
            setItem(parsedItem);
            setLoading(false);
          }catch{
            setLoading(false);
            setError(true);
          }
        }, 10000);
      });
  
    const saveItem = (newItem) =>{
      try{
        const stringFiledItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringFiledItem);
        setItem(newItem);
      }catch{
        setError(true);
      }
    };
  
    return{
      item,
      saveItem,
      loading,
      error
    };
  }

  export default useLocalStorage;