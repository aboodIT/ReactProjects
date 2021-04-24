import React, { useContext } from 'react'
import {GetContext} from './GetContext.js';
import './History.css';
import Transaction from './transaction';

export const History = () => {
    const {transactions} = useContext(GetContext);
    return (
        <div className='heading3'>
            <h1>Transaction History</h1>
            <div className='transactionHolder'>
                {transactions.map(transaction =>(<Transaction details={transaction}></Transaction>))}
            </div>
        </div>
    )
}
