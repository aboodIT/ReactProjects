
import React, { useContext } from 'react';
import {GetContext} from './GetContext.js';
import './Header.css';
import Paper from '@material-ui/core/Paper';



export const Header = () =>{

    const {transactions} = useContext(GetContext);

    const transactionAmount = transactions.map(transaction=>transaction.amount);
    
    const income = transactionAmount
        .filter(transaction => transaction > 0)
        .reduce((acc, transaction) => acc += Math.round(transaction), 0);
    
    const expense = transactionAmount
        .filter(transaction => transaction < 0)
        .reduce((acc, transaction) => acc += Math.round(transaction), 0);
    

  return (
    <div className='box'>
        <div className='heading1'>
            <h1 >Expense Tracker</h1>
        </div>
        <div className='currentbal'>
            <h1 >Current Balance</h1> 
            <h2>$ {income+expense}</h2>
        </div>
        <div className='in-ex'>
            <div className='income' > 
                <h2>Income</h2>
                <p>$ {income}</p>
            </div>
            <div className='expense'>
                <h2 >Expense</h2>
                <p>$ {-expense}</p>
            </div>
        </div>
    </div>
  );
}

