import React, { useContext } from 'react'
import {GetContext} from './GetContext';
import './History.css';
import Transaction from './transaction';
import {transactionType} from './AddTransaction'

export const History = () => {
    const {transactions} = useContext(GetContext);
    return (
        <div className='heading3'>
            <h2>Transaction History</h2>
            <div className='transactionHolder'>
                {transactions.map((transaction:transactionType) =>(<Transaction details={transaction}></Transaction>))}
            </div>
        </div>
    )
}
