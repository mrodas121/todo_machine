import React, { useEffect, useState } from 'react';
import './styles/App.css';
import AppUI from './AppUI';
import {TodoProvider} from './TodoContext/Index.js' ;

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider> 
  );
}

export default App;
