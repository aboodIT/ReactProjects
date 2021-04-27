import React, { useContext } from 'react';
import {GetContext} from './GetContext';
import './Header.css';



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
            <h2>Current Balance</h2> 
            <h2>$ {income+expense}</h2>
        </div>
        <div className='in-ex'>
            <div className='income' > 
                <h3>Income</h3>
                <p>$ {income}</p>
            </div>
            <div className='expense'>
                <h3>Expense</h3>
                <p>$ {-expense}</p>
            </div>
        </div>
    </div>
  );
}

