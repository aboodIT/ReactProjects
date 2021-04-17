import logo from './logo.svg';
import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import {Header} from './Header.js';
import {History} from './History.js';
import {AddTransaction} from './AddTransaction.js';
import {ContextProvider} from './GetContext.js';

function App() {
  return (
    <ContextProvider>    
      <div className='App'>   
        <Header></Header>
        <History></History>
        <AddTransaction></AddTransaction>
      </div>
    </ContextProvider>
  );
}

export default App;
